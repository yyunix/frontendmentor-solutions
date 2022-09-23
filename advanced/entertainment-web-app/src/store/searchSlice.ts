import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Movies } from "@/types/movies";

export interface SearchResult {
  all: Movies[] | null;
  movie: Movies[] | null;
  tv: Movies[] | null;
  bookmarked: Movies[] | null;
}

export interface MovieState {
  searchQuery: string;
  searchResult: SearchResult;
}

const initialState: MovieState = {
  searchQuery: "",
  searchResult: {
    all: null,
    movie: null,
    tv: null,
    bookmarked: null,
  },
};

export const counterSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    setSearchResult(
      state,
      action: PayloadAction<{ result: Movies[]; category: keyof SearchResult }>
    ) {
      const { result, category } = action.payload;
      state.searchResult[category] = result;
    },
    setClearSearch(state) {
      state.searchQuery = "";
      state.searchResult = {
        all: null,
        movie: null,
        tv: null,
        bookmarked: null,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchQuery, setSearchResult, setClearSearch } =
  counterSlice.actions;

export default counterSlice.reducer;
