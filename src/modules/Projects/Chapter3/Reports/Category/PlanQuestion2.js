import React from "react";
import {
  ListContainer,
  ListItem,
  OptionHeadings,
} from "../../../Partials/Reports/Styles";

function PlanQuestionTwo() {
  const data = [
    "In a complex with multiple blocks of the mentioned typologies for different gender groups, include a common space between them for washing and related activities. This setup helps avoid the formation of any negative spaces.",

    "Consider the form and expression of each block using various plan types such as clusters of linear, L-shaped, and courtyard designs.",
  ];

  return (
    <div>
      <div>
        <OptionHeadings>Multiple blocks</OptionHeadings>
        <ListContainer>
          {data?.map((item) => (
            <ul>
              <ListItem key={item}>
                <li>{item}</li>
              </ListItem>
            </ul>
          ))}
        </ListContainer>
      </div>
    </div>
  );
}

export default PlanQuestionTwo;
