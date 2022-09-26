import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { ReactComponent as CalendarIcon } from "../assets/icons/icon-calendar.svg";
import { ReactComponent as LeftIcon } from "../assets/icons/icon-arrow-left.svg";
import { ReactComponent as RightIcon } from "../assets/icons/icon-arrow-right.svg";
import FormLabel from "./form-label";

type DateFieldProps = {
  label: string;
  id: string;
};

const DateField = ({ label, id }: DateFieldProps) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="form-control">
      <FormLabel label={label} id={id} />
      <div className="relative">
        {/* Selected Field */}

        {/* Calendar Dropbox */}
        <div className="relative">
          <DatePicker
            dateFormat="dd MMM yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date!)}
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div className="flex items-center justify-between">
                <button
                  onClick={decreaseMonth}
                  type="button"
                  className="focus:outline-none focus:ring-2 focus:ring-light-violet"
                >
                  <LeftIcon />
                </button>
                <span className="text-heading-xs dark:text-white">
                  {format(date, "MMM yyyy")}
                </span>
                <button
                  onClick={increaseMonth}
                  type="button"
                  className="focus:outline-none focus:ring-2 focus:ring-light-violet"
                >
                  <RightIcon />
                </button>
              </div>
            )}
          />
          <CalendarIcon className="absolute  top-4 right-4" />
        </div>
      </div>
    </div>
  );
};

export default DateField;
