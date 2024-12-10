import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useEffect } from "react";
import { CustomTextField, HeaderText, QuestionText } from "../Styles";
import { LabelText, QuestionHeader } from "./Styles";

function QuestionComponent({
  questionNo,
  questionText,
  options,
  headerText,
  setOtherTextValue,
  otherTextValue,
  checkedOptions,
  setCheckedOptions,
  showOtherTextBox,
  setShowOtherTextBox,
  questionIndex,
  handleCheckboxChange,
  handleTextFieldChange,
  correctAnswer,
}) {
  useEffect(() => {
    if (correctAnswer?.options) {
      const mappedValues = correctAnswer?.options.reduce((acc, item) => {
        acc[item.id] = true;
        return acc;
      }, {});

      setCheckedOptions((prev) => ({
        ...prev,
        ...mappedValues,
      }));

      if (correctAnswer.otherTextValue) {
        setShowOtherTextBox(true);
        setOtherTextValue(correctAnswer.otherTextValue);
      }
    }
  }, [
    correctAnswer,
    setCheckedOptions,
    setOtherTextValue,
    setShowOtherTextBox,
  ]);

  return (
    <div>
      <HeaderText>{headerText}</HeaderText>
      <QuestionHeader>Question {questionNo}</QuestionHeader>
      <QuestionText>{questionText}</QuestionText>

      <FormGroup
        sx={{
          height: "255px",
          overflowY: "auto",
        }}
      >
        {options?.map((option) => (
          <FormControlLabel
            key={option.id}
            control={
              <Checkbox
                checked={checkedOptions[option.id] || false}
                onChange={(e) => handleCheckboxChange(e, option, questionIndex)}
                sx={{
                  color: checkedOptions[option.id] ? "#F49600" : "#D5DADD",
                  "&.Mui-checked": {
                    color: "#F49600",
                  },
                }}
                value={option.id}
              />
            }
            label={<LabelText>{option.option}</LabelText>}
          />
        ))}
        {showOtherTextBox && (
          <CustomTextField
            variant="outlined"
            margin="normal"
            style={{ width: "30%" }}
            placeholder="Specify"
            value={otherTextValue}
            onChange={handleTextFieldChange}
          />
        )}
      </FormGroup>
    </div>
  );
}

export default QuestionComponent;
