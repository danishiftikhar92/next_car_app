'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import { CarCard, ShowMore, SearchBar, CustomFilter, Hero } from '@/components';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setloading] = useState(false);

  // search states
  const [manufacturer, setmanufacturer] = useState('');
  const [model, setmodel] = useState('');
  // filter states
  const [fuel, setfuel] = useState('');
  const [year, setyear] = useState('');
  // pagination states
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setloading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit: limit || 10,
        model: model || '',
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [manufacturer, model, fuel, year, limit]);

  return (
    <main className='overflow-hidden'>
      <Hero />

      <div
        className='mt-12 padding-x padding-y max-width'
        id='discover'
      >
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar
            setManuFacturer={setmanufacturer}
            setModel={setmodel}
          />

          <div className='home__filter-container'>
            <CustomFilter
              setFilter={setfuel}
              title='fuel'
              options={fuels}
            />
            <CustomFilter
              setFilter={setyear}
              title='year'
              options={yearsOfProduction}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {
              loading && 
              <div className='flex justify-center'>
                <div className='loader'>
                  <Image 
                    src='/loader.svg'
                    alt='loader'
                    width={50}
                    height={50}
                  />
                </div>
              </div>
            }

            <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
