import { FormControlLabel, FormGroup, Grid, RadioGroup } from "@mui/material";
import React, { useEffect } from "react";
import { CustomTextField, HeaderText } from "../../Styles";
import {
  OptionText,
  QuestionCheckBox,
  QuestionHeader,
  QuestionRadio,
  QuestionText,
} from "./StyleComponent";

const Question = ({
  questionData,
  selectedOption,
  onOptionChange,
  questionIndex,
  othersValue,
  setIsOptionSelected,
}) => {
  const { questionNo, options = [] } = questionData;
  const isMultiSelect = questionNo == 2 || questionNo == 4;
  const selectedOptionsArray = Array.isArray(selectedOption)
    ? selectedOption
    : [];

  const handleCheckboxChange = (event, optionId) => {
    const updatedOptions = [...selectedOptionsArray];
    const isChecked = event.target.checked;
    if (isChecked) {
      updatedOptions.push(optionId);
    } else {
      const index = updatedOptions.indexOf(optionId);
      if (index > -1) {
        updatedOptions.splice(index, 1);
      }
    }
    onOptionChange(updatedOptions, questionIndex, optionId);
  };

  const handleTextFieldChange = (event) => {
    const newValue = event.target.value;
    onOptionChange(selectedOption, questionIndex, newValue);
  };

  useEffect(() => {
    if (isMultiSelect) {
      setIsOptionSelected(selectedOptionsArray.length > 0);
    } else {
      const isOptionSelected =
        !!selectedOption || (othersValue && othersValue.trim().length > 0);
      setIsOptionSelected(isOptionSelected);
    }
  }, [
    selectedOption,
    othersValue,
    selectedOptionsArray,
    isMultiSelect,
    setIsOptionSelected,
  ]);
  return (
    <div>
      <HeaderText>{"Street Interface"}</HeaderText>
      <QuestionHeader>Question {questionData?.questionNo}</QuestionHeader>
      <QuestionText>{questionData?.question}</QuestionText>
      <Grid container spacing={2} py={4} style={{ padding: "14px" }}>
        {isMultiSelect ? (
          <FormGroup>
            {options.map((option) => (
              <FormControlLabel
                key={option.id}
                control={
                  <QuestionCheckBox
                    checked={selectedOptionsArray.includes(option.id)}
                    onChange={(event) => handleCheckboxChange(event, option.id)}
                  />
                }
                label={option.option}
              />
            ))}
          </FormGroup>
        ) : (
          <RadioGroup
            value={selectedOption}
            onChange={(event) =>
              onOptionChange(event.target.value, questionIndex)
            }
            style={{ display: "flex", flexDirection: "row" }}
          >
            {options.map((option) => (
              <Grid item xs={12} key={option.id}>
                <FormControlLabel
                  value={option.id}
                  control={
                    <QuestionRadio checked={selectedOption === option.id} />
                  }
                  label={<OptionText>{option.option}</OptionText>}
                />
                {selectedOption &&
                  selectedOption === option.id &&
                  option.option.includes(
                    "Others (if kindly mention below)"
                  ) && (
                    <CustomTextField
                      fullWidth
                      type="text"
                      name="values"
                      value={othersValue || ""}
                      onChange={handleTextFieldChange}
                    />
                  )}
              </Grid>
            ))}
          </RadioGroup>
        )}
      </Grid>
    </div>
  );
};

export default Question;
