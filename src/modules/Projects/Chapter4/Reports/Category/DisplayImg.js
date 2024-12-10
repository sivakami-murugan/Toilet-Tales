import React from "react";
import WorkinImg from "../../../../../assets/Icons/ChapterFourImages/WorkinImg";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function DisplayImg() {
  return (
    <div>
      <ReportsHeading>4.3 Display boards and others</ReportsHeading>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <div style={{ marginBottom: "30px" }}>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "15px" }}>
          Have you ever stepped upon a damp toilet floor? Have you ever used a
          toilet and discovered that the tap and flush tank are faulty? And then
          you ended up making the toilet dirtier. A simple warning about a
          faulty toilet or cleaning process would have been beneficial. This is
          why display boards are required.
        </ReportsSubHeading>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
          Display boards indicating the functioning status, operation, and
          maintenance of the toilet, such as repair work in process, cleaning in
          progress, and so on must be kept in a public toilet.
        </ReportsSubHeading>
      </div>
      <OptionHeadings>
        Every toilet must have the following boards one each:
      </OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          Cleaning and repair work display boards must be stored in the
          janitor's room or storeroom. It must only be used when necessary.
        </StyledListItem>
        <StyledListItem>
          A cleaning schedule, staff registry (an up-to-date registration of
          workers responsible for cleaning), and a white board to be left for
          the cleaner on duty, must be put in the lobby or common hallway. If a
          carer is present, it must be put close to his seat in a noticeable
          location.
        </StyledListItem>
        <StyledListItem>
          Emergency contact information and the location of nearby toilets must
          be placed in the lobby or common hallway.
        </StyledListItem>
        <StyledListItem>
          Cleaning in process, toilets out of order and repair work in process
          can be movable signages.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <WorkinImg />
      </PlinthImgContainer>
    </div>
  );
}

export default DisplayImg;
