import React, { useEffect, useState } from "react";
import {
  StatBarContainer,
  StatTile,
  StatName,
  StatValue,
  StatModifier,
  RerollButton,
} from "./styled";

const stats = [
  { name: "Strength", short: "STR" },
  { name: "Dexterity", short: "DEX" },
  { name: "Constitution", short: "CON" },
  { name: "Intelligence", short: "INT" },
  { name: "Wisdom", short: "WIS" },
  { name: "Charisma", short: "CHA" },
];

// Function to roll 4d6, drop the lowest, and sum the highest 3
const rollStat = () => {
  let rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => a - b); // Sort rolls ascending
  return rolls.slice(1).reduce((acc, val) => acc + val, 0); // Sum top 3
};

// Function to calculate the modifier
const getModifier = (score) => Math.floor((score - 10) / 2);

export const StatBar = (reroll) => {
  const [statValues, setStatValues] = useState(stats.map(() => rollStat()));

  // Reroll stats
  const rerollStats = () => {
    setStatValues(stats.map(() => rollStat()));
  };

  useEffect(() => {
    rerollStats();
  }, [reroll]);

  return (
    <StatBarContainer>
      {stats.map((stat, index) => (
        <StatTile key={stat.name}>
          <StatName>{stat.short}</StatName>
          <StatValue>{statValues[index]}</StatValue>
          <StatModifier>
            {getModifier(statValues[index]) >= 0 ? "+" : ""}
            {getModifier(statValues[index])}
          </StatModifier>
        </StatTile>
      ))}
    </StatBarContainer>
  );
};

