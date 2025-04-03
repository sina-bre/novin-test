"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib";
import { CardDigitInput } from "./CardDigitInput";
import {
  CardNumberSchema,
  cardNumberSchema,
} from "@/validations/cardNumberSchema";

export default function CardNumberForm() {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<CardNumberSchema>({
    resolver: zodResolver(cardNumberSchema),
    mode: "onChange",
  });

  const inputRefs = Array.from({ length: 16 }, () => ({
    current: null as HTMLInputElement | null,
  }));
  const cardNumber = watch("cardNumber") || "";
  const isDigitValid = (digit: string) => /^\d$/.test(digit);

  const createInputGroup = (startIndex: number, endIndex: number) => (
    <section dir="ltr" className={cn("flex justify-between gap-1")}>
      {Array(endIndex - startIndex)
        .fill(0)
        .map((_, idx) => {
          const currentIndex = startIndex + idx;
          const currentValue = cardNumber[currentIndex] || "";
          const isInputTouched = touchedFields.cardNumber;
          const isCurrentDigitValid = isDigitValid(currentValue);
          const shouldShowError =
            isInputTouched && currentValue && !isCurrentDigitValid;

          return (
            <CardDigitInput
              key={currentIndex}
              value={currentValue}
              error={Boolean(shouldShowError)}
              isValid={currentValue ? isCurrentDigitValid : undefined}
              onChange={(e) => {
                const value = e.target.value;
                if (value && !/^\d$/.test(value)) return;

                const updatedCardNumber = cardNumber.padEnd(16, "").split("");
                updatedCardNumber[currentIndex] = value;
                setValue("cardNumber", updatedCardNumber.join(""), {
                  shouldValidate: true,
                });

                if (value && currentIndex < 15) {
                  inputRefs[currentIndex + 1].current?.focus();
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  e.preventDefault();
                  const updatedCardNumber = cardNumber.split("");
                  updatedCardNumber[currentIndex] = "";
                  setValue("cardNumber", updatedCardNumber.join(""), {
                    shouldValidate: true,
                  });

                  if (currentIndex > 0) {
                    inputRefs[currentIndex - 1].current?.focus();
                  }
                }
              }}
              ref={inputRefs[currentIndex]}
              maxLength={1}
              inputMode="numeric"
              pattern="\d*"
            />
          );
        })}
    </section>
  );

  const onSubmit = (data: CardNumberSchema) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4 mt-12")}>
      <div dir="ltr" className="flex justify-between gap-4">
        {createInputGroup(0, 4)}
        {createInputGroup(4, 8)}
        {createInputGroup(8, 12)}
        {createInputGroup(12, 16)}
      </div>
      {errors.cardNumber && (
        <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
      )}
    </form>
  );
}
