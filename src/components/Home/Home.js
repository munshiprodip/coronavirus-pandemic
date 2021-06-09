import React from "react";

const Home = ({ allCountries }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-3xl font-medium title-font my-2 text-yellow-900">
            Coronavirus Cases
          </h1>
          <h1 className="sm:text-6xl text-6xl font-medium title-font my-2 text-yellow-500">
            {allCountries[0].cases.toLocaleString()}
          </h1>
          <h1 className="sm:text-3xl text-3xl font-medium title-font my-2 text-red-500">
            Deaths
          </h1>
          <h1 className="sm:text-6xl text-6xl font-medium title-font my-2 text-red-900">
            {allCountries[0].deaths.toLocaleString()}
          </h1>
          <h1 className="sm:text-3xl text-3xl font-medium title-font my-2 text-green-500">
            Recovered
          </h1>
          <h1 className="sm:text-6xl text-6xl font-medium title-font my-2 text-green-700">
            {allCountries[0].recovered.toLocaleString()}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
