import React, { useEffect, useState } from "react";
import {
  HealthSpeedSpellBarContainer,
  InfoTile,
  InfoName,
  InfoValue,
  SpellSlotTable,
  SpellSlotRow,
  SpellSlot,
  SpellListContainer,
  SpellItem,
} from "./styled";
import { classColorMap, Spells } from "../../enums";

export const HealthSpeedSpellBar = ({ health, speed, spellSlots, level, characterClass }) => {
  const [selectedSpells, setSelectedSpells] = useState([]);

  useEffect(() => {
    if (Object.keys(Spells).length > 0) {
      setSelectedSpells(getRandomSpells(Spells, characterClass, level));
    }
  }, [characterClass, level]);

  const getRandomSpells = (spellList, characterClass, level) => {
    const allSpells = {};
    // Go through available spell levels
    for (let spellLevel = 0; spellLevel <= level; spellLevel++) {
      if (!spellList[spellLevel]) continue; // Skip if no spells at this level

      let classSpells = Object.entries(spellList[spellLevel]).filter(([_, spellData]) =>
        spellData.classes.includes(characterClass.className)
      );

      classSpells = classSpells.sort(() => 0.5 - Math.random()).slice(0, 5);

      if (characterClass?.spellSlots && characterClass.spellSlots[spellLevel])
      {
        const spellCount = characterClass.spellSlots[spellLevel][Math.min(level - 1, 8)];
        classSpells = classSpells.slice(0, spellCount);
      }

      allSpells[spellLevel] = classSpells;
      console.log(allSpells);
    }

    // Shuffle and pick random ones

    return allSpells;
  };

  return (
    <HealthSpeedSpellBarContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}
      >
        <InfoTile>
          <InfoName>Health</InfoName>
          <InfoValue>{health}</InfoValue>
        </InfoTile>

        <InfoTile>
          <InfoName>Speed</InfoName>
          <InfoValue>{speed} ft.</InfoValue>
        </InfoTile>
      </div>
      {!!Object.keys(spellSlots).length && (
      <div
        style={{
          display: 'flex',
          gap: '24px'
        }}
      >
        <SpellSlotTable>
          <thead>
            <tr>
              <th>Level</th>
              <th>Slots</th>
            </tr>
          </thead>
          <tbody>
          {Object.keys(spellSlots).map((slotLevel) => {

            if (slotLevel > Number(level)) return null; // Only show spell slots up to the current level
            
            const maxLevel = Math.min(level - 1, 8);
            const availableSlots = spellSlots[slotLevel][maxLevel] || 0; 
            return (
              <tr key={slotLevel}>
                <td><InfoName>{Number(slotLevel) === 0 ? 'Cantrip' : `Level ${slotLevel}`}</InfoName></td>
                <td>
                  <SpellSlotRow>
                    {[...Array(availableSlots)].map((_, index) => (
                      <SpellSlot
                        color={classColorMap[characterClass.className]}
                        key={index}
                        filledSlot={true}
                      />
                    ))}
                  </SpellSlotRow>
                </td>
              </tr>
            );
          })}
          </tbody>
        </SpellSlotTable>
        
        <SpellListContainer>
          <InfoName>Selected Spells</InfoName>
          {Object.keys(selectedSpells).map(([spellLevel, spellData]) => 
            selectedSpells[spellLevel].map(([spellName, spellData]) => (
            <SpellItem
              key={spellName}
              color={classColorMap[characterClass.className]}
            >
              <a href={spellData.link} target="_blank" rel="noopener noreferrer">
                {`[${Number(spellLevel) === 0 ? 'C' : spellLevel}] `}{spellName}
              </a>
            </SpellItem>
          )))}
        </SpellListContainer>
      </ div>
      )}


    </HealthSpeedSpellBarContainer>
  );
};
