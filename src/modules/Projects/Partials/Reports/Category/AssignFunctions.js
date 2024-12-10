import React from "react";
import SecFunctionImg from "../../../../../assets/Icons/SecFunctionImg";
import ToiletAreaImage from "../../../../../assets/Icons/ToiletAreaImage";
import {
  FlexContainer,
  ImageContainer,
  ListContainer,
  ListItem,
  ReportsHeading,
  ReportsSubHeading,
  SmallListText,
} from "../Styles";

function AssignFunctions({ functionData }) {
  const list1 = ["Juice bar", "Snack bar", "Atms", "Food kiosk"];
  const list2 = ["Grocery stores", "Cafes", "Hygiene shop", "Water atm"];
  const list3 = ["Medical shop", "Dry clean outlets and so on."];

  return (
    <div>
      <ReportsHeading>Assigning of secondary functions</ReportsHeading>
      <ReportsSubHeading>
        The number of secondary options can be determined by considering the{" "}
        <b>availability of the site </b>area and the
        <b> existing built use of the surrounding area. </b>Assigning secondary
        functions to the public block will help offset the operational and
        maintenance costs of the toilet.
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginTop: "15px" }}>
        Secondary functions shall be assigned based on space and contextual
        needs. The designer/planner must assign a function that promotes toilet
        self sustenance as well as surveillance, monitoring, and hygiene
        maintenance. The number of additional functions and their needed area
        shall be determined by space availability.
      </ReportsSubHeading>
      <SmallListText style={{ marginTop: "30px" }}>
        Secondary functions in Commercial Areas
      </SmallListText>
      <ReportsSubHeading>
        You can assign the free space outside the toilet as :{" "}
      </ReportsSubHeading>
      <FlexContainer>
        <ListContainer>
          {list1.map((item) => (
            <ListItem key={item}>
              <li>{item}</li>
            </ListItem>
          ))}
        </ListContainer>
        <ListContainer>
          {list2.map((item) => (
            <ListItem key={item}>
              <li>{item}</li>
            </ListItem>
          ))}
        </ListContainer>
        <ListContainer>
          {list3.map((item) => (
            <ListItem key={item}>
              <li>{item}</li>
            </ListItem>
          ))}
        </ListContainer>
      </FlexContainer>
      {functionData?.toiletTypeId === "Market" ? (
        <ImageContainer>
          <ToiletAreaImage />
        </ImageContainer>
      ) : (
        <ImageContainer>
          <SecFunctionImg />
        </ImageContainer>
      )}
    </div>
  );
}

export default AssignFunctions;
