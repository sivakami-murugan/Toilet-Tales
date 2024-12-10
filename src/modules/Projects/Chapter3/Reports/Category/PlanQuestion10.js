import React from "react";
import LobbyImg1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/LobbyImg1";
import LobbyImg2 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/LobbyImg2";
import {
  OptionHeadings,
  PlinthImgContainer,
  SubList,
} from "../../../Partials/Reports/Styles";

function PlanQuestion10() {
  return (
    <div>
      <OptionHeadings>2.Waiting area/ lobby</OptionHeadings>
      <OptionHeadings style={{ marginLeft: "20px", marginTop: "15px" }}>
        1.Waiting areas can be provided in two ways:{" "}
      </OptionHeadings>
      <ol>
        <SubList>
          i. Either a shared waiting area or a lobby that leads to segregated
          toilet block entrances.
        </SubList>
        <SubList>
          ii. Separate waiting areas for male, female, and universally
          accessible blocks.
        </SubList>
      </ol>
      <PlinthImgContainer>
        <LobbyImg1 />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginLeft: "20px", marginTop: "15px" }}>
        2.In both circumstances, the waiting room should include the following
        basic amenities:
      </OptionHeadings>
      <ol>
        <SubList>i. A bench or seating area.</SubList>
        <SubList>ii. Plugs for charging and power.</SubList>
        <SubList>iii. Dust bins.</SubList>
        <SubList>iv. A fan or an air conditioner.</SubList>
        <SubList>
          v. A drinking water dispenser can be provided in a sanitary and
          non-contaminated position, away from wash basins, dust bins, and so
          on, if it is a common lobby.
        </SubList>
      </ol>
      <PlinthImgContainer>
        <LobbyImg2 />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginLeft: "20px", marginBottom: "15px" }}>
        3. A luggage deposit counter can be put in the common lobbies of
        transit-oriented public bathrooms/ toilets in prime locations.
      </OptionHeadings>
    </div>
  );
}

export default PlanQuestion10;
