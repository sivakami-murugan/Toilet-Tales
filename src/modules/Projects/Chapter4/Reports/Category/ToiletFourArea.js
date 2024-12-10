import React from "react";
import BigLogo from "../../../../../assets/Icons/BigLogo";
import {
  ChaptersHeading,
  ChaptersHeadingContainer,
  ReportsHeading,
  ReportsSubHeading,
} from "../../../Partials/Reports/Styles";

function ToiletFourArea({ answerData }) {
  return (
    <div>
      <ChaptersHeadingContainer>
        <ChaptersHeading>Chapter 4</ChaptersHeading>
        <BigLogo />
      </ChaptersHeadingContainer>
      <ReportsHeading>Toilets in {answerData?.name}.</ReportsHeading>
      <ReportsSubHeading
        style={{ marginBottom: "10px", color: "#5B738B", fontWeight: "600" }}
      >
        {answerData?.subName || []}
      </ReportsSubHeading>
      <ReportsSubHeading style={{ fontWeight: "400" }}>
        Toilets in {answerData?.name} are vital infrastructure in areas lacking
        individual sanitation facilities. This report offers a comprehensive
        guide covering location selection, design specifications, footfall
        analysis, seat allocation, and incorporation ofsecondary functions to
        ensure optimal functionality and hygiene.
      </ReportsSubHeading>
    </div>
  );
}

export default ToiletFourArea;
