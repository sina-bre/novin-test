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

    // Move to next input if a digit was entered
    if (value && index < 15) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    const currentValue = cardNumber[index] || "";

    switch (e.key) {
      case "Backspace":
        e.preventDefault();
        if (currentValue) {
          // If current input has value, clear it
          const updatedCardNumber = cardNumber.split("");
          updatedCardNumber[index] = "";
          const newNumber = updatedCardNumber.join("");
          onCardNumberChange(newNumber);
          setValue("cardNumber", newNumber, { shouldValidate: true });
        } else if (index > 0) {
          // If current input is empty, go to previous input
          inputRefs[index - 1].current?.focus();
        }
        break;

      case "Delete":
        e.preventDefault();
        if (currentValue) {
          const updatedCardNumber = cardNumber.split("");
          updatedCardNumber[index] = "";
          const newNumber = updatedCardNumber.join("");
          onCardNumberChange(newNumber);
          setValue("cardNumber", newNumber, { shouldValidate: true });
        }
        break;

      case "ArrowLeft":
        e.preventDefault();
        if (index > 0) {
          inputRefs[index - 1].current?.focus();
        }
        break;

      case "ArrowRight":
        e.preventDefault();
        if (index < 15) {
          inputRefs[index + 1].current?.focus();
        }
        break;
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData?.getData("text");
    if (!pastedData) return;

    const numbers = pastedData.replace(/\D/g, "").slice(0, 16);
    if (numbers) {
      onCardNumberChange(numbers.padEnd(16, ""));
      setValue("cardNumber", numbers, { shouldValidate: true });

      // Focus the next empty input or the last input
      const nextEmptyIndex = numbers.length < 16 ? numbers.length : 15;
      inputRefs[nextEmptyIndex].current?.focus();
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
              onPaste={handlePaste}
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
