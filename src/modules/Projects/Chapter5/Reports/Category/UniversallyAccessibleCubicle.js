import React from "react";
import UniversallyAccessibleCubicleImageOne from "../../../../../assets/Icons/Chapter5/UniversallyAccessibleCubicleImageOne";
import UniversallyAccessibleCubicleImageThree from "../../../../../assets/Icons/Chapter5/UniversallyAccessibleCubicleImageThree";
import UniversallyAccessibleCubicleImageTwo from "../../../../../assets/Icons/Chapter5/UniversallyAccessibleCubicleImageTwo";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function UniversallyAccessibleCubicle() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.8 Universally accessible cubicle</ReportsHeading>
      <OptionHeadings style={{ paddingTop: "32px" }}>
        Why Focus ?
      </OptionHeadings>
      <ReportsSubHeading
        style={{ marginLeft: "20px", marginBottom: "20px", paddingTop: "24px" }}
      >
        Consider not having access to a toilet when you have an urge. Imagine
        the inability to traverse a toilet door. Toilets are designed for
        able-bodied persons allaround the world. People with physical
        disabilities, senior citizens, and transgender people are often
        overlooked. Public sanitation must be inclusive to people of all
        abilities, ages, and genders. Designers must be sensitized about the
        concern.
      </ReportsSubHeading>

      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          The toilet must have a clear internal dimension of 1500 mm X 1750 mm
          or more.
        </StyledListItem>
        <PlinthImgContainer style={{ padding: "60px 0px" }}>
          <UniversallyAccessibleCubicleImageOne />
        </PlinthImgContainer>
        <StyledListItem>
          The toilet must be equipped with stainless steel coat hooks mounted on
          a side wall/ door at two different heights of about 1500 mm and 1100
          mm from the finished floor level. The hooks must not project more than
          40 mm from the wall/ door. The hook should be able to support a
          minimum of 7 Kilograms.
        </StyledListItem>
        <StyledListItem>
          The toilet must be equipped with a health faucet connected by a
          flexible hose beside the water closet seat for cleaning purposes.
        </StyledListItem>
        <PlinthImgContainer style={{ padding: "60px 0px" }}>
          <UniversallyAccessibleCubicleImageTwo />
        </PlinthImgContainer>
        <StyledListItem>
          A slight slope of up to 10 mm shall be provided between the level of
          the corridor floor and the level of the toilet rooms floor. Inside the
          toilet cubicle, there must be no level differences or steps.
        </StyledListItem>
        <StyledListItem>
          Internal floor slope should be towards a floor trap to drain off
          excess water so that there is no accidental slippage.
        </StyledListItem>
        <PlinthImgContainer style={{ padding: "60px 0px" }}>
          <UniversallyAccessibleCubicleImageThree />
        </PlinthImgContainer>
        <StyledListItem>
          Ventilators with appropriate size should be located to allow the space
          to dry.
        </StyledListItem>
        <StyledListItem>
          The toilet must be equipped with an emergency call bell. Switches for
          electric light and power and other fixtures and fittings should be
          between 900mm - 1200mm from the finished floor.
        </StyledListItem>
        <StyledListItem>
          All fittings, handrails, flush plates and seating options should be
          designed to be as high-contrast color as possible.
        </StyledListItem>
      </ol>
    </div>
  );
}

export default UniversallyAccessibleCubicle;
