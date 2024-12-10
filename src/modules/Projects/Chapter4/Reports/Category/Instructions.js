import React from "react";
import InstructionImgTwo from "../../../../../assets/Icons/ChapterFourImages/InstructionImgTwo";
import InstructionsImg from "../../../../../assets/Icons/ChapterFourImages/InstructionsImg";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Instructions() {
  return (
    <div>
      <ReportsHeading>4.2 Instructions</ReportsHeading>
      <OptionHeadings> Why Focus ?</OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "15px" }}>
        Have you ever been stumped in front of a sensory-activated wash basin?
        Have you ever wondered why individuals do not flush after defecating or
        why they throw tissue paper on the floor rather than putting it in the
        dust bin? Toilet habits should be instilled, particularly in public
        restrooms. People have a tendency to use facilities recklessly because
        they do not own them. As a result, providing instructions for even the
        most basic facilities can help influence toilet habits.
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "20px" }}>
        Instructions must be displayed in the toilet informing users on proper
        toilet usage and how to keep the toilet clean after use for the next
        user. It has to be displayed as boards as well as adjacent to each
        toilet accessory such as the flush button, dust bin, wash basin, soap
        dispenser, and so on. The instructions must include Dos and Don'ts of
        each element/ Accessory.
      </ReportsSubHeading>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          Every block must have two display boards demonstrating proper toilet
          usage and how to maintain personal hygiene within a public toilet.
        </StyledListItem>
        <StyledListItem>
          Every cubicle must have instructions for proper use of commode use
          (Dos and Don'ts).
        </StyledListItem>
        <StyledListItem>
          Instructions for the use of the following elements must be provided:
          <b>
            Toilet flush button, Health faucet, Door handle, Grab rail, soap
            dispenser, Hand dryer, Wash Basin, Dust bins, sanitary napkin
            vending machines, incinerator, Tissue paper/ napkin dispenser, door
            / wall hooks, and door locks.
          </b>
        </StyledListItem>
        <StyledListItem>
          In addition to the above listed boards, female toilets must contain
          signage displaying proper disposal of sanitary products.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <InstructionsImg />
      </PlinthImgContainer>

      <OptionHeadings> Specifications</OptionHeadings>
      <ol
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "20px" }}
      >
        <StyledListItem>
          The instructions to operate each of the elements must be placed right
          next to the respective elements.
        </StyledListItem>
        <StyledListItem>
          The display boards indicating general hygiene and practice must be
          kept on the corridor/ hallway of each block.
        </StyledListItem>
        <StyledListItem>
          Individual instruction on usage of the commode must be placed next
          behind the toilet door facing the user while using the commode.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <InstructionImgTwo />
      </PlinthImgContainer>
      <ol
        start={"4"}
        style={{ marginLeft: "20px", marginTop: "15px", marginBottom: "50px" }}
      >
        <StyledListItem>
          Instructions for each element must be printed on water-resistant paper
          and adhered to the element or wall.
        </StyledListItem>
        <StyledListItem>
          The display boards in the corridor must be printed on flex board and
          attached to the walls. The boards must be at least 420 mm x 594 mm in
          size.
        </StyledListItem>
        <StyledListItem>
          All instructions must be written in the local language.
        </StyledListItem>
        <StyledListItem>
          Each instruction must be accompanied by illustrations or standard
          infographics. It must be simple and straightforward. If mascots or
          cartoon figures are
        </StyledListItem>
      </ol>
    </div>
  );
}

export default Instructions;
