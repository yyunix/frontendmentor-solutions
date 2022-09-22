import React, { ReactNode } from "react";
import Navbar from "./navbar";

type Layout = {
  children: ReactNode;
};

const Layout = ({ children }: Layout) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Navbar />
      <main className="pt-6 pb-14 sm:pt-0 lg:py-8 w-full lg:h-screen lg:overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
