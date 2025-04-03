import { cn } from "@/lib";

export default function InquiriesHistory() {
  return (
    <main
      className={cn(
        "w-full rounded-2xl max-w-[417px] h-[199px] border-dashed border-2 relative"
      )}
    >
      <section
        className={cn(
          "w-full flex justify-center items-center absolute z-10 top-[-1.3rem]"
        )}
      >
        <div
          className={cn(
            " bg-white rounded-lg p-2 font-light text-lg text-custom-gray-300"
          )}
        >
          اخیرا استعلامی نگرفتید
        </div>
      </section>
    </main>
  );
}
