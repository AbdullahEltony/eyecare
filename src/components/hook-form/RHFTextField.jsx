import { useFormContext, Controller } from "react-hook-form";
import { PropTypes } from "prop-types";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import { useState } from "react";

const RHFTextField = ({ name, label, type, ...other }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col w-full items-start justify-start relative">
          <label htmlFor="email">{label}</label>
          <input
            {...field}
            type={type === "password" ? (showPassword ? "text" : "password") : type}
            label={label}
            {...other}
            className={`w-full bg-transparent text-sm mt-3 p-4 outline-none border ${error ? "border-red-500" : "border-border"} font-light rounded-lg focus:border ${error ? "focus:border-red-500" : "focus:border-subMain"}`}
          />
          {type === "password" && <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-14">
            {showPassword ? <BsEyeSlash /> : <BsEye />}
          </button>}
          {error && <p className="text-red-500 mt-1 text-sm">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default RHFTextField;

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  other: PropTypes.any,
};
