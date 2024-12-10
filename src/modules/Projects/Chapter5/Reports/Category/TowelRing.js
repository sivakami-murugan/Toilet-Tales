import React from "react";
import TowelRingImage from "../../../../../assets/Icons/Chapter5/TowelRingImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function TowelRing() {
  return (
    <div>
      <ReportsHeading>5.20 Towel Ring</ReportsHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Either wall hooks or towel rings must be provided in each cubicle.
        Public and community toilets are not only used for defecating, a large
        group use for bathing and changing.
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
      <PlinthImgContainer style={{ padding: "20px 0px" }}>
        <TowelRingImage />
      </PlinthImgContainer>
    </div>
  );
}

export default TowelRing;
