import { AvailabeStrengths, Colors, StrengthInfo } from "@/types/strength";

type StrengthProps = { strength: AvailabeStrengths };

const strengths = Array.from(Array(4).keys());
const strengthsInfo: Record<AvailabeStrengths, StrengthInfo> = {
  0: { label: "", color: "default" },
  1: { label: "took weak!", color: "red" },
  2: { label: "weak", color: "orange" },
  3: { label: "medium", color: "yellow" },
  4: { label: "strong", color: "green" },
};

const Bar = ({ color }: { color: Colors }) => {
  const colors = {
    red: "bg-red border-red",
    orange: "bg-orange border-orange",
    yellow: "bg-yellow border-yellow",
    green: "bg-green border-green",
    default: "",
  };

  return <div className={`w-2.5 h-7 border-2 ${colors[color]}`}></div>;
};

const Strength = ({ strength }: StrengthProps) => {
  const renderScale = () => {
    return (
      <div className="flex gap-[15.5px]">
        <p className="text-base sm:text-lg uppercase">
          {strengthsInfo[strength].label}
        </p>
        <div className="flex space-x-2">
          {strengths.map((num) => (
            <Bar
              key={num}
              color={strength > num ? strengthsInfo[strength].color : "default"}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-very-dark-gray px-4 sm:px-8 py-3.5 sm:py-5 flex justify-between items-center h-[72px]">
      <p className="text-gray">STRENGTH</p>
      {renderScale()}
    </div>
  );
};

export default Strength;
