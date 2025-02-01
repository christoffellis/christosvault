import styled from "styled-components";

// Background
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, #120326 5%, #0a0214 80%);
  z-index: -1;
`;

// Main Container
export const Wrapper = styled.div`
  min-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  overflow: auto;
`;

// Header
export const Header = styled.div`
  width: 90%;
  text-align: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(8px);
  background: linear-gradient(to right, rgba(95, 127, 255, 0.4), rgba(167, 184, 255, 0.4));
  box-shadow: 0px 0px 15px rgba(150, 90, 255, 0.4);

  @media (max-width: 768px) {
    font-size: 28px;
    padding: 15px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
  width: 85%;
  margin-top: 20px;
  position: relative;
  overflow: auto;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack items on smaller screens */
    padding: 20px;
  }
`;


// Individual Link Item
export const LinkItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 220px;
  background: ${({ background }) => `url(${background}) center/cover`};
  border-radius: 16px;
  text-decoration: none;
  color: white;
  padding: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 5px 12px rgba(100, 50, 150, 0.3);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 18px rgba(150, 90, 255, 0.5);
  }

  @media (max-width: 600px) {
    height: 180px;
  }
`;

// Link Title
export const LinkTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 5px;
`;

// Description Text
export const LinkDescription = styled.span`
  font-size: 0.9rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
`;

// Floating "Buy Me a Coffee" Button
export const CoffeeWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 10px rgba(255, 200, 255, 0.6));
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
  }
`;

// Title Styling
export const ChristosText = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 48px;
  font-weight: 700;
  color: #c9a9ff;
  text-shadow: 0 2px 8px rgba(200, 150, 255, 0.5);

  @media (max-width: 600px) {
    font-size: 36px;
  }
`;

export const VaultText = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 64px;
  font-weight: 700;
  color: #9f7cff;
  text-shadow: 0 2px 8px rgba(180, 120, 255, 0.5);

  @media (max-width: 600px) {
    font-size: 48px;
  }
`;
