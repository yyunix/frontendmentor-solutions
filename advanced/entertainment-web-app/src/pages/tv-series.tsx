import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";
import clientPromise from "@/lib/mongodb";
import { Movies } from "@/types/movies";

const TVPage = ({
  tvSeries,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Search placeholder="Search for TV series" category="tv" />
      <section className="section-regular">
        <Heading heading="TV Series" />
        <RegularCards movies={tvSeries} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{
  tvSeries: Movies[];
}> = async () => {
  const client = await clientPromise;
  const db = client.db("entertainment-app");

  const tvSeries = await db
    .collection("movies")
    .find({ category: "TV Series" })
    .toArray();

  return {
    props: {
      tvSeries: JSON.parse(JSON.stringify(tvSeries)),
    },
  };
};

export default TVPage;
