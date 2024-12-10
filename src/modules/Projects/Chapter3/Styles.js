import { Box, FormGroup, Radio } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";

export const BoxModal = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1100,
  background: "#ffffff",
  border: "none",
  boxShadow: 24,
  padding: "30px",
  borderRadius: "15px",
  [theme.breakpoints.down("sm")]: {
    width: "70%",
  },
  minHeight: "70%",
}));

export const ImageConatiner = styled("div")({
  textAlign: "center",
});

export const ImageText = styled("div")({
  color: "#223548",
  fontSize: "32px",
  fontWeight: "700",
  fontFamily: "Open sans",
  marginBottom: "10px",
});

export const ParaText = styled("div")({
  color: "#475E75",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Open sans",
  textAlign: "justify",
});

export const OrangeRadio = styled(Radio)(({ theme }) => ({
  color: "#D5DADD",
  "&.Mui-checked": {
    color: "#FFA500",
  },
}));

export const QuestionHeader = styled("div")({
  color: "#A9B4BE",
  fontSize: "16px",
  fontWeight: "700",
  fontFamily: "Open sans",
  marginBottom: "10px",
});

export const QuestionText = styled("div")({
  color: "#223548",
  fontSize: "16px",
  fontWeight: "700",
  fontFamily: "Open sans",
  marginBottom: "10px",
});

export const OptionText = styled("div")({
  color: "#223548",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Open sans",
});

export const TextQuestion = styled("div")({
  color: "#223548",
  fontSize: "16px",
  fontWeight: "600",
  fontFamily: "Open sans",
});

export const TextBoxContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

export const CustomTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "#EAECEE",
  borderRadius: "15px",
  width: "130px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

export const FeetText = styled("div")({
  color: "#5B738B",
  fontSize: "14px",
  fontWeight: "400",
  fontFamily: "Open sans",
});

export const LabelText = styled("div")({
  color: "#223548",
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Open sans",
});

export const CongratsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "35px",
});

export const CongratsText = styled("div")({
  color: "#223548",
  fontSize: "32px",
  fontWeight: "700",
  fontFamily: "Open sans",
});

export const CongratsParaText = styled("div")({
  fontSize: "14px",
  color: "#5B738B",
  fontWeight: "400",
  fontFamily: "Open sans",
});

export const CustomFormGroup = styled(FormGroup)`
  // &.css-dmmspl-MuiFormGroup-root {
  //   display: flex;
  //   flex-direction: row;
  //   flex-wrap: wrap;
  //   /* Add other styles or overrides here */
  // }
`;
