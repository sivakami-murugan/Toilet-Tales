import React from "react";
import GrabRailsforRampsFiveImage from "../../../../../assets/Icons/Chapter5/GrabRailsforRampsFiveImage";
import GrabRailsforRampsFourImage from "../../../../../assets/Icons/Chapter5/GrabRailsforRampsFourImage";
import GrabRailsforRampsOneImage from "../../../../../assets/Icons/Chapter5/GrabRailsforRampsOneImage";
import GrabRailsforRampsThreeImage from "../../../../../assets/Icons/Chapter5/GrabRailsforRampsThreeImage";
import GrabRailsforRampsTwoImage from "../../../../../assets/Icons/Chapter5/GrabRailsforRampsTwoImage";
import {
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";
import {
  ImgContainer,
  ReportContainer,
  UnOrderList,
  WhyFocusHeading,
  WhyFocusSubHeading,
} from "../../../Styles";

function GrabRailsforRamps() {
  return (
    <ReportContainer>
      <ReportsHeading>5.3 Grab rails for ramps</ReportsHeading>
      <WhyFocusHeading>{"Why Focus ?"}</WhyFocusHeading>
      <WhyFocusSubHeading>
        Providing a ramp is insufficient. Holdable grab rails at the appropriate
        height are required for physically challenged and elderly users to move
        along the ramp. It is not only about providing a grab rail; it is also
        about paying attention to the material, how it is attached to the wall
        and floor surfaces, and how it is positioned. Only an effective grab
        rail can make a ramp usable; otherwise, it will be another lifeless
        aspect of the building.
      </WhyFocusSubHeading>
      <WhyFocusSubHeading style={{ paddingTop: "0px" }}>
        Grab rails must be provided with both steps and ramps for supporting the
        elderly or physically challenged users. It must strictly follow the
        standards:
      </WhyFocusSubHeading>
      <UnOrderList>
        <StyledListItem>
          The grab rail must begin at the landing of the first step or ramp. The
          grab rail must be continuous and end at the ramp/step landing. The
          rails must extend horizontally for 300 mm on both sides beyond the
          sloped area, as also the floor.
        </StyledListItem>
        <ImgContainer>
          <GrabRailsforRampsOneImage />
        </ImgContainer>
        <StyledListItem>
          For ramps, it is best to have grab rails on both sides, even if one
          side is against an external wall.
        </StyledListItem>
        <ImgContainer>
          <GrabRailsforRampsTwoImage />
        </ImgContainer>
        <StyledListItem>
          Incase of ramp bordering against an external wall, the grab rail must
          be mounted on the wall.
        </StyledListItem>
        <StyledListItem>
          Instead of using screws, all grab rails must be inserted/cemented to
          the floor/wall as required.
        </StyledListItem>
        <StyledListItem>
          The height of the grab rail cannot be less than 860 mm or greater than
          960 mm.
        </StyledListItem>
        <ImgContainer>
          <GrabRailsforRampsThreeImage />
        </ImgContainer>
        <StyledListItem>
          Minimum gap from the adjacent wall to the hand rail shall be 50 mm.
        </StyledListItem>
        <ImgContainer>
          <GrabRailsforRampsFourImage />
        </ImgContainer>
        <StyledListItem>
          At the bottom of the grab rail, a continuous curb or barrier of 4 inch
          (100mm) diameter sphere shall be provided that prevents the passage,
          where any portion of the sphere is within 4 inches (100 mm) of the
          finished floor level.
        </StyledListItem>
        <StyledListItem>
          Grab bars should be slip-resistant with round ends; preferably have
          knurled surfaces; have a circular section of 38-45 mm in diameter; be
          free of any sharp or abrasive elements; be able to bear a weight of
          250 kg.
        </StyledListItem>
        <ImgContainer style={{ paddingBottom: "0px" }}>
          <GrabRailsforRampsFiveImage />
        </ImgContainer>
      </UnOrderList>
    </ReportContainer>
  );
}

export default GrabRailsforRamps;
