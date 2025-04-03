import { cn } from '@/lib';
import React, { ComponentProps, FC } from 'react';

const AppContainer: FC<ComponentProps<'div'>> = ({ children, ...props }) => {
  return (
    <div
      {...props}
      className={cn('app-container', 'h-screen', props.className)}
    >
      {children}
    </div>
  );
};

export default AppContainer;
