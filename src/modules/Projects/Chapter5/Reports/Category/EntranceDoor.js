import React from "react";
import EntrancedoorImage from "../../../../../assets/Icons/Chapter5/EntrancedoorImage";
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

function EntranceDoor() {
  return (
    <ReportContainer>
      <ReportsHeading>5.4 Entrance door</ReportsHeading>
      <WhyFocusHeading> Why Focus ?</WhyFocusHeading>
      <WhyFocusSubHeading>
        It is critical to define the toilet entrance. The entrance door provides
        the first glimpse of the toilet. That is when one decides whether or not
        to enter. Often the wheelchairs cannot pass through entrance doors as it
        is designed for able bodied human beings.
      </WhyFocusSubHeading>
      <UnOrderList>
        <StyledListItem>
          The width of the entrance door shall be 1500 mm ( with clear width of
          1200 mm minimum)
        </StyledListItem>
        <StyledListItem>
          The toilet must have a sliding or folding door outward-opening. with a
          clear opening of 1200 mm minimum and must be capable of being locked
          from inside by a lock / device that is operable using one hand.
        </StyledListItem>
        <StyledListItem>
          Door pull rail must be placed on both sides of the door near the latch
          at a height of 1070 mm from finished floor level and , at least 600mm
          long
        </StyledListItem>
        <StyledListItem>
          Door should not be too heavy to operate and should not require a force
          of more than 20 N to operate.
        </StyledListItem>
        <StyledListItem>
          To help people with impaired sight to see doors, the door and frame
          should be in a color which contrasts with the adjoining wall.
        </StyledListItem>
        <StyledListItem>
          The door should not be of a highly polished/ reflective material such
          as stainless steel.
        </StyledListItem>
        <StyledListItem>
          All external doors should have warning blocks on the floor installed
          300mm before entrances.
        </StyledListItem>
      </UnOrderList>
      <ImgContainer>
        <EntrancedoorImage />
      </ImgContainer>
    </ReportContainer>
  );
}

export default EntranceDoor;
