import { cn } from '@/lib';
import AppHeader from './AppHeader';
import PhotoFrame from './PhotoFrame';
import AppContainer from './AppContainer';
import SearchBox from './SearchBox';

const HeroSection = () => {
  return (
    <section
      className={cn(
        'from-primary-main to-hero-section-main relative h-[677] bg-radial',
      )}
    >
      <AppContainer className={cn('relative flex h-full flex-col')}>
        <AppHeader />
        <div className={cn('grow')}>
          <div
            className={cn(
              'mx-auto flex h-full max-w-[1030px] items-center justify-between',
            )}
          >
            <SearchBox />
            <PhotoFrame />
          </div>
        </div>
      </AppContainer>
    </section>
  );
};

export default HeroSection;
