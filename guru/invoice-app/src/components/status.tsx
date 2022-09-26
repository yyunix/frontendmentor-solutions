import { StatusType } from "../types/invoice";

type StatusProps = {
  status: StatusType;
};

const getTextColor = (status: StatusType) => {
  if (status === "paid") return "bg-green/[0.06] text-green";
  if (status === "pending") return "bg-orange/[0.06] text-orange";
  else
    return "bg-very-dark-blue/[0.06] text-very-dark-blue dark:bg-blue-gray/[0.06] dark:text-blue-gray";
};

const getBulletColor = (status: StatusType) => {
  if (status === "paid") return "bg-green";
  if (status === "pending") return "bg-orange";
  else return "bg-very-dark-blue dark:bg-blue-gray";
};

const Status = ({ status }: StatusProps) => {
  const statusText = getTextColor(status);
  const bulletColor = getBulletColor(status);

  return (
    <div
      className={`${statusText} flex items-center justify-center heading-xs capitalize px-[18px] py-3 rounded-md w-[104px]`}
    >
      <div className={`${bulletColor} w-2 h-2 mr-2 rounded-full`}></div>
      {status}
    </div>
  );
};

export default Status;
