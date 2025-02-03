import styled from "styled-components";

// Container for the stat tiles
export const StatBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
`;

// Individual stat tile
export const StatTile = styled.div`
  width: 80px;
  height: 100px;
  background-color: #2d2d2d;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  font-family: "Poppins", sans-serif;
  transition: transform 0.2s ease-in-out, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #3a3a3a;
  }
`;

// Stat name (e.g., STR, DEX)
export const StatName = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  opacity: 0.8;
`;

// Stat value (e.g., 15, 18)
export const StatValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 4px 0;
`;

// Stat modifier (e.g., +2, -1)
export const StatModifier = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

// Reroll button
export const RerollButton = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #1e90ff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background-color: #007bff;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;
