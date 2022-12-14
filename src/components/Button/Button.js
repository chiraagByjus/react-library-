import React from "react";
import "./Button.css";

const Button = (props) => {
  const { variant, children, ...rest } = props;
  return (
    <>
      <button className={`button ${variant} `} {...rest}>
        {children}
      </button>
      <button className={`button danger`}>{children}</button>
    </>
  );
};

export default Button;
