import React, { useEffect, useState } from "react";
import { init, start, setColor, setSpeed, setRadius } from "./common/fluidLoader";

export const Loader = () => {
  // States for radius, color, speed, and imageradius
  const [image, setImage] = useState(
    "https://images.immediate.co.uk/production/volatile/sites/10/2023/06/2048x1365-Oak-trees-SEO-GettyImages-90590330-b6bfe8b.jpg"
  ); // Default image

  // Reference for values to be passed to fluidLoader
  const valuesRef = React.useRef({color: "ffffff", image });

  useEffect(() => {
    init(); // Initialize the fluid loader
  }, []);

  useEffect(() => {
    // Update the fluid loader whenever any state changes
    setColor("ffffff"); // Update the color in the fluid loader
    start(valuesRef); // Start or restart the loader with updated values
  }, [image]);

  useEffect(() => {
    const channel = new BroadcastChannel("loader_channel");

    channel.onmessage = (event) => {
      const { radius, color, speed, image } = event.data;

      // Update the state values
      setRadius(radius);
      setColor(color);
      setImage(image);
      setSpeed(speed);
    };

    return () => {
      channel.close();
    };
  }, []); // We only need to set up the listener once

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${image})`, // Use selected image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <canvas
        id="mask-canvas"
        style={{
          mixBlendMode: "darken",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      ></canvas>
    </>
  );
};
