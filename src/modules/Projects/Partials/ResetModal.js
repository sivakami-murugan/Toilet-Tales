import { IconButton, Modal } from "@mui/material";
import React from "react";
import CloseIcon from "../../../assets/Icons/CloseIcon";
import ResetImg from "../../../assets/Icons/ResetImg";
import {
  ActionBoxContainer,
  ChapterSubText,
  CreateButton,
  RunModalBox,
  StyledButton,
  WarningSubText,
  WarningText,
} from "../Styles";

const ResetModal = ({ isOpen, handleClose, handleConfirm }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <RunModalBox>
        <IconButton
          onClick={handleClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <div style={{ textAlign: "center" }}>
          <div>
            <ResetImg />
          </div>
          <WarningText>Warning</WarningText>
          <WarningSubText>Do you want to reset Chapter 1</WarningSubText>
          <ChapterSubText>
            Note : As all chapters are interconnected you will be resetting
            <span style={{ fontWeight: "700" }}>Chapters 1,2,3,4,5 and 6</span>
          </ChapterSubText>
        </div>
        <ActionBoxContainer>
          <StyledButton>Cancel</StyledButton>
          <CreateButton onClick={handleConfirm}>Reset</CreateButton>
        </ActionBoxContainer>
      </RunModalBox>
    </Modal>
  );
};

export default ResetModal;
