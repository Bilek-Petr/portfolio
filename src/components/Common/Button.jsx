import React from "react";

export default function ToggleButton({ onClick, isToggled, textOn, textOff }) {
  return (
    <button
      className="link-custom border-[1px] border-mainAccent transition-colors duration-300 hover:text-mainAccent lg:text-2xl"
      style={{ "--tw-shadow-color": "white" }}
      onClick={onClick}
    >
      {isToggled ? textOn : textOff}
    </button>
  );
}
