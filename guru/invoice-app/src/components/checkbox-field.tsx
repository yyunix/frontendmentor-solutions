import { ChangeEvent } from "react";
import { ReactComponent as CheckIcon } from "../assets/icons/icon-check.svg";

type CheckboxFieldProps = {
  label: string;
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxField = ({ label, isChecked, onChange }: CheckboxFieldProps) => {
  return (
    <label className="flex items-center cursor-pointer group">
      <input
        type="checkbox"
        className="appearance-none"
        checked={isChecked}
        onChange={onChange}
        name={label}
      />
      <div
        className={`w-4 h-4 rounded-sm mr-3 border border-transparent group-hover:border-violet relative ${
          isChecked ? "bg-violet" : "bg-blue-gray dark:bg-dark-navy"
        }`}
      >
        <CheckIcon
          className={`${
            isChecked ? "block" : "hidden"
          } absolute top-[2.5px] left-[1.5px]`}
        />
      </div>
      <span className="heading-xs capitalize">{label}</span>
    </label>
  );
};

export default CheckboxField;
