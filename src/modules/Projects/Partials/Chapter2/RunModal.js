import { Box, IconButton, Modal } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../../../assets/Icons/BackArrowIcon";
import CloseIcon from "../../../../assets/Icons/CloseIcon";
import {
  CreateChapterTwo,
  getChapterTwoData,
} from "../../../../redux/Actions/ProjectsAction";
import {
  ActionBoxContainer,
  CreateButton,
  ProjectTitle,
  RunModalBox,
  StyledButton,
} from "../../Styles";
import Congratulations from "./Congratulations";
import Focus from "./Focus";
import Question from "./Question";

function ChapterRunModal({
  open,
  onClose,
  chapterId,
  projectId,
  handleGenerateReport,
  questionList,
  setQuestionList,
}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [projectTitle, setProjectTitle] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const userId = localStorage.getItem("userId");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFocus, setIsFocus] = useState(true);
  const inputRef = useRef(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false); // Track if an option is selected
  const navigate = useNavigate();

  useEffect(() => {
    if (isFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocus]);

  useEffect(() => {
    const getChapterQuestions = async () => {
      const response = await dispatch(getChapterTwoData({ chapterId }));
      if (response.data?.code === 401) {
        navigate("/auth");
      }
      if (response?.data?.success) {
        setQuestionList(response?.data?.data?.questions || []);
      } else {
        setQuestionList([]);
        setError(response.data?.message);
      }
    };

    getChapterQuestions();
  }, [chapterId, dispatch]);
  const [othersValue, setOthersValue] = useState("");

  const handleOptionChange = (updatedOptions, questionIndex, textValue) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = updatedOptions;
    setOthersValue(textValue);
    setSelectedOptions(newSelectedOptions);
    const hasOptionsSelected = updatedOptions && updatedOptions.length > 0;
    const hasTextValue = textValue && textValue.trim() !== "";

    if (hasOptionsSelected || hasTextValue) {
      setIsOptionSelected(true);
    } else {
      setIsOptionSelected(false);
    }
  };

  const onTextFieldChange = (e) => {
    setProjectTitle(e.target.value);
  };

  const handleSubmit = async () => {
    const statusValue = currentQuestionIndex === questionList.length - 1;

    const selectedOptionId = selectedOptions[currentQuestionIndex];
    if (!selectedOptionId || selectedOptionId.length === 0) {
      setError("Please select an option before proceeding.");
      return;
    }
    const projectData = {
      chapterId,
      projectId,
      userId,
      questionId: questionList[currentQuestionIndex]?.id,
      optionId: Array.isArray(selectedOptionId)
        ? selectedOptionId
        : [selectedOptionId],
      values: othersValue ? [othersValue] : [""],
      status: statusValue,
    };

    try {
      const response = await dispatch(
        CreateChapterTwo(projectId, chapterId, projectData)
      );

      if (response?.data?.code === 401) {
        navigate("/auth");
      }

      if (response?.data?.success) {
        setIsSuccess(true);
        setError("");
        setOthersValue("");
      } else {
        setError(response?.data?.message || "An error occurred");
      }
    } catch (error) {
      setError("Failed to submit answer. Please try again.");
    }
  };

  const handleNext = async () => {
    const statusValue = currentQuestionIndex === questionList.length - 1;
    setError("");
    if (isFocus) {
      setIsFocus(false);
      return;
    }

    if (currentQuestionIndex === questionList.length - 1) {
      await handleSubmit();
      return;
    } else {
      const selectedOptionId = selectedOptions[currentQuestionIndex];
      if (!selectedOptionId || selectedOptionId.length === 0) {
        setError("Please select an option before proceeding.");
        return;
      }
      const projectData = {
        chapterId,
        projectId,
        userId,
        questionId: questionList[currentQuestionIndex]?.id,
        optionId: Array.isArray(selectedOptionId)
          ? selectedOptionId
          : [selectedOptionId],
        values: othersValue ? [othersValue] : [""],
        status: statusValue,
      };

      try {
        const response = await dispatch(
          CreateChapterTwo(projectId, chapterId, projectData)
        );
        if (response?.data?.success) {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
          setError("");
          setOthersValue("");
        } else {
          setError(response?.data?.message || "An error occurred");
        }
      } catch (error) {
        setError("Failed to submit answer. Please try again.");
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
    if (isSuccess) setIsSuccess(false);
  };

  const handleGenerateReportClick = () => {
    if (isSuccess) {
      handleGenerateReport(chapterId);
      setIsSuccess(false);
      setCurrentQuestionIndex(0);
      setSelectedOptions([]);
      setProjectTitle("");
    } else {
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <RunModalBox>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <ProjectTitle
          variant="h6"
          value={projectTitle}
          onChange={onTextFieldChange}
          label="Enter Project Title"
          fullWidth
          margin="normal"
          inputRef={inputRef}
        />
        {!isSuccess ? (
          isFocus ? (
            <Focus />
          ) : (
            <Box>
              {questionList.length > 0 ? (
                <Question
                  questionData={questionList[currentQuestionIndex]}
                  selectedOption={selectedOptions[currentQuestionIndex] || []}
                  onOptionChange={(updatedOptions, questionIndex, textValue) =>
                    handleOptionChange(
                      updatedOptions,
                      currentQuestionIndex,
                      textValue
                    )
                  }
                  othersValue={othersValue}
                  questionIndex={currentQuestionIndex}
                  setIsOptionSelected={setIsOptionSelected}
                />
              ) : (
                <p>No questions available</p>
              )}
            </Box>
          )
        ) : (
          <Congratulations />
        )}
        {error && <Box sx={{ color: "red", marginBottom: 2 }}>{error}</Box>}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionBoxContainer>
            <StyledButton
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              startIcon={<BackArrowIcon />}
            >
              Previous
            </StyledButton>

            <CreateButton
              onClick={isSuccess ? handleGenerateReportClick : handleNext}
              variant="contained"
              color="primary"
              disabled={!isFocus && !isOptionSelected}
            >
              {isSuccess
                ? "Generate Report"
                : isFocus
                  ? "Next"
                  : currentQuestionIndex === questionList.length - 1
                    ? "Submit"
                    : "Next"}
            </CreateButton>
          </ActionBoxContainer>
        </Box>
      </RunModalBox>
    </Modal>
  );
}

export default ChapterRunModal;
