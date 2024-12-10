import { Box, IconButton, Modal, Slider } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import BackArrowIcon from "../../../assets/Icons/BackArrowIcon";
import CloseIcon from "../../../assets/Icons/CloseIcon";
import { CreateChapterFive } from "../../../redux/Actions/ProjectsAction";
import { BoxModal, QuestionHeader } from "../Chapter3/Styles";
import {
  ActionBoxContainer,
  CreateButton,
  HeaderText,
  QuestionText,
  StyledButton,
} from "../Styles";
import Congratulations from "./Congratulations";

const valueLabelFormat = (value) => {
  return `${value}`;
};

function RunModalFive({
  open,
  onClose,
  setViewButton,
  chapterId,
  chapterFiveData,
  projectId,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");
  const questionList = chapterFiveData?.data || [];
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(false);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setError("");
    }
  };

  const handleNext = async () => {
    const projectData = {
      chapterId,
      projectId,
      questionId: questionList[currentQuestionIndex]?.id,
      value: value.toString(),
      status: currentQuestionIndex === questionList.length - 1,
    };

    try {
      const response = await dispatch(
        CreateChapterFive(projectId, chapterId, projectData)
      );
      if (response?.data?.success) {
        if (currentQuestionIndex === questionList.length - 1) {
          setIsCompleted(true);
        } else {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setValue(0);
          setError("");
        }
      } else {
        setError(response?.data?.message || "An error occurred");
      }
    } catch (error) {
      setError("Failed to submit answer. Please try again.");
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <BoxModal>
          <IconButton
            onClick={onClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          {isCompleted ? (
            <div>
              <Congratulations
                onClick={onClose}
                setViewButton={setViewButton}
              />
            </div>
          ) : questionList.length > 0 ? (
            <div>
              <HeaderText>{"Universal Accessibility"}</HeaderText>
              <QuestionHeader>
                Question {questionList[currentQuestionIndex]?.questionNo}
              </QuestionHeader>
              <QuestionText>
                {questionList[currentQuestionIndex]?.question}
              </QuestionText>
              <Slider
                style={{
                  color: "#F49600",
                  width: "300px",
                  paddingTop: "80px",
                }}
                value={Number(value)}
                min={0}
                step={1}
                max={10}
                marks={[...Array(11).keys()].map((i) => ({
                  value: i,
                  label: i.toString(),
                }))}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="discrete-slider"
                sx={{
                  width: 300,
                  color: "#F49600",
                  padding: "20px 0",
                  "& .MuiSlider-mark": {
                    color: "#666",
                  },
                  "& .MuiSlider-markLabel": {
                    marginTop: 4,
                    fontSize: 12,
                  },
                  "& .MuiSlider-thumb": {
                    width: 18,
                    height: 18,
                  },
                  "& .MuiSlider-track": {
                    height: 4,
                  },
                  "& .MuiSlider-rail": {
                    height: 4,
                  },
                }}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          ) : (
            <p>No data available.</p>
          )}

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {!isCompleted && (
              <ActionBoxContainer>
                <StyledButton
                  startIcon={<BackArrowIcon />}
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                >
                  Previous
                </StyledButton>

                <CreateButton
                  onClick={handleNext}
                  variant="contained"
                  color="primary"
                >
                  Next
                </CreateButton>
              </ActionBoxContainer>
            )}
          </Box>
        </BoxModal>
      </Modal>
    </div>
  );
}

export default RunModalFive;
