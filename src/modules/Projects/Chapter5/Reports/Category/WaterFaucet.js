import React from "react";
import WaterFaucetImage from "../../../../../assets/Icons/Chapter5/WaterFaucetImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function WaterFaucet() {
  return (
    <div>
      <ReportsHeading>5.16 Water Faucet</ReportsHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
        For self cleaning purposes, water faucets must be provided in cubicles
        with EWC.
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
          Faucets must be operable with one hand and do not involve tight
          grabbing, squeezing, or wrist twisting. Design options include
          lever-operated, push-type, touch-type, and electronically controlled
          systems.
        </StyledListItem>
        <StyledListItem>
          The faucet should be placed in a range of reach that is limited,
          approximately 630mm for an adult.
        </StyledListItem>
        <StyledListItem>
          It must be placed at a height of 500 mm- 600 mm.
        </StyledListItem>
        <StyledListItem>
          The space between the tap grip and any adjacent vertical surface
          should be at least 35 mm.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <WaterFaucetImage />
      </PlinthImgContainer>
    </div>
  );
}

export default WaterFaucet;
