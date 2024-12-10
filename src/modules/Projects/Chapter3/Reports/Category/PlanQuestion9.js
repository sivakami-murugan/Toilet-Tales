import React from "react";
import ActiImg1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/ActiImg1";
import BlockImg9 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/BlockImg9";
import {
  LeftAlignHeading,
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function PlanQuestion9({ reportData }) {
  const optionData = reportData[8]?.options[0]?.option;
  return (
    <div>
      <ReportsHeading style={{ marginBottom: "20px" }}>
        3.4 Act of waiting
      </ReportsHeading>
      <OptionHeadings>1.Transition space</OptionHeadings>
      <OptionHeadings style={{ marginLeft: "20px", marginTop: "30px" }}>
        Preferred transition space for this project:{" "}
      </OptionHeadings>
      <LeftAlignHeading style={{ marginBottom: "30px" }}>
        Integrated open space
      </LeftAlignHeading>
      <ReportsSubHeading style={{ marginBottom: "30px" }}>
        External transition space: The access to the toilet must be through a
        transition space from the primary access road/ pedestrian pathway As per
        design "The transition space should have adequate visual and physical
        clearance from the access road.
      </ReportsSubHeading>
      <OptionHeadings>The space shall include the following:</OptionHeadings>
      <ol>
        <StyledListItem>Landscaping</StyledListItem>
        <StyledListItem>
          waiting space with outdoor seating space
        </StyledListItem>
        <StyledListItem>
          Appropriate secondary functions such as shops, vending space etc
        </StyledListItem>
      </ol>
      <OptionHeadings style={{ marginTop: "10px" }}>
        The space shall include the following:
      </OptionHeadings>

      <ReportsSubHeading style={{ marginTop: "10px" }}>
        A transition space to the toilets that allows people to move or wait in
        queue with adequate privacy.
      </ReportsSubHeading>
      <ol>
        <StyledListItem>
          No toilet cubicle may open directly into a road/ street/ pedestrian
          path.
        </StyledListItem>
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
          path. Layout of corridor.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <ActiImg1 />
      </PlinthImgContainer>

      {(optionData === "Corridor" || optionData === "Courtyard") && (
        <div>
          <OptionHeadings style={{ marginLeft: "20px", marginTop: "30px" }}>
            3. Corridor and courtyard
          </OptionHeadings>
          <ol>
            <StyledListItem>
              Plan Form Implications of transition area are Corridor, Courtyard,
              and Integrated Open Spaces.
            </StyledListItem>
            <StyledListItem>
              Within the corridor or courtyard spaces, a range of activities and
              interactions can occur.
            </StyledListItem>
            <StyledListItem>
              While the linear type has limitations on additions, it should
              maintain a sense of porosity, defining the interface between the
              linear type and the street. Site elements like <b>vegetation</b>
              contribute to imagability.
            </StyledListItem>
            <StyledListItem>
              On the other hand, an L-shaped or courtyard type can accommodate
              more functions by integrating various elements.
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <BlockImg9 />
          </PlinthImgContainer>
        </div>
      )}
    </div>
  );
}

export default PlanQuestion9;
