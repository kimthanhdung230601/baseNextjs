export interface SearchParamValueMap {
  [key: string]: string | number | boolean | null | undefined;
}

export interface BuildSearchUrlOptions {
  pathname: string;
  currentSearchParams?:
    | URLSearchParams
    | string
    | Record<string, string | string[] | undefined>;
  searchParams: SearchParamValueMap;
}
