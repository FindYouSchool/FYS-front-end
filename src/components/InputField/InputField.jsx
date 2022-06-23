import { useField, ErrorMessage } from "formik";

const InputField = ({ name, label, ...props }) => {
  const [field, meta] = useField(name);
  return (
    <>
      <label
        className="mt-4 block text-gray-700 text-sm font-bold"
        htmlFor={field.name}
      >
        {label}
      </label>
      <input
        className={`${
          meta.error && meta.touched ? "border-danger" : ""
        } form-control shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        {...field}
        {...props}
      />
      <ErrorMessage
        name={field.name}
        component="span"
        className="text-danger"
      />
    </>
  );
};

export default InputField;
