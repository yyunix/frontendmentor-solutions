import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";
import data from "@/data/data.json";

const TVPage = () => {
  const tvSeries = data.filter((video) => video.category === "TV Series");

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

export default TVPage;
