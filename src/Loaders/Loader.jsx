import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import hooks for navigation
import { Panel } from "./styled";
import { init } from "./common/fluidLoader";

export const Loader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get search params from the URL
  const searchParams = new URLSearchParams(location.search);
  const radius = searchParams.get("radius");
  const color = searchParams.get("color");
  const speed = searchParams.get("speed");

  useEffect(() => {
    // If radius or color are missing, update the URL
    if (!radius || !color || !speed) {
      const newParams = new URLSearchParams(location.search);

      if (!radius) newParams.set("radius", window.screen.width * 0.025); // Default radius
      if (!color) newParams.set("color", "408810"); // Default color (red)

      if (!speed) newParams.set("speed", "0.01");

      navigate(`?${newParams.toString()}`, { replace: true });
    }
    else
    {
      init(
        {radius, color, speed}
      );
    }
  }, [radius, color, location.search, navigate, speed]);

  useEffect(() => {

  }, []);

  return (
    <>
      <canvas
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: window.screen.width / window.screen.height,
        }}
      ></canvas>
    </>
  );
};
