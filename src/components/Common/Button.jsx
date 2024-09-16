import React from "react";

export default function ToggleButton({ onClick, isToggled, textOn, textOff }) {
  return (
    <button
      className="border-[1px] border-mainAccent p-5 transition-colors duration-300"
      onClick={onClick}
    >
      {isToggled ? textOn : textOff}
    </button>
  );
}
