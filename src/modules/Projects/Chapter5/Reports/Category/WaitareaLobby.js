import React from "react";
import TransitionSpace from "../../../../../assets/Icons/Chapter5/TransitionSpace";
import WaitingareasImageOne from "../../../../../assets/Icons/Chapter5/WaitingareasImageOne";
import WaitingareasImageTwo from "../../../../../assets/Icons/Chapter5/WaitingareasImageTwo";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";
import {
  ImgContainer,
  ReportContainer,
  UnOrderList,
  WhyFocusHeading,
  WhyFocusSubHeading,
} from "../../../Styles";

function WaitareaLobby({ commonReportData }) {
  return (
    <ReportContainer>
      <ReportsHeading>5.5 Wait area / Lobby</ReportsHeading>
      <UnOrderList>
        <StyledListItem
          style={{ fontSize: "16px", fontWeight: "700", paddingTop: "4px" }}
        >
          Transition space
        </StyledListItem>
        <div>
          <WhyFocusHeading>
            {"Preferred transition space for this project:"}
          </WhyFocusHeading>
          <UnOrderList>
            <WhyFocusSubHeading style={{ padding: "0px" }}>
              {commonReportData
                ? commonReportData.chapterFlow3Option
                : "Loading..."}{" "}
            </WhyFocusSubHeading>
          </UnOrderList>

          <ReportsSubHeading style={{ marginTop: "20px" }}>
            External transition space: The access to the toilet must be through
            a transition space from the primary access road/ pedestrian pathway
            As per design "The transition space should have adequate visual and
            physical clearance from the access road.
          </ReportsSubHeading>

          <WhyFocusHeading>
            {" The space shall include the following:"}
          </WhyFocusHeading>
          <UnOrderList>
            <StyledListItem>Landscaping</StyledListItem>
            <StyledListItem>
              waiting space with outdoor seating space
            </StyledListItem>
            <StyledListItem>
              Appropriate secondary functions such as shops, vending space etc
            </StyledListItem>
          </UnOrderList>
          <WhyFocusHeading>Internal transition space:</WhyFocusHeading>
          <UnOrderList>
            <ReportsSubHeading
              style={{ marginTop: "20px", marginLeft: "-1.5rem" }}
            >
              A transition space to the toilets that allows people to move or
              wait in queue with adequate privacy.
            </ReportsSubHeading>
            <StyledListItem>
              No toilet cubicle may open directly into a road/ street/
              pedestrian path.
            </StyledListItem>
            <StyledListItem>
              A common corridor of 1.5 m width shall be provided in the case of
              single blocks (male, female, and universally accessible cubicles
              in one block).
            </StyledListItem>
            <StyledListItem>
              Separate corridors of at least 1.5 m width must be provided in the
              case of gender-segregated toilets.
            </StyledListItem>
            <StyledListItem>
              No toilet cubicle may open directly into a road, street, or
              pedestrian path. Layout of corridor.
            </StyledListItem>
          </UnOrderList>
          <ImgContainer style={{ paddingBottom: "0px" }}>
            <TransitionSpace />
          </ImgContainer>
        </div>
        <StyledListItem
          style={{ fontSize: "16px", fontWeight: "700", paddingTop: "4px" }}
        >
          Waiting area/ lobby
        </StyledListItem>
        <div>
          <ol style={{ paddingRight: "2.5rem" }}>
            <StyledListItem style={{ fontWeight: "700", paddingTop: "24px" }}>
              Waiting areas can be provided in two ways:
              <ol style={{ paddingRight: "2.5rem" }} type="i">
                <StyledListItem>
                  Either a shared waiting area or a lobby that leads to
                  segregated toilet block entrances.
                </StyledListItem>
                <StyledListItem>
                  Separate waiting areas for male, female, and universally
                  accessible blocks.
                </StyledListItem>
              </ol>
            </StyledListItem>
            <PlinthImgContainer>
              <WaitingareasImageOne />
            </PlinthImgContainer>
            <StyledListItem style={{ fontWeight: "700", paddingTop: "24px" }}>
              In both circumstances, the waiting room should include the
              following basic amenities:
            </StyledListItem>
            <ol style={{ paddingRight: "2.5rem" }} type="i">
              <StyledListItem>A bench or seating area.</StyledListItem>
              <StyledListItem>Plugs for charging and power.</StyledListItem>
              <StyledListItem>Dust bins.</StyledListItem>
              <StyledListItem>A fan or an air conditioner.</StyledListItem>
              <StyledListItem>
                A drinking water dispenser can be provided in a sanitary and
                non-contaminated position, away from wash basins, dust bins, and
                so on, if it is a common lobby.
              </StyledListItem>
              <PlinthImgContainer >
                <WaitingareasImageTwo />
              </PlinthImgContainer>
            </ol>
            <StyledListItem style={{ fontWeight: "700", paddingTop: "24px" }}>
              A luggage deposit counter can be put in the common lobbies of
              transit-oriented public bathrooms/ toilets in prime locations.
            </StyledListItem>
          </ol>
        </div>
      </UnOrderList>
    </ReportContainer>
  );
}

export default WaitareaLobby;
