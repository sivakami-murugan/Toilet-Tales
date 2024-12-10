import React from "react";
import { InputAdornment } from "@mui/material";
import { StyledOutlinedInput } from "../../components/Navbar/Style";

const CustomTextbox = ({
  label,
  adornment,
  adornmentPosition = 'end',
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  helperText,
  autoComplete = 'off', // Default to 'off' to prevent autofill
  ...props
}) => {
  const inputProps = {
    type,
    placeholder,
    value,
    onChange,
    autoComplete,  // Handles autoComplete prop
  };

  // Add adornment if provided
  if (adornment) {
    inputProps[`${adornmentPosition}Adornment`] = (
      <InputAdornment position={adornmentPosition}>{adornment}</InputAdornment>
    );
  }

  return (
    <StyledOutlinedInput
      label={label}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      InputProps={inputProps}
      {...props}
    />
  );
};

export default CustomTextbox;
