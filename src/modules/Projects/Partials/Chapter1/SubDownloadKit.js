import RefreshIcon from "@mui/icons-material/Refresh";
import React, { useState } from "react";
import IconCard from "../../../../components/IconCard/Iconcard";
import { DownloadCardContainer, IconAlign } from "../../Styles";
import ResetModal from "../ResetModal";

const SubDownloadKit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmReset = () => {
    console.log("Reset confirmed");
    handleCloseModal();
  };

  const handleDownloadClick = () => {
    console.log("Download clicked");
  };

  const handleResetClick = () => {
    console.log("Reset clicked");
    handleOpenModal();
  };
  return (
    <DownloadCardContainer>
      <IconAlign>
        <IconCard
          icon={RefreshIcon}
          text="Reset"
          color="red"
          onClick={handleResetClick}
          iconSize="16px"
          textSize="14px"
        />
      </IconAlign>

      <ResetModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmReset}
      />
    </DownloadCardContainer>
  );
};

export default SubDownloadKit;
