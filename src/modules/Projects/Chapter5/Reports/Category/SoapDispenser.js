import React from "react";
import SoapDispenserImage from "../../../../../assets/Icons/Chapter5/SoapDispenserImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function SoapDispenser() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.15 Soap Dispenser</ReportsHeading>
      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          Every cubicle must be provided with a soap stand.
        </StyledListItem>
        <StyledListItem>
          A minimum of one soap dispenser shall be provided for every two wash
          basins.
        </StyledListItem>
        <StyledListItem>
          one soap dispenser for every two taps is required for a long basin
          trough.
        </StyledListItem>
        <ol style={{ paddingRight: "2.5rem" }} type="i">
          <StyledListItem>
            Soap dish or soap stand must be provided at a height of 4 ft from
            the finished floor level.
          </StyledListItem>
          <StyledListItem>
            For universally accessible units, soap dish must be provided at a
            height of 0.9 m-1 m.
          </StyledListItem>
          <StyledListItem>
            A soap dispenser must be installed at a height of 3.5 feet above the
            finished floor, adjacent to the wash basin.
          </StyledListItem>
        </ol>
        <StyledListItem>
          Soap dispensers should be placed for easy refilling to avoid potential
          injuries caused by cleaning staffs' frequent bending and strain.
        </StyledListItem>
        <StyledListItem>
          In universally accessible toilets, the soap dispenser must be placed
          at a height of 0.85- 0.95 m.
        </StyledListItem>
        <PlinthImgContainer style={{ padding: "60px 0px" }}>
          <SoapDispenserImage />
        </PlinthImgContainer>
      </ol>
    </div>
  );
}

export default SoapDispenser;
