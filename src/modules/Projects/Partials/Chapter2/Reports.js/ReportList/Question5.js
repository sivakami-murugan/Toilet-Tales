import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import ExistingBuilt from "../../../../../../assets/Icons/Chapter2/Existing/ExistingBuilt";
import ExistingSiteServices from "../../../../../../assets/Icons/Chapter2/Existing/ExistingSiteServices";
import { CustomDivider } from "../../../Reports/Styles";
import { ReportHeadingText, ReportImage } from "../../StyleComponent";

function Question5({ questionData = [] }) {
  const questionValue = ["Yes"];
  const selectedQuestion = questionData.options?.[0]?.option || "";

  return (
    <>
      {selectedQuestion === questionValue[0] && (
        <>
          <div>
            <div style={{ padding: "20px" }}>
              <ReportHeadingText variant="h4" gutterBottom>
                Existing site services
              </ReportHeadingText>
              <Typography paragraph>
                The assessment is aimed at mapping the existing infrastructure
                (location, capacity to handle demand, level of service, etc.) so
                that the gaps could be identified as well as new infrastructure
                can be suitably planned.
              </Typography>
              <Typography paragraph>
                The placement of a toilet block on a site can be influenced by
                the spatial allocation of existing infrastructure, ensuring it's
                connected to all necessary services. Access to water supply,
                electricity, and a functional sewerage and drainage network is
                essential. A reliable wastewater disposal system and waste
                collection services are also essential for effective sanitation
                management.
              </Typography>
              <ReportImage>
                <ExistingSiteServices />
              </ReportImage>
            </div>
            <div>
              <ReportHeadingText variant="h4" gutterBottom>
                Existing built
              </ReportHeadingText>
              <Typography paragraph>
                If left untreated, the spaces around toilet usually turn into
                dumpyards and spaces for antisocial behavior. Thus, the toilets
                become an unsafe place for its users. Having secondary functions
                in toilet spaces can make public toilet safer and more
                inclusive. Secondary functions include shops, food stalls, book
                stalls, so on based on the contextual influence.
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="1. As per space availability, Secondary functions shall be incorporated in the setbacks to make it
more safer and inclusive. Another activity shall prevent vandalism and provide surveillance to
the toilet."
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="2. Type of functions may vary as per the context of the toilet.
Please refer chapter 1 contextual functions for details"
                  />
                </ListItem>

                <ReportImage>
                  <ExistingBuilt />
                </ReportImage>
              </List>
            </div>
          </div>
          <CustomDivider />
        </>
      )}
    </>
  );
}

export default Question5;
