import { FormControlLabel, Grid, RadioGroup } from "@mui/material";
import React, { useEffect, useState } from "react";
import TBlockImg1 from "../../../assets/Icons/ChapterThreeImages/Question1Images/TBlockImg1";
import TBlockImg2 from "../../../assets/Icons/ChapterThreeImages/Question1Images/TBlockImg2";
import TBlockImg3 from "../../../assets/Icons/ChapterThreeImages/Question1Images/TBlockImg3";
import TBlockImg4 from "../../../assets/Icons/ChapterThreeImages/Question1Images/TBlockImg4";
import TBlockImg5 from "../../../assets/Icons/ChapterThreeImages/Question1Images/TBlockImg5";
import TBlockImg6 from "../../../assets/Icons/ChapterThreeImages/Question1Images/TBlockImg6";
import { HeaderText } from "../Styles";
import {
  OptionText,
  OrangeRadio,
  QuestionHeader,
  QuestionText
} from "./Styles";

const QuestionSection = ({
  questionData,
  setSelectedOption,
  selectedOption,
  onOptionChange,
  questionIndex,
  correctAnswer,
}) => {
  const [options, setOptions] = useState([
    { id: "1", image: <TBlockImg1 />, label: "" },
    { id: "2", image: <TBlockImg2 />, label: "" },
    { id: "3", image: <TBlockImg3 />, label: "" },
    { id: "4", image: <TBlockImg4 />, label: "" },
    { id: "5", image: <TBlockImg6 />, label: "" },
    { id: "6", image: <TBlockImg5 />, label: "" },
  ]);

  useEffect(() => {
    const RadioOptions = questionData[0]?.options.map((option) => ({
      label: option.option,
      id: option.id,
    }));
    if (RadioOptions.length > 0) {
      const updatedOptions = options.map((option, index) => ({
        ...option,
        label: RadioOptions[index]?.label ?? "",
        id: RadioOptions[index]?.id ?? "",
      }));
      setOptions(updatedOptions);
    }
  }, [questionData]);

  useEffect(() => {
    setSelectedOption(correctAnswer?.options[0]?.id);
  }, [correctAnswer]);

  return (
    <div>
      <HeaderText>{"Understanding Plan type"}</HeaderText>
      <QuestionHeader>Question {questionData[0]?.questionNo}</QuestionHeader>
      <QuestionText>{questionData[0]?.question}</QuestionText>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <RadioGroup
              value={selectedOption}
              onChange={(ev) => onOptionChange(ev, questionIndex)}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {options?.map((option) => (
                <Grid item xs={12} sm={6} md={4} key={option.id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {option.image}
                    <FormControlLabel
                      value={option.id}
                      control={
                        <OrangeRadio
                          checked={selectedOption === option.id}
                          value={option.id}
                        />
                      }
                      label={<OptionText>{option.label}</OptionText>}
                    />
                  </div>
                </Grid>
              ))}
            </RadioGroup>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default QuestionSection;
