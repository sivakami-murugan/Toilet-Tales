import { Box, Checkbox, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "styled-components";

export const CustomButton = styled(Button)`
  && {
    margin-top: 40px;
    margin-bottom: 25px;
    background-color: #f49600;
    color: white;
    font-weight: 600;
    font-size: 14px;
    width: 300px;
    box-shadow: none;
    text-transform: capitalize;
    border-radius: 10px;
    padding: 13px;
    &:hover {
      background-color: #f49600 !important;
      box-shadow: none;
    }
  }
`;

export const CustomLoginButton = styled(Button)`
  && {
    color: #f49600;
    font-weight: 600;
    font-size: 14px;
    width: 300px;
    border: 1px solid #f49600;
    text-transform: capitalize;
    border-radius: 10px;
    padding: 13px;
    &:hover {
      background-color: white !important;
      border: 1px solid #f49600;
    }
  }
`;

export const ImageContainer = styled("div")({
  display: "flex",
  height: "100%",
});

export const ContentContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  // height: "300px",
});

export const TextItem = styled("div")({
  fontSize: "32px",
  fontWeight: "700",
  color: "#223548",
  fontFamily: "Open Sans",
  textAlign: "center",
  marginTop: "25px",
});

export const SubTextItem = styled("div")({
  color: "#5B738B",
  fontFamily: "Open Sans",
  fontWeight: "400",
  fontSize: "14px",
  textAlign: "center",
});

export const LoginBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export const StyledContainer = styled(Grid)`
  && {
    min-height: 70%;
    max-width: 876px;
    background-color: #ffffff;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 15px;
    padding: 10px;
  }
`;

export const LoginContainer = styled(Grid)`
  && {
    min-height: 70%;
    max-width: 876px;
    padding: 10px;
    display: flex;
    justify-content: center;
  }
`;

export const SmallText = styled("div")({
  color: "#5B738B",
  fontSize: "12px",
  fontWeight: "400",
  fontFamily: "Open Sans",
  marginTop: "10px",
});

export const SmallSpanText = styled("span")({
  color: "#F49600",
  cursor: "pointer",
  fontWeight: "bold",
});

export const BackButtonStyle = styled(Button)`
  && {
    color: #223548;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
  }
`;

export const BackButtonContainer = styled("div")({
  marginLeft: "-325px",
  marginTop: "-53px",
});

export const OrangeCheckbox = styled(Checkbox)({
  "& .MuiSvgIcon-root": {
    color: "#F49600",
  },
  "&:hover": {
    backgroundColor: "#F49600",
  },
});

export const CheckboxContainer = styled("div")({
  display: "flex",
  alignItems: "normal",
  // marginLeft: "30px",
  justifyContent: "center",
});

export const SignupContainer = styled("div")({
  display: "flex",
  alignItems: "normal",
  // marginLeft: "30px",
});

export const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

export const OtpInput = styled.input`
  width: 63px;
  height: 63px;
  text-align: center;
  font-size: 24px;
  border-radius: ${(props) => (props.hasValue ? "10px" : "10px")};
  border: ${(props) =>
    props.hasValue ? " 1px solid #d5dadd" : " 1px solid #FFC76D"};
  font-weight: 700;
  font-size: 40px;
  color: #475e75;
  background: ${(props) => (props.hasValue ? "#EAECEE" : "#FFF8D6")};
`;

export const LoginGrid = styled(Grid)`
  & > .MuiGrid-item {
    padding-top: 0px !important;
    padding-left: 0px !important;
    /* Additional specificity */
    margin-top: 0 !important;
    margin-left: 0 !important;
  }
`;
