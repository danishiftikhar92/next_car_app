'use client';
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

function CustomButton({
  title,
  handleClick,
  btnType,
  isDisabled,
  containerStyles,
  textStyles,
  rightIcon,
}: CustomButtonProps) {
  return (
    <button
      disabled={isDisabled}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            layout="fill"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;