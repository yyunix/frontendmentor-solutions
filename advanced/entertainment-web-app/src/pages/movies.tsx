import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";
import clientPromise from "@/lib/mongodb";
import { Movies } from "@/types/movies";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

const MoviesPage = ({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Search placeholder="Search for movies" category="movie" />
      <section className="section-regular">
        <Heading heading="Movies" />
        <RegularCards movies={movies} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  movies: Movies[];
}> = async () => {
  const client = await clientPromise;
  const db = client.db("entertainment-app");

  const movies = await db
    .collection("movies")
    .find({ category: "Movie" })
    .toArray();

  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
};

export default MoviesPage;
