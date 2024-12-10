import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ThreeDotsIcon } from "../../../../assets/Icons/ThreeDotsIcon";
import {
  deleteProjectCard,
  getProjectUsers,
} from "../../../../redux/Actions/ProjectsAction";
import CommonSnackbar from "../../../../utils/SnackbarMessage";
import {
  BottomContainer,
  CardTitle,
  CreateButton,
  DateText,
  DotsIcon,
} from "../../Styles";
import DownloadIconIndex from "../DownloadKit";

const CreateCard = ({ handleOpen, user, setUser }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // Default severity
  const dispatch = useDispatch();

  const handleDotsClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const handleDelete = async (projectId) => {
    const result = await dispatch(deleteProjectCard(projectId));
    if (result?.status === 200) {
      let ProjectData = await dispatch(getProjectUsers());
      setUser(ProjectData);
      setOpenIndex(null);
      setSnackbarMessage("Project successfully deleted.");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage("Failed to delete project. Please try again.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container spacing={2}>
      {user?.map((project, index) => (
        <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                flex: "1 0 auto",
              }}
            >
              <CardTitle>{project.title}</CardTitle>
              <DateText>{project.createdDate}</DateText>
            </CardContent>
            <BottomContainer>
              <DotsIcon onClick={() => handleDotsClick(index)}>
                <ThreeDotsIcon />
              </DotsIcon>
              <div>
                <CreateButton
                  variant="contained"
                  onClick={() => handleOpen(project?.title, project?.id)}
                  color="primary"
                >
                  Open
                </CreateButton>
              </div>
            </BottomContainer>
          </Card>
          <div>
            {openIndex === index && (
              <DownloadIconIndex
                projectId={project?.id}
                onDelete={handleDelete}
              />
            )}
          </div>
        </Grid>
      ))}

      <CommonSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </Grid>
  );
};
export default CreateCard;
