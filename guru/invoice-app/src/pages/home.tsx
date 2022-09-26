import React from "react";
import CardItem from "../components/card-item";
import initialInvoice from "../contents/data.json";
import { StatusType } from "../types/invoice";
import Filter from "../components/filter";
import Button from "../components/button";
import { useWindowSize } from "../hooks/useWindowSize";

const HomePage = () => {
  const { width } = useWindowSize();

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="heading-md sm:heading-lg">Invoices</h1>
          <p className="body-1 text-gray dark:text-blue-gray mt-2">
            {initialInvoice.length} invoices
          </p>
        </div>

        <div className="flex items-center gap-[18px] sm:gap-10">
          <Filter />
          <Button buttonType="button1">
            {" "}
            {width! > 640 ? "New Invoice" : "New"}
          </Button>
        </div>
      </div>
      <div className="space-y-4 mt-8">
        {initialInvoice.map((invoice) => (
          <CardItem
            key={invoice.id}
            id={invoice.id}
            paymentDue={invoice.paymentDue}
            total={invoice.total}
            clientName={invoice.clientName}
            status={invoice.status as StatusType}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
