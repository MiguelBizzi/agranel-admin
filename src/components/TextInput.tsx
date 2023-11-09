import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  defaultValue?: string | number;
  disabled?: boolean;
  required?: boolean;
  type?: string;
}

const TextInput: React.FC<Props> = ({
  id,
  label,
  defaultValue = "",
  disabled,
  required = true,
  type = "text",
  ...rest
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-bold text-sm">
        {label}
      </label>
      <input
        disabled={disabled}
        required={required}
        className="disabled:bg-gray-200 outline-orange-600 border text-gray-600 border-gray-400 p-2 rounded w-full text-sm"
        id={id}
        type={type}
        defaultValue={defaultValue}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
