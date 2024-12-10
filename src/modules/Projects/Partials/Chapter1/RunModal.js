import { Box, FormControlLabel, IconButton, Modal, Radio } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import BackArrowIcon from "../../../../assets/Icons/BackArrowIcon";
import CloseIcon from "../../../../assets/Icons/CloseIcon";
import option1Image from "../../../../assets/Images/option1.png";
import option2Image from "../../../../assets/Images/option2.png";
import option3Image from "../../../../assets/Images/option3.png";
import {
  CreateChapterTypes,
  UpdateChapterTypes,
  getChapterLevelData,
} from "../../../../redux/Actions/ProjectsAction";
import {
  ActionBoxContainer,
  AnswerText,
  CategoryButton,
  ChapterText,
  CreateButton,
  CustomRadioGroup,
  CustomTextField,
  FootballContainer,
  FootballTextItem,
  HeaderText,
  NoteMessage,
  OrangeRadio,
  ProjectTitle,
  QuestionText,
  RunModalBox,
  StyledButton,
  TitleTypography,
  TypeOfButton,
} from "../../Styles";

function RunModal({
  open,
  onClose,
  project,
  typeCategoryData,
  chapterNumber,
  chapterItemData,
  chapterId,
  projectId,
  updateData,
  setUpdateData,
  setSelectedChapter,
  selectedChapter,
  handleGenerateReport,
  selectedSubCategory,
  setSelectedSubCategory,
  setLevelUser,
  leveluser,
}) {
  const [projectTitle, setProjectTitle] = useState("");
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(null);
  const [calculationData, setCalculationData] = useState(null);
  const [modulusResult, setModulusResult] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [imageSelected, setImageSelected] = useState("");
  const [textFieldValues, setTextFieldValues] = useState({
    value1: "",
    value2: "",
    value3: "",
    value4: "",
  });
  const [positionOfToilet, setPositionOfToilet] = useState("");
  const dispatch = useDispatch();
  const LocationType = [
    {
      id: "1",
      name: "Inside the Premises",
    },
    {
      id: "2",
      name: "Outside the Premises",
    },
  ];

  useEffect(() => {
    if (open) {
      setProjectTitle("");
      setCurrentLevel(0);
      setSelectedCategory(null);
      setSelectedSubCategory(null);
      setSelectedSubSubCategory(null);
      setCalculationData(null);
      setTextFieldValues({
        value1: "",
        value2: "",
        value3: "",
        value4: "",
      });
      setModulusResult(null);
    }
  }, [open]);
  const [proposedBlocks, setProposedBlocks] = useState("");
  const handleProposedBlocksChange = (event) => {
    setProposedBlocks(event.target.value);
  };
  const handleGenerateReportClick = () => {
    handleGenerateReport();
  };
  const navigate = useNavigate();
  const navigateToProjectPage = () => {
    navigate("/projects");
  };

  const [selectedCategoryObj, setSelectedCategoryObj] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  // const [leveluser, setLevelUser] = useState(null);
  const TypeCategoryDatas = Array.isArray(typeCategoryData?.data?.data)
    ? typeCategoryData?.data?.data
    : [];
  const handleCategoryClick = (index, data) => {
    setSelectedCategory(index);
    setSelectedSubCategory(null);
    setSelectedSubSubCategory(null);
    setCalculationData(null);
    setSelectedChapter(TypeCategoryDatas[index]);
    setCurrentLevel(0);
  };
  const userId = localStorage.getItem("userId");
  const getMultiLevelData = async (projectId, chapterId) => {
    let MultiLevelData = await dispatch(
      getChapterLevelData({ projectId, chapterId })
    );
    setLevelUser(MultiLevelData);

    if (MultiLevelData?.data?.success === true) {
      setLevelUser(MultiLevelData);
    }
    if (MultiLevelData?.data?.code === 401) {
      navigate("/auth");
      return;
    }
  };

  const calculateModulusResult = (targetCommunity, areaOfCommunity) => {
    const modulusResult = (targetCommunity / areaOfCommunity) * 0.7854;
    const roundedResult = Math.round(modulusResult); // Round to nearest whole number
    return isNaN(roundedResult) ? "" : roundedResult; // Return rounded result or empty string
  };

  const handleNext = async () => {
    const statusValue =
      currentLevel == 4 &&
        selectedChapter?.typeName?.toLowerCase().trim() !== "community toilets"
        ? true
        : currentLevel == 7;

    try {
      const chapterData = {
        projectId: projectId,
        chapterId: chapterId,
        toiletTypeId: selectedChapter?.id,
        toiletCategoryId: selectedCategoryObj?.id || "",
        userId: userId,
        locationId: subCategory?.id,
        status: statusValue,
      };
      let value1 = textFieldValues.value1;
      let value2 = textFieldValues.value2;
      if (
        selectedChapter?.typeName?.toLowerCase().trim() === "community toilets"
      ) {
        chapterData.numberOfTargetCommunity = value1;
        chapterData.numberOfAreaOfTheCommunity = value2;
        chapterData.footfallOfTheTargetedCommunity = modulusResult;
        chapterData.questionAnswer = imageSelected;
        chapterData.positionOfToilet = positionOfToilet;
        chapterData.numberOfBlocks = proposedBlocks;
      } else {
        chapterData.numberOfMenWith1km = value1;
        chapterData.numberOfWemenWith1km = value2;
      }

      const targetCommunity = parseFloat(chapterData.numberOfTargetCommunity);
      const areaOfCommunity = parseFloat(
        chapterData.numberOfAreaOfTheCommunity
      );

      setModulusResult(
        calculateModulusResult(targetCommunity, areaOfCommunity)
      );

      let response;
      if (currentLevel === 0) {
        response = await dispatch(CreateChapterTypes(chapterData));
      } else {
        response = await dispatch(
          UpdateChapterTypes({ chapterData, projectId, chapterId })
        );
        setUpdateData(response?.data?.data);
      }

      // Check if the response has a 401 code
      if (response?.response?.data?.code === 401) {
        navigate("/auth");
        return;
      }
      if (response?.data?.success == true) {
        const typeNameLower = selectedChapter?.typeName?.toLowerCase().trim();
        const level3Types = [
          "market",
          "hospitals",
          "paratransit location & parking area",
          "open area",
          "beaches",
          "public and semi public area",
          "parks and playground",
          "community toilets",
        ];
        if (
          currentLevel == 1 &&
          selectedChapter?.typeName?.toLowerCase() == "transit area"
        ) {
          setCurrentLevel(2);
        } else if (currentLevel === 0 && level3Types.includes(typeNameLower)) {
          setCurrentLevel(3);
        } else if (
          currentLevel == 3 &&
          selectedChapter?.typeName?.toLowerCase().trim() == "community toilets"
        ) {
          setCurrentLevel(4);
        } else if (currentLevel === 5) {
          if (imageSelected === "yes") {
            setCurrentLevel(6);
          }
        } else if (currentLevel === 7) {
          setUpdateData(response?.data?.data);
        } else {
          const a = currentLevel + 1 === 2 ? 3 : currentLevel + 1;
          setCurrentLevel(a);
        }
      } else {
      }
    } catch (err) {
    } finally {
      if (
        currentLevel === 4 &&
        selectedChapter?.typeName?.toLowerCase().trim() !== "community toilets"
      ) {
        onClose(project);
      }
    }
  };

  const capturValue = async (name, value) => {
    try {
      const chapterData = {
        projectId: projectId,
        chapterId: chapterId,
        toiletTypeId: selectedChapter?.id,
        toiletCategoryId: selectedCategoryObj?.id || "",
        userId: userId,
        locationId: subCategory?.id,
      };

      if (
        selectedChapter?.typeName?.toLowerCase().trim() === "community toilets"
      ) {
        chapterData.numberOfTargetCommunity =
          name === "value1" ? value ?? "0" : textFieldValues.value1 ?? "0";
        chapterData.numberOfAreaOfTheCommunity =
          name === "value2" ? value ?? "0" : textFieldValues.value2 ?? "0";
        chapterData.questionAnswer = imageSelected;
        chapterData.positionOfToilet = positionOfToilet;
        chapterData.numberOfBlocks = proposedBlocks;

        // Parse and calculate modulus
        const targetCommunity = parseFloat(chapterData.numberOfTargetCommunity);
        const areaOfCommunity = parseFloat(
          chapterData.numberOfAreaOfTheCommunity
        );

        if (!isNaN(targetCommunity) && !isNaN(areaOfCommunity)) {
          setModulusResult(
            calculateModulusResult(targetCommunity, areaOfCommunity)
          );
        }
      } else {
        // If it's not "community toilets", use the other fields
        chapterData.numberOfMenWith1km =
          name === "value1" ? value : textFieldValues.value1;
        chapterData.numberOfWemenWith1km =
          name === "value2" ? value : textFieldValues.value2;
      }

      let response = await dispatch(
        UpdateChapterTypes({ chapterData, projectId, chapterId })
      );
      setUpdateData(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handlePreviousClick = () => {
    const typeNameLower = selectedChapter?.typeName?.toLowerCase().trim();

    const level3Types = [
      "market",
      "hospitals",
      "paratransit location & parking area",
      "open area",
      "beaches",
      "public and semi public area",
      "parks and playground",
      "community toilets",
    ];

    if (currentLevel > 0) {
      if (currentLevel == 3 && level3Types.includes(typeNameLower)) {
        setCurrentLevel(0);
      } else {
        let checkLvl = currentLevel === 3;
        if (typeNameLower === "transit area") {
          setCurrentLevel(currentLevel - 1);
        } else {
          setCurrentLevel(checkLvl ? 1 : currentLevel - 1);
        }
      }

      if (projectId && chapterId) {
        getMultiLevelData(projectId, chapterId);
      }
    } else {
    }
  };

  const handleSubCategoryClick = (index, data) => {
    setSelectedSubCategory(index);
    setSelectedSubSubCategory(null);
    setCalculationData(null);
    setSelectedCategoryObj(data);
    setCurrentLevel(1);
  };
  const handleSubSubCategoryClick = (index, data) => {
    setSelectedSubSubCategory(index);
    setSubCategory(data);
    setCurrentLevel(2);
  };

  const handleTextFieldChange = (e) => {
    const { name, value } = e.target;
    setTextFieldValues({
      ...textFieldValues,
      [name]: value,
    });
    capturValue(name, value);
  };

  const handleChange = (event) => {
    setImageSelected(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPositionOfToilet(event.target.value);
    setSelectedValue(event.target.value);
  };

  const renderFootballContainer = () => {
    if (
      selectedChapter?.typeName?.toLowerCase().trim() === "community toilets"
    ) {
      return (
        <FootballContainer>
          <FootballTextItem>
            <TitleTypography variant="body1" sx={{ mt: 1 }}>
              {"Footfall of the targeted community"}
            </TitleTypography>
            <div>{modulusResult ?? ""}</div>
          </FootballTextItem>
        </FootballContainer>
      );
    }
    return (
      <FootballContainer>
        <FootballTextItem>
          <TitleTypography variant="body1" sx={{ mt: 1 }}>
            {"Seats necessary for men"}
          </TitleTypography>
          <div>{updateData?.seatsNecessoryForMen}</div>
        </FootballTextItem>
        <FootballTextItem>
          <TitleTypography variant="body1" sx={{ mt: 1 }}>
            {"Urinals necessary for men"}
          </TitleTypography>
          <div>{updateData?.urinalsNecessoryForMen}</div>
        </FootballTextItem>
        <FootballTextItem>
          <TitleTypography variant="body1" sx={{ mt: 1 }}>
            {"Seats necessary for women"}
          </TitleTypography>
          <div>{updateData?.seatsNecessoryForWomen}</div>
        </FootballTextItem>
        {selectedChapter?.typeName?.toLowerCase().trim() ===
          "parks and playground" && (
            <>
              <FootballTextItem>
                <TitleTypography variant="body1" sx={{ mt: 1 }}>
                  {"Seats necessary for kids"}
                </TitleTypography>
                <div>{updateData?.seatsForKids}</div>
              </FootballTextItem>
              <FootballTextItem>
                <TitleTypography variant="body1" sx={{ mt: 1 }}>
                  {"Urinals necessary for kids"}
                </TitleTypography>
                <div>{updateData?.urinalsForKids}</div>
              </FootballTextItem>
            </>
          )}
      </FootballContainer>
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <RunModalBox>
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <ProjectTitle
          variant="h6"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          label="Enter Project Title"
          fullWidth
          margin="normal"
        />
        {currentLevel === 0 && (
          <Box>
            <HeaderText>{"Choose your toilet type"}</HeaderText>
            <ChapterText>{chapterNumber}</ChapterText>
            <CategoryButton>
              {TypeCategoryDatas?.map((category, index) => (
                <TypeOfButton
                  key={index}
                  onClick={() => handleCategoryClick(index, category)}
                  selected={selectedCategory === index}
                  sx={{ marginBottom: 1 }}
                >
                  {category?.typeName}
                </TypeOfButton>
              ))}
            </CategoryButton>
          </Box>
        )}
        {currentLevel === 1 && (
          <Box>
            <HeaderText>{"Choose the sub category of toilet"}</HeaderText>
            <ChapterText>{chapterNumber}</ChapterText>
            <CategoryButton>
              {TypeCategoryDatas[selectedCategory]?.toiletCategoryDTOS?.map(
                (subCategory, index) => (
                  <TypeOfButton
                    key={index}
                    onClick={() => handleSubCategoryClick(index, subCategory)}
                    selected={selectedSubCategory === index}
                    sx={{ marginBottom: 1 }}
                  >
                    {subCategory?.name}
                  </TypeOfButton>
                )
              )}
            </CategoryButton>
          </Box>
        )}
        {currentLevel === 2 && selectedSubCategory !== null && (
          <Box>
            <HeaderText>{"Choose toilet location"}</HeaderText>
            <ChapterText>{chapterNumber}</ChapterText>
            <CategoryButton>
              {LocationType?.map((subSubCategory, index) => (
                <TypeOfButton
                  key={index}
                  onClick={() =>
                    handleSubSubCategoryClick(index, subSubCategory)
                  }
                  selected={selectedSubSubCategory === index}
                  sx={{ marginBottom: 1 }}
                >
                  {subSubCategory?.name}
                </TypeOfButton>
              ))}
            </CategoryButton>
          </Box>
        )}
        {currentLevel == 3 && (
          <Box>
            <HeaderText>{"Footfall Calculation"}</HeaderText>
            <ChapterText>{chapterNumber}</ChapterText>
            {selectedChapter?.typeName?.toLowerCase().trim() ===
              "parks and playground" && (
                <NoteMessage>
                  <b>Note :</b> Same as public space but kids toilet are added in
                  equal proportion to adults.
                </NoteMessage>
              )}

            {selectedChapter?.typeName?.toLowerCase().trim() ===
              "community toilets" ? (
              <FootballContainer>
                <div>
                  <TitleTypography variant="body1" sx={{ mt: 1 }}>
                    {"Enter the population of the targeted community"}
                  </TitleTypography>
                  <CustomTextField
                    fullWidth
                    margin="normal"
                    type="number"
                    name="value1"
                    value={textFieldValues.value1}
                    onChange={handleTextFieldChange}
                  />
                </div>
                <div>
                  <TitleTypography variant="body1" sx={{ mt: 1 }}>
                    {"Enter the area of the community in sq km"}
                  </TitleTypography>
                  <CustomTextField
                    fullWidth
                    margin="normal"
                    type="number"
                    name="value2"
                    value={textFieldValues.value2}
                    onChange={handleTextFieldChange}
                    min={0.01}
                  />
                </div>
              </FootballContainer>
            ) : (
              <FootballContainer>
                <div>
                  <TitleTypography variant="body1" sx={{ mt: 1 }}>
                    {"Number on men within 1 km"}
                  </TitleTypography>
                  <CustomTextField
                    fullWidth
                    margin="normal"
                    name="value1"
                    value={textFieldValues.value1}
                    onChange={handleTextFieldChange}
                  />
                </div>
                <div>
                  <TitleTypography variant="body1" sx={{ mt: 1 }}>
                    {"Number on women within 1 km"}
                  </TitleTypography>
                  <CustomTextField
                    fullWidth
                    margin="normal"
                    name="value2"
                    value={textFieldValues.value2}
                    onChange={handleTextFieldChange}
                  />
                </div>
              </FootballContainer>
            )}

            {renderFootballContainer()}
          </Box>
        )}

        {currentLevel == 4 && (
          <Box>
            <HeaderText>{"Footfall Calculation"}</HeaderText>
            <ChapterText>{chapterNumber}</ChapterText>
            {renderFootballContainer()}
          </Box>
        )}

        {selectedChapter?.typeName?.toLowerCase().trim() ===
          "community toilets" &&
          currentLevel === 5 && (
            <Box>
              <HeaderText>{"Positioning of Community Toilets"}</HeaderText>
              <ChapterText>{chapterNumber}</ChapterText>
              <QuestionText>Question</QuestionText>
              <AnswerText>
                Are there any existing toilets within 500 meters radius service
                area of the proposed toilet?
              </AnswerText>
              <CustomRadioGroup value={imageSelected} onChange={handleChange}>
                <FormControlLabel
                  value="yes"
                  control={<OrangeRadio />}
                  label="Yes"
                />
                <FormControlLabel
                  value="no"
                  control={<OrangeRadio />}
                  label="No"
                />
              </CustomRadioGroup>
            </Box>
          )}
        {currentLevel === 6 &&
          selectedChapter?.typeName?.toLowerCase().trim() ===
          "community toilets" && (
            <>
              <HeaderText>Positioning of Community Toilets</HeaderText>
              <CustomRadioGroup
                value={selectedValue}
                onChange={handlePositionChange}
                row
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "nowrap",
                }}
              >
                {["1", "2", "3"].map((option, index) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    checked={positionOfToilet === option}
                    onChange={handlePositionChange}
                    label={
                      <>
                        <img
                          src={
                            index === 0
                              ? option1Image
                              : index === 1
                                ? option2Image
                                : option3Image
                          }
                          alt={`Option ${option}`}
                          style={{
                            maxWidth: "100px",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        />
                        <ChapterText>
                          {index === 0
                            ? "Option 1: If the density distribution pattern is uniform, the toilet block should be placed to maximize serviceable area coverage."
                            : index === 1
                              ? "Option 2: If the density distribution pattern is random, the toilet block should be positioned in multiple locations to enhance accessibility."
                              : "Option 3: If the density distribution pattern is clumped, the toilet block should also be positioned in multiple locations to improve accessibility."}
                        </ChapterText>
                      </>
                    }
                  />
                ))}
              </CustomRadioGroup>
            </>
          )}

        {currentLevel === 7 &&
          selectedChapter?.typeName?.toLowerCase().trim() ===
          "community toilets" && (
            <Box>
              <HeaderText>{"Proposed number of Toilet Blocks"}</HeaderText>
              <ChapterText>{chapterNumber}</ChapterText>
              <TitleTypography variant="body1" sx={{ mb: 1 }}>
                {`You chose ${selectedValue === "1"
                  ? "Option 1"
                  : selectedValue === "2"
                    ? "Option 2"
                    : "Option 3"
                  }`}
              </TitleTypography>
              <Box sx={{ mb: 2 }}>
                {selectedValue && (
                  <img
                    src={
                      selectedValue === "1"
                        ? option1Image
                        : selectedValue === "2"
                          ? option2Image
                          : option3Image
                    }
                    alt="Selected Option"
                    style={{
                      maxWidth: "150px",
                      margin: "0 auto",
                    }}
                  />
                )}
              </Box>
              <TitleTypography variant="body1" sx={{ mb: 2 }}>
                {
                  "Enter the number of blocks proposed based on the above selected option:"
                }
              </TitleTypography>
              <Box sx={{ mb: 4 }}>
                <CustomTextField
                  type="number"
                  value={proposedBlocks}
                  onChange={handleProposedBlocksChange}
                  fullWidth
                  margin="normal"
                  sx={{ width: "50%" }}
                />
              </Box>
            </Box>
          )}

        <ActionBoxContainer>
          {currentLevel > 0 && (
            <StyledButton
              onClick={handlePreviousClick}
              disabled={currentLevel === 0}
              startIcon={<BackArrowIcon />}
            >
              Previous
            </StyledButton>
          )}
          <CreateButton
            onClick={() => {
              if (
                currentLevel === 7 &&
                selectedChapter?.typeName?.toLowerCase().trim() ===
                "community toilets"
              ) {
                handleGenerateReportClick();
                handleNext(true);
              } else if (currentLevel === 5 && selectedValue === "no") {
                navigateToProjectPage();
              } else {
                handleNext(false);
              }
            }}
            disabled={
              (currentLevel === 0 && selectedCategory === null) ||
              (currentLevel === 1 && selectedSubCategory === null) ||
              (currentLevel === 2 && selectedSubSubCategory === null) ||
              (currentLevel === 3 &&
                (!textFieldValues.value1 || !textFieldValues.value2)) ||
              (currentLevel === 5 && imageSelected !== "yes") ||
              (currentLevel === 6 && positionOfToilet === "") ||
              (currentLevel === 8 &&
                selectedChapter?.typeName?.toLowerCase().trim() ===
                "community toilets")
            }
          >
            {currentLevel === 7
              ? "Generate Report"
              : currentLevel === 4 &&
                selectedChapter?.typeName?.toLowerCase().trim() ===
                "community toilets"
                ? "Next"
                : currentLevel === 4
                  ? "Generate Report"
                  : "Next"}
          </CreateButton>
        </ActionBoxContainer>
      </RunModalBox>
    </Modal>
  );
}

export default RunModal;
