import React from "react";
import FemaleImage from "../../../../../assets/Icons/FemaleImage";
import MaleImage from "../../../../../assets/Icons/MaleImage";
import SeatAllocationItem from "../../../../../components/Reports/SeatAllocation";
import { ReportsHeading } from "../Styles";

function SeatAllocation({ updateData, calculateData }) {
  return (
    <div>
      <ReportsHeading style={{ marginBottom: "30px" }}>
        Seat allocation for this project.
      </ReportsHeading>
      <SeatAllocationItem
        ImageComponent={MaleImage}
        gender="Male"
        football={calculateData?.numberOfMenWith1km}
        seatAllocation={calculateData?.seatsNecessoryForMen}
        urinalAllocation={calculateData?.urinalsNecessoryForMen}
      />
      <SeatAllocationItem
        ImageComponent={FemaleImage}
        gender="Female"
        football={calculateData?.numberOfWemenWith1km}
        seatAllocation={calculateData?.seatsNecessoryForWomen}
      />
    </div>
  );
}

export default SeatAllocation;
