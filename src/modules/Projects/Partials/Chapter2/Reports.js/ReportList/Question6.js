import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import ExistingVegetation from "../../../../../../assets/Icons/Chapter2/Vegetation/ExistingVegetation";
import { CustomDivider } from "../../../Reports/Styles";
import { ReportHeadingText, ReportImage } from "../../StyleComponent";

function Question6({ questionData = [] }) {
  const questionValue = ["Yes"];
  const selectedQuestion = questionData.options?.[0]?.option || "";

  return (
    <>
      {selectedQuestion === questionValue[0] && (
        <>
          <div style={{ padding: "20px" }}>
            <ReportHeadingText variant="h4" gutterBottom>
              Existing Vegetation
            </ReportHeadingText>
            <Typography paragraph>
              The existing Green cover of the site can be retained, considering
              the requirement of the toilet and demand of the context. The
              following aspects can be considered while retaining the existing
              vegetation:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="1.Look into the nature of existing vegetation and its numbers ( such as trees, plants,
climbers, shrubs and so on)"
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="2.Recognize the water demand for each plant." />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="3.Assess the condition of the existing vegetation for the purpose of retaining: Healthy,
needs maintenance, rotting."
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="4.Identify the ground coverage of the vegetation." />
              </ListItem>
              <ReportImage>
                <ExistingVegetation />
              </ReportImage>
            </List>
          </div>
          <CustomDivider />
        </>
      )}
    </>
  );
}

export default Question6;
