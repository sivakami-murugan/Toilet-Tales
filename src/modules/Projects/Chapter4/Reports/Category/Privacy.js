import React from "react";
import DoorLockImg from "../../../../../assets/Icons/ChapterFourImages/DoorLockImg";
import DoorLockImgTwo from "../../../../../assets/Icons/ChapterFourImages/DoorLockImgTwo";
import RoofImg from "../../../../../assets/Icons/ChapterFourImages/RoofImg";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Privacy() {
  return (
    <div>
      <ReportsHeading>4.5 Privacy</ReportsHeading>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <div style={{ marginBottom: "30px" }}>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
          Have you ever thought why some people, particularly women, avoid using
          public toilets due to a lack of privacy? Women employing other women
          to guard their privacy while using the facilities is a typical
          occurrence in India. Either they are holding the door for them from
          the other side because the door is unlockable, or they do not trust
          the door's lockability. Women are constantly on the lookout for holes
          and ventilators that could disrupt their privacy. Many people do not
          utilize the facilities because they might be seen defecating from the
          neighboring building. Who should be held responsible for the
          ventilator's placement? Men, like women, experience difficulties. For
          example, the placement of urinals does not always provide privacy.
        </ReportsSubHeading>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
          Proper planning and provision of elements is required to ensure
          adequate privacy to toilet users at all levels, as well as making it
          safe and accessible.
        </ReportsSubHeading>
      </div>
      <OptionHeadings> Partition wall :</OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          Individual cubicles inside gender-segregated blocks can have partition
          walls with openings above and below. The height of the partition wall
          should not be less than 2.1m above the finished floor level. It is
          desirable to have a full-length partition wall.
        </StyledListItem>
        <StyledListItem>
          In the case of adjacent men's, women's, and universally accessible
          restrooms, the partition walls of each cubicle shall be full height to
          prevent peeping into other cubicles.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <RoofImg />
      </PlinthImgContainer>
      <OptionHeadings>Position of door and ventilators :</OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          It is mandatory to have a lockable door and an openable ventilator/
          window per cubicle.
        </StyledListItem>
        <StyledListItem>
          Bottom level of the ventilator must be placed at a height of 2400 mm
          from the finished ground level.
        </StyledListItem>
        <StyledListItem>
          No ventilators or openings must be provided in the partition walls.
          ventilators must be always placed at walls opening to the outside.
        </StyledListItem>
        <StyledListItem>
          If there are surrounding buildings with windows facing the toilets,
          the toilet ventilators must be located such that there is no direct
          view of the cubicle. If there are higher structures nearby, a sunshade
          or an extended sill can be used to hide the view of the cubicle.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <DoorLockImg />
      </PlinthImgContainer>
      <OptionHeadings>
        Position of urinals : (Number of urinals as per design.)
      </OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          Urinals must not be positioned near the entrance or at a location
          where the urinal can be seen straight from the corridor when the door
          is opened
        </StyledListItem>
        <StyledListItem>
          It can be positioned between wash basins and toilet cubicles.
        </StyledListItem>
        <StyledListItem>
          Modesty screens of not less than 300 mm X 800 mm must be provided on
          both sides for urinals. No sides should be left uncovered. If one
          urinal is installed in a corner, a screen is only necessary on the
          other side.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <DoorLockImgTwo />
      </PlinthImgContainer>
    </div>
  );
}

export default Privacy;
