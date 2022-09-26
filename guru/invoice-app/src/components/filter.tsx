import { useState, useRef, useEffect, ChangeEvent } from "react";
import { ReactComponent as DownIcon } from "../assets/icons/icon-arrow-down.svg";
import { status } from "../contents/website";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import { useWindowSize } from "../hooks/useWindowSize";
import CheckboxField from "./checkbox-field";

const initialOptions: any = {};
status.forEach((s) => {
  initialOptions[s] = false;
});

const Filter = () => {
  const [filterBy, setFilterBy] = useState(initialOptions);
  const [isDropped, setIsDropped] = useState(false);

  const ref = useRef(null);

  const { width } = useWindowSize();

  useOnClickOutside(ref, () => setIsDropped(false));

  const openFilterBox = () => setIsDropped(!isDropped);

  const onCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const newFilterBy = {
      ...filterBy,
      [name]: checked,
    };

    setFilterBy(newFilterBy);
  };

  return (
    <div className="relative" ref={ref}>
      <div
        className="flex items-center gap-3 md:gap-4 cursor-pointer"
        onClick={openFilterBox}
      >
        <p className="heading-xs">
          {width! > 640 ? "Filter by status" : "Filter"}
        </p>
        <DownIcon
          className={`transition ease-linear duartion-100 ${
            isDropped ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`${
          isDropped ? "block" : "hidden"
        } absolute mt-6 bg-white dark:bg-navy space-y-4 p-6 w-48 dropbox-light dark:dropbox-dark rounded-lg`}
      >
        {status.map((s) => (
          <CheckboxField
            label={s}
            key={s}
            onChange={onCheckboxChange}
            isChecked={filterBy[s]}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
