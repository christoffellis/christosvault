import React from "react";
import {
  HealthSpeedSpellBarContainer,
  InfoTile,
  InfoName,
  InfoValue,
} from "./styled";

export const HealthSpeedSpellBar = ({ health, speed, spellSlots }) => {
  return (
    <HealthSpeedSpellBarContainer>
      {/* Health Tile */}
      <InfoTile>
        <InfoName>Health</InfoName>
        <InfoValue>{health}</InfoValue>
      </InfoTile>

      {/* Speed Tile */}
      <InfoTile>
        <InfoName>Speed</InfoName>
        <InfoValue>{speed} ft.</InfoValue>
      </InfoTile>

      {/* Spell Slots */}
      {/* <SpellSlotContainer>
        {Object.keys(spellSlots).map((level) => (
          <SpellSlotLevel key={level}>
            <InfoName>Level {level}</InfoName>
            <SpellSlotCount>{spellSlots[level].length}</SpellSlotCount>
          </SpellSlotLevel>
        ))}
      </SpellSlotContainer> */}
    </HealthSpeedSpellBarContainer>
  );
};
