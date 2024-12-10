import AddIcon from "@mui/icons-material/Add";
import { CircularProgress, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/index";
import Header from "../../components/Header/index";
import ResponsiveDrawer from "../../components/Navbar/SideBar";
import NoDataindex from "../../components/NoData/index";
import {
  ButtonTop,
  LoaderStyle,
  NodataContainer,
} from "../../modules/Projects/Styles";
import {
  createProject,
  getProjectUsers,
} from "../../redux/Actions/ProjectsAction";
import CreateProjectModal from "../Projects/Partials/CreateProject/CreateModal";
import CreateCard from "../Projects/Partials/CreateProjectCard/CreateCard";

function ProjectsIndex() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectTitle, setProjectTitle] = useState(null);
  const [projectTitles, setProjectTitles] = useState([]);
  const [openCard, setOpenCard] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [user, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getCreateUser();
  }, []);

  const getCreateUser = async () => {
    setLoading(true);
    let ProjectData = await dispatch(getProjectUsers());
    if (ProjectData?.data?.success) {
      setUser(ProjectData);
      setLoading(false);
    } else {
      navigate("/auth");
    }
  };

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProject = async (title) => {
    setLoading(true);
    const userId = user?.data?.data[0]?.userId;
    const payload = {
      title: title,
      userId: userId,
    };
    let response = await dispatch(createProject(payload));
    if (response?.data?.code === 401) {
      navigate("/auth");
      return;
    }
    if (response?.data?.success) {
      setProjectTitles([...projectTitles, title]);
      let ProjectData = await dispatch(getProjectUsers());
      setUser(ProjectData);
      setLoading(false);
    }
    setIsModalOpen(false);
  };

  const handleOpen = (title, id) => {
    setOpenCard(true);
    setShowBackButton(true);
    navigate(`/projects/chapter-card/${encodeURIComponent(title)}/${id}`);
  };

  return (
    <div>
      {isLoading ? (
        <LoaderStyle>
          <CircularProgress style={{ color: "#F49600" }} />
        </LoaderStyle>
      ) : (
        <>
          {user?.data?.data?.length === 0 ? (
            <>
              <Grid container spacing={2}>
                <Grid item xs={2} md={2} lg={2} xl={1.5} sm={2}>
                  <Header title="Your Projects" />
                </Grid>
                <Grid item xs={10} md={10} lg={10} xl={10.5} sm={10}>
                  <Divider sx={{ width: "100%", my: 2 }} />
                </Grid>
              </Grid>

              <NodataContainer>
                <NoDataindex />
                <ButtonTop>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleCreate}
                    text="Create Project"
                  />
                </ButtonTop>
              </NodataContainer>
            </>
          ) : (
            <>
              <Grid container spacing={2}>
                <Grid item xs={4} md={2} lg={2} xl={2} sm={4}>
                  <Header title="Your Projects" />
                </Grid>
                <Grid item xs={4} md={8} lg={8} xl={8} sm={4}>
                  <Divider sx={{ width: "100%", my: 2 }} />
                </Grid>
                <Grid
                  item
                  xs={4}
                  md={2}
                  lg={2}
                  xl={2}
                  sm={4}
                  container
                  justifyContent="flex-end"
                >
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={handleCreate}
                    text="Create Project"
                  />
                </Grid>
              </Grid>
              <div style={{ marginTop: "35px" }}>
                <CreateCard
                  projectTitle={projectTitle}
                  projectTitles={projectTitles}
                  handleOpen={handleOpen}
                  user={user?.data?.data}
                  setUser={setUser}
                />
              </div>
            </>
          )}

          <CreateProjectModal
            open={isModalOpen}
            onClose={handleCloseModal}
            onSave={handleSaveProject}
          />

          {showBackButton && (
            <ResponsiveDrawer showBackButton={showBackButton} />
          )}
        </>
      )}
    </div>
  );
}

export default ProjectsIndex;
