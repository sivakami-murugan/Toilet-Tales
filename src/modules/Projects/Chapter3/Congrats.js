import React from "react";
import CongratsImg from "../../../assets/Icons/ChapterThreeImages/CongratsImg";
import { CongratsContainer, CongratsParaText, CongratsText } from "./Styles";

function Congrats() {
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

export default Congrats;
