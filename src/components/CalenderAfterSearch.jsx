import React, { useState } from "react";
import { agriculture_news } from "./dummydata/news";

const months = [
  {
    name: "",
  },
  {
    name: "Jan",
  },
  {
    name: "Feb",
  },
  {
    name: "Mar",
  },
  {
    name: "Apr",
  },
  {
    name: "May",
  },
  {
    name: "Jun",
  },
  {
    name: "Jul.",
  },
  {
    name: "Aug.",
  },
  {
    name: "Sep.",
  },
  {
    name: "Nov.",
  },
  {
    name: "Oct.",
  },
  {
    name: "Nov.",
  },
  {
    name: "Dec.",
  },
];

export const CalenderAfterSearch = () => {
  const [selectCountry, setSelectCountry] = useState("Nepal");
  const [selectCrop, setSelectCrop] = useState("");
  const [data, setData] = useState([]);

  const handleCountry = (e) => {
    setSelectCountry(e.target.value);
  };

  const handleCrop = (e) => {
    setSelectCrop(e.target.value);
  };

  const handleSearch = () => {
    const searchedData = agriculture_news.filter(
      (item) => item.title === selectCrop,
    );
    return setData(searchedData);
  };

  const filterdData = agriculture_news.filter(
    (item) => item.country === selectCountry,
  );

  console.log(selectCountry, filterdData, data);
  return (
    <div>
      <div className="flex gap-4 w-full justify-center">
        <div>
          <select
            onChange={handleCountry}
            className="flex w-full rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {agriculture_news?.map((item) => (
              <option key={item.id} value={item.country}>
                {item.country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            onChange={handleCrop}
            className="flex w-full rounded-md border border-black/30 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {filterdData?.map((item) => (
              <option key={item.id} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleSearch}
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Search
        </button>
      </div>
      <div className="my-4">
        {data?.map((item) => (
          <section
            key={item.name}
            className="mx-auto w-full max-w-7xl px-4 py-4"
          >
            <div className="mt-6 flex flex-col">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr className="divide-x divide-gray-200">
                          {months?.map((item) => (
                            <th
                              key={item.name}
                              scope="col"
                              className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                            >
                              {item.name}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap px-4 py-4">
                            {item.title}{" "}
                          </td>
                          {months?.map((item) => (
                            <td
                              key={item.name}
                              className={`whitespace-nowrap px-4 py-4 ${
                                item.name === "Jan"
                                  ? "bg-red-500"
                                  : "bg-slate-500"
                              }`}
                            ></td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
