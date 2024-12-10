import React, { useEffect } from "react";
import {
  CustomTextField,
  QuestionHeader,
  TextBoxContainer,
  TextQuestion,
} from "../Chapter3/Styles";
import { HeaderText, QuestionText } from "../Styles";

function Question2Type({
  questionData,
  questionIndex,
  inputValues,
  setInputValues,
  handleInputChange,
  correctAnswer,
}) {
  useEffect(() => {
    let data = questionData[1]?.options?.length;

    const a = [];
    for (let i = 0; i < data; i++) {
      a.push({ label: "", value: "" });
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
      const requiredLength = questionData[1]?.options?.length || 0;
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
      <HeaderText>{"Understanding Plan type"}</HeaderText>
      <QuestionHeader>Question {questionData[1]?.questionNo}</QuestionHeader>
      <QuestionText>{questionData[1]?.question}</QuestionText>
      {questionData[1]?.options?.map((option, index) => (
        <TextBoxContainer key={option.id}>
          <TextBoxContainer>
            <TextQuestion style={{ flex: 1, minWidth: "160px" }}>{`${index + 1
              }. ${option.option}`}</TextQuestion>
            <TextQuestion style={{ fontWeight: "700", minWidth: "50px" }}>
              X
            </TextQuestion>
          </TextBoxContainer>
          <div>
            <CustomTextField
              variant="outlined"
              margin="normal"
              style={{ width: "50%" }}
              value={inputValues[index]?.label || ""}
              name={"questions" + index}
              onChange={(e) => handleInputChange(e, index, questionIndex)}
            />
          </div>
        </TextBoxContainer>
      ))}
    </div>
  );
}

export default Question2Type;
