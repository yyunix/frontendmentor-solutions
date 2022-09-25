import Search from "@/components/search";
import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";
import data from "@/data/data.json";

const BookmarkPage = () => {
  const bookmarkedMovies = data.filter(
    (video) => video.isBookmarked && video.category === "Movie"
  );
  const bookmarkedTV = data.filter(
    (video) => video.isBookmarked && video.category === "TV Series"
  );

  return (
    <>
      <Search placeholder="Search for bookmarked shows" category="bookmarked" />
      {bookmarkedMovies.length && (
        <section className="section-regular">
          <Heading heading="Bookmarked Movies" />
          <RegularCards movies={bookmarkedMovies} />
        </section>
      )}
      {bookmarkedTV.length && (
        <section className="section-regular">
          <Heading heading="Bookmarked TV Series" />
          <RegularCards movies={bookmarkedTV} />
        </section>
      )}
    </>
  );
};

export default BookmarkPage;
