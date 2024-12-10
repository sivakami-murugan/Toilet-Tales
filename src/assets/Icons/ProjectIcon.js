import React from "react";

export const ProjectIcon = ({ active }) => {
  const fillColor = active ? "#ffffff" : "#8294A6";
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill={fillColor}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19.1667 13.3333C19.1667 14.4379 18.2712 15.3333 17.1667 15.3333H2.83333C1.72876 15.3333 0.833328 14.4379 0.833328 13.3333V2.66667C0.833328 1.5621 1.72876 0.666672 2.83333 0.666672H7.79016C8.24041 0.666672 8.67748 0.818599 9.03066 1.09787L10.2586 2.06881C10.6117 2.34808 11.0488 2.50001 11.4991 2.50001H17.1667C18.2712 2.50001 19.1667 3.39544 19.1667 4.50001V13.3333Z"
        />
      </svg>
    </div>
  );
};
