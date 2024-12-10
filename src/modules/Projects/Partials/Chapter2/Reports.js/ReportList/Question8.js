import { List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import VisibilityImg from "../../../../../../assets/Icons/Chapter2/Visibility/VisibilityImg";
import { CustomDivider } from "../../../Reports/Styles";
import { ReportHeadingText, ReportImage } from "../../StyleComponent";

function Question8({ questionData = [] }) {
  const questionValue = [
    "Easily visible from the street/footpaths",
    "Is hidden behind other structures/buildings",
    "Not recognisable. Was only able to find with the help of signages",
    "Others (if kindly mention below)",
  ];

  // Checking if options array exists and has at least one item
  const selectedQuestion =
    Array.isArray(questionData?.options) && questionData?.options.length > 0
      ? questionData.options[0]
      : null;

  // Check if the selected option is valid and exists in the question values
  const isQuestionValid =
    typeof selectedQuestion?.option === "string" &&
    questionValue.includes(selectedQuestion.option);

  return (
    <>
      <div>
        {isQuestionValid && (
          <>
            <div style={{ padding: "20px" }}>
              <ReportHeadingText
                style={{ fontSize: "14px" }}
                variant="h4"
                gutterBottom
              >
                How Visible is the toilet for the user: ?
              </ReportHeadingText>

              <List>
                <ListItem>
                  <ListItemText
                    primary={
                      selectedQuestion.option ===
                      "Others (if kindly mention below)"
                        ? selectedQuestion.value
                        : selectedQuestion.option
                    }
                  />
                </ListItem>
              </List>
            </div>

            <CustomDivider />
          </>
        )}
      </div>

      <div style={{ padding: "20px" }}>
        <ReportHeadingText variant="h4" gutterBottom>
          Visibility
        </ReportHeadingText>
        <Typography paragraph fontWeight={600}>
          Why should the toilet be more visible? How can we make public toilets
          more visible to the users? Were you able to find or identify a toilet
          from where you stand when you felt the urge to pee?
        </Typography>
        <Typography paragraph>
          The visibility of public toilets is crucial for accessibility, safety,
          and hygiene. Easily visible toilets are more accessible to everyone,
          including those with disabilities. They also deter misuse and illegal
          activities, contribute to{" "}
          <span style={{ fontWeight: "600" }}>
            regular maintenance, and promote inclusivity.
          </span>
        </Typography>
      </div>

      <div style={{ padding: "20px" }}>
        <ReportImage>
          <VisibilityImg />
        </ReportImage>
      </div>
    </>
  );
}

export default Question8;
