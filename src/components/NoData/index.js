import React from "react";
import { NoDataIcon } from "../../assets/Icons/NoDataIcon";
import { NoDataText } from "../Header/Style";
function NoDataindex() {
  return (
    <div>
      <NoDataIcon />
      <NoDataText>No Projects found</NoDataText>
    </div>
  );
}

export default NoDataindex;
