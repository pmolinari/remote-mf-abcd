import { FC } from "react";
import { ButtonProps, Button as NormaButton } from "@norma/core";

const Button: FC<ButtonProps> = (props) => {
  return <NormaButton {...props} />;
};

export default Button;
