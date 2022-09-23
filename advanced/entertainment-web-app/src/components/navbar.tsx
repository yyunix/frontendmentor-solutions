import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Avatar from "@/assets/image-avatar.png";
import { menu } from "@/data/nav";
import NavItem from "./nav-item";

const Navbar = () => {
  return (
    <header className="sm:py-[23px] sm:px-[25px] lg:pr-0 lg:py-8">
      <div className="bg-semi-dark-blue p-4 sm:py-5 sm:pl-6 sm:pr-4 flex justify-between items-center w-full sm:rounded-[10px] lg:flex-col lg:w-fit lg:px-7 lg:pt-9 lg:pb-8 lg:navbar-height lg:rounded-[20px] lg:justify-start">
        <Link href="/">
          <a className="w-6 h-5 sm:w-8 sm:h-[25.6px]">
            <Logo className="w-full h-full" />
          </a>
        </Link>

        <ul className="flex space-x-6 sm:space-x-8 lg:flex-col lg:space-x-0 lg:space-y-10 lg:mt-[75px]">
          {menu.map((li) => (
            <NavItem href={li.href} key={li.href} Component={li.Component} />
          ))}
        </ul>

        <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 lg:mt-auto border border-white rounded-full">
          <Image src={Avatar} alt="User Avatar" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
