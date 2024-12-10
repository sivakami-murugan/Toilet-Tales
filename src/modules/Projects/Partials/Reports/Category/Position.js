import { Box } from "@mui/material";
import React from "react";
import option1Image from "../../../../../assets/Images/option1.png";
import option2Image from "../../../../../assets/Images/option2.png";
import option3Image from "../../../../../assets/Images/option3.png";
import { ReportsHeading, ReportsSubHeading } from "../Styles";

function Position({
  updateData,
  selectedChapter,
  selectedValue,
  proposedBlocks,
}) {
  return (
    <div>
      <ReportsHeading>Positioning of {updateData?.toiletTypeId}</ReportsHeading>
      <ReportsSubHeading>
        The suggestion is to keep the Toilet in a separate block according to
        the population distribution pattern and space availability.
        <br />
        Proposed If the density distribution pattern is uniform, the toilet
        block should be placed to maximize serviceable area coverage.
        <br />
        Proposed number of toilet blocks for this project is{" "}
        {updateData?.numberOfBlocks}.
      </ReportsSubHeading>
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <img
          src={
            updateData?.positionOfToilet === "1"
              ? option1Image
              : updateData?.positionOfToilet === "2"
                ? option2Image
                : option3Image
          }
          alt="Selected Option"
          style={{
            maxWidth: "150px",
            display: "block",
            margin: "0 auto",
          }}
        />
      </Box>
    </div>
  );
}

export default Position;
