import React from "react";
import InstructionsFisrtImage from "../../../../../assets/Icons/Chapter5/InstructionsFisrtImage";
import InstructionsSecondImage from "../../../../../assets/Icons/Chapter5/InstructionsSecondImage";
import {
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function Instructions() {
  return (
    <div style={{ padding: "26px 0px" }}>
      <ReportsHeading>5.22 Instructions</ReportsHeading>
      <OptionHeadings style={{ paddingTop: "32px" }}>
        {" "}
        Why Focus ?
      </OptionHeadings>
      <ReportsSubHeading style={{ marginLeft: "20px", marginTop: "15px" }}>
        Instructions displayed in the toilet informing users on proper toilet
        usage and how to keep the toilet clean after use for the next user. It
        has to be displayed as boards as well as adjacent to each toilet
        accessory such as the flush button, dust bin, wash basin, soap
        dispenser, and so on. The instructions must include Dos and Don'ts of
        each element/ Accessory.
      </ReportsSubHeading>

      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          Instructions for the use of the following elements must be provided:
          Toilet flush button, Health faucet, Door handle, Grab rail, soap
          dispenser, Hand dryer, Wash Basin, Dust bins, sanitary napkin vending
          machines, incinerator, Tissue paper/ napkin dispenser, door / wall
          hooks, and door locks.
        </StyledListItem>
        <StyledListItem>
          Display boards demonstrating proper toilet usage and how to maintain
          personal hygiene within a public toilet must be kept.
        </StyledListItem>
        <StyledListItem>
          Instructions for proper use of commode use (Dos and Don'ts) must be
          displayed.
        </StyledListItem>
        <StyledListItem>
          The instructions to operation must be placed right next to the
          respective fixtures.
        </StyledListItem>
        <StyledListItem>
          Individual instruction on usage of the commode must be placed behind
          the toilet door facing the user while using the commode.
        </StyledListItem>{" "}
        <StyledListItem>
          Instruction boards should be positioned with consideration for
          wheelchair users, the height from the floor to the eyes of an adult
          seated in a wheelchair is approximately 1190mm.
        </StyledListItem>
        <PlinthImgContainer style={{ padding: "20px 0px" }}>
          <InstructionsFisrtImage />
        </PlinthImgContainer>
        <StyledListItem>
          To accommodate visually and hearing impaired users, instruction boards
          should be installed, incorporating Braille and audible signage
          (announcements).
        </StyledListItem>
        <StyledListItem>
          Signs should be designed and located so that they are easily legible
          by using suitable letter size (not less than 20 mm high).
        </StyledListItem>
        <StyledListItem>
          To assist individuals with limited vision, utilize contrasting color
          schemes. Those with limited vision may discern between dark and bright
          colors, shades, and variations in primary colors.
        </StyledListItem>
        <PlinthImgContainer style={{ padding: "20px 0px" }}>
          <InstructionsSecondImage />
        </PlinthImgContainer>
      </ol>
    </div>
  );
}

export default Instructions;
