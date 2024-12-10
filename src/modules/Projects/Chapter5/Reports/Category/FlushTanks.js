import React from "react";
import {
  ReportsHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function FlushTanks() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.11 Flush Tanks</ReportsHeading>
      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          Every universally accessible cubicle must be provided with a flush
          tank irrespective of the kind of WC.
        </StyledListItem>
        <StyledListItem>
          A flushing cistern must be installed at a sufficient height to allow
          sufficient water pressure to flush waste into the drainage line. The
          flush cistern must be installed at a conventional height of feet above
          the floor.
        </StyledListItem>
        <StyledListItem>It is ideal to conceal the flush tanks.</StyledListItem>{" "}
      </ol>
    </div>
  );
}

export default FlushTanks;
