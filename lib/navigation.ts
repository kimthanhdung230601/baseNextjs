import { FIVE_G_MOBIFONE_PATH } from "@/constants/navigation";
import { Segment } from "@/types/enums/segment";

export function getSegmentFromPathname(pathname: string): Segment {
  if (pathname.includes(`/${Segment.BUSINESS}`)) {
    return Segment.BUSINESS;
  }

  return Segment.PERSONAL;
}

export function isFiveGMobifonePath(pathname: string): boolean {
  return pathname.includes(FIVE_G_MOBIFONE_PATH);
}

export function isAuthPath(pathname: string): boolean {
  return pathname.includes("/auth/");
}
