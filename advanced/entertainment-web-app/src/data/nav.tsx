import { ElementType } from "react";
import HomeIcon from "@/assets/icon-nav-home.svg";
import MoviesIcon from "@/assets/icon-nav-movies.svg";
import TVIcon from "@/assets/icon-nav-tv-series.svg";
import BookmarkIcon from "@/assets/icon-nav-bookmark.svg";

export type Menu = {
  Component: ElementType;
  href: string;
  name: string;
};

export const menu: Menu[] = [
  { Component: HomeIcon, href: "/", name: "Home" },
  { Component: MoviesIcon, href: "/movies", name: "Movies" },
  { Component: TVIcon, href: "/tv-series", name: "TV Series" },
  { Component: BookmarkIcon, href: "/bookmark", name: "Bookmark" },
];
