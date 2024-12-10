import React from "react";
import DispenserImage from "../../../../../assets/Icons/Chapter5/DispenserImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
} from "../../../Partials/Reports/Styles";

function Dispenser() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.17 Toilet Paper Dispenser</ReportsHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
        A toilet paper dispenser should be so installed as to be easily used by
        a person with physical impairments sitting on the toilet. With a reach
        limit of 630 mm.
      </ReportsSubHeading>

      <PlinthImgContainer style={{ padding: "60px 0px" }}>
        <DispenserImage />
      </PlinthImgContainer>
    </div>
  );
}

export default Dispenser;
