import { cn } from '@/lib';
import Image from 'next/image';

const PhotoFrame = () => {
  return (
    <div className={cn('relative h-full grow-[2] overflow-hidden')}>
      <div className={cn('relative z-10 size-full')}>
        <Image
          src={'/person.png'}
          alt="photo frame"
          fill
          className={cn('max-w-full scale-x-[-1] object-contain')}
        />
      </div>
      <div
        className={cn(
          'bg-secondary-main absolute top-20 left-0 h-[250px] w-[250px] rotate-90 rounded-tl-[80px] rounded-tr-[90px] rounded-br-[200px] rounded-bl-[90px]',
        )}
      ></div>
    </div>
  );
};

export default PhotoFrame;
