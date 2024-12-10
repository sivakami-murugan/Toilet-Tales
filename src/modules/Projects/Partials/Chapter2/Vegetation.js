import React from "react";
import VegetationImg from "../../../../assets/Icons/VegetationImg";
import { HeaderText } from "../../Styles";
import { ImageConatiner, ImageText, ParaText } from "./StyleComponent";

function Vegetation({ header, image, imageText, paraText, focusCondition }) {
  return (
    <div>
      <HeaderText>{header}</HeaderText>
      <ImageConatiner>
        <VegetationImg />
        <ImageText>{"Vegetation"}</ImageText>
      </ImageConatiner>
      <ParaText>
        By retaining and maintaining the existing green cover of the site,can
        significantly enhance the site's atmosphere. The lush greenery will
        create a more inviting and lively environment, making visitors feel more
        connected to nature. This, in turn, can contribute to changing the
        perception of a public toilet from being just a functional space to a
        harmonious and pleasant one. People are more likely to appreciate and
        take care of facilities that are surrounded by a natural and
        aesthetically pleasing environment. Therefore, preserving the green
        cover is not only beneficial for the site's ambiance but also for
        fostering a positive perception among users.
      </ParaText>
    </div>
  );
}

export default Vegetation;
