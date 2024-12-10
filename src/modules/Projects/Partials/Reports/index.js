import DownloadIcon from "@mui/icons-material/Download";
import { Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import { StickyHeader } from "../../../../components/Header/Style.js";
import Location from "../../../../components/Reports/Location";
import { getAnswerTwoData } from "../../../../redux/Actions/ProjectsAction.js";
import FootballRelationship from "../../Partials/Reports/Category/FootballRelationship";
import { HeaderContainer } from "../../Styles.js";
import ChpaterTwoReport from "../Chapter2/Reports.js";
import { CustomDivider, ReportsContainer } from "../Reports/Styles";
import AgeSensitivity from "./Category/AgeSensitivity";
import AssignFunctions from "./Category/AssignFunctions";
import FootballAndHygine from "./Category/FootballAndHygine";
import GenderSensitivity from "./Category/GenderSensitivity";
import Position from "./Category/Position";
import SeatAllocation from "./Category/SeatAllocation";
import ToiletArea from "./Category/ToiletArea";

function ReportsIndex() {
  const { title, chapterId } = useParams();
  const { state } = useLocation();
  const {
    updateData,
    selectedChapter,
    project,
    selectedValue,
    proposedBlocks,
  } = state || {};

  const projectTitle = decodeURIComponent(title);
  console.log(projectTitle, "udhai")
  const [questionData, setQuestionData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getChapterAnswer = async () => {
      if (selectedChapter?.includes("2")) {
        const response = await dispatch(
          getAnswerTwoData({ projectId: project.id })
        );
        setQuestionData(response?.data?.data);
      }
    };
    getChapterAnswer();
  }, [dispatch, project.id, selectedChapter]);

  // Function to handle print
  const handlePrint = () => {
    window.print();
  };

  const selectedType = state?.chapterCardsData.find((item) => {
    return item.typeName === updateData?.toiletTypeId;
  });

  const campsiteData =
    selectedType?.toiletCategories[state?.selectedSubCategory]?.categoryName ===
    "Campsite Major events";

  const answerData = state?.reportAnswer?.data;

  return (
    <div>
      <StickyHeader>
        <HeaderContainer container spacing={2} className="drawer-container">
          <Grid item xs={4} md={2} lg={2} xl={2} sm={4}>
            <Header title={projectTitle} />
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
              startIcon={<DownloadIcon />}
              text="Download Kit"
              onClick={handlePrint}
            />
          </Grid>
        </HeaderContainer>
      </StickyHeader>
      {selectedChapter?.includes("2") ? (
        <div id="chapter2-report-content">
          <ChpaterTwoReport
            response={questionData}
            titleData={state?.viewReportData}
            answerData={answerData}
          />
        </div>
      ) : (
        <ReportsContainer id="report-content">
          <ToiletArea
            updateData={updateData}
            subData={state?.chapterCardsData}
            selectData={state?.selectedSubCategory}
            titleData={state?.selectedChapter}
          />
          <CustomDivider />
          <Location updateData={updateData} selectedChapter={selectedChapter} />
          <CustomDivider />

          {state?.viewReportData?.toiletTypeId === "Community Toilets" && (
            <>
              <Position updateData={updateData} />
              <CustomDivider />
            </>
          )}

          {state?.viewReportData?.toiletTypeId !== "Community Toilets" && (
            <>
              <FootballRelationship
                selectedChapter={selectedChapter}
                campsiteData={campsiteData}
              />
              <CustomDivider />
              <SeatAllocation
                updateData={updateData}
                calculateData={state?.viewReportData}
              />
              <CustomDivider />
            </>
          )}

          <FootballAndHygine />
          <CustomDivider />
          <GenderSensitivity />
          <CustomDivider />
          <AgeSensitivity />
          <CustomDivider />
          <AssignFunctions functionData={state?.viewReportData} />
          <CustomDivider sx={{ borderColor: "#1A2733" }} />
        </ReportsContainer>
      )}
    </div>
  );
}

export default ReportsIndex;
