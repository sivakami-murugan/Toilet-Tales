import { Box, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BoxItem,
  CancelButton,
  CreateButton,
  CustomProjTextField,
  ProjectTitle,
  TitleTypography
} from "../../Styles";

function CreateProjectModal({ open, onClose, onSave }) {
  const [projectTitle, setProjectTitle] = useState("");

  useEffect(() => {
    if (open) {
      setProjectTitle("");
    }
  }, [open]);

  const handleSave = () => {
    onSave(projectTitle);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <BoxItem>
        <ProjectTitle>Create Project</ProjectTitle>
        <TitleTypography variant="body1" sx={{ mt: 2 }}>
          Title
        </TitleTypography>
        <CustomProjTextField
          fullWidth
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          margin="normal"
        />
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <CancelButton onClick={onClose} sx={{ mr: 2 }}>
            Cancel
          </CancelButton>
          <CreateButton
            variant="contained"
            onClick={handleSave}
            color="primary"
          >
            Create
          </CreateButton>
        </Box>
      </BoxItem>
    </Modal>
  );
}

export default CreateProjectModal;
