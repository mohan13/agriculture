import React from "react";
import { useParams } from "react-router-dom";
import { agriculture_news } from "../components/dummydata/news";
import Layout from "../components/common/Layout";

const AgriculttureDetails = () => {
  const { id } = useParams();
  const agriculture = agriculture_news[id];
  return (
    <>
      <Layout>
        <section className="overflow-hidden">
          <div className="mx-auto max-w-5xl px-5 py-24">
            <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
              <img
                alt="Nike Air Max 21A"
                className="h-64 w-full rounded object-cover lg:h-96 lg:w-1/2"
                src={agriculture.image_url}
              />
              <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
                <h1 className="my-4 text-3xl font-semibold text-black">
                  {agriculture.title}
                </h1>

                <p className="leading-relaxed">{agriculture.summary}</p>

                <h2 className="text-sm font-semibold tracking-widest my-2 text-gray-500">
                  Source: {agriculture.source}
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AgriculttureDetails;
