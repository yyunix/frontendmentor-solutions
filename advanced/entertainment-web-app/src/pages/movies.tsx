import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";

const MoviesPage = () => {
  return (
    <>
      <Search />
      <section className="section-regular">
        <Heading heading="Movies" />
        <RegularCards movies={[]} />
      </section>
    </>
  );
};

export default MoviesPage;
