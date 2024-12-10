import React from "react";
import TrashImgOne from "../../../../../assets/Icons/ChapterFourImages/TrashImgOne";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Hygine() {
  return (
    <div>
      <ReportsHeading>4.8 Cleanliness and hygiene</ReportsHeading>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <div style={{ marginBottom: "20px" }}>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
          Why do people choose to control their urge to relieve themselves in
          public toilets? Why do individuals avoid using public restrooms? Are
          dirty toilets and unhygienic environments the primary reasons why
          people do not use public toilets in the first place? What can be done
          to keep it clean and sanitary? Can the habits be induced through
          design?
        </ReportsSubHeading>
      </div>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <div style={{ marginBottom: "20px", marginLeft: "20px" }}>
        <ReportsSubHeading style={{ marginTop: "20px" }}>
          The term “cleaning” refers to all activities related to the provision
          and use of all cleaning equipment and consumables for predefined
          activities and schedules by cleaning staff.
        </ReportsSubHeading>
        <OptionHeadings style={{ marginTop: "20px" }}>
          <b> 1. Public toilets :</b> In public toilets the cleaning cycle is as
          follows:
        </OptionHeadings>
        <ol>
          <StyledListItem>
            <b> 1 cleaning cycle</b> for every <b>8 toilet uses</b> (both men
            and women) per unit
          </StyledListItem>
          <StyledListItem>
            <b> 1 cleaning cycle</b> for every <b>50 urinal uses (men)</b> in
            each unit
          </StyledListItem>
        </ol>
        <PlinthImgContainer>
          <TrashImgOne />
        </PlinthImgContainer>
      </div>
      <div style={{ marginBottom: "20px", marginLeft: "20px" }}>
        <OptionHeadings style={{ marginTop: "20px" }}>
          2. Community Toilets:
        </OptionHeadings>
        <ol>
          <StyledListItem>
            The toilets should be cleaned thrice a day, twice using cleaning
            supplies and once using water. The schedule shall be fixed based on
            the peak hour usage and additional cleaning can be incorporated as
            and when necessary
          </StyledListItem>
          <StyledListItem>
            The caretaker shall ensure that the toilet is regularly cleaned by
            having cleaning schedules.
          </StyledListItem>
          <StyledListItem>
            Periodic, scheduled cleaning may be done during off peak hours so
            that the users are not inconvenienced.
          </StyledListItem>
          <StyledListItem>
            During the cleaning cycle, the entire toilet/urinal should be
            properly cleaned with disinfectants and water, litter should be
            collected and stains must be removed to make it ready for the next
            usage.
          </StyledListItem>
        </ol>
        <PlinthImgContainer>
          <TrashImgOne />
        </PlinthImgContainer>
      </div>
      <OptionHeadings> Monitoring :</OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
        Proper protocol for monitoring can ensure cleanliness and hygiene of a
        public toilet.
      </ReportsSubHeading>
      <OptionHeadings style={{ marginTop: "10px" }}>Awareness :</OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "10px" }}>
        To maintain cleanliness and hygiene in public toilets, users must feel a
        sense of belonging. Users must be made aware of the situation. It is
        possible to induce it in people through design.
      </ReportsSubHeading>
    </div>
  );
}

export default Hygine;
