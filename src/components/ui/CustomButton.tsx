import React, { ComponentProps } from 'react';
import { cn } from '@/lib';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'w-full rounded-lg px-14 py-2 font-medium transition-all flex items-center justify-center gap-2 cursor-pointer mx-auto',
  {
    variants: {
      variant: {
        primary: 'bg-primary-main text-white hover:text-secondary-main',
      },
      disabled: {
        true: 'pointer-events-none opacity-50 ',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);
type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface CustomButtonProps
  extends Omit<ButtonVariantProps, 'disabled'>,
    ComponentProps<'button'> {
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end' | 'center';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant,
  isLoading = false,
  className,
  disabled,
  icon,
  iconPosition = 'start',
  ...props
}) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <span className="loader">
          {iconPosition === 'center' && icon ? icon : 'در حال بارگذاری ...'}
        </span>
      );
    }

    switch (iconPosition) {
      case 'start':
        return (
          <>
            {icon && <span className="icon-start">{icon}</span>}
            {children}
          </>
        );
      case 'end':
        return (
          <>
            {children}
            {icon && <span className="icon-end">{icon}</span>}
          </>
        );
      case 'center':
        return icon ? <span className="icon-center">{icon}</span> : children;
      default:
        return children;
    }
  };

  return (
    <button
      className={cn(
        buttonVariants({ variant, disabled: disabled || isLoading }),
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

export default CustomButton;
