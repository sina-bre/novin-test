import { forwardRef, KeyboardEvent } from "react";
import { cn } from "@/lib";

interface CardDigitInputProps {
  value: string;
  index: number;
  error?: boolean;
  isValid?: boolean;
  onChange: (index: number, value: string) => void;
  onKeyDown: (e: KeyboardEvent<HTMLInputElement>, index: number) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  maxLength?: number;
  inputMode?: "numeric";
  pattern?: string;
  className?: string;
}

export const CardDigitInput = forwardRef<HTMLInputElement, CardDigitInputProps>(
  (
    {
      className,
      error,
      isValid,
      index,
      onChange,
      onKeyDown,
      onPaste,
      ...props
    },
    ref
  ) => {
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      const isNavigationKey = ["ArrowLeft", "ArrowRight", "Tab"].includes(
        e.key
      );
      const isActionKey = ["Backspace", "Delete"].includes(e.key);
      const isNumberKey = /^\d$/.test(e.key);

      // Allow navigation keys
      if (isNavigationKey) return;

      // Prevent default for non-number keys except action keys
      if (!isNumberKey && !isActionKey) {
        e.preventDefault();
        return;
      }

      onKeyDown(e, index);
    };

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
            "selection:bg-transparent",
            className
          )}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, "");
            onChange(index, value);
          }}
          onKeyDown={handleKeyDown}
          onPaste={onPaste}
          inputMode="numeric"
          pattern="\d*"
          autoComplete="off"
          {...props}
        />
      </div>
    );
  }
);

CardDigitInput.displayName = "CardDigitInput";
