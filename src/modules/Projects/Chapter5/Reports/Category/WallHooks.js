import React from "react";
import WallHooksImage from "../../../../../assets/Icons/Chapter5/WallHooksImage";
import {
  PlinthImgContainer,
  ReportsHeading,
  ReportsSubHeading,
  StyledListItem,
} from "../../../Partials/Reports/Styles";

function WallHooks() {
  return (
    <div>
      <ReportsHeading>5.21 Wall Hooks</ReportsHeading>
      <ReportsSubHeading style={{ marginLeft: "20px", marginBottom: "20px" }}>
        Either wall hooks or towel rings must be provided in each cubicle.
        Public and community toilets are not only used for defecating, a large
        group use for bathing and changing.
      </ReportsSubHeading>

      <ol
        style={{
          marginLeft: "20px",
          marginTop: "15px",
          marginBottom: "20px",
          paddingRight: "2.5rem",
        }}
      >
        <StyledListItem>
          In universally accessible toilets, the wall hooks must be placed at a
          height of 1200 mm-1300mm. In this case, the hooks can be fixed to the
          wall avoiding water spillage onto the hung objects.
        </StyledListItem>
        <StyledListItem>
          The hook should be able to support a minimum of 7 kilograms.
        </StyledListItem>
        <StyledListItem>
          It is ideal to provide stainless steel hooks.
        </StyledListItem>
      </ol>
      <PlinthImgContainer style={{ padding: "60px 0px" }}>
        <WallHooksImage />
      </PlinthImgContainer>
    </div>
  );
}

export default WallHooks;
