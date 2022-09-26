import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />
      <main className="w-full md:overflow-auto md:h-screen">
        <div className="md:max-w-[826px] md:mx-auto px-6 md:px-12 py-8 sm:py-14 md:py-[72px]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
