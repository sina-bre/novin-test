import { cn } from "@/lib";
import BankCardDetails from "./BankCardDetails";
import CardNumberForm from "./CardNumberForm";

export default function BankCard() {
  return (
    <div
      className={cn(
        "bg-white shadow-main rounded-lg flex flex-col items-center w-[451px] h-[212px] pt-6"
      )}
    >
      <BankCardDetails />
      <CardNumberForm />
    </div>
  );
}
