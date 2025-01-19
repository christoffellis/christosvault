import React, { useState, useEffect } from "react";
import { OuterCircle, MiddleCircle, InnerCircle, Wrapper, Letter, Label } from "./styles";
import { runeMeanings } from "./enums/runeMeaning";
import { BackgroundWrapper } from "./styles";
import { Background } from "./styles";

// Panel component for showing the rune names, runes, and meanings
const Panel = ({ runesData }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: "10%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "250px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        padding: "20px",
        borderRadius: "8px",
        color: "white",
        boxShadow: "2px 2px 12px rgba(0, 0, 0, 0.8)",
      }}
    >
      {runesData.map((runeData, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h3 style={{ display: "flex", alignItems: "center" }}>
            {/* Display Rune with its glow */}
            <Letter
              style={{
                color: runeData.color,
                marginRight: "10px",
                fontSize: "24px",
                transition: "color 0.5s ease-in-out, text-shadow 0.5s ease-in-out", // Add animation to letter glow
              }}
              glowColor={runeData.glowColor}
            >
              {runeData.rune}
            </Letter>
            {runeData.name}
          </h3>
          <p>{runeData.meaning}</p>
        </div>
      ))}
    </div>
  );
};

const RuneSpinner = () => {
  const [outerRotation, setOuterRotation] = useState(0);
  const [middleRotation, setMiddleRotation] = useState(0);
  const [innerRotation, setInnerRotation] = useState(0);

  const handleOuterClick = () => {
    setOuterRotation((prev) => prev + 1); // Rotate 1/12 of a full rotation
  };

  const handleMiddleClick = () => {
    setMiddleRotation((prev) => prev + 1);
  };

  const handleInnerClick = () => {
    setInnerRotation((prev) => prev + 1);
  };

  // Randomize rotation when space bar is pressed
  const handleSpaceBarPress = (e) => {
    if (e.key === " ") {
      setOuterRotation(Math.floor(Math.random() * 12));
      setMiddleRotation(Math.floor(Math.random() * 12));
      setInnerRotation(Math.floor(Math.random() * 12));
    }
  };

  useEffect(() => {
    // Add event listener for space bar press
    window.addEventListener("keydown", handleSpaceBarPress);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleSpaceBarPress);
    };
  }, []); // Empty array ensures this effect runs only once on mount

  const radiusData = [
    {
      radius: "35vh",
      color: "turquoise",
      background: "cyan",
    },
    {
      radius: "25vh",
      color: "gold",
      background: "yellow",
    },
    {
      radius: "15vh",
      color: "magenta",
      background: "violet",
    },
  ];

  const renderRunes = (radius, circleRotation) => {
    const runes = Object.keys(runeMeanings); // Fetch runes from the enum

    const radData = radiusData[radius];

    return runes.slice(0, 12).map((rune, index) => {
      const rotateAngle = index * 30;

      const lightIndex = ((6 - Math.floor(circleRotation / 30) % 12) + 12) % 12;

      return (
        <div
          key={index}
          style={{
            position: "absolute",
            transform: `rotate(${rotateAngle}deg) translate(${radData.radius}) rotate(-${rotateAngle}deg)`,
            textAlign: "center",
          }}
        >
          <Letter
            style={{
              color: index === lightIndex ? radData.color : "black",
              transition: "color 0.5s ease-in-out, text-shadow 0.5s ease-in-out", // Add animation to label movement
              position: "relative", // Ensure the letter is positioned relative
            }}
            glowColor={index === lightIndex ? radData.background : "gray"}
          >
            {runeMeanings[rune].rune}
          </Letter>
        </div>
      );
    });
  };

  // Get the names, runes, and meanings of the highlighted runes from the rotation
  const getHighlightedRunes = () => {
    const runes = Object.keys(runeMeanings);
    const outerRune = runes[Math.floor((( -outerRotation + 6) % 12 + 12) % 12)];
    const middleRune = runes[Math.floor((( -middleRotation + 6) % 12 + 12) % 12)];
    const innerRune = runes[Math.floor((( -innerRotation + 6) % 12 + 12) % 12)];
    

    return [
      {
        rune: runeMeanings[outerRune].rune,
        name: runeMeanings[outerRune].name,
        meaning: runeMeanings[outerRune].meaning,
        color: "turquoise", // This will match the color used for the outer circle
        glowColor: "cyan",   // This will match the glow effect for the outer circle
      },
      {
        rune: runeMeanings[middleRune].rune,
        name: runeMeanings[middleRune].name,
        meaning: runeMeanings[middleRune].meaning,
        color: "gold", // This will match the color used for the middle circle
        glowColor: "yellow", // This will match the glow effect for the middle circle
      },
      {
        rune: runeMeanings[innerRune].rune,
        name: runeMeanings[innerRune].name,
        meaning: runeMeanings[innerRune].meaning,
        color: "magenta", // This will match the color used for the inner circle
        glowColor: "violet", // This will match the glow effect for the inner circle
      },
    ];
  };

  return (
    <>
      <Background />
      <Wrapper>
        <OuterCircle
          style={{ transform: `rotate(${outerRotation * 30}deg)` }}
          onClick={handleOuterClick}
        >
          {renderRunes(0, outerRotation * 30)} {/* Updated radius */}
        </OuterCircle>
        <MiddleCircle
          style={{ transform: `rotate(${middleRotation * 30}deg)` }}
          onClick={handleMiddleClick}
        >
          {renderRunes(1, middleRotation * 30)} {/* Updated radius */}
        </MiddleCircle>
        <InnerCircle
          style={{ transform: `rotate(${innerRotation * 30}deg)` }}
          onClick={handleInnerClick}
        >
          {renderRunes(2, innerRotation * 30)} {/* Updated radius */}
        </InnerCircle>
      </Wrapper>

      {/* Floating panel with rune names, runes, and meanings */}
      <Panel runesData={getHighlightedRunes()} />
    </>
  );
};

export default RuneSpinner;
