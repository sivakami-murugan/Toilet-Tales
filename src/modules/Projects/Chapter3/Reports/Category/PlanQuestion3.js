import React from "react";
import {
  ListContainer,
  ListItem,
  OptionHeadings,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function PlanQuestionThree({ selectChapterData, typeTitle }) {
  const data = [
    "In flood-prone areas, position the foundation on higher ground or elevate the plinth to prevent water damage.",

    "Natural terrain like slopes or uneven surfaces should influence the design, incorporating ramps or stairs for accessibility.",
    "Address level differences between the road and building site with ramps or similar features for easy access.",
  ];

  const Item1 = [
    "The built form of a toilet is influenced by contextual functions. For example, the placement of entrance doors, the number of cubicles dependent on footfall, additional facilities, and so on.",
    "The orientation of the entry should vary depending on the context.",
  ];
  return (
    <div>
      <ReportsHeading style={{ marginBottom: "20px" }}>
        3.2 Built form and contextual suggestion
      </ReportsHeading>
      <OptionHeadings style={{ marginBottom: "10px" }}>
        1.Geography of the site
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "20px" }}>
        Geographical factors like marshy terrain or waterlogging impact a
        building's plan and structure. They determine the need for elevated
        plinth structures and heights.{" "}
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginBottom: "20px" }}>
        Additionally, level differences between the site and approach road
        influence accessibility and drainage, often requiring features like
        ramps or drainage systems to manage transitions and ensure building
        integrity.
      </ReportsSubHeading>
      <ListContainer>
        {data?.map((item) => (
          <ListItem key={item}>
            <ul>
              <li>{item}</li>
            </ul>
          </ListItem>
        ))}
      </ListContainer>
      <div>
        <OptionHeadings style={{ marginBottom: "20px" }}>
          Plot width/ space availability{" "}
        </OptionHeadings>

        <ListContainer>
          {Item1?.map((item) => (
            <ListItem key={item}>
              <ul>
                <li>{item}</li>
              </ul>
            </ListItem>
          ))}
        </ListContainer>
      </div>

      {typeTitle === "Transit Area" && (
        <div>
          <OptionHeadings style={{ marginBottom: "20px" }}>
            Transit Area
          </OptionHeadings>
          <StyledListItem style={{ marginLeft: "40px" }}>
            In transit regions, the entry should face the platforms to provide
            for easy access during the hault.
          </StyledListItem>
        </div>
      )}

      {(typeTitle === "Commercial Area" || typeTitle === "Market") && (
        <div>
          <OptionHeadings style={{ marginBottom: "20px" }}>
            Commercial area & Market:{" "}
          </OptionHeadings>
          <StyledListItem style={{ marginLeft: "40px" }}>
            It can be combined with other services such as a refreshment center
            or cafeteria for commercial areas and marketplaces, and it can have
            various entrance points from different streets.
          </StyledListItem>
        </div>
      )}

      {(typeTitle === "Parks and Playground" ||
        typeTitle === "Beaches" ||
        typeTitle === "Paratransit location & Parking Area") && (
          <div>
            <OptionHeadings style={{ marginBottom: "20px" }}>
              Parks, beaches, and play areas:{" "}
            </OptionHeadings>
            <StyledListItem style={{ marginLeft: "40px" }}>
              For public spaces such as parks, beaches, and play areas, the
              facility's function and identity should be more extroverted and
              loud.
            </StyledListItem>
          </div>
        )}

      {typeTitle === "Event linked Toilets" && (
        <div>
          <OptionHeadings style={{ marginBottom: "20px" }}>
            Event Linked toilets:
          </OptionHeadings>
          <StyledListItem style={{ marginLeft: "40px" }}>
            Event-based portable toilets should have segregated cubicles and be
            easy to transport and move.
          </StyledListItem>
        </div>
      )}
      {selectChapterData?.typeName === "Community Toilets" && (
        <div>
          <OptionHeadings style={{ marginBottom: "20px" }}>
            Community toilets:{" "}
          </OptionHeadings>
          <StyledListItem style={{ marginLeft: "40px" }}>
            Community toilets have to integrate with their surroundings and be
            more open in terms of boundaries and access.
          </StyledListItem>
        </div>
      )}
    </div>
  );
}

export default PlanQuestionThree;
