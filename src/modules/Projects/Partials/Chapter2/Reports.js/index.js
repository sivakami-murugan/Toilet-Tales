import React from "react";
import BigLogo from "../../../../../assets/Icons/BigLogo";
import {
  ChaptersHeading,
  ChaptersHeadingContainer,
  CustomDivider,
  ReportsContainer,
  ReportsSubHeading,
} from "../../Reports/Styles";
import { ReportHeadingText } from "../StyleComponent";
import Question1 from "./ReportList/Question1";
import Question2 from "./ReportList/Question2";
import Question3 from "./ReportList/Question3";
import Question5 from "./ReportList/Question5";
import Question6 from "./ReportList/Question6";
import Question7 from "./ReportList/Question7";
import Question8 from "./ReportList/Question8";
import Question9 from "./ReportList/Question9";

function ChapterTwoReport({ response, answerData }) {
  return (
    <div>
      <ReportsContainer>
        <ChaptersHeadingContainer>
          <ChaptersHeading>Chapter 2</ChaptersHeading>
          <BigLogo />
        </ChaptersHeadingContainer>
        <div>
          <ReportHeadingText>Toilets in {answerData?.name}</ReportHeadingText>
          <ReportsSubHeading
            style={{
              marginBottom: "10px",
              color: "#5B738B",
              fontWeight: "600",
            }}
          >
            {answerData?.subName || []}
          </ReportsSubHeading>
          <ReportsSubHeading>
            Toilets in {answerData?.name} are vital infrastructure in areas
            lacking individual sanitation facilities. This report offers a
            comprehensive guide covering location selection, design
            specifications, footfall analysis, seat allocation, and
            incorporation ofsecondary functions to ensure optimal functionality
            and hygiene.
          </ReportsSubHeading>
        </div>
        <CustomDivider />
        <div>
          <ReportHeadingText>Street Interface.</ReportHeadingText>
          <ReportsSubHeading
            style={{
              marginBottom: "10px",
              color: "#5B738B",
            }}
          >
            To understand street-to-toilet interface consider the following
            parameters below.
          </ReportsSubHeading>
          <ReportsSubHeading>
            <div>
              {" "}
              1. How a toilet/ toilet block is aligned with the adjacent
              street/road/footpath. Is the toilet block and the street sharing a
              compound wall? Is there a gap/offset/setback between the toilet
              block and the street.{" "}
            </div>
            <div>
              2. How the toilet block is approached from the
              street/footpath/road. Is there a common corridor/pathway from the
              street to the toilet block? Or are the toilet doors directly
              opened facing the street.
            </div>
            <div>
              3. How is toilet/toilet block approached from the street. Is it
              via a ramp, steps, or a combination of both. If these elements are
              included, how are they designed. Are they positioned according to
              the standards, or are they misaligned or misplaced in relation to
              the street/footpath.
            </div>
            <div>
              4. Are there any external objects in the vicinity that might
              obstruct access to the toilet/toilet block from the street. This
              could include items like lampposts, manholes, drainage lines,
              electrical posts, waste bins, and so on.
            </div>
          </ReportsSubHeading>
        </div>
        <CustomDivider />
        <div>
          <ReportHeadingText>Edge Conditions</ReportHeadingText>

          <ReportsSubHeading>
            In most scenarios Public toilets end up sharing their boundaries
            with other structures in public spaces. Therefore, while designing
            public toilets, it's important to think about how they exist among
            other structures. If so, what is going on in that space? Will the
            rear side be turned into a dump? How is the front yard treated? Most
            importantly, does the toilet even require a compound wall and gate?
            These are the questions that a planner/designer must consider while
            designing access to public toilets.
          </ReportsSubHeading>
        </div>
        <CustomDivider />
        <Question1 questionData={response[0]} />
        <CustomDivider />
        <Question2 questionData={response[1]} />
        <Question3 questionData={response[2]} />
        <Question5 questionData={response[4]} />
        <Question6 questionData={response[5]} />
        <Question7 questionData={response[6]} />
        <Question8 questionData={response[7]} />
        <CustomDivider />
        <Question9 questionData={response[8]} />
      </ReportsContainer>
    </div>
  );
}

export default ChapterTwoReport;
