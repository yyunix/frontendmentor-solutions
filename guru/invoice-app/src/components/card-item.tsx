import Status from "./status";
import { ReactComponent as RightIcon } from "../assets/icons/icon-arrow-right.svg";
import { Invoice } from "../types/invoice";
import { formatDate, formatCurrency } from "../utils/shared";

type CardItemType = Pick<
  Invoice,
  "id" | "paymentDue" | "total" | "clientName" | "status"
>;

const CardItem = ({
  id,
  paymentDue,
  total,
  clientName,
  status,
}: CardItemType) => {
  return (
    <div className="bg-white dark:bg-dark-navy rounded-lg card-boxshadow p-6 body-1 text-black-0 dark:text-white whitespace-nowrap cursor-pointer border border-transparent hover:border-violet">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="flex justify-between sm:justify-start sm:w-full">
          <div className="flex flex-col sm:flex-row sm:w-2/3">
            <p className="heading-xs mb-6 sm:mb-0 sm:w-2/5">
              <span className="text-blue">#</span>
              {id}
            </p>
            <p className="text-gray dark:text-blue-gray sm:w-1/2">
              Due {formatDate(paymentDue)}
            </p>
          </div>
          <p className="text-gray dark:text-white sm:w-1/2 pl-4">
            {clientName}
          </p>
        </div>
        <div className="flex justify-between items-center mt-2 sm:mt-0">
          <p className="heading-sm flex-shrink-0">{formatCurrency(total)}</p>
          <div className="-mt-5 sm:-mt-0 ml-10">
            <Status status={status} />
          </div>
          <RightIcon className="hidden sm:block ml-5" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
