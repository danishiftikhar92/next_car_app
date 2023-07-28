'use client';

import React from 'react';
import { CustomButton } from './';

function Hero() {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find ,book and rent the best
          <br />
          Rental Car Deals
        </h1>
        <p className="hero__subtitle">
          Streamline your rental car search and find the best deals in hundreds
          of locations worldwide.
        </p>
        <CustomButton
          title="Search for cars"
          handleClick={() => console.log('clicked')}
          btnType="button"
          isDisabled={false}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <img src="./hero.png" alt="hero" className="object-container" />
        </div>
        <div className="hero__image-overlay"></div>
      </div>
    </div>
  );
}

export default Hero;
