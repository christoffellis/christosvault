import React, { useEffect, useState } from "react";
import { 
  CenteredDiv, 
  PageContainer, 
  StyledButton, 
  StyledCode, 
  CharacterImageWrapper, 
  CharacterImage 
} from "./styled";

import {
  speechCharacteristics,
  locations,
  npcRoles,
  visualTraits,
} from "./enums";
import { StatBar } from "./components";

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const CharacterGenerator = () => {
  const [description, setDescription] = useState({
    location: "",
    role: "",
    trait1: "",
    trait2: "",
    speechCharacteristic: "",
  });

  const [isGenerating, setIsGenerating] = useState(false);

  // Function to generate a random character description
  const generateCharacter = () => {
    setIsGenerating(true);
    let count = 0;
    let intervalId = null;
    const maxCount = 7; 

    intervalId = setInterval(() => {
      const location = getRandomElement(locations);
      const role = getRandomElement(npcRoles);
      const trait1 = getRandomElement(visualTraits);
      const trait2 = getRandomElement(visualTraits);
      const speechCharacteristic = getRandomElement(speechCharacteristics);

      setDescription({
        location,
        role,
        trait1,
        trait2,
        speechCharacteristic,
      });

      count++;
      if (count >= maxCount) {
        clearInterval(intervalId);
        setTimeout(() => {
          setIsGenerating(false);
        }, 100);
      }
    }, 100);
  };

  useEffect(() => {
    generateCharacter();
  }, []);

  return (
    <PageContainer>
      <CenteredDiv>
        {/* Character Image with Cutout Effect */}
        <CharacterImageWrapper>
          <CharacterImage src={description.location.url} alt="Character Portrait" />
        </CharacterImageWrapper>

        {/* Display randomized description */}
        <p>You arrive at a <StyledCode>{description.location.name}</StyledCode></p>
        <p>There is a <StyledCode>{description.role}</StyledCode></p>
        <p>They have <StyledCode>{description.trait1}</StyledCode> and <StyledCode>{description.trait2}</StyledCode>.</p>
        <p>They tend to speak with <StyledCode>{description.speechCharacteristic}</StyledCode>.</p>
      </CenteredDiv>

      <StatBar reroll={description} />

      <StyledButton onClick={generateCharacter} disabled={isGenerating}>
        {isGenerating ? "Generating..." : "Generate Character"}
      </StyledButton>
    </PageContainer>
  );
};
