import { useTranslations } from "next-intl";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./related";

import type { DropdownOption } from "@/types/interfaces/common";

interface MbfSelectProps {
  options: DropdownOption[];
  placeholderTranslationKey?: string;
  selectedValue?: string;
  onValueChange?: (value: string) => void;
}

const fallbackPlaceholder = 'common.selectValue';

export default function MbfSelect({
  options,
  placeholderTranslationKey,
  selectedValue,
  onValueChange
}: MbfSelectProps) {
  const t = useTranslations();
  const selectedOptionLabel = options.find(opt => opt.value === selectedValue)?.label;
  const displayValue = t(selectedOptionLabel ?? (placeholderTranslationKey || fallbackPlaceholder));

  return (
    <Select
      value={selectedValue}
      onValueChange={onValueChange}
    >
      <SelectTrigger>
        <SelectValue>{displayValue}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map((opt: DropdownOption, i: number) => (
          <SelectItem key={`${i}-${opt.value}`} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}