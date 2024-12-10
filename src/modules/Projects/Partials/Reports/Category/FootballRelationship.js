import React from "react";
import CampSiteImg from "../../../../../assets/Icons/Chapter1Img/CampSiteImg";
import MarketImg from "../../../../../assets/Icons/Chapter1Img/MarketImg";
import Seat12Img from "../../../../../assets/Icons/Chapter1Img/Seat12Img";
import SeatImg1 from "../../../../../assets/Icons/Chapter1Img/seatImg1";
import SeatImg2 from "../../../../../assets/Icons/Chapter1Img/SeatImg2";
import SeatImg3 from "../../../../../assets/Icons/Chapter1Img/SeatImg3";
import SeatImg5 from "../../../../../assets/Icons/Chapter1Img/SeatImg5";
import SeatImg6 from "../../../../../assets/Icons/Chapter1Img/SeatImg6";
import SeatImg7 from "../../../../../assets/Icons/Chapter1Img/SeatImg7";
import SeatImg8 from "../../../../../assets/Icons/Chapter1Img/SeatImg8";
import SeatImg4 from "../../../../../assets/Icons/SeatImg11";
import {
  ImageContainer,
  ReportsHeading,
  ReportsSubHeading
} from "../../../../Projects/Partials/Reports/Styles";

function FootballRelationship({ selectedChapter, campsiteData }) {
  const typeName = selectedChapter || {};

  return (
    <div>
      <ReportsHeading>
        Footfall relationship with number of seats
      </ReportsHeading>
      <ReportsSubHeading>
        The number of the cubicles and urinals in each toilet depends on the
        footfall the particular toilet receives.
      </ReportsSubHeading>
      {selectedChapter?.toLowerCase().trim() === "commercial area" && (
        <ImageContainer>
          <SeatImg1 />
        </ImageContainer>
      )}
      {selectedChapter?.toLowerCase().trim() === "transit area" && (
        <ImageContainer>
          <SeatImg2 />
        </ImageContainer>
      )}

      {selectedChapter?.toLowerCase().trim() === "event linked toilets" &&
        campsiteData ? (
        <ImageContainer>
          <CampSiteImg />
        </ImageContainer>
      ) : (
        selectedChapter?.toLowerCase().trim() === "event linked toilets" && (
          <ImageContainer>
            <SeatImg3 />
          </ImageContainer>
        )
      )}

      {selectedChapter?.toLowerCase().trim() === "institutional areas" && (
        <ImageContainer>
          <SeatImg4 />
        </ImageContainer>
      )}

      {selectedChapter?.toLowerCase().trim() === "market" && (
        <ImageContainer>
          <MarketImg />
        </ImageContainer>
      )}

      {selectedChapter?.toLowerCase().trim() === "hospitals" && (
        <ImageContainer>
          <SeatImg5 />
        </ImageContainer>
      )}

      {selectedChapter?.toLowerCase().trim() ===
        "public and semi public area" && (
          <ImageContainer>
            <SeatImg6 />
          </ImageContainer>
        )}

      {selectedChapter?.toLowerCase().trim() ===
        "paratransit location & parking area" && (
          <ImageContainer>
            <SeatImg7 />
          </ImageContainer>
        )}

      {selectedChapter?.toLowerCase().trim() === "open area" && (
        <ImageContainer>
          <SeatImg8 />
        </ImageContainer>
      )}

      {selectedChapter?.toLowerCase().trim() === "parks and playground" && (
        <ImageContainer>
          <Seat12Img />
        </ImageContainer>
      )}

      {selectedChapter?.toLowerCase().trim() === "beaches" && (
        <ImageContainer>
          <Seat12Img />
        </ImageContainer>
      )}
    </div>
  );
}

export default FootballRelationship;
