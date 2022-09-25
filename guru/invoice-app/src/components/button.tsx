import { ReactNode } from "react";
import { ReactComponent as PlusIcon } from "../assets/icons/icon-plus.svg";

type ButtonType =
  | "button1"
  | "button2"
  | "button3"
  | "button4"
  | "button5"
  | "button6";

type ButtonProps = {
  buttonType: ButtonType;
  children: ReactNode;
};

const Button = ({ buttonType, children }: ButtonProps) => {
  const mapButtonTypeStyle = () => {
    switch (buttonType) {
      case "button1":
        return "bg-violet text-white py-2 px-2 gap-4 hover:bg-light-violet";
      case "button2":
        return "bg-violet text-white py-4 px-2 hover:bg-light-violet";
      case "button3":
        return "bg-very-light-gray text-blue py-4 px-2 hover:bg-blue-gray dark:bg-navy dark:text-blue-gray dark:hover:bg-transparent dark:hover:text-blue-gray";
      case "button4":
        return "bg-[#373B53] text-gray py-4 px-2 hover:bg-blue-gray hover:bg-black-0 hover:text-gray dark:text-blue-gray dark:hover:text-blue-gray";
      case "button5":
        return "bg-red text-white py-4 px-2 hover:bg-salmon";
      case "button6":
      default:
        return "bg-very-light-gray text-blue py-4 px-2 hover:bg-blue-gray";
    }
  };

  return (
    <button
      className={`rounded-full heading-xs w-full flex items-center justify-center ${mapButtonTypeStyle()}`}
    >
      {buttonType === "button1" && (
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <PlusIcon />
        </div>
      )}
      <span>{children}</span>
    </button>
  );
};

export default Button;
