import { Menu } from "@/data/nav";
import Link from "next/link";
import { useRouter } from "next/router";
import { ElementType } from "react";

const NavItem = ({ href, Component, name }: Menu) => {
  const router = useRouter();
  const { category } = router.query;

  const mapCategory = () => {
    if (category === "movie") return "/movies";
    if (category === "tv") return "/tv-series";
  };

  return (
    <li>
      <Link href={href}>
        <a aria-label={name}>
          <Component
            className={`hover:fill-red m-auto ${
              router.pathname === href || mapCategory() === href
                ? "fill-white"
                : ""
            }`}
          />
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
