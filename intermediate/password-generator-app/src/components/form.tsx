import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { generatePassword, measureStrength } from "@/lib/utils";
import {
  CheckList,
  Options,
  OptionsState,
  RangeValueState,
} from "@/types/form";
import { AvailabeStrengths } from "@/types/strength";
import Button from "./button";
import Checkbox from "./checkbox";
import Range from "./range";
import Strength from "./strength";

type FormProps = { updatePassword: (pwd: string) => void };

const checkList: CheckList[] = [
  { label: "Include Uppercase Letters", name: "uppercase" },
  { label: "Include Lowercase Letters", name: "lowercase" },
  { label: "Include Numbers", name: "numbers" },
  { label: "Include Symbols", name: "symbols" },
];

const Form = ({ updatePassword }: FormProps) => {
  const [checkboxOptions, setCheckboxOptions] = useState<OptionsState>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const [rangeValue, setRangeValue] = useState<RangeValueState>(10);
  const [strength, setStrength] = useState<AvailabeStrengths>(0);

  // TODO: debounce input
  const onRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(event.target.value));
  };

  const onCheckboxChange = (name: Options) => {
    setCheckboxOptions({
      ...checkboxOptions,
      [name]: !checkboxOptions[name],
    });
  };

  const rangeValueInteger = Math.floor(rangeValue);

  const onFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    updatePassword(generatePassword(rangeValueInteger, checkboxOptions));
  };

  useEffect(() => {
    const updatedStrength = measureStrength(rangeValueInteger, checkboxOptions);
    setStrength(updatedStrength);
  }, [rangeValueInteger, checkboxOptions]);

  return (
    <div className="bg-dark-gray p-4 sm:py-6 sm:px-8 mt-6">
      <div className="flex justify-between items-center mb-4">
        <p className="">Character Length</p>
        <p className="text-lg sm:text-xl text-green">{rangeValueInteger}</p>
      </div>
      <form className="space-y-8" onSubmit={onFormSubmit}>
        <Range value={rangeValue} onChange={onRangeChange} />
        <ul className="space-y-4 sm:space-y-5">
          {checkList.map(({ label, name }) => (
            <li key={name}>
              <Checkbox
                value={name}
                label={label}
                checked={checkboxOptions[name]}
                onChange={() => onCheckboxChange(name)}
              />
            </li>
          ))}
        </ul>
        <Strength strength={strength} />
        <Button type="submit">generate</Button>
      </form>
    </div>
  );
};

export default Form;
