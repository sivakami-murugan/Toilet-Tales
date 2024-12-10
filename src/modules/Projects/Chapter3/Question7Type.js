import React, { useEffect } from "react";
import { CustomTextField, HeaderText, QuestionText } from "../Styles";
import { FeetText, QuestionHeader, TextBoxContainer } from "./Styles";

function Question7Type({
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
      a.push({ label: "" });
    }
    setInputValues(a);
  }, [questionData]);

  useEffect(() => {
    if (correctAnswer?.options) {
      const mappedValues = correctAnswer?.options?.map((item) => ({
        label: item.value,
        value: item.value,
      }));
      setInputValues(mappedValues);
    }
  }, [correctAnswer, setInputValues]);

  return (
    <div>
      <HeaderText>{"Plinth"}</HeaderText>
      <QuestionHeader>Question {questionData[6]?.questionNo}</QuestionHeader>
      <QuestionText>{questionData[6]?.question}</QuestionText>
      {questionData[6]?.options.map((option, index) => (
        <TextBoxContainer key={option.id}>
          <CustomTextField
            variant="outlined"
            margin="normal"
            style={{ width: "10%" }}
            onChange={(e) => handleInputChange(e, index, questionIndex)}
            value={inputValues[index]?.label || ""}
            name={"questions" + index}
          />
          <FeetText>mm</FeetText>
        </TextBoxContainer>
      ))}
    </div>
  );
}

export default Question7Type;
