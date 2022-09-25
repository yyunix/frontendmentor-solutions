import Heading from "@/components/heading";
import TrendingCards from "@/components/trending-cards";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";
import data from "@/data/data.json";

const Home = () => {
  const trendingMovies = data.filter((video) => video.isTrending);
  const regularMovies = data.filter((video) => !video.isTrending);

  return (
    <>
      <Search placeholder="Search for movies or TV series" />
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
