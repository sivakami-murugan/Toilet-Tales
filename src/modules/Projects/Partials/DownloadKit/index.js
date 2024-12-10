import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import IconCard from "../../../../components/IconCard/Iconcard";
import { DownloadCardContainer, IconAlign } from "../../Styles";
const DownloadIconIndex = ({ projectId, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(projectId);
  };

  return (
    <DownloadCardContainer>
      <IconAlign>
        <IconCard
          icon={DeleteIcon}
          text="Delete"
          color="red"
          onClick={handleDeleteClick}
          iconSize="16px"
          textSize="14px"
        />
      </IconAlign>
    </DownloadCardContainer>
  );
};

export default DownloadIconIndex;
