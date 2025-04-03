"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib";
import { useDebounce } from "@uidotdev/usehooks";
import BankCardDetails from "./BankCardDetails";
import CardNumberForm from "./CardNumberForm";
import { detectBank, type BankInfo } from "@/utils/detectBank";

export default function BankCard() {
  const [cardNumber, setCardNumber] = useState("");
  const [bankInfo, setBankInfo] = useState<BankInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const debouncedCardNumber = useDebounce(cardNumber, 300);

  const handleCardNumberChange = (number: string) => {
    setCardNumber(number);
  };

  useEffect(() => {
    const detectBankFromNumber = async () => {
      if (debouncedCardNumber.length >= 6) {
        setIsLoading(true);
        try {
          const bin = debouncedCardNumber.slice(0, 6);
          const bank = detectBank(bin);
          setBankInfo(bank);
        } catch (error) {
          console.error("Bank detection failed:", error);
          setBankInfo(null);
        } finally {
          setIsLoading(false);
        }
      } else {
        setBankInfo(null);
      }
    };

    detectBankFromNumber();
  }, [debouncedCardNumber]);

  return (
    <div
      className={cn(
        "bg-white shadow-main rounded-lg flex flex-col items-center w-full max-w-[451px] h-[212px] pt-6"
      )}
    >
      <BankCardDetails bankInfo={bankInfo} isLoading={isLoading} />
      <CardNumberForm
        onCardNumberChange={handleCardNumberChange}
        cardNumber={cardNumber}
      />
    </div>
  );
}
