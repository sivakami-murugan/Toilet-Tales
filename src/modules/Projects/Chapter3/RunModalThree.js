import { IconButton, Modal } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../../assets/Icons/BackArrowIcon";
import CourtyardTypeImg from "../../../assets/Icons/ChapterThreeImages/CourtyardType";
import FocusImg from "../../../assets/Icons/ChapterThreeImages/Focus";
import LinearFormImg from "../../../assets/Icons/ChapterThreeImages/LinearFormImg";
import LShapedImg from "../../../assets/Icons/ChapterThreeImages/LShapedImg";
import MultipleblocksImg from "../../../assets/Icons/ChapterThreeImages/MultipleblocksImg";
import CloseIcon from "../../../assets/Icons/CloseIcon";
import {
  createQuestions,
  getReportData
} from "../../../redux/Actions/ProjectsAction";
import {
  ActionBoxReportContainer,
  CreateNextButton,
  HeaderText,
  StyledButton
} from "../Styles";
import Congrats from "./Congrats";
import FocusScreen from "./FocusScreen";
import Question10Type from "./Question10Type";
import Question2Type from "./Question2Type";
import Question3Type from "./Question3Type";
import Question4Type from "./Question4Type";
import Question7Type from "./Question7Type";
import QuestionSection from "./QuestionSection";
import { BoxModal, ImageConatiner, ImageText, ParaText } from "./Styles";

const RunModalThree = ({
  open,
  onClose,
  typeCategoryData,
  projectId,
  chapterId,
  currentQuestion,
  setCurrentQuestion,
  previousData,
  setPreviousData,
  getPreviousQuestionData,
  yesOptions,
  setBacksData,
  project,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepCompleted, setStepCompleted] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValues, setInputValues] = useState([]);
  //Check box
  const [checkedOptions, setCheckedOptions] = useState([]);
  const [showOtherTextBox, setShowOtherTextBox] = useState(false);
  const [otherTextValue, setOtherTextValue] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(null);
  const OptionDataItem = typeCategoryData?.data?.data?.questions;
  const userId = localStorage.getItem("userId");
  const dispatch = useDispatch();
  const [previousOptionId, setPreviousOptionId] = useState(null);

  const [currentQuestionId, setCurrentQuestionId] = useState("");
  const [selectedOptionObject, setSelectedOptionObject] = useState({});
  const [answerData, setAnswerData] = useState(null);
  const navigate = useNavigate();

  const getSetReportAnswer = async () => {
    try {
      const result = await dispatch(getReportData(projectId));
      setAnswerData(result?.data);
    } catch (error) {
      console.error("Error fetching report data:", error);
    }
  };

  const fetchReportAnswerBeforeNavigation = async (id) => {
    const reportAnswer = await getSetReportAnswer(id);
  };
  useEffect(() => {
    getSetReportAnswer();
    fetchReportAnswerBeforeNavigation(projectId);
  }, [dispatch]);

  const handleNext = async () => {
    const statusValue = currentQuestion === "question21";

    if (currentStep < contentSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      try {
        const skipApiCallQuestions = [
          "question3",
          "question5",
          "question10",
          "question12",
          "question13",
          "question15",
        ];

        if (!skipApiCallQuestions.includes(currentQuestion)) {
          const testPayload = {
            projectId: projectId,
            chapterId: chapterId,
            userId: userId,
            questionId: currentQuestionId,
            optionId: ["question2", "question4", "question9"].includes(
              currentQuestion
            )
              ? inputValues
                .filter((item) => item?.optionId)
                .map((item) => item.optionId)
              : ["question16", "question17", "question20"].includes(
                currentQuestion
              )
                ? OptionDataItem[currentQuestionIndex]?.options
                  ?.filter((option) => checkedOptions[option.id])
                  .map((option) => option.id) || []
                : [selectedOption],

            values: ["question16", "question17"].includes(currentQuestion)
              ? [
                ...(inputValues
                  ?.filter((item) => item?.label?.trim())
                  .map((item) => item.label.trim()) || []),
                otherTextValue.trim(),
              ]
              : inputValues
                ?.filter((item) => item?.label?.trim())
                .map((item) => item.label.trim()) || [],
            status: statusValue,
          };

          let response;
          response = await dispatch(
            createQuestions({
              projectId,
              chapterId,
              questionsData: testPayload,
            })
          );
          if (response?.response?.data?.code === 401) {
            navigate("/auth");
          }
        }

        setStepCompleted(true);
        switch (currentQuestion) {
          case "question1":
            setCurrentQuestion("question2");
            break;
          case "question2":
            setCurrentQuestion("question3");
            break;
          case "question3":
            if (answerData?.data?.setBack == "Yes") {
              setCurrentQuestion("question4");
            } else {
              setCurrentQuestion("question5");
            }
            break;
          case "question4":
            setCurrentQuestion("question5");
            break;
          case "question5":
            setSelectedOption("");
            setCurrentQuestion("question6");
            break;
          case "question6":
            setSelectedOption("");
            setCurrentQuestion("question7");
            break;
          case "question7":
            setSelectedOption("");
            setCurrentQuestion("question8");
            break;
          case "question8":
            setCurrentQuestion("question9");
            break;
          case "question9":
            setCurrentQuestion("question10");
            break;
          case "question10":
            setSelectedOption("");
            setCurrentQuestion("question11");
            break;
          case "question11":
            setCurrentQuestion("question12");
            break;
          case "question12":
            setCurrentQuestion("question13");
            break;
          case "question13":
            setSelectedOption("");
            setCurrentQuestion("question14");
            break;
          case "question14":
            if (selectedOptionObject?.option === "Waiting area/ Lobby") {
              setSelectedOption("");
              setCurrentQuestion("question15");
              setCheckedOptions("");
            } else {
              setCurrentQuestion("question21");
            }
            break;
          case "question15":
            setCurrentQuestion("question16");
            setSelectedOption("");
            setCheckedOptions("");
            break;
          case "question16":
            setCheckedOptions("");
            setCurrentQuestion("question17");
            setOtherTextValue("");
            setShowOtherTextBox(false);
            break;
          case "question17":
            setSelectedOption("");
            setCurrentQuestion("question18");
            break;
          case "question18":
            setSelectedOption("");
            setCurrentQuestion("question19");
            break;
          case "question19":
            setCheckedOptions("");
            setCurrentQuestion("question20");
            break;
          case "question20":
            setCurrentQuestion("question21");
            break;
          case "question21":
            onClose(true);
            break;
          default:
            setCurrentQuestion("question1");
        }
      } catch (e) {
        console.log(e);
      } finally {
        if (currentQuestion == "question21") {
          onClose(project);
        }
      }
    }
  };

  const handlePrevious = async () => {
    if (currentStep === 0 || currentQuestion === "question1") {
      setCurrentStep(0);
      return;
    }

    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
    if (projectId) {
      const previousGetData = await getPreviousQuestionData(projectId);
      setPreviousData(previousGetData);

      const newInputValues =
        previousGetData?.options?.map((option) => ({
          label: option?.label || "",
          value: option?.value || "",
        })) || [];

      setInputValues(newInputValues);
    }

    if (previousData?.data?.data.code === 401) {
      navigate("/auth");
    }

    switch (currentQuestion) {
      case "question21":
        setCurrentQuestion("question20");
        break;
      case "question20":
        setCurrentQuestion("question19");
        break;
      case "question19":
        setCurrentQuestion("question18");
        break;
      case "question18":
        setCurrentQuestion("question17");
        setCurrentStep(8);
        break;
      case "question17":
        setCurrentQuestion("question16");
        setCurrentStep(8);
        break;
      case "question16":
        setCurrentQuestion("question15");
        setCurrentStep(8);
        break;
      case "question15":
        setCurrentQuestion("question14");
        setCurrentStep(8);

        break;
      case "question14":
        setCurrentQuestion("question13");
        setCurrentStep(8);

        break;
      case "question13":
        setCurrentQuestion("question12");
        setCurrentStep(8);

        break;
      case "question12":
        setCurrentQuestion("question11");
        setCurrentStep(8);

        break;
      case "question11":
        setCurrentQuestion("question10");
        setCurrentStep(8);

        break;
      case "question10":
        setCurrentQuestion("question9");
        setCurrentStep(8);

        break;
      case "question9":
        setCurrentQuestion("question8");
        setCurrentStep(8);

        break;
      case "question8":
        setCurrentQuestion("question7");
        setCurrentStep(8);

        break;
      case "question7":
        setCurrentQuestion("question6");
        setCurrentStep(8);

        break;
      case "question6":
        setCurrentQuestion("question5");
        setCurrentStep(8);
        break;
      case "question5":
        setCurrentQuestion("question4");
        setCurrentStep(8);

        break;
      case "question4":
        setCurrentQuestion("question3");
        setCurrentStep(8);

        break;
      case "question3":
        setCurrentQuestion("question2");
        setCurrentStep(8);

        break;
      case "question2":
        setCurrentQuestion("question1");
        setCurrentStep(8);

        break;
    }
  };

  const handleChange = (event, index, data) => {
    setSelectedOption(event.target.value);
    setCurrentQuestionId(OptionDataItem[index]?.id);
    if (data) {
      const objectData = data?.find((item) => item.id === event.target.value);

      setSelectedOptionObject(objectData);
    }
    setInputValues([]);
  };

  const handleInputChange = (event, id, questionIndex) => {
    const { value } = event.target;
    setInputValues((prevValues) =>
      prevValues.map((item, index) =>
        index === id
          ? {
            ...item,
            label: value,
            value: value,
            optionId: OptionDataItem[questionIndex]?.options[id]?.id,
          }
          : item
      )
    );
    setCurrentQuestionId(OptionDataItem[questionIndex]?.id);
  };

  const handleCheckboxChange = (event, option, questionIndex) => {
    const isChecked = event.target.checked;
    const { id, option: optionText } = option;
    setPreviousOptionId(id);
    setCheckedOptions((prev) => ({
      ...prev,
      [id]: isChecked,
    }));

    if (optionText === "Others" && isChecked) {
      setShowOtherTextBox(true);
    } else if (optionText === "Others" && !isChecked) {
      setShowOtherTextBox(false);
      setOtherTextValue("");
    }

    setCurrentQuestionId(OptionDataItem[questionIndex]?.id);
    setCurrentQuestionIndex(questionIndex);
  };

  const handleTextFieldChange = (event) => {
    setOtherTextValue(event.target.value);
  };

  const isNextButtonDisabled = () => {
    if (
      currentQuestion === "question1" ||
      currentQuestion === "question6" ||
      currentQuestion === "question7" ||
      currentQuestion === "question8" ||
      currentQuestion === "question11" ||
      currentQuestion === "question14" ||
      currentQuestion === "question18" ||
      currentQuestion === "question19"
    ) {
      return !selectedOption;
    } else if (
      currentQuestion === "question2" ||
      currentQuestion === "question4" ||
      currentQuestion === "question9"
    ) {
      if (currentQuestion === "question2" || currentQuestion === "question4") {
        const validInputs = inputValues?.some(
          (item) => item?.label?.trim().length > 0
        );

        return !validInputs;
      }
    }
    if (currentQuestion === "question9") {
      const isFirstInputValid = inputValues[0]?.label?.trim().length > 0;
      return !isFirstInputValid;
    }

    if (["question16", "question17", "question20"].includes(currentQuestion)) {
      return !checkedOptions;
    }
  };

  const contentSteps = [
    {
      header: "Plan Typology",
      imageText: "Why Focus ?",
      paraText:
        "The geometry of the built form becomes a crucial factor in the functionality of the toilet. It is very important to design the built form according to the context of the site. For toilets having sufficient space at the entry and/ or either sides, a geometric form that is more rigid might suit and for toilets having built forms abutting the complex, a more fluid form like a courtyard model with transition spaces inside might be a better option.",
      image: <FocusImg />,
    },
    {
      header: "Understanding Plan type",
      subHeader: "Linear form",
      paraText:
        "Toilet arrangements in high-traffic areas must ensure adequate entrance space and separate gender entrances. Integrate open spaces like verandas where suitable and ensure visibility for caretakers. A linear shape can be discreet with the shorter side at the front or impactful with the longer facade forward. Enhance visibility with features like the water tank and position the ventilator on the front to aid identification and maintain privacy.",
      image: <LinearFormImg />,
    },
    {
      header: "Understanding Plan type",
      subHeader: "L-shaped",
      paraText:
        "Transition spaces can be converted into activity areas with lockers, drinking water facilities, menstrual hygiene product dispensers, and disposal bins. For discreet layouts, position doors with the short side at the front and select appropriate front facade fenestrations. In L-shaped configurations, use the shorter side for an expressive entrance and the longer side for discretion. The water tank can serve as visible signage or be concealed in the design.",
      image: <LShapedImg />,
    },
    {
      header: "Understanding Plan type",
      subHeader: "Courtyard Type",
      paraText:
        "Designed for well-ventilated and naturally lit spaces, this plan fosters interaction in communities, malls, and educational institutions. The entry void can serve as the main entrance or a larger void without a conventional door. Choose between an empty or vegetated courtyard to enhance visual interest. The building is typically square or rectangular, with the courtyard shape affecting aesthetics and functionality. The water tank can be either a visible feature or concealed.",
      image: <CourtyardTypeImg />,
    },

    {
      header: "Understanding Plan type",
      subHeader: "Multiple blocks",
      paraText:
        "Toilet arrangements in high-traffic areas must ensure adequate entrance space and separate gender entrances. Integrate open spaces like verandas where suitable and ensure visibility for caretakers. A linear shape can be discreet with the shorter side at the front or impactful with the longer facade forward. Enhance visibility with features like the water tank and position the ventilator on the front to aid identification and maintain privacy.",
      image: <MultipleblocksImg />,
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <BoxModal>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>

        {!stepCompleted ? (
          <div>
            <HeaderText>{contentSteps[currentStep]?.header}</HeaderText>
            <ImageText>{contentSteps[currentStep]?.subHeader}</ImageText>
            <ImageConatiner>
              {contentSteps[currentStep]?.image}
              <ImageText>{contentSteps[currentStep]?.imageText}</ImageText>
            </ImageConatiner>
            <ParaText>{contentSteps[currentStep]?.paraText}</ParaText>
          </div>
        ) : (
          <>
            {currentQuestion === "question1" && (
              <QuestionSection
                headerText={contentSteps[currentStep]?.header}
                questionData={OptionDataItem}
                correctAnswer={previousData?.data?.data[0]}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={0}
              />
            )}
            {currentQuestion === "question2" && (
              <Question2Type
                questionData={OptionDataItem}
                correctAnswer={previousData?.data?.data[1]}
                inputValues={inputValues}
                setInputValues={setInputValues}
                handleInputChange={handleInputChange}
                questionIndex={1}
              />
            )}
            {currentQuestion === "question3" && (
              <FocusScreen
                header={"Plot width/ Space availability"}
                image={<FocusImg />}
                imageText={"Why Focus ?"}
                paraText={
                  "The width of a plot will be an important factor to consider how the entry acts and the kind of space available for pausing and waiting at the entrance of the toilet."
                }
              />
            )}
            {currentQuestion === "question4" && (
              <Question3Type
                questionData={OptionDataItem}
                inputValues={inputValues}
                setInputValues={setInputValues}
                handleInputChange={handleInputChange}
                questionIndex={2}
                correctAnswer={previousData?.data?.data[2]}
              />
            )}
            {currentQuestion === "question5" && (
              <FocusScreen
                header={"Plinth"}
                image={<FocusImg />}
                imageText={"Why Focus ?"}
                paraText={
                  "What height must toilets be placed? Is there a problem with floods in the area? Does the toilet easily flood and become inaccessible to its users? With regard to its context, at what height should the toilet be placed?"
                }
              />
            )}
            {currentQuestion === "question6" && (
              <Question4Type
                headerText="Plot width/ Space availability"
                questionNumber={OptionDataItem[3]?.questionNo}
                questionText={OptionDataItem[3]?.question}
                options={OptionDataItem[3]?.options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={3}
                correctAnswer={previousData?.data?.data[3]}
              />
            )}
            {currentQuestion === "question7" && (
              <Question4Type
                headerText="Plot width/ Space availability"
                questionNumber={OptionDataItem[4]?.questionNo}
                questionText={OptionDataItem[4]?.question}
                options={OptionDataItem[4]?.options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={4}
                correctAnswer={previousData?.data?.data[4]}
              />
            )}
            {currentQuestion === "question8" && (
              <Question4Type
                headerText="Plot width/ Space availability"
                questionNumber={OptionDataItem[5]?.questionNo}
                questionText={OptionDataItem[5]?.question}
                options={OptionDataItem[5]?.options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={5}
                correctAnswer={previousData?.data?.data[5]}
              />
            )}
            {currentQuestion === "question9" && (
              <Question7Type
                questionData={OptionDataItem}
                inputValues={inputValues}
                setInputValues={setInputValues}
                handleInputChange={handleInputChange}
                questionIndex={6}
                correctAnswer={previousData?.data?.data[6]}
              />
            )}
            {currentQuestion === "question10" && (
              <FocusScreen
                header={"Entrance Door"}
                image={<FocusImg />}
                imageText={"Why Focus ?"}
                paraText={
                  "It is critical to define the toilet entrance. The entrance door provides the first glimpse of the toilet. That is when one decides whether or not to enter. That is where one decides which cubicle to enter."
                }
              />
            )}
            {currentQuestion === "question11" && (
              <Question4Type
                headerText="Entrance Door"
                questionNumber={OptionDataItem[7]?.questionNo}
                questionText={OptionDataItem[7]?.question}
                options={OptionDataItem[7]?.options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={7}
                correctAnswer={previousData?.data?.data[7]}
              />
            )}
            {currentQuestion === "question12" && (
              <FocusScreen
                header={"Transition space"}
                image={<FocusImg />}
                imageText={"Why Focus ?"}
                paraText={
                  "Consider how uncomfortable it will be to open the toilet door and instantly step into a street, or to stand in a queue in front of the toilet door in the scorching sun or while it is raining. Thus, a covered transition space with enough privacy is essential. It must also be accessible to individuals of all physical abilities."
                }
              />
            )}
            {currentQuestion === "question13" && (
              <FocusScreen
                header={"Transition space"}
                image={<FocusImg />}
                imageText={"Why Focus ?"}
                focusCondition={true}
              />
            )}
            {currentQuestion === "question14" && (
              <Question4Type
                headerText="Transition space"
                questionNumber={OptionDataItem[8]?.questionNo}
                questionText={OptionDataItem[8]?.question}
                options={OptionDataItem[8]?.options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={8}
                correctAnswer={previousData?.data?.data[8]}
              />
            )}
            {currentQuestion === "question15" && (
              <FocusScreen
                header={"Transition space"}
                image={<FocusImg />}
                imageText={"Why Focus ?"}
                paraText={
                  "One activity in the transition place can be the wait area/ lobby. In public toilets, there is often no waiting space. One enters the corridor or cubicle immediately from the street. One must always wait in the corridor. Where can one keep their bags and use the lavatory? Is there a place to sit for two minutes and rest in case of discomfort? When the restroom corridor is overcrowded, where can one wait? Where can a child wait while his or her parent uses the acility?"
                }
              />
            )}

            {/* Check Box */}

            {currentQuestion === "question16" && (
              <Question10Type
                headerText="Transition space"
                questionNo={OptionDataItem[9].questionNo}
                questionText={OptionDataItem[9].question}
                options={OptionDataItem[9].options}
                questionIndex={9}
                checkedOptions={checkedOptions}
                setCheckedOptions={setCheckedOptions}
                showOtherTextBox={showOtherTextBox}
                setShowOtherTextBox={setShowOtherTextBox}
                otherTextValue={otherTextValue}
                setOtherTextValue={setOtherTextValue}
                handleCheckboxChange={handleCheckboxChange}
                handleTextFieldChange={handleTextFieldChange}
                correctAnswer={previousData?.data?.data[9]}
              />
            )}
            {currentQuestion === "question17" && (
              <Question10Type
                headerText="Cubicle"
                questionNo={OptionDataItem[10].questionNo}
                questionText={OptionDataItem[10].question}
                options={OptionDataItem[10].options}
                questionIndex={10}
                checkedOptions={checkedOptions}
                setCheckedOptions={setCheckedOptions}
                showOtherTextBox={showOtherTextBox}
                setShowOtherTextBox={setShowOtherTextBox}
                otherTextValue={otherTextValue}
                setOtherTextValue={setOtherTextValue}
                handleCheckboxChange={handleCheckboxChange}
                handleTextFieldChange={handleTextFieldChange}
                correctAnswer={previousData?.data?.data[10]}
              />
            )}
            {currentQuestion === "question18" && (
              <Question4Type
                headerText="Commode"
                questionNumber={OptionDataItem[11]?.questionNo}
                questionText={OptionDataItem[11]?.question}
                options={OptionDataItem[11]?.options}
                selectedValue={selectedValue}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={11}
                correctAnswer={previousData?.data?.data[11]}
              />
            )}
            {currentQuestion === "question19" && (
              <Question4Type
                headerText="Commode"
                questionNumber={OptionDataItem[12]?.questionNo}
                questionText={OptionDataItem[12]?.question}
                options={OptionDataItem[12]?.options}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                onOptionChange={handleChange}
                questionIndex={12}
                correctAnswer={previousData?.data?.data[12]}
              />
            )}
            {currentQuestion === "question20" && (
              <Question10Type
                headerText="Women friendly facilities"
                questionNo={OptionDataItem[13].questionNo}
                questionText={OptionDataItem[13].question}
                options={OptionDataItem[13].options}
                questionIndex={13}
                checkedOptions={checkedOptions}
                setCheckedOptions={setCheckedOptions}
                handleCheckboxChange={handleCheckboxChange}
                correctAnswer={previousData?.data?.data[13]}
              />
            )}
            {currentQuestion === "question21" && <Congrats />}
          </>
        )}
        <ActionBoxReportContainer>
          <StyledButton
            startIcon={<BackArrowIcon />}
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </StyledButton>
          <CreateNextButton
            onClick={handleNext}
            disabled={isNextButtonDisabled()}
          >
            {currentQuestion === "question21" ? "Generate Report" : "Next"}
          </CreateNextButton>
        </ActionBoxReportContainer>
      </BoxModal>
    </Modal>
  );
};

export default RunModalThree;
