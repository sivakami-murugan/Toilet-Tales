import { Card, CardContent, Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import NotesIcon from "../../../../assets/Icons/NotesIcon";
import Header from "../../../../components/Header/index";
import {
  geChapterType,
  geChapterUsers,
  getChapterFiveQuestion,
  getChapterLevelData,
  getChapterThreeData,
  getChapterThreePreviousData,
  getReportData,
} from "../../../../redux/Actions/ProjectsAction";
import RunModalThree from "../../Chapter3/RunModalThree";
import RunModalFour from "../../Chapter4/RunModalFour";
import RunModalFive from "../../Chapter5/RunModalFive";
import {
  BottomContainer,
  ChapterBoxContainer,
  ChapterBoxFlex,
  ChapterCartTitle,
  CreateButton,
  DotsIcon,
  SubChapterCartTitle,
} from "../../Styles";
import ChapterOneModal from "../Chapter1/RunModal";
import ChapterTwoModal from "../Chapter2/RunModal";
// import { getChapterLevelData } from "../../../../redux/Actions/ProjectsAction";
const StatusText = styled.div`
  color: ${(props) => (props.status ? "#36A41D" : "#FF5C77")};
  margin-top: 8px;
  font-size: 11px;
  font-weight: 400;
  font-family: "open sans";
`;

const ChapterCards = ({ }) => {
  const { projectTitle, id } = useParams();
  const [openSubIndex, setOpenSubIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [chapterItemData, setChapterItemData] = useState([]);
  const [typeCategoryData, setTypeCategoryData] = useState([]);
  const [firstCardCompleted, setFirstCardCompleted] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState({
    typeName: "Transit Area",
  });
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [previousData, setPreviousData] = useState(null);
  const [viewButton, setViewButton] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const decodedTitle = decodeURIComponent(projectTitle);
  const [questionList, setQuestionList] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [leveluser, setLevelUser] = useState(null);
  const [reportAnswer, setReportAnswer] = useState(null);
  useEffect(() => {
    if (id) {
      getChapterData();
    }
  }, [id]);
  const yesOptions = questionList[2]?.options?.filter(
    (item) => item.option === "Yes"
  );
  console.log(selectedProject, "selectedChapter");

  //GET Call
  const getChapterThreeItem = async (chapterId) => {
    const chapterItem = await dispatch(getChapterThreeData(chapterId));
    setTypeCategoryData(chapterItem);

    if (chapterItem?.data?.code === 401) {
      navigate("/auth");
      return;
    }
  };

  const getChapterFiveItem = async ({ chapterId }) => {
    try {
      const response = await dispatch(getChapterFiveQuestion({ chapterId }));
      if (response?.data?.code === 401) {
        navigate("/auth");
        return null;
      }
      return response.data;
    } catch (error) {
      console.error("Error fetching Chapter 5 item:", error);
      return null;
    }
  };

  const getPreviousQuestionData = async (projectId) => {
    let previousGetData = await dispatch(
      getChapterThreePreviousData({ projectId })
    );

    if (previousGetData?.data?.code === 401) {
      navigate("/auth");
      return;
    }

    return previousGetData;
  };
  const getChapterCategoryData = async (chapterId) => {
    const chapterCategoryData = await dispatch(geChapterType(chapterId));

    if (chapterCategoryData?.data?.code === 401) {
      navigate("/auth");
      return;
    }
    setTypeCategoryData(chapterCategoryData);
  };

  const getAllReportAnswer = async (projectId) => {
    const result = await dispatch(getReportData(projectId));
    return result?.data;
  };

  const getChapterData = async (projectId) => {
    try {
      const chapterData = await dispatch(geChapterUsers(id, projectId));

      if (chapterData?.response?.data?.code === 401) {
        navigate("/auth");
        return;
      }

      const formattedData = chapterData?.data?.data?.map((chapter) => ({
        ...chapter,
        icon: <NotesIcon />,
        completed: chapter.status,
      }));

      setChapterItemData(formattedData);
    } catch (error) {
      console.error("Error fetching chapter data:", error);
    }
  };

  const handleGenerateReport = (projectId) => {
    if (projectId) {
      const updatedProjectData = chapterItemData?.map((proj) =>
        proj.chapterNumber === "Chapter 2"
          ? { ...proj, completed: true, status: true }
          : proj
      );
      setChapterItemData(updatedProjectData);
      setModalOpen(false);
    } else {
      const updatedProjectData = chapterItemData?.map((proj) =>
        proj.chapterNumber === "Chapter 1"
          ? { ...proj, completed: true, status: true }
          : proj
      );
      setChapterItemData(updatedProjectData);
      setModalOpen(false);
    }
  };

  const handleSubDotsClick = (index) => {
    setOpenSubIndex(index === openSubIndex ? null : index);
  };

  const handleRunClick = async (project) => {
    setSelectedProject(project);
    setModalOpen(true);

    try {
      let chapterFiveData = null;
      let chapterThreeData = null;

      if (project?.chapterNumber?.toLowerCase() === "chapter 5") {
        chapterFiveData = await getChapterFiveItem({ chapterId: project.id });
      } else if (project?.chapterNumber?.toLowerCase() === "chapter 3") {
        chapterThreeData = await getChapterThreeItem(project.id);
      } else {
        await getChapterCategoryData(project.id);
      }

      setSelectedProject((prev) => ({
        ...prev,
        chapterFiveData,
        chapterThreeData,
      }));

      // await getChapterCategoryData(project.id);
    } catch (error) {
      console.error("Error fetching chapter data:", error);
    }
  };

  const handleModalClose = async (completedProject) => {
    setModalOpen(false);

    if (completedProject) {
      const updatedProjectData = chapterItemData?.map((proj) =>
        proj.id === completedProject.id
          ? { ...proj, completed: true, statusInfo: true }
          : proj
      );
      setChapterItemData(updatedProjectData);
      if (!firstCardCompleted && updatedProjectData[0]?.completed) {
        setFirstCardCompleted(true);
      }
      await getChapterData();
    }
    setSelectedProject(null);
  };




  const handleViewClick = async (project, chapter, title) => {
    const chapterNumberParts = project?.chapterNumber?.trim()?.split(" ") || [];
    let previousData = null;
    let getData = null;
    if (chapterNumberParts[1] == "3") {
      previousData = await getPreviousQuestionData(id);
      getData = previousData?.data || null;
    }

    const viewData = await dispatch(
      getChapterLevelData({ projectId: id, chapterId: project.id })
    );
    const viewReportData = viewData?.data?.data;

    const reportAnswer = await getAllReportAnswer(id);

    const dataToSend = {
      updateData: updateData,
      selectedChapter: viewData?.data?.data?.toiletTypeId,
      chapterCardsData,
      selectedSubCategory,
      viewReportData,
      reportAnswer,
      project: {
        id: id,
        chapterId: chapter?.id,
        chapterName: chapter?.chapterName,
        chapterNumber: chapter?.chapterNumber,
        completed: chapter?.completed || false,
        statusInfo: chapter?.status,
      },
    };
    const dataToSendChapterFive = {
      updateData,
      selectedChapter: selectedChapter?.typeName || "defaultTypeName",
      chapterCardsData,
      selectedSubCategory,
      project: {
        id: project?.id || "defaultProjectId",
        chapterId: chapter?.id || "defaultChapterId",
        chapterName: chapter?.chapterName || "defaultChapterName",
        chapterNumber: chapter?.chapterNumber || "defaultChapterNumber",
        completed: chapter?.completed || false,
        statusInfo: chapter?.status || "defaultStatus",
        name: project?.name || "defaultProjectName",
        status: project?.status || "defaultProjectStatus",
      },
      getData,
    };

    const dataSendChapter = {
      updateData,
      getData,
      viewReportData,
      selectedSubCategory,
      selectedChapter: viewData?.data?.data?.toiletTypeId,
      reportAnswer,
      project: {
        id: id,
        chapterId: chapter?.id,
        chapterName: chapter?.chapterName,
        chapterNumber: chapter?.chapterNumber,
        completed: chapter?.completed || false,
        statusInfo: chapter?.status,
      },
    };

    const dataSendChapterFour = {
      updateData,
      getData,
      selectedChapter: viewData?.data?.data?.toiletTypeId,
      viewReportData,
      selectType: leveluser?.data?.data,
      reportAnswer,
      project: {
        id: project?.id || "defaultProjectId",
        name: project?.name || "defaultProjectName",
        status: project?.status || "defaultProjectStatus",
      },
    };
    if (chapterNumberParts?.length > 1 && chapterNumberParts[1] == "3") {
      navigate(`/projects/reports-page/${decodedTitle}/${project?.id}`, {
        state: JSON.parse(JSON.stringify(dataSendChapter, reportAnswer)),
      });
    } else if (chapterNumberParts[1] == "4") {
      navigate(`/projects/reports-four-page/${decodedTitle}`, {
        state: dataSendChapterFour,
        reportAnswer,
      });
    } else if (chapterNumberParts[1] == "5") {
      navigate(`/projects/reports-five-page/${id}/${decodedTitle}`, {
        state: dataToSendChapterFive,
      });
    } else if (chapterNumberParts?.length > 1 && chapterNumberParts[1] == "2") {
      navigate(`/projects/reports/${decodedTitle}/${project?.id}`, {
        state: { ...dataToSend, reportAnswer, selectedChapter: "Chapter 2" },
      });
    } else {
      navigate(`/projects/reports/${decodedTitle}/${project?.id}`, {
        state: dataToSend,
        reportAnswer,
      });
    }
  };

  const shouldShowRunButton = (index) => {
    if (index === 0) return true;
    return chapterItemData[index - 1]?.completed;
  };

  const showDynamicChapters = (chapter) => {
    let chapterNumber = chapter?.split(" ")?.[1];
    if (chapterNumber == "1") {
      return (
        <ChapterOneModal
          open={modalOpen}
          onClose={handleModalClose}
          project={selectedProject}
          typeCategoryData={typeCategoryData}
          chapterItemData={chapterItemData}
          chapterNumber={selectedProject?.chapterNumber}
          chapterId={selectedProject?.id}
          projectId={id}
          projectTitle={projectTitle}
          updateData={updateData}
          setUpdateData={setUpdateData}
          selectedChapter={selectedChapter}
          setSelectedChapter={setSelectedChapter}
          handleGenerateReport={handleGenerateReport}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
          setLevelUser={setLevelUser}
          leveluser={leveluser}
        />
      );
    } else if (chapterNumber == "2") {
      return (
        <ChapterTwoModal
          open={modalOpen}
          onClose={handleModalClose}
          project={selectedProject}
          typeCategoryData={typeCategoryData}
          chapterItemData={chapterItemData}
          chapterNumber={selectedProject?.chapterNumber}
          chapterId={selectedProject?.id}
          projectId={id}
          projectTitle={projectTitle}
          updateData={updateData}
          setUpdateData={setUpdateData}
          selectedChapter={selectedChapter}
          setSelectedChapter={setSelectedChapter}
          handleGenerateReport={handleGenerateReport}
          questionList={questionList}
          setQuestionList={setQuestionList}
        />
      );
    } else if (chapterNumber === "3") {
      return (
        <RunModalThree
          open={modalOpen}
          // onClose={() => handleModalClose(selectedProject)}
          onClose={handleModalClose}
          project={selectedProject}
          typeCategoryData={typeCategoryData}
          projectId={id}
          chapterId={selectedProject?.id}
          projectTitle={projectTitle}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          previousData={previousData}
          setPreviousData={setPreviousData}
          getPreviousQuestionData={getPreviousQuestionData}
          yesOptions={yesOptions}
          setBacksData={questionList[2]?.options[0]?.option}
        />
      );
    } else if (chapterNumber === "4") {
      return (
        <RunModalFour
          open={modalOpen}
          onClose={handleModalClose}
          project={selectedProject}
          setViewButton={setViewButton}
          projectId={id}
          chapterId={selectedProject?.id}

        />
      );
    } else if (chapterNumber === "5") {
      return (
        <RunModalFive
          open={modalOpen}
          onClose={() => handleModalClose(selectedProject)}
          project={selectedProject}
          setViewButton={setViewButton}
          previousData={previousData}
          setPreviousData={setPreviousData}
          chapterId={selectedProject?.id}
          projectId={id}
          chapterFiveData={selectedProject.chapterFiveData}
        // getChapterFiveItem={getChapterFiveItem}
        />
      );
    }
  };
  const typeCategoryDatas = Array.isArray(typeCategoryData?.data?.data)
    ? typeCategoryData.data.data
    : [];
  const chapterCardsData = typeCategoryDatas?.map((item) => {
    return {
      chapterName: item.chapterName,
      typeName: item.typeName,
      toiletCategories: item.toiletCategoryDTOS?.map((category) => {
        return {
          categoryName: category.name,
        };
      }),
    };
  });

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4} md={2} lg={2} xl={2} sm={4}>
          <Header title={decodeURIComponent(projectTitle)} />
        </Grid>
        <Grid item xs={4} md={8} lg={8} xl={10} sm={4}>
          <Divider sx={{ width: "100%", my: 2 }} />
        </Grid>
      </Grid>
      <div style={{ marginTop: "35px" }}>
        <Grid container spacing={2}>
          {chapterItemData?.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <CardContent
                  style={{
                    flex: "1 0 auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <ChapterBoxFlex>
                    <ChapterBoxContainer>
                      <ChapterCartTitle>{project.chapterName}</ChapterCartTitle>
                      {project.icon}
                    </ChapterBoxContainer>
                    <SubChapterCartTitle>
                      {project.chapterNumber}
                    </SubChapterCartTitle>
                    <StatusText status={project.completed || viewButton}>
                      {project.completed || viewButton
                        ? "Completed"
                        : "Incomplete"}
                    </StatusText>
                  </ChapterBoxFlex>
                </CardContent>
                <BottomContainer>
                  <DotsIcon onClick={() => handleSubDotsClick(index)}>
                    {/* <ThreeDotsIcon /> */}
                  </DotsIcon>
                  <div>
                    {shouldShowRunButton(index) && (
                      <CreateButton
                        variant="contained"
                        color="primary"
                        onClick={() =>
                          project.completed || viewButton
                            ? handleViewClick(project)
                            : handleRunClick(project)
                        }
                      >
                        {project.completed || viewButton ? "View" : "Run"}
                      </CreateButton>
                    )}
                  </div>
                </BottomContainer>
              </Card>
            </Grid>
          ))}
        </Grid>
        {showDynamicChapters(selectedProject?.chapterNumber)}
      </div>
    </div>
  );
};

export default ChapterCards;
