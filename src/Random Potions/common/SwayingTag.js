import React, { useEffect, useState } from "react";
import { StyledTag } from "./styled";

const SwayingTag = ({ neckRef, tagRef, children, widths}) => {
  const [path, setPath] = useState("");

  // Function to calculate the path for the spline
  const calculatePath = () => {
    if (neckRef.current && tagRef.current) {
      const neckRect = neckRef.current.getBoundingClientRect();
      const tagRect = tagRef.current.getBoundingClientRect();

      const startX = neckRect.left + neckRect.width / 2;
      const startY = neckRect.top + neckRect.height / 2;
      const endX = tagRect.left + tagRect.width / 2;
      const endY = tagRect.top + tagRect.height / 2;

      const controlX = (startX + endX) / 2; // Control point for the spline
      const controlY = Math.min(startY, endY) - 50; // Raise the control point for a nice curve

      // Generate an SVG path using cubic Bezier
      console.log(`M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`);
      return `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`;
    }
    return "";
  };

  // Update the path whenever the neck or tag position changes
  useEffect(() => {
    const updateSpline = () => setPath(calculatePath());

    // Initial calculation
    updateSpline();

    // Update spline on window resize to ensure correct positions
    window.addEventListener("resize", updateSpline);

    return () => {
      window.removeEventListener("resize", updateSpline);
    };
  }, [neckRef, tagRef, widths]);

  return (
    <div style={{ position: "relative", flex: 1 }}>
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <path d={path} stroke="#000" strokeWidth="2" fill="none" />
      </svg>
      <div ref={tagRef} style={{ position: "absolute" }}>
        {children || <StyledTag />}
      </div>
    </div>
  );
};

export default SwayingTag;
