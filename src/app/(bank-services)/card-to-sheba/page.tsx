import { cn } from "@/lib";
import BankCard from "./components/BankCard";
import PriceBox from "./components/PriceBox";
import CustomButton from "@/components/ui/CustomButton";
import InquiriesHistory from "./components/InquiriesHistory";
import PersonIllustrator from "@public/illustrator-1.png";

import Image from "next/image";

export default function ShebaToCardPage() {
  return (
    <>
      <main
        className={cn("flex justify-center gap-12 w-full max-w-[1000px] mt-8")}
      >
        <section className={cn("w-full flex flex-col justify-between")}>
          <div className={cn("w-full text-center text-xl font-bold")}>
            تبدیل شماره کارت به شبا
          </div>
          <div
            className={cn(
              "w-full text-center text-custom-gray-300 text-lg font-light"
            )}
          >
            برای استعلام شماره کارت مورد نظر را وارد نمایید:
          </div>
          <BankCard />
          <PriceBox />
          <div className={cn("w-full flex justify-center items-center gap-4")}>
            <CustomButton className={cn("bg-success-main w-[120px] m-0")}>
              تایید
            </CustomButton>
            <CustomButton className={cn("bg-error-main w-[120px] m-0")}>
              بازگشت
            </CustomButton>
          </div>
        </section>
        <section
          className={cn(
            "w-full flex flex-col justify-between items-center gap-5"
          )}
        >
          <InquiriesHistory />
          <div
            className={cn("w-full text-xl max-w-[417px] text-center font-bold")}
          >
            کارت به شبا
          </div>
          <div
            className={cn(
              "w-full font-light text-xl max-w-[417px]  text-custom-gray-300"
            )}
          >
            وم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
            کاربردهای متنوع با هدف بهبود وم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی .
          </div>

          <div>
            <Image
              src={PersonIllustrator}
              alt="image"
              width={300}
              height={300}
            />
          </div>
        </section>
      </main>
    </>
  );
}
