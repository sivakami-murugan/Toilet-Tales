import DownloadIcon from "@mui/icons-material/Download";
import { Divider, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../../../components/Button";
import Header from "../../../../components/Header";
import { StickyHeader } from "../../../../components/Header/Style";
import {
  getChapterFiveReportData,
  getCommonReportData,
} from "../../../../redux/Actions/ProjectsAction";
import { CustomDivider, ReportsContainer } from "../../Partials/Reports/Styles";
import { HeaderContainer, WhyFocusHeading, WhyFocusSubHeading } from "../../Styles";
import AccessRamps from "./Category/AccessRamps";
import Corridor from "./Category/Corridor";
import Dispenser from "./Category/Dispenser";
import Dustbin from "./Category/Dustbin";
import EntranceDoor from "./Category/EntranceDoor";
import EuropeanWaterCommode from "./Category/EuropeanWaterCommode";
import FlushTanks from "./Category/FlushTanks";
import GrabRailsforRamps from "./Category/GrabRailsforRamps";
import Instructions from "./Category/Instructions";
import InternalGrabRails from "./Category/InternalGrabRails";
import Mirror from "./Category/Mirror";
import NumberofUniversallyAccessibleCubicles from "./Category/NumberofUniversallyAccessibleCubicles";
import Shower from "./Category/Shower";
import SoapDispenser from "./Category/SoapDispenser";
import Steps from "./Category/Steps";
import ToiletFiveArea from "./Category/ToiletFiveArea";
import TowelRing from "./Category/TowelRing";
import UniversallyAccessibleCubicle from "./Category/UniversallyAccessibleCubicle";
import Urinal from "./Category/Urinal";
import WaitareaLobby from "./Category/WaitareaLobby";
import WallHooks from "./Category/WallHooks";
import Washbasin from "./Category/Washbasin";
import WaterFaucet from "./Category/WaterFaucet";

function ReportFiveIndex() {
  const { title, projectId } = useParams();
  const projectTitle = decodeURIComponent(title);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reportData, setReportData] = useState([]);
  const [commonReportData, setCommonReportData] = useState(null);

  const handlePrint = () => {
    window.print();
  };


  useEffect(() => {
    const fetchReportItems = async () => {
      try {
        const response = await dispatch(
          getChapterFiveReportData({ projectId })
        );

        if (response?.data?.code === 401) {
          navigate("/auth");
        } else if (Array.isArray(response.data.data)) {
          setReportData(response.data.data);
        } else {
          console.error("Unexpected data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching Chapter 5 item:", error);
      }
    };

    fetchReportItems();
  }, [dispatch, projectId, navigate]);

  useEffect(() => {
    const commonReportItems = async () => {
      try {
        const response = await dispatch(getCommonReportData({ projectId }));
        console.log("API Response:", response);

        if (response?.data?.code === 401) {
          navigate("/auth");
          return;
        }

        const data = response?.data?.data;

        if (data && typeof data === "object") {
          setCommonReportData(data);
        } else if (Array.isArray(data) && data.length > 0) {
          setCommonReportData(data[0]);
        } else {
          console.error(
            "Unexpected data format or empty array:",
            response?.data
          );
        }
      } catch (error) {
        console.error("Error fetching common report data:", error);
      }
    };

    commonReportItems();
  }, [dispatch, projectId, navigate]);


  return (
    <div>
      <StickyHeader>
        <HeaderContainer container spacing={2} className="drawer-container">
          <Grid item xs={4} md={2} lg={2} xl={2} sm={4}>
            <Header title={projectTitle} />
          </Grid>
          <Grid item xs={4} md={8} lg={8} xl={8} sm={4}>
            <Divider />
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
      <ReportsContainer id="chapter5-report">
        <ToiletFiveArea commonReportData={commonReportData} />
        <CustomDivider />
        {reportData.map((item) => (
          <div key={item.id}>
            <WhyFocusHeading style={{ color: "#223548" }}>
              {item.questionNo}: {item.question}
            </WhyFocusHeading>
            <WhyFocusSubHeading> {item.value}</WhyFocusSubHeading>
          </div>
        ))}
        <CustomDivider />
        <AccessRamps />
        <CustomDivider />
        <Steps />
        <CustomDivider />
        <GrabRailsforRamps />
        <CustomDivider />
        <EntranceDoor />
        <CustomDivider />
        <WaitareaLobby commonReportData={commonReportData} />
        <CustomDivider />
        <Corridor />
        <CustomDivider />
        <NumberofUniversallyAccessibleCubicles />
        <CustomDivider />
        <UniversallyAccessibleCubicle />
        <CustomDivider />
        <EuropeanWaterCommode />
        <CustomDivider />
        <Urinal />
        <CustomDivider />
        <FlushTanks />
        <CustomDivider />
        <InternalGrabRails />
        <CustomDivider />
        <Washbasin />
        <CustomDivider />
        <Mirror />
        <CustomDivider />
        <SoapDispenser />
        <CustomDivider />
        <WaterFaucet />
        <CustomDivider />
        <Dispenser />
        <CustomDivider />
        <Shower />
        <CustomDivider />
        <Dustbin />
        <CustomDivider />
        <TowelRing />
        <CustomDivider />
        <WallHooks />
        <CustomDivider />
        <Instructions />
      </ReportsContainer>
      <footer className="print_footer">
        Copyright &copy; Toilet Tales. All rights reserved.
      </footer>
    </div>
  );
}

export default ReportFiveIndex;
