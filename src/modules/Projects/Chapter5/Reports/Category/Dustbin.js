import React from "react";
import DustbinImage from "../../../../../assets/Icons/Chapter5/DustbinImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Dustbin() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.19 Dustbin </ReportsHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
        For proper waste disposal, dust bins must be provided.
      </ReportsSubHeading>

      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          A 6.5 L dustbin must be placed in each cubicle.
        </StyledListItem>
        <StyledListItem>
          In cubicles, it must be placed at an accessible corner without
          obstructing the clearance width.
        </StyledListItem>
        <StyledListItem>
          The cubicle must have a sanitary bin with a lid for the disposal of
          sanitary pads.
        </StyledListItem>
        <StyledListItem>
          Dustbins shall be placed directly beneath or near the wash basins,
          ideally in front of the wash basins, to minimise small amounts of
          litter on the floor left behind by users.
        </StyledListItem>
        <StyledListItem>
          A universally accessible cubicle must have a sanitary bin with a lid
          for the disposal of sanitary pads.
        </StyledListItem>
      </ol>
      <PlinthImgContainer style={{ padding: "20px 0px" }}>
        <DustbinImage />
      </PlinthImgContainer>
    </div>
  );
}

export default Dustbin;
