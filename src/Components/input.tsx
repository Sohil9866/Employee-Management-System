import React, {  useId, forwardRef } from "react";

type InputProps = {
  label: string;
  className?: string;
  name: string;
  type: string;
  err?: null |string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type, err, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <>
        <div>
          <div className="flex items-center justify-between">
            {label && <label
              htmlFor={id}
              className={`block text-sm font-medium leading-6 text-gray-900 ${className}`}
            >
              {label}
            </label>}
          </div>
          <div className="mt-2">
            <input
              type={type}
              className={`block w-full rounded-md border py-[10px] px-1 text-gray-900 border-[#e1e1e4] outline-none sm:text-sm sm:leading-6 ${className} `}
              name={name}
              id={id}
              ref={ref as React.Ref<HTMLInputElement>}  
              {...props}
            />
          </div>
          {err !== null ?
          (<div className="flex items-center text-red-500 text-xs">
            <span className="text-red-500">{err}</span>
          </div>) : ("")}
        </div>
      </>
    );
  }
);

export default Input;
