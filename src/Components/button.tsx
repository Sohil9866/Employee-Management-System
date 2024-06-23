import { ButtonProps } from "../Types/Data";

export const Button = (buttonProps: ButtonProps) => {
  const { text, height, width } = buttonProps;
  return (
    <button style={{ width: `${width}px`, height: `${height}px` }}>
      {text}
    </button>
  );
};
