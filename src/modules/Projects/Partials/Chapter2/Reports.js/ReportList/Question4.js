import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { CustomDivider } from "../../../Reports/Styles";
import { ReportHeadingText } from "../../StyleComponent";

function Question4({ questionData = [] }) {
  const questionValue = new Set([
    "Electrical post/ Transformer",
    "Hand pump",
    "Drainage line / Channel",
    "Manhole",
    "Motor room",
    "Existing septic tank",
    "Water tank",
  ]);

  const selectedQuestion = questionData?.options?.[0]?.option;

  const isQuestionValid =
    typeof selectedQuestion === "string" && questionValue.has(selectedQuestion);

  return (
    <>
      {isQuestionValid && (
        <>
          <div style={{ padding: "20px" }}>
            <ReportHeadingText variant="h4" gutterBottom>
              Object obstructing or disturbing the entrance of the toilet:
            </ReportHeadingText>
            <List>
              <ListItem>
                <ListItemText primary={selectedQuestion} />
              </ListItem>
            </List>
          </div>

          <CustomDivider />
        </>
      )}
    </>
  );
}

export default Question4;
