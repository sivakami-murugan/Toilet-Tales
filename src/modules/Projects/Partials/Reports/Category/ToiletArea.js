import React from "react";
import BigLogo from "../../../../../assets/Icons/BigLogo";
import { ChaptersHeading, ChaptersHeadingContainer, ReportsHeading, ReportsSubHeading } from "../Styles";

function ToiletArea({
  selectedChapter,
  updateData,
  subData,
  selectData,
  titleData,
}) {
  const selectedType = subData.find((item) => {
    return item.typeName === updateData?.toiletTypeId;
  });

  return (
    <div>
      <ChaptersHeadingContainer>
        <ChaptersHeading>Chapter 1</ChaptersHeading>
        <BigLogo />
      </ChaptersHeadingContainer>
      <ReportsHeading>Toilets in {titleData}</ReportsHeading>
      <ReportsSubHeading style={{ marginBottom: "10px" }}>
        {selectedType?.toiletCategories[selectData]?.categoryName}
      </ReportsSubHeading>
      <ReportsSubHeading>
        Toilets in {titleData} are vital infrastructure in areas lacking
        individual sanitation facilities. This report offers a comprehensive
        guide covering location selection, design specifications, footfall
        analysis, seat allocation, and incorporation of secondary functions to
        ensure optimal functionality and hygiene.
      </ReportsSubHeading>
    </div>
  );
}

export default ToiletArea;
