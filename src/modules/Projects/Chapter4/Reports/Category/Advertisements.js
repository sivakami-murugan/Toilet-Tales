import React from "react";
import AdverstingImg from "../../../../../assets/Icons/ChapterFourImages/AdverstingImg";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
  SubList,
} from "../../../Partials/Reports/Styles";

function Advertisements() {
  return (
    <div>
      <ReportsHeading>4.4 Advertisements</ReportsHeading>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <div style={{ marginBottom: "30px" }}>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
          The toilet is the most intimate place where one can be alone. Any
          advertisements posted will have a direct impact on a person.
          Furthermore, most toilets degenerate within a few months of operation,
          with insufficient funds to purchase cleaning products or hire a
          cleaning staff. To be self-sufficient, a toilet must generate revenue.
          Advertisements can be a good source of revenue for public toilets.
        </ReportsSubHeading>
        <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
          In accordance with design and space availability, advertisement boards
          should be placed on visible surfaces to generate revenue for the
          toilet, making it self-sustaining.
        </ReportsSubHeading>
      </div>
      <OptionHeadings> Note :</OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          Advertisement boards must be installed in the following places:
        </StyledListItem>
        <ol>
          <SubList>i. On the outside walls</SubList>
          <SubList>
            ii. As hoardings on a pole outside the toilet without obstructing
            access to the toilet.
          </SubList>
          <SubList>iii. Along the lobby and corridor walls.</SubList>
        </ol>
        <StyledListItem>
          No advertisement board shall cover the ventilators/windows, doors, or
          any perforations when put on the external and internal walls of the
          toilet.
        </StyledListItem>
        <StyledListItem>
          When designing, advertisement boards must be assigned a fixed
          location.
        </StyledListItem>
        <StyledListItem>
          The affixing of bills, advertisements, posters, and announcements on
          the wall is prohibited.
        </StyledListItem>
        <StyledListItem>
          All advertisement boards must have adequate lighting.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <AdverstingImg />
      </PlinthImgContainer>
    </div>
  );
}

export default Advertisements;
