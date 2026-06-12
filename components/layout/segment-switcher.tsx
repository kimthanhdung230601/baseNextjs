"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { SEGMENT_HOME_PATH } from "@/constants/navigation";
import { getSegmentFromPathname } from "@/lib/navigation";
import { Segment } from "@/types/enums/segment";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SegmentSwitcher() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();
  const currentSegment = getSegmentFromPathname(pathname);

  const handleSegmentChange = (segment: Segment) => {
    router.push(SEGMENT_HOME_PATH[segment]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          {currentSegment === Segment.PERSONAL
            ? t("personal")
            : t("business")}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => handleSegmentChange(Segment.PERSONAL)}
        >
          {t("personal")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleSegmentChange(Segment.BUSINESS)}
        >
          {t("business")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
