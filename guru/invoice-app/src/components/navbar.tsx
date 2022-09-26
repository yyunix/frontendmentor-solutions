import logo from "../assets/images/logo.svg";
import ThemeToggler from "./theme-provider";
import User from "./user";

const Navbar = () => {
  return (
    <header className="flex justify-between bg-[#373B53] dark:bg-dark-navy md:flex-col md:h-screen md:rounded-r-[20px]">
      <div className="relative overflow-hidden bg-violet h-full py-[23px] px-[22px] rounded-r-[20px] z-10 after:content-[''] after:bg-light-violet after:w-full after:h-full after:absolute after:left-0 after:-bottom-1/2 after:-z-10 after:rounded-l-[20px] md:h-fit md:p-8">
        <div className="w-7 md:w-10 md:h-auto">
          <img src={logo} alt="Invoice App Logo" className="w-full" />
        </div>
      </div>
      <div className="flex items-center md:flex-col">
        <ThemeToggler />
        <div className="px-8 border-l border-[#494E6E] h-full ml-8 flex items-center md:ml-0 md:px-[31px] md:py-6 md:border-t md:mt-8">
          <User />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
