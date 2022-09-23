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
    const onPageLoad = async () => {
      try {
        const data = await fetch(
          `/api/search/${query}?category=${queryCategory}`
        );
        const dataResult = await data.json();

        dispatch(
          setSearchResult({
            result: dataResult.data,
            category: queryCategory,
          })
        );
      } catch (error) {
        // Error page
      }
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
