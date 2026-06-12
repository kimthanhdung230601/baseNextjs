import type { Segment } from "@/types/enums/segment";

export interface NavigationChildItem {
  key: string;
  href: string;
}

export interface NavigationItem {
  key: string;
  href?: string;
  children?: NavigationChildItem[];
}

export interface NavigationConfig {
  segment: Segment;
  items: NavigationItem[];
}
