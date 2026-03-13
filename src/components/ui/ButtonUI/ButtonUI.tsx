import React from 'react';
import { Button as AntButton, type ButtonProps } from 'antd';
// import styles from './ButtonUI.module.css';
import { classNames } from '@/utils/classNames';

export const ButtonUI = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...rest }, ref) => {
  const customClasses = classNames(className, {});

  return (
    <AntButton ref={ref} className={customClasses} {...rest}>
      {children}
    </AntButton>
  );
});

ButtonUI.displayName = 'ButtonUI';
