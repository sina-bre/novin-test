"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib";
import { CardDigitInput } from "./CardDigitInput";
import {
  CardNumberSchema,
  cardNumberSchema,
} from "@/validations/cardNumberSchema";
import { getCardBankName } from "@/utils/cardValidation";

interface CardNumberFormProps {
  onCardNumberChange: (number: string) => void;
  cardNumber: string;
}

export default function CardNumberForm({
  onCardNumberChange,
  cardNumber,
}: CardNumberFormProps) {
  const {
    handleSubmit,
    setValue,
    formState: { errors, touchedFields },
  } = useForm<CardNumberSchema>({
    resolver: zodResolver(cardNumberSchema),
    mode: "onChange",
  });

  const inputRefs = Array.from({ length: 16 }, () => ({
    current: null as HTMLInputElement | null,
  }));
  // const cardNumber = watch("cardNumber") || "";
  const isDigitValid = (digit: string) => /^\d$/.test(digit);
  const bankName =
    cardNumber.length === 16 ? getCardBankName(cardNumber) : null;

  const handleInputChange = (index: number, value: string) => {
    if (value && !/^\d$/.test(value)) return;

    const updatedCardNumber = cardNumber.padEnd(16, "").split("");
    updatedCardNumber[index] = value;
    const newNumber = updatedCardNumber.join("");

    onCardNumberChange(newNumber);
    setValue("cardNumber", newNumber, {
      shouldValidate: true,
    });

    if (value && index < 15) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const updatedCardNumber = cardNumber.split("");
      updatedCardNumber[index] = "";
      const newNumber = updatedCardNumber.join("");

      onCardNumberChange(newNumber);
      setValue("cardNumber", newNumber, {
        shouldValidate: true,
      });

      if (index > 0) {
        inputRefs[index - 1].current?.focus();
      }
    }
  };

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
              index={currentIndex}
              value={currentValue}
              error={Boolean(shouldShowError)}
              isValid={currentValue ? isCurrentDigitValid : undefined}
              onChange={handleInputChange}
              onKeyDown={(e) => handleKeyDown(e, currentIndex)}
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("w-full space-y-4 mt-[5rem] px-[2rem]")}
    >
      <div dir="ltr" className="flex justify-between gap-4">
        {createInputGroup(0, 4)}
        {createInputGroup(4, 8)}
        {createInputGroup(8, 12)}
        {createInputGroup(12, 16)}
      </div>
      {bankName && !errors.cardNumber && (
        <p className="text-green-600 text-sm">{bankName} Bank Card</p>
      )}
      {errors.cardNumber && (
        <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
      )}
    </form>
  );
}
