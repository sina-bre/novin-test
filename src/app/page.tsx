import { HeroSection } from "@/components";
import AppContainer from "@/components/AppContainer";
import { cn } from "@/lib";

export default function Home() {
  return (
  <>
    <HeroSection />
    <AppContainer className={cn('bg-gray-50')}>
     
    </AppContainer>
  </>
  );
}
