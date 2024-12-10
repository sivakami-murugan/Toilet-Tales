import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import TreatingSetBacks3 from "../../../../../../assets/Icons/Chapter2/SetBacks/TreatingSetBacks3";
import TreatingSetBacks4 from "../../../../../../assets/Icons/Chapter2/SetBacks/TreatingSetBacks4";
import TreatingSetBacks7 from "../../../../../../assets/Icons/Chapter2/SetBacks/TreatingSetBacks7";
import TreatingSetBacks9 from "../../../../../../assets/Icons/Chapter2/SetBacks/TreatingSetBacks9";
import { CustomDivider, PlinthImgContainer } from "../../../Reports/Styles";
import { ReportHeadingText, ReportImage } from "../../StyleComponent";

function Question3({ questionData = [] }) {
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
              Set Backs
            </ReportHeadingText>
            <Typography paragraph style={{ fontFamily: "Open Sans" }}>
              Setbacks ensure enough space surrounding the building. Is there a
              setback space surrounding the toilet block? If so, what is going
              on in that space? Will the rear side be turned into a dump? How is
              the front yard treated?
            </Typography>
            <Typography paragraph style={{ fontFamily: "Open Sans" }}>
              Toilets are frequently open to the street or positioned on a
              pedestrian path with no setbacks. In the case of a setback, it
              often ends up as a dumping ground for both users and individuals
              living nearby. It soon becomes a gathering place for drunkards to
              drink and gamble. How can a designer deal with setbacks without
              sacrificing the users' privacy?
            </Typography>
            <List style={{ fontFamily: "Open Sans" }}>
              <ListItem>
                <ListItemText primary="1. Set back is the minimum distance which a building (in this case - toilet) or other structure must be set back from a street or road or other building." />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. Set back must be provided as per building guidelines. Providing appropriate space around the toilet wherever possible and ensuring that it is treated carefully." />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. For up to 7 m building height and up to 9 m road width, a front set back of 1.5 m, side set back of 1 m on either side must be provided." />
              </ListItem>
              <ListItem>
                <ListItemText primary="4. Any toilet block less than 9 m in height must have a front set back of 1.5 m from the approach road." />
              </ListItem>
              {/* <div style={{ textAlign: "center", padding: "40px 0px" }}>
                <TreatingSetBacks3 />
              </div> */}
              <PlinthImgContainer>
                <TreatingSetBacks3 />
              </PlinthImgContainer>
            </List>
          </div>
          <div style={{ padding: "20px" }}>
            <ReportHeadingText variant="h4" gutterBottom>
              Treating Set Backs
            </ReportHeadingText>

            <List>
              <ListItem>
                <ListItemText primary="1. The designer may choose to leave setbacks around the toilet block if space allows." />
              </ListItem>
              <ListItem>
                <ListItemText primary="2. In such cases, all setbacks must be appropriately treated to avoid waste dumping and the formation of negative space." />
              </ListItem>
              <ListItem>
                <ListItemText primary="3. By allocating additional functions or landscaping to the front space, it shall be used as a transition space." />
              </ListItem>

              <div style={{ textAlign: "center" }}>
                <TreatingSetBacks4 />
              </div>

              <ListItem>
                <ListItemText primary="4. The toilet can be designed so that there is access to it from side setbacks. For example, men's cubicle opens to the side, whilst other blocks open to the front." />
              </ListItem>
              <ListItem>
                <ListItemText primary="5. Rear setbacks must be well-managed with sufficient lighting and may be used for water recycling or gardening." />
              </ListItem>

              <div style={{ textAlign: "center" }}>
                <TreatingSetBacks7 />
              </div>
              <ListItem>
                <ListItemText primary="6. The designer must devise options to ensure that no space is misused or abandoned." />
              </ListItem>
              <ListItem>
                <ListItemText primary="7. Toilets must not be opened directly into streets." />
              </ListItem>
              <ReportImage>
                <TreatingSetBacks9 />
              </ReportImage>
            </List>
          </div>
          <CustomDivider />
        </>
      )}
      {selectedQuestion === questionValue[1] && ""}
    </>
  );
}

export default Question3;
