'use client';

import { ShowMoreProps } from '@/types';
import { useRouter } from 'next/navigation';
import { CustomButton } from '.';

function ShowMore({ pageNumber, isNext, setLimit }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;

    setLimit(newLimit);
  };

  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          title='Show More'
          btnType='button'
          handleClick={handleNavigation}
          containerStyles='bg-primary-blue rouded-full text-white'
        />
      )}
    </div>
  );
}

export default ShowMore;
