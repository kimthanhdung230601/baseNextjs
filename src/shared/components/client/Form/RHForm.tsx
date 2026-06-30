import {
  FormProvider,
  type UseFormReturn,
  type FieldValues,
} from "react-hook-form";

type TFormProviderProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: (values: T) => void;
  children: React.ReactNode;
  className?: string;
};

export function RHFForm<T extends FieldValues>({
  form,
  onSubmit,
  children,
  className,
}: TFormProviderProps<T>) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={className}
      >
        {children}
      </form>
    </FormProvider>
  );
}