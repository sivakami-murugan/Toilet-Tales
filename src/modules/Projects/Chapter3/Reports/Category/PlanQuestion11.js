import React from "react";
import CubicalImg from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/CubicalImg";
import CubicalImg2 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/CubicalImg2";
import CubicImg1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/CubicImg1";
import CubicImg2 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/CubicImg2";
import CubicImg3 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/CubicImg3";
import ExistImg from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/ExistImg";
import FanImg from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/FanImg";
import LightImg from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/LightImg";
import RoofImg1 from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/RoofImg1";
import WindowImg from "../../../../../assets/Icons/ChapterThreeImages/ReportsImg/WindowImg";
import {
  CustomDivider,
  OptionHeadings,
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function PlanQuestion11({ reportData }) {
  return (
    <div>
      <ReportsHeading>3.5 Cubicle</ReportsHeading>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "15px" }}>
        1.Size of cubicles
      </OptionHeadings>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        Why focus ?{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "35px", marginLeft: "15px" }}>
        What is the Minimum size required ? It depends on the function intended.
        For instance, if it's solely for the toilet, the cubicle size will be
        different compared to one that includes bathing facilities, where
        standard sizes apply.
      </ReportsSubHeading>
      <ol style={{ marginBottom: "10px", marginLeft: "45px" }}>
        <StyledListItem>
          The clear height of the toilet measured from the surface of the floor
          to the lowest point in the ceiling bottom of slab shall not be less
          than 2.1m.
        </StyledListItem>
        <StyledListItem>
          The floor area of the toilet shall not be less than 1.0 sq.m. with a
          minimum width of 0.9m.
        </StyledListItem>
        <StyledListItem>Minimum standard size ?</StyledListItem>
      </ol>
      <PlinthImgContainer>
        <CubicImg1 />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "15px" }}>
        2.Supporting facilities in the cubicle{" "}
      </OptionHeadings>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        Why focus ?
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "20px", marginLeft: "35px" }}>
        A commode in a cubicle with no taps or faucets is the same as not having
        a toilet. All required amenities for personal hygiene must be provided
        in a cubicle.
        <b>Mandatory facilities to be included:</b>
      </ReportsSubHeading>
      <ol style={{ marginBottom: "15px", marginLeft: "55px" }}>
        <StyledListItem>Faucet</StyledListItem>
        <StyledListItem>Tap</StyledListItem>
        <StyledListItem>Garb rails</StyledListItem>
        <StyledListItem>Flush Tank</StyledListItem>
        <StyledListItem>Bucket & Mug</StyledListItem>
        <StyledListItem>Dustbin</StyledListItem>
        <StyledListItem>Hooks</StyledListItem>
      </ol>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        Apart from the mandatory facilities, are there any provision for any
        addition facilities in the toilet cubicle such as:{" "}
      </OptionHeadings>
      {/* <ol style={{ marginBottom: "15px", marginLeft: "55px" }}>
        <StyledListItem>Tissue and tissue dispenser</StyledListItem>
        <StyledListItem>Soap holder in the bath cubicle</StyledListItem>
        <StyledListItem>Shower facilities</StyledListItem>
      </ol> */}
      <ol style={{ marginBottom: "15px", marginLeft: "55px" }}>
        {reportData[9]?.options?.map((option) => (
          <StyledListItem key={option?.id}>{option?.option}</StyledListItem>
        ))}
      </ol>
      <CustomDivider />
      <ReportsHeading>3.6 Artifacts</ReportsHeading>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        1.Lighting and hygiene
      </OptionHeadings>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "25px" }}>
        Why focus ?
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "20px", marginLeft: "35px" }}>
        When there is no sunlight, a space may appear dark and dingy. Then
        consider a defecation area with no sunlight. Sunlight integration into
        design can increase the value of a space and improve its quality.
      </ReportsSubHeading>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "25px" }}>
        Perceptional Hygiene
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "20px", marginLeft: "35px" }}>
        The design should also address the issue of dark and poorly lit areas.
        Even with resources available, such areas can become dirty due to
        reduced visibility, making it challenging for users and workers alike to
        maintain cleanliness effectively.
      </ReportsSubHeading>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          <b>User Perception:</b> Designing spaces in a way that encourages
          users to perceive cleanliness as important. This can include aspects
          like visual cleanliness cues. Adequate lighting inside the toilets
          will help to improve the hygiene.
        </StyledListItem>
        <StyledListItem>
          <b>Sanitation Worker/Caretaker : </b>Consideration of the needs of
          sanitation workers or caretakers is crucial. Designing corners and
          commodes in a way that it is getting well lit makes workers to keep
          the space clean.
        </StyledListItem>
      </ol>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "25px" }}>
        Qualitative Hygiene:{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "20px", marginLeft: "35px" }}>
        Good lighting is crucial for qualitative hygiene as it enhances
        visibility, prevents fungi and mould growth, and eliminates odors.
        Adequate sunlight also helps maintain hygiene by reducing surface
        dampness and inhibiting microbial proliferation. Maximizing natural
        light and ensuring proper artificial lighting can significantly improve
        overall cleanliness and hygiene in a space.
      </ReportsSubHeading>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          <b> User Perception:</b> Designing spaces in a way that encourages
          users to perceive cleanliness as important. This can include aspects
          like visual cleanliness cues. Adequate lighting inside the toilets
          will help to improve the hygiene.
        </StyledListItem>
        <StyledListItem>
          <b> Sanitation Worker/Caretaker : </b>Consideration of the needs of
          sanitation workers or caretakers is crucial. Designing corners and
          commodes in a way that it is getting well lit makes workers to keep
          the space clean.
        </StyledListItem>
      </ol>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        2. Natural Lighting{" "}
      </OptionHeadings>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At cubicle level{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          At a height of 2.4 m from the finished floor level, one window /
          ventilator of minimum dimension 60 cmX60 cm must be installed.
        </StyledListItem>
        <StyledListItem>
          The window/ventilator must be installed on the cubicle exterior wall.
        </StyledListItem>
        <StyledListItem>
          <b> The window/ventilator </b>must be installed
          <b> on the cubicle exterior wall.</b>
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <CubicImg2 />
      </PlinthImgContainer>{" "}
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At corridor Level{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          At a height of 2.4 m from the finished floor level, one window /
          ventilator of minimum dimension 60 cmX60 cm must be installed.
        </StyledListItem>
        <StyledListItem>
          The ventilator/window must be installed on the exterior walls.{" "}
        </StyledListItem>
        <StyledListItem>
          If wall surface area is available, glass block lighting can be given
          without sacrificing user privacy.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <CubicImg3 />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        3.Artificial Lighting{" "}
      </OptionHeadings>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        Why focus ?{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "30px", marginLeft: "35px" }}>
        Consider a cubicle corner or the end of a corridor with no light. Even
        if the toilet is clean, the lack of light might make it appear dirty.
        Along with natural lighting, it is critical to provide adequate
        artificial lighting at the block level, in the cubicle, and in the
        corridor. A toilet, regardless of time, must have both light sources.
      </ReportsSubHeading>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At block level/ external{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          Use of illuminated advertising boards on external walls must be
          encouraged.
        </StyledListItem>
        <StyledListItem>
          Safety flood lights must be installed to light up the compound/ area
          around.
        </StyledListItem>{" "}
        <StyledListItem>
          A street light in front of the toilet must be installed to illuminate
          the entrance path.
        </StyledListItem>{" "}
        <StyledListItem>All signages must be well lit.</StyledListItem>{" "}
        <StyledListItem>
          Lights must be installed at all corners of the toilet block. The rear
          side/ side with ventilators must be well lit.
        </StyledListItem>{" "}
      </ol>
      <PlinthImgContainer></PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At corridor level{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          For the width of every two cubicles one tube light/CFL must be
          provided on the corridor ceiling.
        </StyledListItem>{" "}
        <StyledListItem>
          One wall mounted tube light must be installed each at the end of the
          corridor.
        </StyledListItem>{" "}
        <StyledListItem>
          Warm color lighting shall be used to enhance the ambience.
        </StyledListItem>{" "}
        <StyledListItem>
          Advertisements, signages must be placed under a light source or must
          be separately lit.
        </StyledListItem>{" "}
        <StyledListItem>
          Lights must be installed at the wash areas, above the mirrors.
        </StyledListItem>
        <StyledListItem>
          The provision of emergency illumination devices must be provided to
          illuminate the path of egress for occupants to exit the toilet safely.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <ExistImg />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At cubicle level{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          Every cubicle must be provided with minimum one tube light/ CFL light.
          The light must be placed on the ceiling right above the commode.
        </StyledListItem>{" "}
        <StyledListItem>
          One wall mounted tube light must be installed each at the end of the
          corridor.
        </StyledListItem>{" "}
        <StyledListItem>
          Sensors can be used to save electricity.{" "}
        </StyledListItem>{" "}
        <StyledListItem>
          Switches to the light must be placed at an easily visible location
          such as the entrance next to the wash area.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <LightImg />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        4. Natural Ventilation{" "}
      </OptionHeadings>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        Why focus ?{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "30px", marginLeft: "35px" }}>
        Have you ever avoided using a toilet because the odour of someone else's
        excrement was lingering in the air? How many times have you shut your
        nose when using a public toilet? Even after flushing, the odour can
        linger within a cubicle, preventing another user from entering the
        cubicle or toilet. Aside from clean surfaces and commodes, smell is
        another characteristic that identifies a toilet's cleanliness. Proper
        ventilation provides proper air circulation.
      </ReportsSubHeading>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At corridor level{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          Window ventilators must be installed at a height above the ceiling
          (2100 mm from the inside of the block and 2400 mm from the ground
          level).
        </StyledListItem>{" "}
        <StyledListItem>
          If low-height ventilators are utilised, they must be installed in
          common areas that are not directly facing the cubicles. The
          ventilator's height from the floor should not exceed 500mm.
        </StyledListItem>{" "}
        <StyledListItem>
          If brick jali or terracotta jalis are provided, they must be located
          away from the toilet cubicle door entry.
        </StyledListItem>{" "}
        <StyledListItem>
          When direct ventilation through walls is difficult, apertures on the
          sloped roof can be given without sacrificing user privacy. A few
          iterations are shown below:
        </StyledListItem>{" "}
        <StyledListItem>
          To prevent users from keeping/dumping waste, the cil/bottom of the
          ventilator must be chamfered to the inside.
        </StyledListItem>
      </ol>
      <PlinthImgContainer>
        <RoofImg1 />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At cubicle level{" "}
      </OptionHeadings>
      <ol style={{ marginBottom: "20px", marginLeft: "45px" }}>
        <StyledListItem>
          Window ventilators must be installed at a height above the ceiling
          (2100 mm from the inside of the block and 2400 mm from the ground
          level).
        </StyledListItem>
        <StyledListItem>Low height ventilators are not advised.</StyledListItem>
      </ol>
      <PlinthImgContainer>
        <WindowImg />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "20px" }}>
        5.Artificial Ventilation{" "}
      </OptionHeadings>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        Why focus ?{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "30px", marginLeft: "35px" }}>
        Have you ever used a toilet without a ventilator? The stink in the air
        persists regardless of how much room freshener is sprayed or how many
        times it is cleaned. Natural ventilation will not be possible in all
        toilets. Toilets are frequently built with limited space availability.
        In such cases, artificial ventilation must be given for air circulation.
      </ReportsSubHeading>
      <ReportsSubHeading style={{ marginBottom: "30px", marginLeft: "35px" }}>
        Exhaust fans must be placed at a position of at least 2.4 meters above
        the finished ground level and at least 5m from any window or fresh air
        intake.
      </ReportsSubHeading>
      <PlinthImgContainer>
        <FanImg />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At corridor level{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "30px", marginLeft: "35px" }}>
        In the case of long corridors or situations where direct access to
        external surfaces is problematic, ducts must be installed and connected
        to the nearest external wall.
      </ReportsSubHeading>
      <PlinthImgContainer>
        <CubicalImg />
      </PlinthImgContainer>
      <OptionHeadings style={{ marginBottom: "20px", marginLeft: "30px" }}>
        At cubicle level{" "}
      </OptionHeadings>
      <ReportsSubHeading style={{ marginBottom: "30px", marginLeft: "35px" }}>
        In the event that no openings are available, each cubicle must have an
        exhaust fan that is connected to a duct to an exterior surface for the
        outflow of air from the cubicles.
      </ReportsSubHeading>
      <PlinthImgContainer>
        <CubicalImg2 />
      </PlinthImgContainer>
    </div>
  );
}

export default PlanQuestion11;
