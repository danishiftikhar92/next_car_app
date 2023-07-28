import { CustomFilter, Hero, SearchBar, CarCard } from '@/components';
import { fetchCars } from '@/utils';

export default async function Home() {
  const allCars = await fetchCars();

  const isEmpty =
    !Array.isArray(allCars) || allCars?.length < 1 || allCars === undefined;
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars that you would like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="Brand" />
            <CustomFilter title="Model" />
            <CustomFilter title="Year" />
            <CustomFilter title="Price" />
          </div>
        </div>
        {!isEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error_container">
            <h2 className="text-black text-xl font-bold">
              Oops, no results found!
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
