import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const RunModalTwo = ({ open, onClose, project }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Run Project: {project?.chapterName}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Project Status: {project?.status ? "Completed" : "Incomplete"}
        </Typography>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default RunModalTwo;
