import SearchIcon from "@/assets/icon-search.svg";

const Search = () => {
  return (
    <div className="px-4 sm:px-6 flex mb-[18px] lg:mt-8">
      <SearchIcon className="w-6 h-6 sm:w-8 sm:h-8" />
      <input
        type="text"
        className="ml-4 sm:ml-6 bg-dark-blue sm:border-b sm:border-transparent sm:focus:border-gray-blue sm:pb-3.5 text-base font-light sm:heading-md outline-none w-full placeholder:text-white/50"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default Search;
