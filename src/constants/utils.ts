import type {
  BuildSearchUrlOptions,
  SearchParamValueMap,
} from "@/types/interfaces/search";

function normalizeSearchParamValue(
  value: string | number | boolean | null | undefined,
): string | null {
  if (value === null || value === undefined) {
    return null;
  }

  const normalizedValue = String(value).trim();

  if (!normalizedValue) {
    return null;
  }

  return normalizedValue;
}

function createUrlSearchParams(
  currentSearchParams?: BuildSearchUrlOptions["currentSearchParams"],
): URLSearchParams {
  if (!currentSearchParams) {
    return new URLSearchParams();
  }

  if (currentSearchParams instanceof URLSearchParams) {
    return new URLSearchParams(currentSearchParams.toString());
  }

  if (typeof currentSearchParams === "string") {
    return new URLSearchParams(currentSearchParams);
  }

  const urlSearchParams = new URLSearchParams();

  Object.entries(currentSearchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        const normalizedValue = normalizeSearchParamValue(item);

        if (normalizedValue) {
          urlSearchParams.append(key, normalizedValue);
        }
      });

      return;
    }

    const normalizedValue = normalizeSearchParamValue(value);

    if (normalizedValue) {
      urlSearchParams.set(key, normalizedValue);
    }
  });

  return urlSearchParams;
}

export function buildSearchUrl({
  pathname,
  currentSearchParams,
  searchParams,
}: BuildSearchUrlOptions): string {
  const nextSearchParams = createUrlSearchParams(currentSearchParams);

  Object.entries(searchParams).forEach(([key, value]) => {
    const normalizedValue = normalizeSearchParamValue(value);

    if (!normalizedValue) {
      nextSearchParams.delete(key);
      return;
    }

    nextSearchParams.set(key, normalizedValue);
  });

  const queryString = nextSearchParams.toString();

  if (!queryString) {
    return pathname;
  }

  return `${pathname}?${queryString}`;
}

export function getSearchParamsState<T extends SearchParamValueMap>(
  currentSearchParams: BuildSearchUrlOptions["currentSearchParams"],
  defaultValues: T,
): T {
  const nextSearchParams = createUrlSearchParams(currentSearchParams);

  return Object.entries(defaultValues).reduce((result, [key, value]) => {
    const searchParamValue = nextSearchParams.get(key);

    result[key as keyof T] = (searchParamValue ?? value) as T[keyof T];

    return result;
  }, { ...defaultValues });
}
