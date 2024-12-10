import React from "react";
import {
  FootballSeatTitle,
  FootballSeatDescription,
} from "../../modules/Projects/Partials/Reports/Styles";

function FootballRelationSeat({
  title,
  description,
  ImageComponent,
  PeopleCount,
  SeatCount,
}) {
  return (
    <div>
      <FootballSeatTitle>{title}</FootballSeatTitle>
      <FootballSeatDescription>{description}</FootballSeatDescription>
      <div>
        <ImageComponent SeatCount={SeatCount} PeopleCount={PeopleCount} />
      </div>
    </div>
  );
}

export default FootballRelationSeat;
