import React from "react";
import DoImage from "../../../../../assets/Icons/DoImage";
import DontImage from "../../../../../assets/Icons/DontImage";
import {
  ReportsHeading,
  ReportsSubHeading,
  SplitImageContainer
} from "../Styles";

function FootballAndHygine() {
  return (
    <div>
      <ReportsHeading>Footfall and toilet hygiene</ReportsHeading>
      <ReportsSubHeading>
        The cubicles closer to the entrance are used more frequently and are
        thus is maintained cleaner compared to the ones at far end of the
        corridor. The placing of cubicles are to be in such a way to minimize
        the walking distance from the entrance to farthest cubicle. incase of
        Linear forms, multiple entries may prove more beneficial in hygiene.
      </ReportsSubHeading>
      <SplitImageContainer>
        <DoImage />
        <DontImage />
      </SplitImageContainer>
    </div>
  );
}

export default FootballAndHygine;
