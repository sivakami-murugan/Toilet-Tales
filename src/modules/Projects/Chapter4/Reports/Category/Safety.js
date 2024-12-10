import React from "react";
import CcctvImg from "../../../../../assets/Icons/ChapterFourImages/CcctvImg";
import CleanerImg from "../../../../../assets/Icons/ChapterFourImages/CleanerImg";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Safety() {
  return (
    <div>
      <ReportsHeading>4.7 Safety and Surveillance</ReportsHeading>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <div style={{ marginBottom: "30px" }}>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
          Have you ever been reluctant to use public toilets due to safety
          concerns? Many women are afraid of being attacked by strangers,
          particularly men, while using the facility. Another major concern for
          users is that others may peek in while they are inside a cubicle.
          These are all legitimate concerns about using public toilets.
        </ReportsSubHeading>
      </div>
      <OptionHeadings> Partition wall :</OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          The compound and the toilet entry must be secured with a robust
          surveillance system.
        </StyledListItem>
        <StyledListItem>
          One each at the entrance and rear side of the compound and one at the
          entrance door. If any other side demands surveillance, cameras must be
          provided accordingly.
        </StyledListItem>
        <StyledListItem>
          It must be placed in such a sway that it does not compromise the
          privacy of the users.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <CcctvImg />
      </PlinthImgContainer>
      <OptionHeadings> Staff :</OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
        The staff who are involved in maintenance and operation of the toilet
        such as Supervisor, Caretaker, and cleaner can offer surveillance to the
        toilet and their presence shall make the users safe.
      </ReportsSubHeading>
      <ol
        style={{ marginLeft: "30px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          <b>Supervisor:</b> 1 supervisor for a group of 4 toilet complex or
          more depending on the number of seats and supervision schedule The
          role of the supervisor is to regularly (at least once in two days)
          inspect the toilet and check the cleanliness and stocks of cleaning
          supplies. ).
        </StyledListItem>
        <StyledListItem>
          <b> Caretaker/ Janitor:</b> Each toilet must have 1 caretaker who is
          available at the toilet venue throughout the operational hours of the
          toilet. There can be multiple caretakers working on shift basis in
          case the toilet's operational hours are more than 10 hours a day.
          Caretaker will be responsible for the following aspects :
        </StyledListItem>
        <ol>
          <StyledListItem>
            Overall O&M and upkeep of the facilities
          </StyledListItem>
          <StyledListItem>
            Regulate the use of a “first come first serve basis”
          </StyledListItem>
          <StyledListItem>
            Regulate the use of a “first come first serve basis” Receipt and
            issue of cleaning materials and equipment
          </StyledListItem>
          <StyledListItem>
            Collection of user charges (if applicable)
          </StyledListItem>
          <StyledListItem>
            Maintaining the cleaning schedule and monitoring
          </StyledListItem>
          <StyledListItem>Maintaining the complaint register</StyledListItem>
        </ol>
        <StyledListItem>
          <b> Cleaner:</b> 1 supervisor for a group of 4 toilet complex or more
          depending on the number of seats and supervision schedule The role of
          the supervisor is to regularly (at least once in two days) inspect the
          toilet and check the cleanliness and stocks of cleaning supplies. ).
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <CleanerImg />
      </PlinthImgContainer>
      <OptionHeadings>Lockable fixtures :</OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
        Not having proper lockable fixtures or faulty fixtures is one reason for
        safety concern. It also affects one's privacy inside a cubicle.
      </ReportsSubHeading>
    </div>
  );
}

export default Safety;
