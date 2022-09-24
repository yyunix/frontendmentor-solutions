import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Search from "@/components/search";
import clientPromise from "@/lib/mongodb";
import { Movies } from "@/types/movies";
import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";

const BookmarkPage = ({
  bookmarkedMovies,
  bookmarkedTV,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Search placeholder="Search for bookmarked shows" />
      <section className="section-regular">
        <Heading heading="Bookmarked Movies" />
        <RegularCards movies={bookmarkedMovies} />
      </section>
      <section className="section-regular">
        <Heading heading="Bookmarked TV Series" />
        <RegularCards movies={bookmarkedTV} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  bookmarkedMovies: Movies[];
  bookmarkedTV: Movies[];
}> = async () => {
  const client = await clientPromise;
  const db = client.db("entertainment-app");

  const movies = await db
    .collection("movies")
    .find({ isBookmarked: true, category: "Movie" })
    .toArray();
  const tv = await db
    .collection("movies")
    .find({ isBookmarked: true, category: "TV Series" })
    .toArray();

  return {
    props: {
      bookmarkedMovies: JSON.parse(JSON.stringify(movies)),
      bookmarkedTV: JSON.parse(JSON.stringify(tv)),
    },
  };
};

export default BookmarkPage;
