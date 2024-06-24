type ButtonProps = {
  name: string;
  className?: string;
}

export const Button = ({ name, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={` py-[0.5rem] bg-[#202022] rounded-md  text-white font-bold border-black border ${className}`}
      {...props}
    >
      {name}
    </button>
  );
};
