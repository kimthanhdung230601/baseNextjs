import type {
  AccordionMultipleProps,
  AccordionSingleProps,
} from "@radix-ui/react-accordion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./related";

type AccordionType = AccordionSingleProps | AccordionMultipleProps;

interface MbfAccordionItem {
  value: string;
  trigger?: React.ReactNode;
  content?: React.ReactNode;
  disabled?: boolean;
}

interface MbfBaseAccordionProps {
  accordionItems: MbfAccordionItem[];
  className?: string;
}

type MbfAccordionMultipleProps = MbfBaseAccordionProps & AccordionMultipleProps;
type MbfAccordionSingleProps = MbfBaseAccordionProps &
  Omit<AccordionSingleProps, "type"> & {
    type?: "single";
  };

type MbfAccordionProps = MbfAccordionSingleProps | MbfAccordionMultipleProps;

export default function MbfAccordion({
  accordionItems,
  className,
  type = "single",
  ...accordionProps
}: MbfAccordionProps) {
  return (
    <Accordion
      className={className}
      {...({ type, ...accordionProps } as AccordionType)}
    >
      {accordionItems.map((item: MbfAccordionItem) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          disabled={item.disabled}
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
