import React from "react";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#F5F6F7",
    borderRadiun: "10px !important",
  },
}));

const IconCard = ({ icon: Icon, text, onClick, color, iconSize, textSize }) => {
  return (
    <CardContainer onClick={onClick}>
      <IconButton sx={{ fontSize: iconSize }}>
        <Icon style={{ color: color }} fontSize="inherit" />
      </IconButton>
      <Typography variant="body1" style={{ color: color, fontSize: textSize }}>
        {text}
      </Typography>
    </CardContainer>
  );
};

export default IconCard;
