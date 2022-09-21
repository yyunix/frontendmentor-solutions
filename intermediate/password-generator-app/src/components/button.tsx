import { ButtonHTMLAttributes, ReactNode } from "react";
import ArrowRightIcon from "@/assets/images/icon-arrow-right.svg";

interface ButtonProps {
  children: ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button = ({ children, type }: ButtonProps) => {
  return (
    <button
      type={type}
      className="bg-green text-dark-gray w-full flex items-center justify-center space-x-6 py-[18px] sm:py-[21px] border-2 border-green group hover:bg-dark-gray hover:text-green group-hover uppercase !mt-4 sm:!mt-8"
    >
      <span>{children}</span>
      <ArrowRightIcon className="w-3 h-3 group-hover:fill-green" />
    </button>
  );
};

export default Button;
