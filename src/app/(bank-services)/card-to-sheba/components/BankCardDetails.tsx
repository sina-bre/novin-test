import { cn } from "@/lib";
import Image from "next/image";
import cardLogo from "@public/svg/logo-3.svg";
import bankLogo from "@public/svg/bank-logo.svg";

export default function BankCardDetails() {
  return (
    <div
      className={cn(
        "bg-[#F5F5F5] w-full h-[40px] flex justify-between px-[2rem]"
      )}
    >
      <Image src={bankLogo} alt="Icon" width={24} height={24} />
      <Image src={cardLogo} alt="Icon" width={24} height={24} />
    </div>
  );
}
