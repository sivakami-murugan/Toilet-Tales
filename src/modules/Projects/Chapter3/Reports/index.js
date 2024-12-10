import DownloadIcon from "@mui/icons-material/Download";
import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import { StickyHeader } from "../../../../components/Header/Style";
import { CustomDivider, ReportsContainer } from "../../Partials/Reports/Styles";
import { HeaderContainer } from "../../Styles";
import PlanQuestion10 from "./Category/PlanQuestion10";
import PlanQuestion11 from "./Category/PlanQuestion11";
import PlanQuestion12 from "./Category/PlanQuestion12";
import PlanQuestion13 from "./Category/PlanQuestion13";
import PlanQuestionTwo from "./Category/PlanQuestion2";
import PlanQuestionThree from "./Category/PlanQuestion3";
import PlanQuestion8 from "./Category/PlanQuestion8";
import PlanQuestion9 from "./Category/PlanQuestion9";
import PlanTypeMultiQuestion from "./Category/PlanTypeMultiQuestion";
import PlanType from "./Category/PlanTypeOne";
import PlanTypology from "./Category/PlanTypology";
import ToiletThreeArea from "./Category/ToiletArea";

function ReportThreeIndex() {
  const { title } = useParams();
  const { state } = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const projectTitle = decodeURIComponent(title);
  const typeTitle = state?.selectedChapter?.typeName;
  const reportData = state?.getData?.data;
  const answerData = state?.reportAnswer?.data;
  const handlePrint = () => {
    window.print();
  };
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
      <ReportsContainer id="chapter3-report">
        <ToiletThreeArea typeTitle={typeTitle} answerData={answerData} />
        <CustomDivider />
        <PlanTypology />
        <CustomDivider />
        <PlanType selectedOption={selectedOption} reportData={reportData} />
        <CustomDivider />
        <PlanQuestionTwo />
        <CustomDivider />
        <PlanQuestionThree
          selectChapterData={state?.selectedChapter}
          typeTitle={answerData?.name}
        />
        <CustomDivider />
        <PlanTypeMultiQuestion />
        <CustomDivider />
        <PlanQuestion8 />
        <CustomDivider />
        <PlanQuestion9 reportData={reportData} />
        <CustomDivider />
        <PlanQuestion10 />
        <CustomDivider />
        <PlanQuestion11 reportData={reportData} />
        <CustomDivider />
        <PlanQuestion12 reportData={reportData} />
        <CustomDivider />
        <PlanQuestion13 />
      </ReportsContainer>
    </div>
  );
}

export default ReportThreeIndex;
