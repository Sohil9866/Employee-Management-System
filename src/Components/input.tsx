import React, { HtmlHTMLAttributes, useId, forwardRef } from "react";

type InputProps = {
  label: string;
  className?: string;
  name: string;
  type: string;
} & HtmlHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, value, label, type, className = "", ...props }, ref) => {
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
              value={value}
              {...props}
            />
          </div>
        </div>
      </>
    );
  }
);

export default Input;
