import React from "react";
import ContextSensitiveImage from "../../../../../assets/Icons/Chapter5/ContextSensitiveImage";
import NumberofUniversallyAccessibleCubiclesImageOne from "../../../../../assets/Icons/Chapter5/NumberofUniversallyAccessibleCubiclesImageOne";
import NumberofUniversallyAccessibleCubiclesImageTwo from "../../../../../assets/Icons/Chapter5/NumberofUniversallyAccessibleCubiclesImageTwo";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function NumberofUniversallyAccessibleCubicles() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>
        5.7 Number of Universally accessible cubicles
      </ReportsHeading>
      <OptionHeadings style={{ paddingTop: "32px" }}>
        Why Focus ?
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "20px", paddingTop: "24px" }}>
        Determining the appropriate number of cubicles must be provided based on
        the context, type and footfall.
      </ReportsSubHeading>
      <ol style={{ paddingRight: "2.5rem" }}>
        <StyledListItem>
          {" "}
          Every toilet must have at least one universally accessible cubicle
        </StyledListItem>
        <StyledListItem>
          If the toilets are gender segregated, one cubicle in each block must
          be a universally accessible toilet.
        </StyledListItem>
        <StyledListItem>
          It is desirable to provide a universally accessible toilet outside of
          the gender-segregated blocks.
        </StyledListItem>
        <StyledListItem>
          Universally accessible cubicles must be provided in all community and
          public toilets.
        </StyledListItem>
      </ol>
      <div>
        <OptionHeadings style={{ paddingTop: "24px" }}>
          Context Sensitive
        </OptionHeadings>
        <ReportsSubHeading style={{ paddingTop: "24px" }}>
          The seats must be provided in the proportion of
        </ReportsSubHeading>
        <PlinthImgContainer style={{ padding: "20px 0px" }}>
          <ContextSensitiveImage />
        </PlinthImgContainer>
        <ReportsSubHeading style={{ marginTop: "20px" }}>
          Toilets can be segregated in the following ways:
        </ReportsSubHeading>
        <ol style={{ paddingRight: "2.5rem" }}>
          <StyledListItem>
            No gender segregation of toilets with a single block of toilets, or
            a toilet designated as unisex universally accessible toilets. If
            more than one cubicle is provided, at least one of them must be
            universally accessible (for the elderly and physically impaired).
          </StyledListItem>
          <PlinthImgContainer style={{ padding: "20px 0px" }}>
            <NumberofUniversallyAccessibleCubiclesImageOne />
          </PlinthImgContainer>
          <StyledListItem>
            Toilets can be classified as male, female, or universally accessible
            (available to users of all physical abilities and genders). Here,
            the physically challenged cubicle is being made available to all
            users of any age.
          </StyledListItem>
          <PlinthImgContainer style={{ padding: "20px 0px" }}>
            <NumberofUniversallyAccessibleCubiclesImageTwo />
          </PlinthImgContainer>
          <StyledListItem>
            Under any circumstances, toilets shall not be segregated based on
            binary gender.
          </StyledListItem>
          <PlinthImgContainer style={{ padding: "20px 0px" }}>
            <NumberofUniversallyAccessibleCubiclesImageOne />
          </PlinthImgContainer>
        </ol>
      </div>
    </div>
  );
}

export default NumberofUniversallyAccessibleCubicles;
