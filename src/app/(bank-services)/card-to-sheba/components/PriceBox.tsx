import { cn } from "@/lib";

export default function PriceBox() {
  return (
    <main
      className={cn(
        "bg-primary-main rounded-lg shadow-main flex flex-col justify-between w-full max-w-[451px] h-[89px] p-4"
      )}
    >
      <section className={cn("flex justify-between")}>
        <div className={cn("text-white  text-base")}>هزینه استعلام</div>
        <div className={cn("text-white  text-base space-x-2")}>
          <span>10,780</span>
          <span>تومان</span>
        </div>
      </section>
      <section className="">
        <div className={cn("text-custom-gray-400 text-sm font-extralight")}>
          هزینه استعلام به حساب پلیس +10 واریز میشود.
        </div>
      </section>
    </main>
  );
}
