"use client";

import { SEGMENT_HOME_PATH } from "@/constants/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

import { Segment } from "@/types/enums/segment";
import { Button } from "@/shared/components/ui/button";
import configs from "@/constants/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";

export default function SegmentSwitcher() {
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();
  const currentSegment = pathname.includes(configs.BUSINESS_PATH_SEGMENT)
    ? Segment.BUSINESS
    : Segment.PERSONAL;

  const handleSegmentChange = (segment: Segment) => {
    router.push(SEGMENT_HOME_PATH[segment]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          {currentSegment === Segment.PERSONAL ? t("personal") : t("business")}
          <ChevronDown className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleSegmentChange(Segment.PERSONAL)}>
          {t("personal")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSegmentChange(Segment.BUSINESS)}>
          {t("business")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
