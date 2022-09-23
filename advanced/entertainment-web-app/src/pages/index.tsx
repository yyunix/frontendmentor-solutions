import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import clientPromise from "@/lib/mongodb";
import Heading from "@/components/heading";
import TrendingCards from "@/components/trending-cards";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";
import { Movies } from "@/types/movies";

const Home = ({
  trendingMovies,
  regularMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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

export const getServerSideProps: GetServerSideProps<{
  trendingMovies: Movies[];
  regularMovies: Movies[];
}> = async () => {
  const client = await clientPromise;
  const db = client.db("entertainment-app");

  const trendingMovies = await db
    .collection("movies")
    .find({ isTrending: true })
    .toArray();
  const regularMovies = await db
    .collection("movies")
    .find({ isTrending: false })
    .toArray();

  return {
    props: {
      trendingMovies: JSON.parse(JSON.stringify(trendingMovies)),
      regularMovies: JSON.parse(JSON.stringify(regularMovies)),
    },
  };
};

export default Home;
