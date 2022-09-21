import { ChangeEvent, useState } from "react";

interface RangeProps {
  min?: number;
  max?: number;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Range = ({ min = 0, max = 20, value, onChange }: RangeProps) => {
  const rangePercentage = (value / max) * 100;
  const rangeTrackStyle = {
    background: `linear-gradient(to right, var(--color-green) 0%, var(--color-green) ${rangePercentage}%, var(--color-very-dark-gray) ${rangePercentage}%, var(--color-very-dark-gray) 100%)`,
  };

  return (
    <input
      style={rangeTrackStyle}
      value={value}
      type="range"
      onChange={onChange}
      min={min}
      max={max}
      step="0.1"
    />
  );
};

export default Range;
