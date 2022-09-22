import CardGrid from "@/components/card-grid";
import type { NextPage } from "next";
import devData from "@/data/data.json";
import Heading from "@/components/heading";
import Card from "@/components/card";

const Home: NextPage = () => {
  return (
    <>
      <section className="section-trending mb-6 sm:mb-10">
        <Heading heading="Trending" />
        <div className="relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 no-scrollbar pr-4 sm:pr-[25px]">
          {devData
            .filter((data) => data.isTrending)
            .map((data) => (
              <Card key={data.title} {...data} />
            ))}
        </div>
      </section>
      <section className="section-regular">
        <Heading heading="Recommended for you" />
        <CardGrid movies={devData} />
      </section>
    </>
  );
};

export default Home;
