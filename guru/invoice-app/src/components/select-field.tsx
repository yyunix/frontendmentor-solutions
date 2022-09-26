import { useState, useRef } from "react";
import { ReactComponent as CaretDownIcon } from "../assets/icons/icon-arrow-down.svg";
import { paymentTerms } from "../contents/website";
import { useOnClickOutside } from "../hooks/useOnClickOutside";
import FormLabel from "./form-label";

type SelectFieldProps = {
  label: string;
  id: string;
};

const SelectField = ({ label, id }: SelectFieldProps) => {
  const [isDropped, setIsDropped] = useState(false);
  const [selectedOption, setSelectedOption] = useState(paymentTerms[3]);

  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsDropped(false));

  const onSelectChange = (term: string) => {
    setSelectedOption(term);
    setIsDropped(false);
  };

  const getPlural = (term: string) => (term !== "1" ? "s" : "");

  return (
    <div className="form-control">
      <FormLabel label={label} id={id} />

      <div className="relative" ref={ref}>
        {/* Selected Field */}
        <div
          className={`input-field flex items-center justify-between cursor-pointer hover:border-violet ${
            isDropped && "border-violet"
          }`}
          onClick={() => setIsDropped(!isDropped)}
        >
          <span>
            Net {selectedOption} Day{getPlural(selectedOption)}
          </span>
          <CaretDownIcon />
        </div>

        {/* Select Dropbox */}
        <div
          className={`absolute dropbox-light darm:dropbox-dark mt-6 w-full rounded-lg bg-white dark:bg-dark-navy text-navy dark:text-white z-10 ${
            isDropped ? "block" : "hidden"
          }`}
        >
          <ul>
            {paymentTerms.map((term) => (
              <li
                key={term}
                className="py-4 px-6 border-b border-blue-gray last:border-b-0 cursor-pointer hover:text-violet heading-xs"
                onClick={() => onSelectChange(term)}
              >
                Net {term} Day{getPlural(term)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
