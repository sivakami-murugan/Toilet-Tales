import React from "react";
import InternalgrabrailsImage from "../../../../../assets/Icons/Chapter5/InternalgrabrailsImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function InternalGrabRails() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.12 Internal grab rails</ReportsHeading>
      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          Grab rails shall be installed horizontally 33-36 inches (838mm- 915
          mm) above the finished floor as measured to the top of the rail.
        </StyledListItem>
        <StyledListItem>
          Grab rails on the sidewall in an accessible stall should be at least
          42 inches -48 inch long.
        </StyledListItem>
        <StyledListItem>
          Sidewall grab rails should be located a maximum of 12 inches (304 mm)
          from the rear wall and extend at least 54 inches (1371 mm) from the
          rear wall.
        </StyledListItem>{" "}
        <StyledListItem>
          A grab rail on the rear wall must be at least 36 inches long and
          should also be installed behind the toilet on the rear wall.
        </StyledListItem>{" "}
        <StyledListItem>
          Suitable arrangement of vertical/horizontal handrails, with 50mm
          clearance from the wall shall be made inside the toilet.
        </StyledListItem>{" "}
        <StyledListItem>
          The side wall grab bar shall be 42 inches (1065 mm) long minimum,
          located 12 inches (305 mm) maximum from the rear wall and extending 54
          inches (1370 mm) minimum from the rear wall.
        </StyledListItem>{" "}
        <StyledListItem>
          The rear wall grab bar shall be 36 inches (915 mm) long minimum and
          extend from the centerline of the water closet 12 inches (305 mm)
          minimum on one side and 24 inches (610 mm) minimum on the other side.
        </StyledListItem>{" "}
        <StyledListItem>
          The vertical grab rail must be at a height of 835 mm from finished
          floor level, with the top of the rail at a height of 1295 mm.
        </StyledListItem>{" "}
        <StyledListItem>
          The vertical grab rail on the rear wall must be 455 mm from the centre
          line of the commode towards the open side. The vertical grab rail on
          the side wall must be placed 300 mm from the edge of the commode.
        </StyledListItem>{" "}
        <StyledListItem>
          Grab bars with circular cross-sections should have an outside diameter
          measuring 1.25-2 inches. Grab bars with non-circular cross-sections
          (ovals or rectangles) should have a cross-section measuring no more
          than 2 inches across and 4 inches around (perimeter).
        </StyledListItem>{" "}
        <StyledListItem>
          Grab rails should be free from any sharp or abrasive elements, must
          not rotate, and should sustain at least 113 kg of force.
        </StyledListItem>{" "}
        <PlinthImgContainer style={{ padding: "60px 0px" }}>
          <InternalgrabrailsImage />
        </PlinthImgContainer>
      </ol>
    </div>
  );
}

export default InternalGrabRails;
