import React from "react";
import ShowerImage from "../../../../../assets/Icons/Chapter5/ShowerImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Shower() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.18 Shower</ReportsHeading>
      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          The adjustable and detachable shower head( telephone shower/ hand-held
          shower), with a minimally 1500 mm long hose, should be installed
          between 800 mm and 1200 mm from the floor
        </StyledListItem>
        <StyledListItem>
          The knob of the shower must be 800 mm to 900 mm.
        </StyledListItem>
      </ol>
      <PlinthImgContainer style={{ padding: "60px 0px" }}>
        <ShowerImage />
      </PlinthImgContainer>
    </div>
  );
}

export default Shower;
