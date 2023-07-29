'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SearchManufacturer } from './';
import { useRouter } from 'next/navigation';
import { SearchBarProps } from '@/types';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button
    className={`ml-3 z-10 ${otherClasses}`}
    type='submit'
  >
    <Image
      src='/magnifying-glass.svg'
      alt='search'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

function SearchBar({ setManuFacturer, setModel }: SearchBarProps) {
  const [searchManufacturer, setSerchManufacturer] = useState('');
  const [searchModel, setSearchModel] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === '' && searchModel === '') {
      return;
    }
    setModel(searchModel);
    setManuFacturer(searchManufacturer);
  };

  return (
    <form
      className='searchbar'
      onSubmit={handleSearch}
    >
      <div className='searhbar__item'>
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSerchManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder='Model'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
}

export default SearchBar;
