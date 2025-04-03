import { cn } from "@/lib";
import Image from "next/image";
import cardLogo from "@public/svg/logo-3.svg";
import defaultBankLogo from "@public/svg/bank-logo.svg";
import type { BankInfo } from "@/utils/detectBank";

interface BankCardDetailsProps {
  bankInfo: BankInfo | null;
  isLoading: boolean;
}

export default function BankCardDetails({
  bankInfo,
  isLoading,
}: BankCardDetailsProps) {
  return (
    <div
      className={cn(
        "bg-[#F5F5F5] w-full h-[40px] flex justify-between px-[2rem]"
      )}
    >
      <div className="flex items-center gap-2">
        <Image
          src={bankInfo?.logo || defaultBankLogo}
          alt={bankInfo?.persianName || "بانک"}
          width={24}
          height={24}
          className={cn(isLoading && "opacity-50")}
        />
        {isLoading && (
          <span className="text-xs text-gray-500">در حال بررسی...</span>
        )}
      </div>
      <Image src={cardLogo} alt="Icon" width={24} height={24} />
    </div>
  );
}
