"use client";

import {
  FieldPath,
  FieldValues,
  useFormContext,
} from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";

import { Input } from "@/shared/components/ui/input";

type TInputFieldProps<T extends FieldValues> = {
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  autoFocus?: boolean;
  namespaceErr?: string;
};

export function InputField<T extends FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  autoFocus,
  namespaceErr,
}: TInputFieldProps<T>) {
  const { control } = useFormContext<T>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input
              {...field}
              type={type}
              placeholder={placeholder}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={autoFocus}
            />
          </FormControl>

          <FormMessage namespace = {namespaceErr || ""}/>
        </FormItem>
      )}
    />
  );
}