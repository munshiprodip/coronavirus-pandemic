import React from "react";

const Header = ({ setPage }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-indigo-400">
            COVID-19 CORONAVIRUS PANDEMIC
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Reported Cases and Deaths by Country or Territory
          </p>
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button
              className="py-1 px-4 bg-indigo-500 text-white focus:outline-none"
              onClick={() => setPage("home")}
            >
              Worldwide
            </button>
            <button
              className="py-1 px-4 focus:outline-none"
              onClick={() => setPage("allCountries")}
            >
              Country
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
