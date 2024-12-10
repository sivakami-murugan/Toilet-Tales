import React from "react";
import { ReportsHeading, ReportsSubHeading } from "../Styles";

function Location1({ selectedChapter }) {
  return (
    <div>
      <ReportsHeading>Location</ReportsHeading>
      <ReportsSubHeading>
        In order to achieve maximum efficiency in{selectedChapter?.typeName} ,
        it is essential that toilets are spaced at intervals of 500 meters. This
        strategic placement ensures that restroom facilities are readily
        accessible to the public, reducing congestion and wait times. By
        maintaining this specific distance, the infrastructure can adequately
        serve the needs of a high volume of people, promoting convenience and
        enhancing overall user satisfaction.
      </ReportsSubHeading>
    </div>
  );
}

export default Location1;
