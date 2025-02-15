import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fetchCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchCars()

  // console.log(allCars)
  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars
  return (
    <main>
      <Hero/>
      <div className="mt-12 padding-x padding-y w-max" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p>
            Explore the cars you will definitely like
          </p>
        </div>

        <div className="home__filters">
          <SearchBar/>

          <div className="home__filter-container">
            <CustomFilter
              title="fuel"
            />
            <CustomFilter
              title="year"
            />
          </div>
        </div>

        {!isDataEmpty? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car)=>
              <CarCard car={car}/>)}
            </div>
          </section>
        ):(
          <div className="home__erro-container">
            <h2 className="text-black text-xl font-bold">
              Oops. No results
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>

  );
}
