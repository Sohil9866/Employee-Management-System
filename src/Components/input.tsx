import React, { HtmlHTMLAttributes, useId, forwardRef } from "react";

type InputProps = {
  label: string;
  className?: string;
  name: string;
  type: string;
} & HtmlHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, type, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <>
        {/* {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          className={`border px-1 ${className} h-11 outline-none border-black rounded mb-8`}
          name={name}
          id={id}
          {...props}
          ref={ref as React.Ref<HTMLInputElement>}
        /> */}
        <div>
          <div className="flex items-center justify-between">
            {label && <label
              htmlFor={id}
              className={`block text-sm font-medium leading-6 text-gray-900 ${className}`}
            >
              {label}
            </label>}
            {label === "Password" && (
              <div className="text-sm">
                <a
                  href="#"
                  className={`font-semibold text-indigo-600 hover:text-indigo-500 ${className}`}
                >
                  Forgot password?
                </a>
              </div>
            )}
          </div>
          <div className="mt-2">
            <input
              type={type}
              className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className} `}
              name={name}
              id={id}
              {...props}
              ref={ref as React.Ref<HTMLInputElement>}  
              required
            />
          </div>
        </div>
      </>
    );
  }
);

export default Input;
