import styled from "styled-components";

// Container for the health, speed, and spell slots info
export const HealthSpeedSpellBarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 16px;
`;

// Individual info tile (Health or Speed)
export const InfoTile = styled.div`
  width: 120px;
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

// Info name (e.g., Health, Speed)
export const InfoName = styled.span`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  opacity: 0.8;
`;

// Info value (e.g., 50 HP, 30 ft.)
export const InfoValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 4px 0;
`;

// Container for spell slots
export const SpellSlotContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

// Spell slot for each level (e.g., Level 1, Level 2)
export const SpellSlotLevel = styled.div`
  background-color: #2d2d2d;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-family: "Poppins", sans-serif;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover {
    background-color: #3a3a3a;
    transform: scale(1.05);
  }
`;

// Spell slot count (number of slots available for that level)
export const SpellSlotCount = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
  opacity: 0.8;
`;
