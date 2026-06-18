import type { Segment } from "@/types/enums/segment";

export interface NavigationChildItem {
  key: string;
  href?: string;
  category?: string;
  label?: string;
  items?: Array<{
    key: string;
    label: string;
    href?: string;
  }>;
}

export interface NavigationItem {
  key: string;
  href?: string;
  label?: string;
  layout?: "grid" | "list";
  children?: NavigationChildItem[];
}

export interface NavigationConfig {
  segment: Segment;
  items: NavigationItem[];
}
