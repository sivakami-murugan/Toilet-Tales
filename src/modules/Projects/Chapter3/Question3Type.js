import React, { useEffect } from "react";
import { CustomTextField, HeaderText, QuestionText } from "../Styles";
import {
  FeetText,
  QuestionHeader,
  TextBoxContainer,
  TextQuestion,
} from "./Styles";

function Question3Type({
  questionData,
  inputValues,
  setInputValues,
  questionIndex,
  handleInputChange,
  correctAnswer,
}) {
  useEffect(() => {
    let data = questionData[2]?.options?.length;

    const a = [];
    for (let i = 0; i < data; i++) {
      a.push({ label: "" });
    }
    setInputValues(a);
  }, [questionData]);

  useEffect(() => {
    if (correctAnswer?.options) {
      const mappedValues =
        correctAnswer?.options?.map((item) => ({
          label: item.value,
          value: item.value,
          optionId: item.id,
        })) || [];
      const requiredLength = questionData[2]?.options?.length || 0;
      const finalValues = [
        ...mappedValues,
        ...Array.from({ length: requiredLength - mappedValues.length }, () => ({
          label: "",
          value: "",
        })),
      ];
      setInputValues(finalValues);
    }
  }, [correctAnswer, setInputValues, questionData]);

  return (
    <div>
      <HeaderText>{"Plot width/ Space availability"}</HeaderText>
      <QuestionHeader>Question {questionData[2]?.questionNo}</QuestionHeader>
      <QuestionText>{questionData[2]?.question}</QuestionText>

      {questionData[2]?.options?.map((option, index) => (
        <TextBoxContainer key={option.id}>
          <TextBoxContainer>
            <TextQuestion>{`${index + 1}. ${option.option}`}</TextQuestion>
            <TextQuestion style={{ fontWeight: "700" }}>-</TextQuestion>
          </TextBoxContainer>
          <TextBoxContainer>
            <CustomTextField
              variant="outlined"
              margin="normal"
              style={{ width: "50%" }}
              value={inputValues[index]?.label || ""}
              name={"questions" + index}
              onChange={(e) => handleInputChange(e, index, questionIndex)}
            />
            <FeetText>feet</FeetText>
          </TextBoxContainer>
        </TextBoxContainer>
      ))}
    </div>
  );
}

export default Question3Type;
