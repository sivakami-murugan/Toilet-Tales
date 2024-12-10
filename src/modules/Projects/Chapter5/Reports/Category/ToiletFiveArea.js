import React from "react";
import BigLogo from "../../../../../assets/Icons/BigLogo";
import {
  ChaptersHeading,
  ChaptersHeadingContainer,
  CustomDivider,
  ReportsHeading,
  ReportsSubHeading,
} from "../../../Partials/Reports/Styles";

function ToiletFiveArea({ commonReportData }) {
  return (
    <div>
      <ChaptersHeadingContainer>
        <ChaptersHeading>Chapter 5</ChaptersHeading>
        <BigLogo />
      </ChaptersHeadingContainer>

      {commonReportData ? (
        <>
          <ReportsHeading>Toilets in {commonReportData.name}.</ReportsHeading>
          <ReportsSubHeading
            style={{
              marginBottom: "10px",
              color: "#5B738B",
              fontWeight: "600",
            }}
          >
            Retail Space / Street
          </ReportsSubHeading>
          <ReportsSubHeading style={{ fontWeight: "400" }}>
            Toilets in commercial area are vital infrastructure in areas lacking
            individual sanitation facilities. This report offers a comprehensive
            guide covering location selection, design specifications, footfall
            analysis, seat allocation, and incorporation of secondary functions
            to ensure optimal functionality and hygiene.
          </ReportsSubHeading>
          <CustomDivider />

          <ReportsSubHeading
            style={{
              color: "#1A2733",
              fontWeight: "700",
              fontSize: "16px",
              paddingTop: "40px",
            }}
          >
            Why Focus ?
          </ReportsSubHeading>
          <ReportsSubHeading
            style={{ fontWeight: "400", padding: "10px 0px 10px 20px" }}
          >
            Every toilet must have at least one universally accessible cubicle
            (for elderly population, transgender population, and physically
            disabled). It is strongly advised not to skip the contents of the
            chapter. It is equally important as designing binary segregated
            cubicles in a toilet. The following factors must be considered while
            designing the cubicle.
          </ReportsSubHeading>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ToiletFiveArea;
