import { SyntheticEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchIcon from "@/assets/icon-search.svg";
import { RootState } from "@/store/index";
import {
  SearchResult,
  setSearchQuery,
  setSearchResult,
} from "@/store/searchSlice";
import { useRouter } from "next/router";

type SearchProps = {
  placeholder: string;
  category?: keyof SearchResult;
};

const Search = ({ placeholder, category = "all" }: SearchProps) => {
  const { searchQuery } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();
  const router = useRouter();

  const onSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (searchQuery) {
      router.push(`/search/${searchQuery}?category=${category}`);
    }
  };

  return (
    <form className="px-4 sm:px-6 flex mb-[18px] lg:mt-8" onSubmit={onSubmit}>
      <SearchIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      <input
        type="text"
        className="ml-4 sm:ml-6 bg-dark-blue sm:border-b sm:border-transparent sm:focus:border-gray-blue sm:pb-3.5 text-base font-light sm:heading-md outline-none w-full placeholder:text-white/50 caret-red"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
    </form>
  );
};

export default Search;
