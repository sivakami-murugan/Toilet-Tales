import React from "react";
import UrinalImage from "../../../../../assets/Icons/Chapter5/UrinalImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Urinal() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.10 Urinal</ReportsHeading>
      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          Universally accessible cubicles are for people of all genders and body
          abilities. Hence, along with a commode, a urinal shall be provided
          inside a universally accessible cubicle.
        </StyledListItem>
        <StyledListItem>
          Urinals shall be the stall-type or the wall-hung type with the rim 17
          inches (430 mm) maximum above the finish floor or ground. Urinals
          shall be 13 1/2 inches (345 mm) deep minimum measured from the outer
          face of the urinal rim to the back of the fixture. The depth of 450 mm
          shown is applicable for all urinals.
        </StyledListItem>
        <StyledListItem>
          The edges and corners of the wall of the urinal should be chamfered
          and scupper drains/ grates shall be provided to avoid water
          stagnation.
        </StyledListItem>{" "}
        <PlinthImgContainer style={{ padding: "60px 0px" }}>
          <UrinalImage />
        </PlinthImgContainer>
      </ol>
    </div>
  );
}

export default Urinal;
