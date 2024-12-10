import React from "react";
import { HeaderText } from "../Styles";
import { ImageConatiner, ImageText, ParaText } from "./Styles";

function FocusScreen({ header, image, imageText, paraText, focusCondition }) {
  return (
    <div>
      <HeaderText>{header}</HeaderText>
      <ImageConatiner>
        {image}
        <ImageText>{imageText}</ImageText>
      </ImageConatiner>
      {focusCondition == true ? (
        <ParaText>
          <b>Quantitative:</b> The waiting time and footfall are directly
          proportional to the volume of the waiting area. Normally, this area is
          reduced to a minimum corridor width, but it can be tailored to suit
          the nature of the activities taking place. <br></br>
          <b>Qualitative:</b> Implementing the meaning of a comfort station
          includes creating waiting areas or similar spaces as comfort stations.
          This concept is further enhanced after the cubicle, where the
          imagability of the toilet is established.<br></br>
          <b> Transition must occur on two levels:</b> <br></br>
          1. One externally from the street to the toilet block. <br></br>
          2. Internally,from the external transition space to the cubicle via a
          corridor.
        </ParaText>
      ) : (
        <ParaText>{paraText}</ParaText>
      )}
    </div>
  );
}

export default FocusScreen;
