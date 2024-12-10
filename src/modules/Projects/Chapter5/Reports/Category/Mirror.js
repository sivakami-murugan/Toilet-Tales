import React from "react";
import MirrorFisrtImage from "../../../../../assets/Icons/Chapter5/MirrorFisrtImage";
import MirrorSecondImage from "../../../../../assets/Icons/Chapter5/MirrorSecondImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Mirror() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.14 Mirror</ReportsHeading>
      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          A mirror must be provided for each wash basin.
        </StyledListItem>
        <StyledListItem>
          Individual mirrors or a single mirror covering the whole length can be
          provided for more than one wash basin
        </StyledListItem>
        <div>
          <ol style={{ paddingRight: "2.5rem" }}>
            <StyledListItem style={{ fontWeight: "700", paddingTop: "24px" }}>
              For universally accessible toilets
              <ol style={{ paddingRight: "2.5rem" }}>
                <StyledListItem>
                  The bottom edge of the mirror should be 900-100 mm from the
                  floor, and it may be slanted at an appropriate degree.
                </StyledListItem>
                <StyledListItem>
                  The top edge of mirrors should be 74 inches (1880 mm) minimum
                  from the finished floor level.
                </StyledListItem>
              </ol>
            </StyledListItem>
            <PlinthImgContainer style={{ padding: "20px 0px" }}>
              <MirrorFisrtImage />
            </PlinthImgContainer>
            <StyledListItem style={{ fontWeight: "700", paddingTop: "24px" }}>
              For Children
            </StyledListItem>
            <ol style={{ paddingRight: "2.5rem" }}>
              <StyledListItem>
                The bottom of any mirror installed above a washbasin must be
                situated such that the bottom edge of the reflecting surface is
                no higher than 31 inches (787mm) above the finished floor.
              </StyledListItem>
              <PlinthImgContainer style={{ padding: "20px 0px" }}>
                <MirrorSecondImage />
              </PlinthImgContainer>
            </ol>
          </ol>
        </div>
      </ol>
    </div>
  );
}

export default Mirror;
