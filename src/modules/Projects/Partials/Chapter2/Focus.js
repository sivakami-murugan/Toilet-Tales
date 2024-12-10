import React from "react";
import FocusImg from "../../../../assets/Icons/FocusImg";
import {
  CongratsContainer,
  CongratsParaText,
  CongratsText,
  FocusContainer,
} from "./StyleComponent";

function Focus() {
  return (
    <CongratsContainer>
      <FocusContainer>
        <FocusImg />
        <CongratsText>Why Focus ?</CongratsText>
        <CongratsParaText>
          Toilets are often placed wherever there is space available, such as on
          footpaths or adjacent to roads. In such instances, the users' safety
          and privacy are constantly compromised. For example, opening a toilet
          door directly into the street. Is a screen or compound wall going to
          fix the problem? What if its makes the toilet more inaccessible? How
          does one design the street-to-toilet interface?
        </CongratsParaText>
      </FocusContainer>
    </CongratsContainer>
  );
}

export default Focus;
