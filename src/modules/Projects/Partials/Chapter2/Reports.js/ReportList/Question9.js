import { Typography } from "@mui/material";
import React from "react";
import StreetwidthQuestionA from "../../../../../../assets/Icons/Chapter2/Streetwidth/StreetwidthQuestionA";
import StreetwidthQuestionB from "../../../../../../assets/Icons/Chapter2/Streetwidth/StreetwidthQuestionB";
import StreetwidthQuestionC from "../../../../../../assets/Icons/Chapter2/Streetwidth/StreetwidthQuestionC";
import { ReportHeadingText, ReportImage } from "../../StyleComponent";

function Question9({ questionData = [] }) {
  const questionValue = [
    "12 m and above",
    "6m-12m",
    "3 m or less than 3 m (narrow streets without pedestrian pathways)",
  ];
  const selectedQuestion = questionData.options?.[0]?.option || "";

  return (
    <>
      {selectedQuestion === questionValue[0] && (
        <div style={{ padding: "20px" }}>
          <ReportHeadingText variant="h4" gutterBottom>
            Street width
          </ReportHeadingText>
          <Typography paragraph>
            It is critical to have access to a toilet. Have you ever wondered
            why some toilets are positioned in such a way that they are
            inaccessible, such as at the end of a street where both users and
            vehicles find it difficult to reach?
          </Typography>
          <Typography paragraph>
            Width of the abutting street that is leading to the entrance of the
            toilet. In case the toilet is situated at a junction, the width of
            both the adjoining streets/roads should be taken into consideration.
          </Typography>
          <Typography paragraph fontWeight={600}>
            For street width of 12m and above with a pedestrian walkway, the
            entry into the toilet can be directly through the transition space
            (Refer Designing of public toilets: 4.1 Waiting area/ Lobby)
          </Typography>
          <div style={{ textAlign: "center", padding: "40px 0px" }}>
            <StreetwidthQuestionA />
          </div>
          <Typography paragraph>
            How can we ensure that a public toilet is easily accessible to all?
            Should we stick to the traditional approach of having separate
            entrances for different gender groups? How can we make sure that the
            design is inclusive and meets the specific accessibility needs of
            disabled individuals?
          </Typography>
          <Typography paragraph>
            As per design of the toilet and demand of the context, services must
            be provided.
          </Typography>
        </div>
      )}
      {selectedQuestion === questionValue[1] && (
        <div style={{ padding: "20px" }}>
          <ReportHeadingText variant="h4" gutterBottom>
            Street width
          </ReportHeadingText>
          <Typography paragraph>
            It is critical to have access to a toilet. Have you ever wondered
            why some toilets are positioned in such a way that they are
            inaccessible, such as at the end of a street where both users and
            vehicles find it difficult to reach?
          </Typography>
          <Typography paragraph>
            Width of the abutting street that is leading to the entrance of the
            toilet. In case the toilet is situated at a junction, the width of
            both the adjoining streets/roads should be taken into consideration.
          </Typography>
          <Typography paragraph fontWeight={600}>
            For streets with width between 6m and 12m without a dedicated
            pedestrian path, there shall be an additional transitional buffer
            zone of 3m width outside the toilet to access the entrance
          </Typography>
          <ReportImage>
            <StreetwidthQuestionB />
          </ReportImage>
          <Typography paragraph>
            How can we ensure that a public toilet is easily accessible to all?
            Should we stick to the traditional approach of having separate
            entrances for different gender groups? How can we make sure that the
            design is inclusive and meets the specific accessibility needs of
            disabled individuals?
          </Typography>
          <Typography paragraph>
            As per design of the toilet and demand of the context, services must
            be provided.
          </Typography>
        </div>
      )}
      {selectedQuestion === questionValue[2] && (
        <div style={{ padding: "20px" }}>
          <ReportHeadingText variant="h4" gutterBottom>
            Street width
          </ReportHeadingText>
          <Typography paragraph>
            It is critical to have access to a toilet. Have you ever wondered
            why some toilets are positioned in such a way that they are
            inaccessible, such as at the end of a street where both users and
            vehicles find it difficult to reach?
          </Typography>
          <Typography paragraph>
            Width of the abutting street that is leading to the entrance of the
            toilet. In case the toilet is situated at a junction, the width of
            both the adjoining streets/roads should be taken into consideration.
          </Typography>
          <Typography paragraph fontWeight={600}>
            For narrow streets without pedestrian pathways, a transition space
            shall be inside the entrance which shall have waiting space.
          </Typography>
          <ReportImage>
            <StreetwidthQuestionC />
          </ReportImage>
          <Typography paragraph>
            How can we ensure that a public toilet is easily accessible to all?
            Should we stick to the traditional approach of having separate
            entrances for different gender groups? How can we make sure that the
            design is inclusive and meets the specific accessibility needs of
            disabled individuals?
          </Typography>
          <Typography paragraph>
            As per design of the toilet and demand of the context, services must
            be provided.
          </Typography>
        </div>
      )}
    </>
  );
}

export default Question9;
