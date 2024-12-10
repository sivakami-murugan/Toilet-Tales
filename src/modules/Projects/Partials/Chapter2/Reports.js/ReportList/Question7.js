import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import Landscaping from "../../../../../../assets/Icons/Chapter2/Landscaping/Landscaping";
import { CustomDivider } from "../../../Reports/Styles";
import { ReportHeadingText, ReportImage } from "../../StyleComponent";

function Question7({ questionData = [] }) {
  const questionValue = ["Yes", "No"];
  const selectedQuestion =
    Array.isArray(questionData.options) && questionData.options.length > 0
      ? questionData.options[0].option
      : "";
  return (
    <>
      {selectedQuestion === questionValue[0] && (
        <>
          <div style={{ padding: "20px" }}>
            <ReportHeadingText variant="h4" gutterBottom>
              Landscaping / Hardscaping / Street furniture or other elements
            </ReportHeadingText>
            <Typography paragraph>
              If the space availability in setbacks permits, the following
              aspects can be considered while landscaping:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="1.To avoid waste dumping and the formation of negative space, all setbacks must be properly
treated."
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="2.The front and side setbacks shall be used for landscaping." />
              </ListItem>
              <ListItem>
                <ListItemText primary="3.Trees and plants shall be planted along the street's edge." />
              </ListItem>
              <ListItem>
                <ListItemText primary="4.Seating, lampposts, and other street furniture can be provided." />
              </ListItem>
              <ListItem>
                <ListItemText primary="5.If there is adequate space, open gym equipment may be provided." />
              </ListItem>
              <ListItem>
                <ListItemText primary="6.In community toilets with adequate space, open gyms and play spaces can be included in the setbacks." />
              </ListItem>
              <ListItem>
                <ListItemText primary="7.Vegetable gardening can be done in the setbacks." />
              </ListItem>
              <ListItem>
                <ListItemText primary="8.Rare setbacks must be well-managed with sufficient lighting and may be used for water recycling or gardening." />
              </ListItem>
              <ListItem>
                <ListItemText primary="9.The designer must devise options to ensure that no space is misused or abandoned. The nature of landscaping can differ as per the context of the toilets" />
              </ListItem>
            </List>
          </div>
          <div style={{ padding: "20px" }}>
            <ReportHeadingText variant="h6" gutterBottom>
              Note:
            </ReportHeadingText>
            <List>
              <ListItem>
                <ListItemText primary="1.Native species shall be used for landscaping purposes." />
              </ListItem>
              <ListItem>
                <ListItemText primary="2.Recycled water from the toilet can be used for watering purposes." />
              </ListItem>
              <ReportImage>
                <Landscaping />
              </ReportImage>
            </List>
          </div>
          <CustomDivider />
        </>
      )}
    </>
  );
}

export default Question7;
