import React from "react";

const Countries = ({ allCountries }) => {
  return (
    <>
      <div className="w-full sm:px-6">
        <div className="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
          <div className="sm:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              All Countries
            </p>
            <div>
              <button className="inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                <p className="text-sm font-medium leading-none text-white">
                  Search
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="h-16 w-full text-sm leading-none text-gray-800">
                <th className="font-normal text-left pl-4">SL</th>
                <th className="font-normal text-left pl-4">Country</th>
                <th className="font-normal text-left pl-12">Total Cases</th>
                <th className="font-normal text-left pl-12">Total Deaths</th>
                <th className="font-normal text-left pl-20">Total Recovered</th>
                <th className="font-normal text-left pl-20">Active Cases</th>
                <th className="font-normal text-left pl-16">Critical</th>
              </tr>
            </thead>
            <tbody className="w-full">
              {allCountries.map((country, i) => (
                <tr
                  key={i}
                  className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="pl-4 cursor-pointer">{i}</td>
                  <td className="pl-4 cursor-pointer text-indigo-700 text-lg font-bold">
                    {country.country}
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">
                      {country.cases?.toLocaleString()}
                    </p>
                    <p className="text-xs leading-3 text-yellow-900 mt-2">
                      {country.todayCases?.toLocaleString()} +today
                    </p>
                  </td>
                  <td className="pl-12">
                    <p className="font-medium">{country.deaths}</p>
                    <p className="text-xs leading-3 text-red-900 mt-2">
                      {country.todayDeaths?.toLocaleString()} +today
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">
                      {country.recovered?.toLocaleString()}
                    </p>
                  </td>
                  <td className="pl-20">
                    <p className="font-medium">
                      {country.active?.toLocaleString()}
                    </p>
                  </td>
                  <td className="pl-16">
                    <p className="font-medium">
                      {country.critical?.toLocaleString()}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Countries;
