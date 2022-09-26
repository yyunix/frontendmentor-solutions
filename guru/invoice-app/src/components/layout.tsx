import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
