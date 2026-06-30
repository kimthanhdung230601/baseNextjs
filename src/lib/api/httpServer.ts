import { auth } from "@/auth";
import envConfig from "@/config";
import { redirect } from "next/navigation";

type CustomOptions = Omit<RequestInit, "method">;

const ENTITY_ERROR_STATUS = 422;
const AUTHENTICATION_ERROR_STATUS = 401;

type EntityErrorPayload = {
  message: string;
  errors: {
    field: string;
    message: string;
  }[];
};

export class HttpError extends Error {
  constructor(
    public status: number,
    public payload: any
  ) {
    super("Http Error");
  }
}

export class EntityError extends HttpError {
  declare payload: EntityErrorPayload;
}

async function request<T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: CustomOptions
) {
  const session = await auth();

  const headers = new Headers(options?.headers);

  headers.set("Content-Type", "application/json");

  if (session?.accessToken) {
    headers.set(
      "Authorization",
      `Bearer ${session.accessToken}`
    );
  }

  const res = await fetch(`${envConfig.NEXT_PUBLIC_API_ENDPOINT}${url}`, {
    ...options,
    method,
    headers,
    cache: "no-store",
  });

  const payload = await res.json();

  if (!res.ok) {
    if (res.status === ENTITY_ERROR_STATUS) {
      throw new EntityError(res.status, payload);
    }

    if (res.status === AUTHENTICATION_ERROR_STATUS) {
      redirect("/login");
    }

    throw new HttpError(res.status, payload);
  }

  return payload as T;
}

const serverHttp = {
  get<T>(url: string, options?: Omit<CustomOptions, "body">) {
    return request<T>("GET", url, options);
  },

  post<T>(url: string, body?: unknown, options?: Omit<CustomOptions, "body">) {
    return request<T>("POST", url, {
      ...options,
      body: JSON.stringify(body),
    });
  },

  put<T>(url: string, body?: unknown, options?: Omit<CustomOptions, "body">) {
    return request<T>("PUT", url, {
      ...options,
      body: JSON.stringify(body),
    });
  },

  delete<T>(url: string, options?: Omit<CustomOptions, "body">) {
    return request<T>("DELETE", url, options);
  },
};

export default serverHttp;