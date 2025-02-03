import React, { useEffect, useState } from "react";
import { 
  CenteredDiv, 
  PageContainer, 
  StyledButton, 
  StyledCode, 
  CharacterImageWrapper, 
  CharacterImage, 
  Dropdown, 
  Label 
} from "./styled";

import {
  speechCharacteristics,
  locations,
  npcRoles,
  visualTraits,
  Classes,
  classColorMap
} from "./enums";
import { StatBar } from "./components";
import { HealthSpeedSpellBar } from "./components/HealthSpeedSpellBar";

// List of available classes and levels
const classList = Object.keys(Classes);
const levelList = Array.from({ length: 20 }, (_, i) => i + 1);

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
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [selectedClass, setSelectedClass] = useState(Classes.Barbarian(selectedLevel));


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

  console.log(selectedClass)

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

              {/* Class and Level Dropdowns */}
              <div>
          <Dropdown 
            value={selectedClass.className} 
            onChange={(e) => {
              setSelectedClass(Classes[e.target.value](selectedLevel))
            }}
            color={classColorMap[selectedClass.className]}
          >
            {classList.map((className, index) => (
              <option key={index} value={className}>
                {className}
              </option>
            ))}
          </Dropdown>
        </div>

        <div>
          <Label>Level</Label>
          <Dropdown 
            value={selectedLevel} 
            onChange={(e) => {
              setSelectedLevel(e.target.value);
            }}
            color={classColorMap[selectedClass.className]}
          >
            {levelList.map((level) => (
              <option key={level} value={level}>
                Level {level}
              </option>
            ))}
          </Dropdown>
        </div>

        <HealthSpeedSpellBar
          health={selectedClass.hitPoints}
          speed={selectedClass.speed}
          spellSlots={description.spellSlots}
        />


      <StatBar reroll={description} />

      <StyledButton onClick={generateCharacter} disabled={isGenerating}>
        {isGenerating ? "Generating..." : "Generate Character"}
      </StyledButton>
    </PageContainer>
  );
};
