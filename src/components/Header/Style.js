import { styled } from "@mui/system";

export const HeaderText = styled("div")({
  color: "#223548",
  fontSize: "18px",
  fontWeight: "700",
  fontFamily: "Open Sans",
  "@media only screen and (max-width: 600px)": {
    fontSize: "14px",
    fontWeight: "700",
    color: "#223548",
  },
});

export const NoDataText = styled("div")({
  color: "#223548",
  fontSize: "15px",
  fontWeight: "600",
  paddingTop: "25px",
});
export const StickyHeader = styled("div")({
  position: "sticky",
  top: "65px",
  background: "#FFF",
  zIndex: "1000"
});