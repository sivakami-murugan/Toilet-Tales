import { Checkbox, Radio, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const QuestionHeader = styled("div")({
  color: "#A9B4BE",
  fontSize: "16px",
  fontWeight: "700",
  fontFamily: "Open sans",
  marginBottom: "20px",
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
export const QuestionRadio = styled(Radio)(({ theme }) => ({
  color: "#D5DADD",
  "&.Mui-checked": {
    color: "#FFA500",
  },
}));
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
export const ReportImage = styled("div")({
  textAlign: "center",
  padding: "40px 0px",
});
export const ReportContainer = styled("div")({
  padding: "32px 0px",
});
export const FocusContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
export const QuestionCheckBox = styled(Checkbox)(({ theme }) => ({
  color: "#D5DADD",
  "&.Mui-checked": {
    color: "#FFA500",
  },
}));
export const ReportHeadingText = styled(Typography)(({ theme }) => ({
  fontFamily: "Open Sans",
  fontWeight: 700,
  fontSize: "24px",
}));
