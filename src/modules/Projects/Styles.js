import {
  Box,
  Grid,
  Button as MuiButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";


export const NodataContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "70vh",
});

export const ButtonTop = styled("div")({
  paddingTop: "25px",
});

export const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "10px",
    color: "black",
    backgroundColor: "#EAECEE",
    borderRadius: "10px",
    width: "280px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export const CustomProjTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "10px",
    color: "black",
    backgroundColor: "#EAECEE",
    borderRadius: "10px",
    // width: "280px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});

export const BoxItem = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  boxShadow: 24,
  padding: "30px",
  borderRadius: "15px",
  background: "#ffffff",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

export const CreateButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#F49600",
  color: "#fff",
  fontSize: "14px",
  boxShadow: "none",
  textTransform: "capitalize",
  fontWeight: "700",
  borderRadius: "10px",
  fontFamily: "open sans",
  cursor: "pointer",
  padding: "8px 16px",
  border: "none",
  "&:hover": {
    backgroundColor: "#F49600",
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: "#5B738B",
    color: "#fff",
  },
}));

export const CreateNextButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#F49600",
  color: "#fff",
  fontSize: "14px",
  boxShadow: "none",
  textTransform: "capitalize",
  fontWeight: "700",
  borderRadius: "10px",
  fontFamily: "open sans",
  cursor: "pointer",
  padding: "8px 16px",
  border: "none",
  "&:hover": {
    backgroundColor: "#F49600",
    boxShadow: "none",
  },
  "&.Mui-disabled": {
    backgroundColor: "#5B738B",
    color: "#fff",
  },
}));

export const CancelButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#5B738B",
  fontSize: "14px",
  boxShadow: "none",
  fontWeight: "700",
  borderRadius: "10px",
  fontFamily: "open sans",
  cursor: "pointer",
  textTransform: "capitalize",
  "&:hover": {
    boxShadow: "none",
  },
}));

export const TitleTypography = styled(Typography)({
  fontSize: "12px",
  fontWeight: "600",
  color: "#475E75",
  fontFamily: "open sans",
});

export const ProjectTitle = styled("div")({
  color: "#223548",
  fontWeight: "700",
  fontSize: "24px",
  fontFamily: "open sans",
});

export const CardTitle = styled("div")({
  color: "#223548",
  fontWeight: "600",
  fontSize: "20px",
  fontFamily: "open sans",
});

export const DateText = styled("div")({
  color: "#738496",
  fontWeight: "400",
  fontSize: "12px",
  fontFamily: "open sans",
  marginTop: "auto",
});

export const BottomContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
});

export const DotsIcon = styled("div")({
  marginLeft: "-5px",
  cursor: "pointer",
});

export const DownloadCardContainer = styled("div")({
  background: "#FFFFFF",
  width: "120px",
  marginLeft: "25px",
  marginTop: "-42px",
  position: "absolute",
  borderRadius: "10px",
  boxShadow: "0px 4px 13.5px 0px #0000001A",
});

export const IconAlign = styled("div")({
  padding: "5px",
});

export const ChapterCartTitle = styled("div")({
  fontSize: "15px",
  fontWeight: "700",
  color: "#223548",
  fontFamily: "open sans",
});

export const SubChapterCartTitle = styled("div")({
  fontSize: "11px",
  fontWeight: "400",
  color: "#738496",
  fontFamily: "open sans",
});

export const TypeOfButton = styled(MuiButton)(({ theme, selected }) => ({
  backgroundColor: selected ? "#F49600" : "#EBF1F4",
  color: selected ? "#fff" : "#223548",
  fontSize: "14px",
  boxShadow: "none",
  textTransform: "capitalize",
  fontWeight: "600",
  borderRadius: "10px",
  fontFamily: "open sans",
  cursor: "pointer",
  padding: "8px 16px",
  border: "none",
  "&:hover": {
    backgroundColor: selected ? "#F49600" : "#F49600",
    boxShadow: "none",
    color: "#ffffff",
  },
}));

export const HeaderText = styled("div")({
  color: "#223548",
  fontSize: "24px",
  fontWeight: "700",
  fontFamily: "Open sans",
  marginBottom: "10px",
});

export const ChapterText = styled("div")({
  color: "#738496",
  fontSize: "12px",
  fontWeight: "600",
  fontFamily: "Open sans",
});

export const CategoryButton = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  flexWrap: "wrap",
  marginTop: "20px",
});

export const FootballTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    padding: "10px",
    color: "black",
    backgroundColor: "#EAECEE",
    borderRadius: "10px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiFormLabel-root": {
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    fontWeight: 400,
    fontSize: "13px",
    marginBottom: "5px",
    transform: "none",
    transition: "none",
    zIndex: 1,
    pointerEvents: "auto",
    userSelect: "none",
  },
});

export const FootballContainer = styled("div")({
  display: "flex",
  gap: "2rem",
  // justifyContent: "space-between",
});

export const FootballTextItem = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "10px",
});

export const ActionBoxContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  marginTop: "45px",
  gap: "10px",
  // position: "absolute",
  // bottom: "25px",
  // right: "20px",
});
export const ActionBoxReportContainer = styled(Box)({
  display: "flex",
  justifyContent: "end",
  marginTop: "45px",
  gap: "10px",
  position: "absolute",
  bottom: "25px",
  right: "20px",
});

export const StyledButton = styled(MuiButton)({
  color: "#223548",
  fontSize: "14px",
  fontWeight: "600",
  textTransform: "capitalize",
  fontFamily: "Open Sans",
});

export const RunModalBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 763,
  background: "#ffffff",
  border: "none",
  boxShadow: 24,
  padding: "32px",
  borderRadius: "15px",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

export const ChapterBoxContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ChapterBoxFlex = styled("div")({
  flex: "1 1 auto",
});

export const LoaderStyle = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "60vh",
});

export const NoteMessage = styled("div")({
  fontSize: "14px",
  color: "#738496",
  marginBottom: "10px",
  marginTop: "10px",
  fontFamily: "open sans",
});

export const CustomRadio = styled(Radio)(({ theme }) => ({
  color: theme.palette.orange.main,
  "&.Mui-checked": {
    color: theme.palette.orange.main,
  },
}));

export const CustomRadioGroup = styled(RadioGroup)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "16px",
});

export const OrangeRadio = styled(Radio)({
  "&.Mui-checked": {
    color: "#F49600",
  },
});

export const QuestionText = styled("div")({
  fontSize: "16px",
  fontWeight: "700",
  color: "#354A5F",
  marginBottom: "10px",
  marginTop: "10px",
  fontFamily: "open sans",
});

export const AnswerText = styled("div")({
  fontSize: "16px",
  color: "#354A5F",
  marginBottom: "10px",
  fontWeight: "600",
  marginTop: "10px",
  fontFamily: "open sans",
});

export const WarningText = styled("div")({
  color: "#223548",
  fontSize: "24px",
  fontWeight: "700",
  fontFamily: "Open Sans",
});

export const WarningSubText = styled("div")({
  color: "#223548",
  fontSize: "14px",
  fontWeight: "700",
  fontFamily: "Open Sans",
  marginTop: "10px",
});

export const ChapterSubText = styled("div")({
  color: "#223548",
  fontSize: "14px",
  fontWeight: "400",
  fontFamily: "Open Sans",
  marginTop: "10px",
});

export const UnOrderList = styled("ol")({
  margin: "20px",
  paddingRight: "2.5rem",
});
export const WhyFocusHeading = styled("div")({
  fontFamily: "Open Sans",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#1A2733",
  paddingTop: "24px",
});
export const WhyFocusSubHeading = styled("div")({
  color: "#1A2733",
  fontSize: "14px",
  fontWeight: "400",
  fontFamily: "Open Sans",
  lineHeight: "24px",
  padding: "24px",
});
export const ImgContainer = styled("div")({
  textAlign: "center",
  padding: "40px",
});
export const ReportContainer = styled("div")({
  padding: "40px 0px 20px 0px",
});
export const HeaderContainer = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});
