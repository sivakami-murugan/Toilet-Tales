import { Button as MuiButton } from "@mui/material";
import React from "react";

function Button({
  variant,
  startIcon,
  children,
  style,
  text,
  onClick,
  width,
  ...rest
}) {
  const defaultStyles = {
    backgroundColor: "#F49600",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "700",
    textTransform: "capitalize",
  };

  return (
    <MuiButton
      variant={variant}
      startIcon={startIcon}
      // width={width}
      style={{
        ...defaultStyles,
        boxShadow: "unset",
        width: width,
      }}
      onClick={onClick}
      {...rest}
    >
      {text}
    </MuiButton>
  );
}

export default Button;
