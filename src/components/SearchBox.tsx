import { cn } from '@/lib';
import { MinimalisticMagnifer } from 'solar-icon-set';

const SearchBox = () => {
  return (
    <div className={cn('grow')}>
      <h1 className={cn('heading-2 pb-2')}>سامانه گنجینه‌ی نوین ایرانیان</h1>
      <h3 className={cn('heading-1 pb-10')}>استعلامات خود را از ما بخواهید</h3>
      <div
        className={cn(
          'relative h-14 w-80 overflow-hidden rounded-full border-2 border-white',
        )}
      >
        <input
          type="text"
          placeholder="جست و جو کنید"
          className={cn('size-full p-4 pe-14 outline-0')}
        />
        <button
          className={cn(
            'absolute top-1/2 left-4 -translate-y-[42%] transform cursor-pointer',
          )}
        >
          <MinimalisticMagnifer
            className="text-white!"
            size={30}
            iconStyle="Outline"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
