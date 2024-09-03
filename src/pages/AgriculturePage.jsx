import React from "react";
import { agriculture_news } from "../components/dummydata/news";
import { Link } from "react-router-dom";

const AgriculturePage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {agriculture_news?.map((item) => (
        <div key={item.title} class="w-[300px] rounded-md border">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Laptop"
            class="h-[200px] w-full rounded-t-md object-cover"
          />
          <div class="p-4">
            <Link
              to={`/${item.id}`}
              class="inline-flex items-center text-2xl text-white font-semibold"
            >
              {item.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </Link>
            <p class="mt-3 text-sm text-gray-600">{item.summary}</p>
            {/* <div class="mt-4 flex w-full justify-center">
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              {item.source}
            </span>
           
          
          </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AgriculturePage;
