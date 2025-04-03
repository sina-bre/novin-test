'use client';
import { cn } from '@/lib';
import SplitButton from './SplitButton';
import { HamburgerMenu } from 'solar-icon-set';
import Logo from './Logo';
// import Sidebar from './SideBar';
// import { useModalStore } from '@/store/modalStore';
// import { memo, useEffect, useState } from 'react';

const AppHeader = () => {
  // const { openModal, closeModal, setOpenModal } = useModalStore();
  // const isSideBarOpen = openModal === 'sidebar';
  // const handleOpenSideBar = () => {
  //   setOpenModal('sidebar');
  // };
  return (
    <header
      className={cn('relative flex justify-between overflow-hidden py-10')}
    >
      <div
        className={cn(
          'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        )}
      >
        <Logo />
      </div>
      <button className={cn('cursor-pointer')}>
        <HamburgerMenu className="text-white!" size={40} iconStyle="Outline" />
      </button>
      <SplitButton />
      {/* {isSideBarOpen && <Sidebar isOpen={isSideBarOpen} onClose={closeModal} />} */}
    </header>
  );
};

export default AppHeader;
