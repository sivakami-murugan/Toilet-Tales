import React from "react";
import Question3Img from "../../../../../../assets/Icons/Chapter2/EdgeConditions/Question3Img";
import Question4Img from "../../../../../../assets/Icons/Chapter2/EdgeConditions/Question4Img";
import Question5Img from "../../../../../../assets/Icons/Chapter2/EdgeConditions/Question5Img";
import QuestionOneImg from "../../../../../../assets/Icons/QuestionOneImg";
import { ReportsSubHeading } from "../../../Reports/Styles";
import { ReportContainer, ReportImage } from "../../StyleComponent";

function Question1({ questionData = [] }) {
  const questionValue = [
    "Toilet is placed along the edge of street/footpath/road without any offset",
    "There is a gap/offset between the toilet block and street/footpath/road.",
  ];

  const selectedQuestion = questionData.options?.[0]?.option || "";
  return (
    <>
      {selectedQuestion === questionValue[0] && (
        <div>
          <ReportsSubHeading
            style={{
              marginBottom: "10px",
            }}
          >
            If placed along the edge of street or footpath, the following
            aspects must be considered:
          </ReportsSubHeading>
          <ReportsSubHeading
            style={{ fontSize: "14px !important", paddingLeft: "20px" }}
          >
            <div>
              1.Window ventilators must be installed at a height above the
              ceiling (2100 mm from the inside of the block and 2400 mm from the
              ground level).
            </div>
            <div>
              2.An access ramp or step should not start immediately from a
              road/street/Footpath.
            </div>
            <div>
              3. Privacy of the users must not be compromised while providing
              doors and fenestrations.
            </div>
            <div>
              4. Privacy of the users must not be compromised while providing
              doors and fenestrations.
            </div>
          </ReportsSubHeading>
        </div>
      )}
      {selectedQuestion === questionValue[1] && (
        <div>
          <ReportContainer>
            <ReportsSubHeading
              style={{
                marginBottom: "10px",
              }}
            >
              1. Window ventilators must be installed at a height above the
              ceiling (2100 mm from the inside of the block and 2400 mm from the
              ground level).
            </ReportsSubHeading>
            <div style={{ paddingLeft: "20px" }}>
              <ReportsSubHeading>
                {
                  "(a) Porous fencing with a maximum height of 1.4 m can be provided. "
                }
              </ReportsSubHeading>
              <ReportsSubHeading>
                (b) A landscaped area with boulevards at the compound's edge can
                be provided.
              </ReportsSubHeading>
              <ReportImage>
                <QuestionOneImg />
              </ReportImage>
            </div>
          </ReportContainer>
          <ReportContainer>
            <ReportsSubHeading
              style={{
                marginBottom: "10px",
                marginTop: "20px",
              }}
            >
              2. Point (b) is always preferable
            </ReportsSubHeading>
            <ReportsSubHeading style={{ paddingLeft: "20px" }}>
              Note:
            </ReportsSubHeading>

            <ReportsSubHeading>
              <ul style={{ marginLeft: "20px" }}>
                <li>
                  Cement concrete posts with fencing in between shall be used as
                  an alternative to the conventional rigid compound wall.A 2.5 m
                  span must be provided between the concrete posts.
                </li>
                <li>
                  If chain link fencing is provided, the opening size must be at
                  least 2.5 inches.
                </li>
              </ul>
            </ReportsSubHeading>
          </ReportContainer>
          <ReportContainer>
            <ReportsSubHeading
              style={{
                marginBottom: "10px",
              }}
            >
              3. In the case of compound walls, entry gates from all adjoining
              streets must be provided. A minimum of two access gates must be
              provided in the case of single abutting street. The gates must be
              at least 5 feet wide.
            </ReportsSubHeading>
            <ReportImage>
              <Question3Img />
            </ReportImage>
          </ReportContainer>
          <ReportContainer>
            <ReportsSubHeading
              style={{
                marginBottom: "10px",
              }}
            >
              4. A rigid brick compound wall shall not be provided around the
              toilet under any circumstances.
            </ReportsSubHeading>
            <ReportImage>
              <Question4Img />
            </ReportImage>
          </ReportContainer>
          <ReportContainer>
            <ReportsSubHeading
              style={{
                marginBottom: "10px",
              }}
            >
              5. In any circumstances, ventilators shall not be opened directly
              to a street.
            </ReportsSubHeading>
            <ReportImage>
              <Question5Img />
            </ReportImage>
          </ReportContainer>
        </div>
      )}
    </>
  );
}

export default Question1;
