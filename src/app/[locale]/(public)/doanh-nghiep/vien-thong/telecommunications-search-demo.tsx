"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import {
  buildSearchUrl,
  getSearchParamsState,
  TELECOMMUNICATIONS_SEARCH_DEFAULT_VALUES,
  TELECOMMUNICATIONS_SEARCH_RESULTS,
  TELECOMMUNICATIONS_SERVICE_OPTIONS,
  TELECOMMUNICATIONS_STATUS_OPTIONS,
} from "@/constants/utils";
import { usePathname, useRouter } from "@/i18n/navigation";
import { format, isValid, parseISO } from "date-fns";
import { CalendarIcon, RotateCcw, Search } from "lucide-react";

import type {
  TelecommunicationsSearchFilters,
  TelecommunicationsSearchResult,
} from "@/types/interfaces/search";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Calendar } from "@/shared/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import MbfSelect from "@/shared/components/select";

function createDraftFilters(
  currentSearchParams: string
): TelecommunicationsSearchFilters {
  const filters = getSearchParamsState(
    currentSearchParams,
    TELECOMMUNICATIONS_SEARCH_DEFAULT_VALUES
  );

  return {
    ...filters,
    service: filters.service || "all",
    status: filters.status || "all",
  };
}

function serializeFilters(filters: TelecommunicationsSearchFilters) {
  return {
    keyword: filters.keyword,
    service: filters.service === "all" ? "" : filters.service,
    status: filters.status === "all" ? "" : filters.status,
    publishedAt: filters.publishedAt,
  };
}

function getOptionLabel(
  value: string,
  options: { label: string; value: string }[]
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

function matchesSearch(
  item: TelecommunicationsSearchResult,
  filters: TelecommunicationsSearchFilters
) {
  const keyword = filters.keyword.trim().toLowerCase();

  const matchesKeyword =
    !keyword ||
    item.title.toLowerCase().includes(keyword) ||
    item.description.toLowerCase().includes(keyword);

  const matchesService =
    filters.service === "all" || item.service === filters.service;
  const matchesStatus =
    filters.status === "all" || item.status === filters.status;
  const matchesDate =
    !filters.publishedAt || item.publishedAt === filters.publishedAt;

  return matchesKeyword && matchesService && matchesStatus && matchesDate;
}

function formatSelectedDate(value: string) {
  const parsedDate = parseISO(value);

  if (!value || !isValid(parsedDate)) {
    return "Chọn ngày";
  }

  return format(parsedDate, "dd/MM/yyyy");
}

export default function TelecommunicationsSearchDemo() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [filters, setFilters] = React.useState<TelecommunicationsSearchFilters>(
    () => createDraftFilters(searchParamsString)
  );

  React.useEffect(() => {
    setFilters(createDraftFilters(searchParamsString));
  }, [searchParamsString]);

  const filteredResults = TELECOMMUNICATIONS_SEARCH_RESULTS.filter((item) =>
    matchesSearch(item, filters)
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.replace(
      buildSearchUrl({
        pathname,
        currentSearchParams: searchParamsString,
        searchParams: serializeFilters(filters),
      })
    );
  };

  const handleClear = () => {
    setFilters({
      ...TELECOMMUNICATIONS_SEARCH_DEFAULT_VALUES,
      service: "all",
      status: "all",
    });
    router.replace(pathname);
  };

  return (
    <section className="mt-10 space-y-6">
      <Card className="border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <CardHeader className="space-y-2">
          <CardTitle className="text-xl">Ví dụ tìm kiếm lưu params</CardTitle>
          <CardDescription>
            Nhập từ khóa, chọn dịch vụ, trạng thái và ngày phát hành. Khi bấm
            "Tìm kiếm", các giá trị sẽ được lưu vào URL.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4 lg:grid-cols-2" onSubmit={handleSubmit}>
            <div className="space-y-2 lg:col-span-2">
              <label
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
                htmlFor="keyword"
              >
                Từ khóa
              </label>
              <Input
                id="keyword"
                placeholder="Nhập tên gói, dịch vụ hoặc mô tả"
                value={filters.keyword}
                onChange={(event) =>
                  setFilters((current) => ({
                    ...current,
                    keyword: event.target.value,
                  }))
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Dịch vụ
              </label>
              <MbfSelect
                options={TELECOMMUNICATIONS_SERVICE_OPTIONS}
                placeholderTranslationKey="common.selectService"
                selectedValue={filters.service}
                onValueChange={(value) =>
                  setFilters((current) => ({
                    ...current,
                    service: value,
                }))}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Trạng thái
              </label>
              <MbfSelect 
                options={TELECOMMUNICATIONS_STATUS_OPTIONS}
                placeholderTranslationKey="common.selectStatus"
                selectedValue={filters.status}
                onValueChange={(value) =>
                  setFilters((current) => ({
                    ...current,
                    status: value,
                  }))
                }
              />
            </div>

            <div className="space-y-2 lg:col-span-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Ngày phát hành
              </label>
              <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full justify-between font-normal"
                  >
                    <span>{formatSelectedDate(filters.publishedAt)}</span>
                    <CalendarIcon className="size-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={
                      filters.publishedAt
                        ? parseISO(filters.publishedAt)
                        : undefined
                    }
                    onSelect={(date) => {
                      setFilters((current) => ({
                        ...current,
                        publishedAt: date ? format(date, "yyyy-MM-dd") : "",
                      }));
                      setIsCalendarOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-2">
              <Button type="submit" className="gap-2">
                <Search className="size-4" />
                Tìm kiếm
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="gap-2"
                onClick={handleClear}
              >
                <RotateCcw className="size-4" />
                Xóa bộ lọc
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            URL hiện tại:{" "}
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {searchParamsString ? `?${searchParamsString}` : "chưa có params"}
            </span>
          </p>
          <Badge variant="secondary">{filteredResults.length} kết quả</Badge>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">
            Dịch vụ:{" "}
            {getOptionLabel(
              filters.service,
              TELECOMMUNICATIONS_SERVICE_OPTIONS
            )}
          </Badge>
          <Badge variant="outline">
            Trạng thái:{" "}
            {getOptionLabel(filters.status, TELECOMMUNICATIONS_STATUS_OPTIONS)}
          </Badge>
          <Badge variant="outline">
            Ngày: {filters.publishedAt || "Tất cả"}
          </Badge>
        </div>

        <div className="grid gap-4">
          {filteredResults.map((item) => (
            <Card
              key={item.id}
              className="border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">
                    {getOptionLabel(
                      item.service,
                      TELECOMMUNICATIONS_SERVICE_OPTIONS
                    )}
                  </Badge>
                  <Badge variant="outline">
                    {getOptionLabel(
                      item.status,
                      TELECOMMUNICATIONS_STATUS_OPTIONS
                    )}
                  </Badge>
                </div>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-zinc-500 dark:text-zinc-400">
                Ngày phát hành:{" "}
                {format(parseISO(item.publishedAt), "dd/MM/yyyy")}
              </CardContent>
            </Card>
          ))}

          {!filteredResults.length && (
            <Card className="border-dashed border-zinc-300 bg-transparent shadow-none dark:border-zinc-700">
              <CardContent className="py-8 text-center text-sm text-zinc-500 dark:text-zinc-400">
                Không có kết quả phù hợp với bộ lọc hiện tại.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
