import React, { useState } from "react";
import { StyledButton, PageContainer, CenteredDiv } from "./styled";
import { Choice, startingChoice } from "./common";

export const BackgroundAssist = () => {
  const [currentChoice, setCurrentChoice] = useState(startingChoice);
  const [fadeOut, setFadeOut] = useState(false);

  const handleChoice = (option) => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentChoice(currentChoice.options[option]);
      setFadeOut(false);
    }, 300); // 300ms matches CSS transition timing
  };

  return (
    <PageContainer>
      <CenteredDiv style={{ opacity: fadeOut ? 0 : 1, transition: "opacity 0.3s ease-in-out" }}>
        {currentChoice instanceof Choice ? (
          <>
            <h2>{currentChoice.prompt}</h2>
            {Object.keys(currentChoice.options).map((option) => (
              <StyledButton key={option} onClick={() => handleChoice(option)}>
                {option}
              </StyledButton>
            ))}
          </>
        ) : (
          <>
            <h2>{currentChoice.name}</h2>
            <p>{currentChoice.description}</p>
          </>
        )}
      </CenteredDiv>
    </PageContainer>
  );
};
