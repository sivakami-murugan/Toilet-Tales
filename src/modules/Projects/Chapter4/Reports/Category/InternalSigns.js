import React from "react";
import NoteImgs from "../../../../../assets/Icons/ChapterFourImages/NoteImgs";
import OneImages from "../../../../../assets/Icons/ChapterFourImages/OneImages";
import OneImagesTwo from "../../../../../assets/Icons/ChapterFourImages/OneImagesTwo";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function InternalSigns({ answerData }) {
  return (
    <>
      <ReportsHeading>4.1 Internal Signages</ReportsHeading>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "15px" }}>
        Have you ever had trouble locating the toilet block? People go overboard
        with signage designs, which leads to confusion. Confusion might also be
        caused by a lack of signage. Proper demarcations must be established as
        a first step in gaining access to a toilet.
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
        Numbers to be provided: One signage board per cubicle or block,
        depending on the number of blocks.
      </ReportsSubHeading>
      {answerData?.numberOfMen === 1 && answerData?.numberOfWomen === 1 ? (
        <>
          <ol
            style={{
              marginLeft: "20px",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            <StyledListItem>
              Signages indicating gender segregated toilets and universally
              accessible toilets must be put in easily visible locations.
            </StyledListItem>
            <StyledListItem>
              If there is just one cubicle, the signage must be posted at the
              door.
            </StyledListItem>
            <StyledListItem>
              It must be positioned at eye level and at a height of 1600-1800
              mm.
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <OneImages />
          </PlinthImgContainer>
        </>
      ) : (
        <>
          <ol
            style={{
              marginLeft: "20px",
              marginTop: "15px",
              marginBottom: "20px",
            }}
          >
            <StyledListItem>
              Signages indicating gender segregated toilets and universally
              accessible toilets must be put in easily visible locations.
            </StyledListItem>
            <StyledListItem>
              If there are many cubicles and more than one block (segregated),
              the signage must be placed at the entrance to the block from the
              lobby or hallway.{" "}
            </StyledListItem>
          </ol>
          <PlinthImgContainer>
            <OneImagesTwo />
          </PlinthImgContainer>
        </>
      )}

      <OptionHeadings> Note :</OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          All signage must be in both the local and English languages.{" "}
        </StyledListItem>
        <StyledListItem>
          Signs must be clear and legible. The lettering must be 150mm (6
          inches) tall.
        </StyledListItem>
        <StyledListItem>
          The background of the signage must be a dark colour, with the letters
          and infographics in a lighter colour (vice versa).
        </StyledListItem>
        <StyledListItem>
          Standard and simple infographics must be used.
        </StyledListItem>
        <StyledListItem>
          Simple and direct words, such as women, men, and children, must be
          used, rather than synonyms or acronyms.
        </StyledListItem>
      </ol>
      <PlinthImgContainer style={{ marginBottom: "50px" }}>
        <NoteImgs />
      </PlinthImgContainer>
    </>
  );
}

export default InternalSigns;
