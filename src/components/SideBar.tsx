'use client';
import { useEffect, useState } from 'react';
import Portal from './GlobalPortal';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { cn } from '@/lib';

interface ISidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: ISidebarProps) => {
  const [visible, setVisible] = useState(false);
  useLockBodyScroll();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setVisible(true), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const closeSidebar = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <Portal>
      <div
        className={cn(
          'fixed inset-0 z-40 ms-auto transition-all duration-300',
          visible
            ? 'visible w-[calc(100%-400px)] bg-black/30'
            : 'invisible w-full bg-black/0',
        )}
        onClick={closeSidebar}
      />
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-[400px] border-l border-white/18 bg-white/50 backdrop-blur-md transition-transform duration-300',
          visible ? 'translate-x-0' : 'translate-x-full',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeSidebar}
          className={cn('text-lg font-bold text-red-500')}
        >
          خدمات سامانه نوین
        </button>
        <p className={cn('mt-4')}>محتوای سایدبار...</p>
      </div>
    </Portal>
  );
};

export default Sidebar;
