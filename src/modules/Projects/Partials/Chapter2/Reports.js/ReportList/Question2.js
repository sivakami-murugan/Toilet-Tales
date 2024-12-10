import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { CustomDivider } from "../../../Reports/Styles";
import { ReportHeadingText } from "../../StyleComponent";

function Question2({ questionData = [] }) {
  const questionValue = new Set([
    "Lamp Posts",
    "Manholes",
    "Drainage Lines",
    "Electrical Posts",
    "Waste Bins",
    "Others",
  ]);

  const selectedQuestions =
    questionData?.options
      ?.map((option) => option?.option)
      ?.filter(
        (selected) =>
          typeof selected === "string" && questionValue.has(selected)
      ) || [];

  return (
    <>
      {selectedQuestions.length > 0 && (
        <>
          <div style={{ padding: "20px" }}>
            <ReportHeadingText
              style={{ fontSize: "14px" }}
              variant="h4"
              gutterBottom
            >
              Object obstructing or disturbing the entrance of the toilet:
            </ReportHeadingText>
            <List>
              {selectedQuestions.map((question, index) => (
                <ListItem key={index}>
                  <ListItemText primary={`${index + 1}. ${question}`} />
                </ListItem>
              ))}
            </List>
          </div>

          <CustomDivider />
        </>
      )}
    </>
  );
}

export default Question2;
