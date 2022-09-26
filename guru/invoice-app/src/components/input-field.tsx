import FormLabel from "./form-label";

type InputFieldProps = {
  label: string;
  id: string;
};

const InputField = ({ label, id }: InputFieldProps) => {
  return (
    <div className="form-control">
      <FormLabel label={label} id={id} />
      <input type="text" className="input-field" id={id} />
    </div>
  );
};

export default InputField;
