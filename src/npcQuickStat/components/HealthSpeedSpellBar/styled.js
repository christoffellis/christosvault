import styled from "styled-components";

// Container for the health, speed, and spell slots info
export const HealthSpeedSpellBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 16px;
`;

// Individual info tile (Health or Speed)
export const InfoTile = styled.div`
  margin: 2px;
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
  opacity: 0.8;
`;

// Info value (e.g., 50 HP, 30 ft.)
export const InfoValue = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 4px 0;
`;

// Table container
export const SpellSlotTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 24px;
  margin-top: 16px;
  font-family: "Poppins", sans-serif;
  color: white;
  text-align: left;

  th, td {
    padding: 2px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  th {
    background: #3a3a3a;
    font-size: 14px;
    text-transform: uppercase;
    opacity: 0.9;
  }

  tr:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

// Row for spell slot circles
export const SpellSlotRow = styled.div`
  display: flex;
  gap: 6px;
`;

// Individual spell slot (circle)
export const SpellSlot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ filledSlot, color }) => (filledSlot ? color : "transparent")};
  border: 1px solid ${({color}) => color}ff;
`;

export const SpellListContainer = styled.div`
 max-height: 400px;
 min-width: 200px;
 overflow: auto;
  color: #fff;
  margin-top: 20px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-align: center;
`;

export const SpellItem = styled.div`
  margin: 5px 0;
  font-size: 14px;
  font-weight: bold;
  text-align: left;

  a {
    color: ${({color}) => color}dd;
    text-decoration: none;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${({color}) => color}ff;
    }
  }
`;
