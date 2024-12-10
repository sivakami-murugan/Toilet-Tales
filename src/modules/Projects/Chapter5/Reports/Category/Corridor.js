import React from "react";
import CorridorImage from "../../../../../assets/Icons/Chapter5/CorridorImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";
import {
  UnOrderList,
  WhyFocusHeading,
  WhyFocusSubHeading,
} from "../../../Styles";

function Corridor() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.6 Corridor</ReportsHeading>
      <WhyFocusHeading>Why Focus ?</WhyFocusHeading>
      <WhyFocusSubHeading>
        Consider how uncomfortable it will be to open the toilet door and
        instantly step into a street, or to stand in a queue in front of the
        toilet door in a scorching sun or while it is raining. Thus, a covered
        transition space with enough privacy is essential. It must also be
        accessible to individuals of all physical disabilities.
      </WhyFocusSubHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
        The corridor must be designed as below:
      </ReportsSubHeading>

      <UnOrderList>
        <StyledListItem>
          A common corridor of 1.5 m width shall be provided in the case of
          single blocks (male, female, and universally accessible cubicles in
          one block).
        </StyledListItem>
        <StyledListItem>
          Separate corridors of at least 1.5 m width must be provided in the
          case of gender-segregated toilets.
        </StyledListItem>
        <StyledListItem>
          No toilet cubicle may open directly into a road, street, or pedestrian
          path.
        </StyledListItem>
      </UnOrderList>
      <PlinthImgContainer >
        <CorridorImage />
      </PlinthImgContainer>
    </div>
  );
}

export default Corridor;
