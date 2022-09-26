import { ReactComponent as Logo } from "../assets/images/logo.svg";
import ThemeToggler from "./theme-provider";
import User from "./user";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-[#373B53] dark:bg-dark-navy">
      <div className="relative overflow-hidden bg-violet h-full py-[23px] px-[22px] rounded-r-[20px] z-10 after:content-[''] after:bg-light-violet after:w-full after:h-full after:absolute after:left-0 after:-bottom-1/2 after:-z-10 after:rounded-l-[20px] ">
        <Logo className="w-7 h-[26px]" />
      </div>
      <div className="flex items-center">
        <ThemeToggler />
        <div className="px-8 border-l border-[#494E6E] h-full ml-8 flex items-center">
          <User />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
