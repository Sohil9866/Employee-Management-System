import React, { HtmlHTMLAttributes, useId, forwardRef } from "react";

type InputProps = {
  label: string;
  className?: string;
  name: string;
  type: string;
} & HtmlHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label,type, className = "", ...props }, ref) => {
    const id = useId();
    return (
      <>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          type={type}
          className={`border px-1 ${className} h-11 outline-none border-black rounded mb-8`}
          name={name}
          id={id}
          {...props}
          ref={ref as React.Ref<HTMLInputElement>}
        />
      </>
    );
  }
);

export default Input;
