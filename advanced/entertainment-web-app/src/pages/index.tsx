import type { NextPage } from "next";
import devData from "@/data/data.json";
import Heading from "@/components/heading";
import TrendingCards from "@/components/trending-cards";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";

const Home: NextPage = () => {
  const trendingMovies = devData.filter((movie) => movie.isTrending);
  const regularMovies = devData.filter((movie) => !movie.isTrending);

  return (
    <>
      <Search />
      <section className="section-trending mb-6 sm:mb-10">
        <Heading heading="Trending" />
        <TrendingCards movies={trendingMovies} />
      </section>
      <section className="section-regular">
        <Heading heading="Recommended for you" />
        <RegularCards movies={regularMovies} />
      </section>
    </>
  );
};

export default Home;
