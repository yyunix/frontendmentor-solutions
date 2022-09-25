import Link from "next/link";
import { useRouter } from "next/router";
import { ElementType } from "react";

type NavItemProps = {
  href: string;
  Component: ElementType;
};

const NavItem = ({ href, Component }: NavItemProps) => {
  const router = useRouter();
  const { category } = router.query;

  const mapCategory = () => {
    if (category === "movie") return "/movies";
    if (category === "tv") return "/tv-series";
  };

  return (
    <li>
      <Link href={href}>
        <a>
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
