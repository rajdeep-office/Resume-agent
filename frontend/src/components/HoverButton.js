import React, { useState } from "react";

function HoverButton({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    padding: "12px 24px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: isHovered ? "#ff6f61" : "#ffffff",
    color: isHovered ? "#ffffff" : "#333333",
    boxShadow: isHovered
      ? "0 4px 12px rgba(0, 0, 0, 0.2)"
      : "0 2px 6px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
  };

  return (
    <button
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}

export default HoverButton;
