import React from "react";
import StepsFourImage from "../../../../../assets/Icons/Chapter5/StepsFourImage";
import StepsOneImage from "../../../../../assets/Icons/Chapter5/StepsOneImage";
import StepsThreeImage from "../../../../../assets/Icons/Chapter5/StepsThreeImage";
import StepsTwoImage from "../../../../../assets/Icons/Chapter5/StepsTwoImage";
import {
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";
import {
  ImgContainer,
  ReportContainer,
  UnOrderList,
  WhyFocusHeading,
} from "../../../Styles";

function Steps() {
  return (
    <ReportContainer>
      <ReportsHeading>5.2 Steps</ReportsHeading>
      <UnOrderList>
        <StyledListItem>
          All steps must be accompanied with handrails.
        </StyledListItem>
        <StyledListItem>
          Under no circumstances, the riser must be higher than 15 cm, as the
          elderly users may find it difficult to access.
        </StyledListItem>
      </UnOrderList>

      <WhyFocusHeading>Note:</WhyFocusHeading>
      <UnOrderList>
        <StyledListItem>
          The steps leading to the toilet block ought to follow established
          practices, with a
          <strong> minimum tread of 30 cm and a maximum riser of 15 cm.</strong>
        </StyledListItem>
        <ImgContainer>
          <StepsOneImage />
        </ImgContainer>
        <StyledListItem>
          The display boards indicating general hygiene and practice must be
          kept on the corridor/ hallway of each block.
        </StyledListItem>
        <StyledListItem>
          Individual instruction on usage of the commode must be placed next
          behind the toilet door facing the user while using the commode.
        </StyledListItem>
        <ImgContainer>
          <StepsTwoImage />
        </ImgContainer>
        <StyledListItem>
          Individual instruction on usage of the commode must be placed next
          behind the toilet door facing the user while using the commode.
        </StyledListItem>
        <ImgContainer>
          <StepsThreeImage />
        </ImgContainer>
        <StyledListItem>
          Individual instruction on usage of the commode must be placed next
          behind the toilet door facing the user while using the commode.
        </StyledListItem>
        <ImgContainer style={{ paddingBottom: "0px" }}>
          <StepsFourImage />
        </ImgContainer>
      </UnOrderList>
    </ReportContainer>
  );
}

export default Steps;
