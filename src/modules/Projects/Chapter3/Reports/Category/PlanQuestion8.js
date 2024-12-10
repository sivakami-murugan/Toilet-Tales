import React from "react";
import EntranceImg1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/EntranceImg1";
import EntranceImg2 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/EntranceImg2";
import EntranceImg3 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/EntranceImg3";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsSubHeading
} from "../../../Partials/Reports/Styles";

function PlanQuestion8() {
  return (
    <div>
      <OptionHeadings style={{ marginBottom: "25px" }}>
        5.Entrance Door
      </OptionHeadings>
      <OptionHeadings style={{ marginLeft: "15px", marginBottom: "10px" }}>
        Preferred main Door for this project:
      </OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        A common door leading to a lobby or common corridor.
      </ReportsSubHeading>
      <OptionHeadings style={{ marginLeft: "15px", marginBottom: "10px" }}>
        Doors can be given the following ways:
      </OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        1.One common entrance door leading to a lobby/ common corridor, from
        which gender segregated blocks/ cubicles can be accessed.
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        2.Separate entrance door for men, women, and universally accessible
        toilets.
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        3.In both the above scenarios, the entrance door must open to the
        adjacent road/ street.
      </ReportsSubHeading>
      <PlinthImgContainer>
        <EntranceImg1 />
      </PlinthImgContainer>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        4. Incase of a yard in front of the toilet, this transitional space can
        be landscaped with outdoor street furniture such as benches.
      </ReportsSubHeading>
      <PlinthImgContainer>
        <EntranceImg2 />
      </PlinthImgContainer>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        5.The cubicles, urinals, and mirrors must be located away from the main
        entrance. For example, instead of a door, an offset entrance maze can be
        used to conceal the view while yet allowing easier, hands-free access.
      </ReportsSubHeading>
      <PlinthImgContainer>
        <EntranceImg3 />
      </PlinthImgContainer>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        6.Hands-free or sensor-operated doors are ideal for toilets if the
        budget permits.
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginLeft: "30px", marginBottom: "10px" }}>
        7. Volume and width of the opening matter. Doors should open towards a
        corridor or transition space, not directly into a cubicle. Openings
        facilitating access to a bathing or transition space are preferred over
        abrupt cubicle entries.
      </ReportsSubHeading>
    </div>
  );
}

export default PlanQuestion8;
