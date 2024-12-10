import React from "react";
import CourtyardTypeImg from "../../../../../assets/Icons/ChapterThreeImages/CourtyardType";
import LinearFormImg from "../../../../../assets/Icons/ChapterThreeImages/LinearFormImg";
import LShapedImg from "../../../../../assets/Icons/ChapterThreeImages/LShapedImg";
import {
  ListContainer,
  ListItem,
  OptionHeadings,
  ReportsHeading,
} from "../../../Partials/Reports/Styles";

function PlanTypeOne({ selectedOption, reportData }) {
  const linearData = [
    " The time a user can spend inside the toilets can be a key factor in determining the linear arrangement. For example, sufficient setup time is required for transit areas where there are space and time constraints for users due to the expected number of footfalls. In such spaces, adequate space for accessing the entrance should be provided, along with well-defined entrances for different gender groups.",

    "Wherever openness is acceptable, spaces like verandas can be integrated into the linear plan. For instance, in a transit setting where users from various states visit, visibility from the caretaker's perspective is crucial.",

    "A linear shape can be made more discreet by positioning the shorter side at the front, or it can create a more impactful impression by placing the longer facade forward.",

    "Enhance visibility through linear design, highlighting or heightening aspects such as the water tank to give the structure a defined form.",
    "Having the ventilator on the front can aid public identification of the toilet. It's preferable to give the ventilators side facing front to avoid privacy intrusion, which comes if the ventilator opens onto the rear setback. Placing the ventilator on the front facade should be aligned with the adjustments made in the plinth height.",
  ];
  const lShapedData = [
    "Transition spaces can be converted into activity areas. Allocate areas where users can utilize locker spaces, drinking water facilities, menstrual hygiene product dispensers, and disposal bins. This setup is suitable for activities and locations where a transition space is available in the front, and separate entries for different genders are needed in different parts.",

    "Transition spaces can be converted into activity areas. Allocate areas where users can utilize locker spaces, drinking water facilities, Menstrual hygiene product dispenser and disposal bins.",

    "Emphasize the importance of the placement of doors within the space, if the short side needs to be placed in the front and the whole toilet is hidden in nature. The choice of fenestrations given in the front facades. In an L-shaped configuration, consider positioning the shorter side as the front facade for a more expressive entrance, while the longer side can provide a hidden or discreet aspect.",

    "Utilize the water tank as a potential signage feature, with the choice to either prominently display it or integrate it into the design to maintain a more concealed appearance.",
  ];

  const courtyardType = [
    "Suitable for locations that require and have provisions for sufficient natural ventilation and lighting. The plan encourages interaction within the space, such as, in settings like communities, malls, and educational institutions. For instance, the design of the entry void plays a crucial role; it can either serve as the main entrance or be designed as a larger void without a conventional door.",

    "Consider whether the courtyard should be depicted as an empty space (void) or as an area with added elements like vegetation, turning it into a visual feature.",

    "The overall shape of the structure tends to be either square or rectangular.",

    "The shape of the courtyard has implications for the overall form of the building, influencing its aesthetics and functionality.",

    "Regarding the water tank, there's a choice between showcasing it as a visible feature or integrating it into the design to maintain a more concealed appearance.",
  ];

  const optionData = reportData[0]?.options[0]?.option;

  return (
    <div>
      <ReportsHeading>Plan Type</ReportsHeading>
      {(optionData === "Linear form -Long side\nfacing the Front" ||
        optionData === "Linear from- Short side\nfacing the front") && (
          <div>
            <OptionHeadings>Linear Form</OptionHeadings>
            <ListContainer>
              {linearData?.map((item) => (
                <ul key={item}>
                  <ListItem>
                    <li>{item}</li>
                  </ListItem>
                </ul>
              ))}
            </ListContainer>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <LinearFormImg />
            </div>
          </div>
        )}
      {(optionData === "L-shaped - Long side\nfacing the Front" ||
        optionData === "L-shaped -Short side\nfacing the front" ||
        optionData ===
        "L-shaped - Short side facing the front and hidden in nature") && (
          <div>
            <OptionHeadings>L-shaped</OptionHeadings>
            <ListContainer>
              {lShapedData?.map((item) => (
                <ul>
                  <ListItem key={item}>
                    <li>{item}</li>
                  </ListItem>
                </ul>
              ))}
            </ListContainer>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <LShapedImg />
            </div>
          </div>
        )}

      {optionData === "Courtyard type" && (
        <div>
          <OptionHeadings> Courtyard Type</OptionHeadings>
          <ListContainer>
            {courtyardType?.map((item) => (
              <ul>
                <ListItem key={item}>
                  <li>{item}</li>
                </ListItem>
              </ul>
            ))}
          </ListContainer>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <CourtyardTypeImg />
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanTypeOne;
