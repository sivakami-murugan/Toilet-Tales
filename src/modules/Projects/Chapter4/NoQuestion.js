import React from "react";
import { useDispatch } from "react-redux";
import CongratsImg from "../../../assets/Icons/CongratsImg";
import { CreateChapterFour } from "../../../redux/Actions/ProjectsAction";
import {
  CongratsContainer,
  CongratsParaText,
  CongratsText,
} from "../Chapter3/Styles";
import { ActionBoxReportContainer, CreateNextButton } from "../Styles";

function NoQuestion({ onClose, onClick, setViewButton, projectId, chapterId }) {
  const dispatch = useDispatch();

  const handleNext = async () => {
    const projectData = { status: true };
    try {
      const response = await dispatch(CreateChapterFour(projectId, chapterId, projectData));
      if (response?.data?.success) {
        if (onClick) onClick();
        setViewButton(true);
        onClose()
      } else {
        console.error("Failed to update status to complete.");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
    if (onClick) {
      onClick();
      setViewButton(true);
    }
  };

  return (
    <CongratsContainer>
      <CongratsText style={{ marginBottom: "15px" }}>
        No Questions for Chapter 4{" "}
      </CongratsText>
      <CongratsParaText>Go ahead and generate your Report</CongratsParaText>
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

export default NoQuestion;
