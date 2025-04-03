import { cn } from "@/lib";
import BankServicesNavigation from "./nav";
import { ReactNode, Suspense } from "react";

export default function BankServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main
      className={cn(
        "min-h-screen w-full flex flex-col items-center py-8 gap-8"
      )}
    >
      <div className={cn("w-[1160px] flex flex-col items-center gap-8")}>
        <Suspense fallback={<NavSkeleton />}>
          <BankServicesNavigation />
        </Suspense>

        <section className="w-full flex-1">
          <Suspense fallback={<ContentSkeleton />}>{children}</Suspense>
        </section>
      </div>
    </main>
  );
}

function NavSkeleton() {
  return <div className="w-full h-16 bg-gray-100 animate-pulse rounded-xl" />;
}

function ContentSkeleton() {
  return (
    <div className="w-full h-[400px] bg-gray-100 animate-pulse rounded-xl" />
  );
}
