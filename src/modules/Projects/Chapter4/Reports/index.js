import DownloadIcon from "@mui/icons-material/Download";
import { Divider, Grid } from "@mui/material";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import { StickyHeader } from "../../../../components/Header/Style";
import { CustomDivider, ReportsContainer } from "../../Partials/Reports/Styles";
import { HeaderContainer } from "../../Styles";
import Advertisements from "./Category/Advertisements";
import DisplayImg from "./Category/DisplayImg";
import Hygine from "./Category/Hygine";
import Instructions from "./Category/Instructions";
import InternalSigns from "./Category/InternalSigns";
import Odour from "./Category/Odour";
import Privacy from "./Category/Privacy";
import Safety from "./Category/Safety";
import ToiletFourArea from "./Category/ToiletFourArea";

function ReportFourIndex() {
  const { title } = useParams();
  const { state } = useLocation();
  const projectTitle = decodeURIComponent(title);
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
      <ReportsContainer id="chapter4-report">
        <ToiletFourArea answerData={answerData} />
        <CustomDivider />
        <InternalSigns answerData={answerData} />
        <CustomDivider />
        <Instructions />
        <CustomDivider />
        <DisplayImg />
        <CustomDivider />
        <Advertisements />
        <CustomDivider />
        <Privacy />
        <CustomDivider />
        <Odour />
        <CustomDivider />
        <Safety />
        <CustomDivider />
        <Hygine />
      </ReportsContainer>
    </div>
  );
}

export default ReportFourIndex;
