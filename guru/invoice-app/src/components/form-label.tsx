type FormLabelProps = {
  label: string;
  id: string;
};

const FormLabel = ({ label, id }: FormLabelProps) => {
  return (
    <label htmlFor={id} className="text-blue dark:text-blue-gray body-1">
      {label}
    </label>
  );
};

export default FormLabel;
