import { ROUTES } from "@/constants/route";
import { Segment } from "@/types/enums/segment";

export function getSegmentFromPathname(pathname: string): Segment {
  if (pathname.includes(`/${Segment.BUSINESS}`)) {
    return Segment.BUSINESS;
  }

  return Segment.PERSONAL;
}

export function isFiveGMobifonePath(pathname: string): boolean {
  return pathname.includes(ROUTES.PERSONAL.FIVE_G_MOBIFONE_PAGE);
}

export function isAuthPath(pathname: string): boolean {
  return pathname.includes(ROUTES.AUTH.PREFIX);
}
