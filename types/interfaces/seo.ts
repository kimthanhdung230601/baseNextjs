export interface SeoRouteConfig {
  path: string;
  namespace: string;
  noIndex?: boolean;
}

export interface BuildPageMetadataParams {
  locale: string;
  path: string;
  title: string;
  description: string;
  noIndex?: boolean;
}
