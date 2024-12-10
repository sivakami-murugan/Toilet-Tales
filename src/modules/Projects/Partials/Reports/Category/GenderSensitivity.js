import React from "react";
import GenderImageThree from "../../../../../assets/Icons/GenderImageThree";
import GenderImgOne from "../../../../../assets/Icons/GenderImgOne";
import GenderImgTwo from "../../../../../assets/Icons/GenderImgTwo";
import PieChartImage from "../../../../../assets/Icons/PieChartImage";
import {
  ImageContainer,
  ReportsHeading,
  ReportsListContainer,
  ReportsSubHeading,
  ReportsSubItems
} from "../Styles";

function GenderSensitivity() {
  return (
    <div>
      <ReportsHeading>Gender Sensitivity</ReportsHeading>
      <ReportsSubHeading>
        Gender segregation in public toilets is a serious concern. Decisions
        must be made carefully, with no gender left out. The comfort of both
        genders must be addressed. Some situations necessitate a unisex
        universally accessible toilet, whilst others necessitate a male, female,
        and universally accessible toilet. Even though the former alternative is
        preferable, the nature of users and other contextual factors must be
        carefully studied before making a decision.
      </ReportsSubHeading>
      <ImageContainer>
        <GenderImgOne />
      </ImageContainer>
      <div>
        <ReportsSubItems>Context Sensitive</ReportsSubItems>
        <ReportsSubHeading>
          The seats must be provided in the proportion of{" "}
        </ReportsSubHeading>
        <ImageContainer>
          <PieChartImage />
        </ImageContainer>
        <div>
          <ReportsSubHeading>
            Toilets can be segregated in the following ways:
          </ReportsSubHeading>
          <ReportsListContainer>
            <ReportsSubHeading>1.</ReportsSubHeading>
            <ReportsSubHeading>
              No gender segregation of toilets with a single block of toilets,
              or a toilet designated as unisex universally accessible toilets.
              If more than one cubicle is provided, at least one of them must be
              universally accessible (for the elderly and physically impaired).
            </ReportsSubHeading>
          </ReportsListContainer>
          <ImageContainer>
            <GenderImgTwo />
          </ImageContainer>
        </div>

        <div>
          <ReportsListContainer>
            <ReportsSubHeading>2.</ReportsSubHeading>
            <ReportsSubHeading>
              Toilets can be classified as male, female, or universally
              accessible (available to users of all physical abilities and
              genders). Here, the physically challenged cubicle is being made
              available to all users of any age.
            </ReportsSubHeading>
          </ReportsListContainer>
          <ImageContainer>
            <GenderImageThree />
          </ImageContainer>
        </div>
        <div>
          <ReportsListContainer>
            <ReportsSubHeading>3.</ReportsSubHeading>
            <ReportsSubHeading>
              Under any circumstances, toilets shall not be segregated based on
              binary gender.
            </ReportsSubHeading>
          </ReportsListContainer>
          <ImageContainer>
            <GenderImgTwo />
          </ImageContainer>
        </div>
      </div>
    </div>
  );
}

export default GenderSensitivity;
