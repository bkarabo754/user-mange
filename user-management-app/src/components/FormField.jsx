import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const FormField = ({
  name,
  label,
  type = "text",
  register,
  validation,
  placeholder,
  className,
  error,
}) => {
  return (
    <div className={`form-group ${className}`}>
      <Label className='form-label'>{label}</Label>
      <Input
        {...register(name, validation)}
        type={type}
        className='form-input'
        placeholder={placeholder}
      />
      {error && <p className='error-message'>{error.message}</p>}
    </div>
  );
};

export default FormField;
