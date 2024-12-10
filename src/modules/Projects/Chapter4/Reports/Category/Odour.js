import React from "react";
import {
  OptionHeadings,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Odour() {
  return (
    <div>
      <ReportsHeading>4.6 Odour</ReportsHeading>
      <OptionHeadings style={{ marginBottom: "20px" }}>
        Why Focus ?
      </OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Why do the majority of toilet users cover their noses when using the
        facility? Why does a public toilet have to stink?
      </ReportsSubHeading>
      <OptionHeadings>
        Air freshener : (To regulate the foul odor inside the toilet, air
        fresheners shall be provided.)
      </OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          Depending on the number of cubicles. Minimum one must be provided in
          each corridor.
        </StyledListItem>
        <StyledListItem>
          It is ideal to install automatic air freshener. It shall be directed
          upwards and away from the path of users.
        </StyledListItem>
      </ol>
      <OptionHeadings>Proper ventilation : </OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
        Lack of proper ventilation is one reason for odour to prevail in the
        toilet. (Refer section 3 Artifacts for details on ventilation.)
      </ReportsSubHeading>
    </div>
  );
}

export default Odour;
