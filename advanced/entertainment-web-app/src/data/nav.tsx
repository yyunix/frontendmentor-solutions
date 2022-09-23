import { ElementType } from "react";
import HomeIcon from "@/assets/icon-nav-home.svg";
import MoviesIcon from "@/assets/icon-nav-movies.svg";
import TVIcon from "@/assets/icon-nav-tv-series.svg";
import BookmarkIcon from "@/assets/icon-nav-bookmark.svg";

type Menu = {
  Component: ElementType;
  href: string;
};

export const menu: Menu[] = [
  { Component: HomeIcon, href: "/" },
  { Component: MoviesIcon, href: "/movies" },
  { Component: TVIcon, href: "/tv-series" },
  { Component: BookmarkIcon, href: "/bookmark" },
];
