import { forwardRef } from "react";
import { cn } from "@/lib";

interface CardDigitInputProps {
  value: string;
  error?: boolean;
  isValid?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref: React.RefObject<HTMLInputElement>;
  maxLength?: number;
  inputMode?: "numeric";
  pattern?: string;
  onNext?: () => void;
  className?: string;
}

export const CardDigitInput = forwardRef<HTMLInputElement, CardDigitInputProps>(
  ({ className, error, isValid, onNext, ...props }, ref) => {
    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      if (input.value && onNext) {
        onNext();
      }
    };

    return (
      <div
        className={cn(
          "w-4 h-5 flex justify-center border-b-2",
          error
            ? "border-red-500"
            : isValid
              ? "border-0"
              : props.value
                ? "border-blue-500"
                : "border-black"
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
          inputMode="numeric"
          pattern="\d*"
          onKeyUp={handleKeyUp}
          {...props}
        />
      </div>
    );
  }
);

CardDigitInput.displayName = "CardDigitInput";
