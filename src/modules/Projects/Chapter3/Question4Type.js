import { FormControl, FormControlLabel, RadioGroup } from "@mui/material";
import React, { useEffect } from "react";
import { HeaderText, QuestionText } from "../Styles";
import { LabelText, OrangeRadio, QuestionHeader } from "./Styles";

function GenericQuestion({
  questionNumber,
  questionText,
  options,
  headerText,
  setSelectedOption,
  selectedOption,
  questionIndex,
  onOptionChange,
  correctAnswer,
}) {
  useEffect(() => {
    setSelectedOption(correctAnswer?.options[0]?.id);
  }, [correctAnswer]);

  return (
    <div>
      <HeaderText>{headerText}</HeaderText>
      <QuestionHeader>Question {questionNumber}</QuestionHeader>
      <QuestionText>{questionText}</QuestionText>

      <FormControl component="fieldset">
        <RadioGroup
          value={selectedOption}
          onChange={(ev) => onOptionChange(ev, questionIndex, options)}
          defaultValue={selectedOption}
        >
          {options?.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id}
              control={<OrangeRadio />}
              label={<LabelText>{option.option}</LabelText>}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default GenericQuestion;
