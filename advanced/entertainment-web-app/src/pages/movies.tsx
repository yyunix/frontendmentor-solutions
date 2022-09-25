import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";
import data from "@/data/data.json";

const MoviesPage = () => {
  const movies = data.filter((video) => video.category === "Movie");

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

export default MoviesPage;
