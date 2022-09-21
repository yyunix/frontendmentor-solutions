import CheckboxIcon from "@/assets/images/icon-check.svg";

interface CheckboxProps {
  value: HTMLInputElement["value"];
  label: string;
  checked: HTMLInputElement["checked"];
  onChange: () => void;
}

const Checkbox = ({ value, label, checked, onChange }: CheckboxProps) => {
  const checkboxIconClasses = checked ? "flex" : "hidden";
  const checkboxClasses = checked
    ? "border-green bg-green"
    : "border-almost-white";

  return (
    <label className="cursor-pointer flex items-center group">
      <input
        type="checkbox"
        className="appearance-none"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-5 h-5 border-2 mr-6 flex items-center justify-center group-hover:border-green ${checkboxClasses}`}
      >
        <CheckboxIcon className={checkboxIconClasses} />
      </div>
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
