import React from "react";
import {
  ListContainer,
  ListItem,
  ReportsHeading,
  ReportsSubHeading,
} from "../../../Partials/Reports/Styles";

function PlanTypology() {
  const list1 = [" Plan type", "Nature of activities"];

  return (
    <div>
      <ReportsHeading>3.1 Plan Typology</ReportsHeading>
      <ReportsSubHeading
        style={{ marginBottom: "10px", color: "#1A2733", fontWeight: "600" }}
      >
        Parameters influencing the plan of the toilet
      </ReportsSubHeading>
      <ListContainer>
        {list1.map((item) => (
          <ListItem key={item} style={{ color: "#1A2733", fontWeight: "600" }}>
            <li>{item}</li>
          </ListItem>
        ))}
      </ListContainer>
    </div>
  );
}

export default PlanTypology;
