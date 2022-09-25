import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Heading from "@/components/heading";
import RegularCards from "@/components/regular-cards";
import Search from "@/components/search";
import { RootState } from "@/store/index";
import {
  SearchResult,
  setClearSearch,
  setSearchQuery,
  setSearchResult,
} from "@/store/searchSlice";
import data from "@/data/data.json";

const SearchPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { query, category } = router.query;

  const queryCategory = (category as keyof SearchResult) ?? "all";

  const { searchResult } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    // Get search query from the url
    dispatch(setSearchQuery(query as string));

    // Get data and load it on the page
    const onPageLoad = () => {
      const searchByTitle = (title: string, query: string) =>
        title.toLowerCase().includes(query.toLowerCase());

      const dataResult = data.filter((video) => {
        if (queryCategory === "all") {
          return searchByTitle(video.title, query as string);
        }

        if (queryCategory === "bookmarked") {
          return (
            video.isBookmarked && searchByTitle(video.title, query as string)
          );
        }

        return (
          video.category.toLowerCase().includes(queryCategory) &&
          searchByTitle(video.title, query as string)
        );
      });

      dispatch(
        setSearchResult({
          result: dataResult,
          category: queryCategory,
        })
      );
    };

    onPageLoad();

    // Clear search when user navgiates away
    const clearSearch = () => {
      dispatch(setClearSearch());
    };
    router.events.on("routeChangeStart", clearSearch);

    return () => {
      router.events.off("routeChangeStart", clearSearch);
    };
  }, [query, dispatch, queryCategory, router]);

  if (!searchResult[queryCategory]) return null;

  const foundResult = searchResult[queryCategory]!;
  const resultHeading = `Found ${foundResult.length} result${
    foundResult.length > 1 ? "s" : ""
  } for ‘${query}’`;

  return (
    <>
      <Search placeholder="Search for TV series" />
      <section className="section-regular">
        <Heading heading={resultHeading} />
        <RegularCards movies={foundResult} />
      </section>
    </>
  );
};

export default SearchPage;
