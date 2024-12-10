import React from "react";
import AccessRampsOne from "../../../../../assets/Icons/Chapter5/AccessRampsOne";
import AccessRampsThree from "../../../../../assets/Icons/Chapter5/AccessRampsThree";
import AccessRampsTwo from "../../../../../assets/Icons/Chapter5/AccessRampsTwo";
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

function AccessRamps() {
  return (
    <ReportContainer>
      <ReportsHeading>5.1 Access Ramps</ReportsHeading>
      <WhyFocusHeading>{" Why Focus ?"}</WhyFocusHeading>
      <WhyFocusSubHeading style={{ paddingBottom: "0px" }}>
        Those with physical disabilities and the elderly are frequently
        overlooked. It is not easy for everyone to gain access to higher
        elevation. Inclusivity begins with offering usable access.
      </WhyFocusSubHeading>
      <UnOrderList>
        <StyledListItem>
          Minimum one ramp must be provided to access the toilet from the
          street.
        </StyledListItem>
        <StyledListItem>
          Ramps leading to the toilet should follow standard practices with a
          minimum ratio of 1:12 and a maximum rise of 30 inch (762 mm) for
          wheelchair accessibility and to facilitate access to senior citizens.
        </StyledListItem>
        <StyledListItem>
          A ramp with a slope between 1:12 and 1:16 can have a maximum
          horizontal length of 30' (914 mm) excluding landing. A ramp with a
          slope of 1:6 to 1:20 can have a horizontal run of up to 40' (1219 mm)
          excluding the landing area.
        </StyledListItem>
        <StyledListItem>
          The area around the ramps should be free of impediments such as level
          differences, loose stones, open drainage slabs, trees/shrubs, and so
          on.
        </StyledListItem>
        <ImgContainer>
          <AccessRampsOne />
        </ImgContainer>
        <StyledListItem>
          The clear width of the ramp should not be less than 1500 mm (from the
          end of the grab rails).
        </StyledListItem>
        <StyledListItem>
          Both the ends of the ramps should have proper landing of minimum area
          1500 mm x 1500 mm.
        </StyledListItem>
        <StyledListItem>
          A ramp should not start immediately from a road/street/Footpath.
        </StyledListItem>
        <ImgContainer>
          <AccessRampsTwo />
        </ImgContainer>
        <StyledListItem>
          The access ramp should be continuous and straight. In the event of a
          turn or break, a 1500 mm wide landing must be provided at the turn or
          break.
        </StyledListItem>
        <ImgContainer>
          <AccessRampsThree />
        </ImgContainer>
        <StyledListItem>
          Landings subject to wet conditions shall be designed to prevent the
          accumulation of water.
        </StyledListItem>
        <StyledListItem>
          The ramp floor must be floored with anti-skid tiles. ( use liner
          block, spot block guiding line for visually impaired persons)
        </StyledListItem>
      </UnOrderList>
    </ReportContainer>
  );
}

export default AccessRamps;
