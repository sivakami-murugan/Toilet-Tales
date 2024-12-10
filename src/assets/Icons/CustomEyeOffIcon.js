import React from "react";

function CustomEyeOffIcon({ width = 24, height = 24, color = "black" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4.5C7.05 4.5 2.73 7.61 1 12c1.05 2.68 3.08 4.89 5.7 6.08L3 18.83l1.41 1.41 16-16L18.83 3l-3.46 3.46C14.22 6.1 13.13 6 12 6c-4.94 0-9.26 3.11-11 7.5C3.73 17.89 8.05 21 12 21c2.48 0 4.73-1 6.39-2.56L19.5 18.6c-1.73 1.62-4.05 2.64-6.5 2.64-4.94 0-9.26-3.11-11-7.5C2.74 8.6 6.94 5 12 5c1.13 0 2.22.1 3.29.29l1.44-1.44C14.73 3.98 13.42 3.5 12 3.5zm6 9.5h-5.5l2.5-2.5c1.35-.35 2.9-.35 4.5-.05 1.05.24 2.06.63 3.02 1.11l.98-.98C19.07 9.48 16.64 9 14.5 9H12v5h5.5zM14 16c-1.93 0-3.5-1.57-3.5-3.5S12.07 9 14 9v7z"
        fill={color}
      />
    </svg>
  );
}

export default CustomEyeOffIcon;
