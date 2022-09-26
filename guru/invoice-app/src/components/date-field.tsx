import { useState } from "react";
import { ReactComponent as CalendarIcon } from "../assets/icons/icon-calendar.svg";
import { ReactComponent as LeftIcon } from "../assets/icons/icon-arrow-left.svg";
import { ReactComponent as RightIcon } from "../assets/icons/icon-arrow-right.svg";
import FormLabel from "./form-label";

type DateFieldProps = {
  label: string;
  id: string;
};

const DateField = ({ label, id }: DateFieldProps) => {
  const [isDropped, setIsDropped] = useState(false);

  return (
    <div className="form-control">
      <FormLabel label={label} id={id} />
      <div className="relative">
        {/* Selected Field */}
        <div
          className={`input-field flex items-center justify-between cursor-pointer hover:border-violet ${
            isDropped && "border-violet"
          }`}
          onClick={() => setIsDropped(!isDropped)}
        >
          <span>21 Aug 2021</span>
          <CalendarIcon />
        </div>

        {/* Calendar Dropbox */}
        <div
          className={`absolute dropbox-light darm:dropbox-dark mt-6 w-full rounded-lg bg-white dark:bg-dark-navy text-navy dark:text-white ${
            isDropped ? "block" : "hidden"
          }`}
        >
          <div className="pt-6 pb-8 px-[18px] heading-xs">
            <div className="mb-8 flex justify-between items-center">
              <button aria-label="Previous month">
                <LeftIcon />
              </button>
              <p>Aug 2021</p>
              <button aria-label="Next month">
                <RightIcon />
              </button>
            </div>
            <div>Calendar</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateField;
