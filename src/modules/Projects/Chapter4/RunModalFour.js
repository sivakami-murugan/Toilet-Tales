import { IconButton, Modal } from "@mui/material";
import React from "react";
import CloseIcon from "../../../assets/Icons/CloseIcon";
import { BoxModal } from "../Chapter3/Styles";
import NoQuestion from "./NoQuestion";

function RunModalFour({ open, onClose, setViewButton, projectId, chapterId }) {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <BoxModal>
          <IconButton onClick={onClose} sx={{ position: "absolute", top: 8, right: 8 }}>
            <CloseIcon />
          </IconButton>
          <NoQuestion
            onClose={onClose}
            setViewButton={setViewButton}
            projectId={projectId}
            chapterId={chapterId}
          />
        </BoxModal>
      </Modal>
    </div>
  );
}

export default RunModalFour;
