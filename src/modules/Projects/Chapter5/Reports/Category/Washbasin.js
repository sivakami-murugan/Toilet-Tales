import React from "react";
import WashbasinOne from "../../../../../assets/Icons/Chapter5/WashbasinOne";
import WashbasinTwo from "../../../../../assets/Icons/Chapter5/WashbasinTwo";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Washbasin() {
  return (
    <div>
      <ReportsHeading>5.13 Wash basin</ReportsHeading>

      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
          Facility for hand washing and maintaining hygiene after the
          defecating.
        </ReportsSubHeading>
        <div>
          <ol style={{ paddingRight: "2.5rem" }}>
            <StyledListItem style={{ fontWeight: "700" }}>
              For universally accessible toilets
              <ol style={{ paddingRight: "2.5rem" }}>
                <StyledListItem>
                  There must be at least 21 inches of open space in front of the
                  wash basin.
                </StyledListItem>
                <StyledListItem>
                  The top edge of the wash basin shall be 780 mm above the
                  finished floor level, with a clear knee space of at least 760
                  mm wide, 350 mm deep, and 600mm-650mm high. (A wheelchair has
                  a footplate and leg rest attached in front of the seat. The
                  footplate extends about 350mm in front of the knee. The
                  footplate may prevent a wheelchair user from getting close
                  enough to an object.)
                </StyledListItem>
                <StyledListItem>
                  The taps must have long level type handles and should be
                  positioned 780 mm to 800 mm above the finished floor level.
                </StyledListItem>
              </ol>
            </StyledListItem>
            <PlinthImgContainer style={{ padding: "20px 0px" }}>
              <WashbasinOne />
            </PlinthImgContainer>
            <StyledListItem style={{ fontWeight: "700", paddingTop: "24px" }}>
              For Children
            </StyledListItem>
            <ol style={{ paddingRight: "2.5rem" }}>
              <StyledListItem>
                Wash basins must be installed with the rim no higher than 30
                inches (762mm) above the finish floor.
              </StyledListItem>
              <StyledListItem>
                A clearance of at least 25 inches ( 635mm) above the finish
                floor to the bottom of the apron shall be provided.
              </StyledListItem>
              <StyledListItem>
                Knee and toe clearance shall be at least 30 inches (762mm) wide
                and 19 (483mm) deep.
              </StyledListItem>
              <PlinthImgContainer style={{ padding: "20px 0px" }}>
                <WashbasinTwo />
              </PlinthImgContainer>
            </ol>
          </ol>
        </div>
      </ol>
    </div>
  );
}

export default Washbasin;
