import React from "react";
import CongratsImg from "../../../../assets/Icons/CongratsImg";
import {
  CongratsContainer,
  CongratsParaText,
  CongratsText,
} from "./StyleComponent";

function Congratulations() {
  return (
    <CongratsContainer>
      <CongratsText>Congratulations !</CongratsText>
      <CongratsParaText>You have completed all the questions</CongratsParaText>
      <div>
        <CongratsImg />
      </div>
    </CongratsContainer>
  );
}

export default Congratulations;
