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
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 28px;
    padding: 15px;
  }
`;

export const GridLabel = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin: 16px;
  padding: 10px;
  background: linear-gradient(to right, rgba(95, 127, 255, 0.4), rgba(167, 184, 255, 0.4));
  color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(150, 90, 255, 0.3);
  backdrop-filter: blur(6px);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 8px;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const Grid = styled.div`
  background-color: #0006;
  border-radius: 24px;
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
`;

export const LinkItem = styled.div`
  position: relative;
  display: flex;
  flex: 1 0 0;
  min-width: 350px;
  max-width: 600px;
  flex-direction: column;
  justify-content: flex-end;
  height: 220px;
  border-radius: 16px;
  text-decoration: none;
  color: white;
  padding: 15px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background-color 0.5s ease-in-out;
  box-shadow: 0 5px 12px rgba(100, 50, 150, 0.3);
  cursor: pointer;
  overflow: hidden; /* Ensure the background doesn't overflow */

  /* Before element for the background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ background }) => `url(${background}) center/cover`};
    filter: blur(4px); /* Apply initial blur effect */
    z-index: -1; /* Put the background behind the content */
    transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out, background-size 0.8s ease-in-out; /* Longer transition */
    opacity: 1; /* Initially visible */
    background-size: 100%;
  }

  &:hover {
    box-shadow: 0px 0px 18px rgb(150, 90, 255);
    background-color: #965aff10;


    &::before {
      filter: blur(2px); /* Apply less blur on hover */
      opacity: 0.85; /* Slightly reduce opacity to give a fading effect */
      background-size: 110%;
    }
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
  border-radius: 8px;
  margin-bottom: 4px;
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
  z-index: 100;

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
