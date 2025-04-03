'use client';
import { cn } from '@/lib';
// import { useGeneralStore } from '@/store/general';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';

const SplitButton = () => {
  // const pathname = usePathname();
  // const { setPreviousPath } = useGeneralStore();
  // const handleLinkClick = () => {
  //   setPreviousPath(pathname);
  // };

  return (
    <div
      className={cn(
        'h-max w-max overflow-hidden rounded-xl border border-white text-white',
      )}
    >
      {/* <Link href="/login" onClick={handleLinkClick}> */}
        <button
          className={cn(
            'cursor-pointer border-l border-l-white p-1 px-4 hover:bg-gray-500',
          )}
        >
          ورود
        </button>
      {/* </Link> */}
      {/* <Link href="/signup" onClick={handleLinkClick}> */}
        <button className={cn('cursor-pointer p-1 px-4 hover:bg-gray-500')}>
          ثبت نام
        </button>
      {/* </Link> */}
    </div>
  );
};

export default SplitButton;
