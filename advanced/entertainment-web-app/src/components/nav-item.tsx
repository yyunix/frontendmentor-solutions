import Link from "next/link";
import { useRouter } from "next/router";
import { ElementType } from "react";

type NavItemProps = {
  href: string;
  Component: ElementType;
};

const NavItem = ({ href, Component }: NavItemProps) => {
  const router = useRouter();

  return (
    <li>
      <Link href={href}>
        <a>
          <Component
            className={`hover:fill-red ${
              router.pathname === href ? "fill-white" : ""
            }`}
          />
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
