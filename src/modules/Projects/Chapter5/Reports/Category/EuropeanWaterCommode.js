import React from "react";
import EuropeanWaterCommodeImageFour from "../../../../../assets/Icons/Chapter5/EuropeanWaterCommodeImageFour";
import EuropeanWaterCommodeImageOne from "../../../../../assets/Icons/Chapter5/EuropeanWaterCommodeImageOne";
import EuropeanWaterCommodeImageThree from "../../../../../assets/Icons/Chapter5/EuropeanWaterCommodeImageThree";
import EuropeanWaterCommodeImageTwo from "../../../../../assets/Icons/Chapter5/EuropeanWaterCommodeImageTwo";
import {
  PlinthImgContainer,
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function EuropeanWaterCommode() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>
        5.9 European Water Commode for universally accessible cubicle
      </ReportsHeading>
      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          One European W.C. in a set of toilets must be provided for physically
          challenged people, along with a wash basin. There shall be one in each
          of the male and female toilet blocks.
        </StyledListItem>
        <StyledListItem>
          It is ideal to have a separate block dedicated to universally
          accessible toilets.
        </StyledListItem>
        <StyledListItem>
          The toilet seat must be placed at a height of 500 mm above the
          finished floor level.
        </StyledListItem>{" "}
        <PlinthImgContainer style={{ padding: "20px 0px" }}>
          <EuropeanWaterCommodeImageOne />
        </PlinthImgContainer>
        <StyledListItem>
          Under no circumstances should the commode be put on the raised
          pedestal.
        </StyledListItem>{" "}
        <StyledListItem>
          Inside the toilet cubicle, there must be no level differences or
          steps.
        </StyledListItem>{" "}
        <PlinthImgContainer style={{ padding: "20px 0px" }}>
          <EuropeanWaterCommodeImageTwo />
        </PlinthImgContainer>
        <StyledListItem>
          Clearance around a water closet shall be 60 inches (1525 mm) minimum
          measured perpendicular from the side wall and 56 inches (1420 mm)
          minimum measured perpendicular from the rear wall.
        </StyledListItem>{" "}
        <PlinthImgContainer style={{ padding: "20px 0px" }}>
          <EuropeanWaterCommodeImageThree />
        </PlinthImgContainer>
        <StyledListItem>
          No other fixtures or obstructions shall be located within the required
          water closet clearance.
        </StyledListItem>{" "}
        <StyledListItem>
          The water closet shall be positioned with a wall or partition to the
          rear and to one side. The centerline of the water closet shall be 16
          inches (405 mm) minimum to 18 inches (455 mm) maximum from the side
          wall or partition.
        </StyledListItem>{" "}
        <PlinthImgContainer style={{ padding: "20px 0px" }}>
          <EuropeanWaterCommodeImageFour />
        </PlinthImgContainer>
      </ol>
    </div>
  );
}

export default EuropeanWaterCommode;
