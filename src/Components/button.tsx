type ButtonProps = {
  name: string;
  className?: string;
}

export const Button = ({ name, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={` py-[0.5rem] bg-[#00CEB0] rounded-md text-white font-bold w-full ${className}`}
      {...props}
    >
      {name}
    </button>
  );
};
