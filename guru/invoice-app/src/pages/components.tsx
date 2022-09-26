import Button from "../components/button";
import DateField from "../components/date-field";
import InputField from "../components/input-field";
import SelectField from "../components/select-field";
import ThemeToggler from "../components/theme-provider";

const ComponentsPage = () => {
  return (
    <div className="px-6">
      <ThemeToggler />
      <Button buttonType="button1">New Invoice</Button>
      <Button buttonType="button2">New Invoice</Button>
      <Button buttonType="button3">Edit</Button>
      <Button buttonType="button4">Save as Draft</Button>
      <Button buttonType="button5">Delete</Button>
      <Button buttonType="button6">+ Add New Item</Button>
      <section className="space-y-8 sm:w-60">
        <InputField label="Street Address" id="street-address" />
        <SelectField label="Payment Terms" />
        <DateField label="Issue Date" />
      </section>
    </div>
  );
};

export default ComponentsPage;
