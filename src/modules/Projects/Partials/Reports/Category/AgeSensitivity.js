import React from "react";
import AgeImageOne from "../../../../../assets/Icons/AgeImageOne";
import AgeImageThree from "../../../../../assets/Icons/AgeImageThree";
import AgeImageTwo from "../../../../../assets/Images/AgeImageTwo.png";
import {
  ImageContainer,
  ReportsHeading,
  ReportsSubHeading,
  SmallListContainer,
  SmallListText
} from "../Styles";

function AgeSensitivity() {
  const listItems = [
    "A separate toilet block/toilet cubicle for children shall be provided, with facilities such as urinals, commodes, and wash basins at a convenient height for children.",
    "It is also beneficial in such scenarios to give a cubicle for physically challenged children within the children's block.",
    "In each gender-segregated block, at least one cubicle...",
  ];

  return (
    <div>
      <ReportsHeading>Age Sensitivity</ReportsHeading>
      <ReportsSubHeading>
        Considering distinctive age groups in public sanitation is crucial
        because each age group has unique needs and requirements that must be
        addressed for effective planning and provision of toilets. When planning
        and designing a public toilet, users of all ages must be considered.
        Distinct age groups have distinct needs, ranging from separate cubicles
        to additional amenities.
      </ReportsSubHeading>
      <SmallListContainer>
        <SmallListText>1.Children</SmallListText>
        <ReportsSubHeading style={{ paddingLeft: "10px" }}>
          Child facilities can be included in the following ways:
        </ReportsSubHeading>
        <ReportsSubHeading>
          <ol>
            {listItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </ReportsSubHeading>
      </SmallListContainer>
      <ImageContainer>
        <AgeImageOne />
      </ImageContainer>
      <SmallListContainer>
        <SmallListText>2.Teenagers</SmallListText>
        <ReportsSubHeading style={{ paddingLeft: "10px" }}>
          Public toilets should be equipped with sanitary products, proper
          disposal systems, and adequate space for personal care, can enhance
          their comfort and dignity.
        </ReportsSubHeading>
      </SmallListContainer>
      <ImageContainer>
        <img src={AgeImageTwo} />
      </ImageContainer>
      <SmallListContainer>
        <SmallListText>3.Elderly</SmallListText>
        <ReportsSubHeading style={{ paddingLeft: "10px" }}>
          They may face mobility challenges, require assistance, or need
          facilities designed with features like grab bars, non-slip flooring,
          and appropriate lighting for visibility. Aside from separated
          facilities, additional amenities for users of all age must be provided
          in all cubicles.
        </ReportsSubHeading>
      </SmallListContainer>
      <ImageContainer>
        <AgeImageThree />
      </ImageContainer>
    </div>
  );
}

export default AgeSensitivity;
