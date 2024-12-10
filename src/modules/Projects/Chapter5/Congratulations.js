import React from "react";
import CongratsImg from "../../../assets/Icons/CongratsImg";
import {
  CongratsContainer,
  CongratsParaText,
  CongratsText,
} from "../Chapter3/Styles";
import { ActionBoxReportContainer, CreateNextButton } from "../Styles";

function Congratulations({ onClick, setViewButton }) {
  const handleNext = () => {
    if (onClick) {
      onClick();
      setViewButton(true);
    }
  };

  return (
    <CongratsContainer>
      <CongratsText style={{ marginBottom: "15px" }}>
        Congratulations !
      </CongratsText>
      <CongratsParaText>You have completed all the questions</CongratsParaText>
      <div>
        <CongratsImg />
      </div>
      <div>
        <ActionBoxReportContainer>
          <CreateNextButton onClick={handleNext}>
            Generate Report
          </CreateNextButton>
        </ActionBoxReportContainer>
      </div>
    </CongratsContainer>
  );
}

export default Congratulations;
