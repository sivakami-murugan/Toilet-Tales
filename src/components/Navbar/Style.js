import styled from "styled-components";
import { MenuItem, Grid, Menu, TextField } from "@mui/material";
import { OutlinedInput } from "@mui/material";

export const HeaderItems = styled(MenuItem)`
  && {
    font-family: Open sans;
    &:hover {
      background-color: #f5f6f7;
      width: 85%;
      margin: auto;
      border-radius: 9px;
    }
  }
`;

export const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    top: 70px !important;
    left: unset !important;
    background-color: #fff;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    position: absolute;
    right: 0 !important;
  }
`;

export const MenuTextContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledSpan = styled.span`
  margin-left: 10px;
  color: #223548;
  font-weight: 600;
  font-size: 14px;
  font-family: "Open Sans", sans-serif;
`;

export const StyledOutlinedInput = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      display: "none",
    },
    "& input": {
      padding: "10px",
      backgroundColor: "#f0f0f0",
      color: "#8396A8",
      borderRadius: "5px",
      "&:-webkit-autofill": {
        WebkitBoxShadow: `0 0 0 1000px '#f0f0f0' inset`,
        transition: "background-color 5000s ease-in-out 0s",
      },
    },
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
  },
}));
