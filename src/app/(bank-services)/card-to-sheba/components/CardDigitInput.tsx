import { forwardRef } from "react";
import { cn } from "@/lib";

interface CardDigitInputProps {
  value: string;
  index: number; // Add index prop
  error?: boolean;
  isValid?: boolean;
  onChange: (index: number, value: string) => void; // Updated onChange type
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>, index: number) => void; // Updated onKeyDown type
  maxLength?: number;
  inputMode?: "numeric";
  pattern?: string;
  className?: string;
}

export const CardDigitInput = forwardRef<HTMLInputElement, CardDigitInputProps>(
  (
    { className, error, isValid, index, onChange, onKeyDown, ...props },
    ref
  ) => {
    return (
      <div
        className={cn(
          "w-4 h-5 flex justify-center border-b-2",
          error
            ? "border-red-500"
            : isValid
              ? "border-green-500"
              : props.value
                ? "border-blue-500"
                : "border-gray-300"
        )}
      >
        <input
          ref={ref}
          type="text"
          maxLength={1}
          className={cn(
            "w-full h-full text-center text-xl outline-none",
            className
          )}
          onChange={(e) => onChange(index, e.target.value)}
          onKeyDown={(e) => onKeyDown(e, index)}
          inputMode="numeric"
          pattern="\d*"
          {...props}
        />
      </div>
    );
  }
);

CardDigitInput.displayName = "CardDigitInput";
