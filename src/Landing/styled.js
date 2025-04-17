import styled from "styled-components";

// Background
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, #111111 0%, #0a0214 80%);
  z-index: -1;
  animation: pulseBG 20s ease-in-out infinite;

  @keyframes pulseBG {
    0%, 100% { background-position: center; }
    50% { background-position: top center; }
  }
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
  padding: 24px;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background: linear-gradient(135deg, rgba(120, 90, 255, 0.3), rgba(167, 130, 255, 0.2));
  box-shadow: 0 0 30px rgba(180, 120, 255, 0.3);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 26px;
    padding: 16px;
  }
`;

// Grid Label
export const GridLabel = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  margin: 24px 0 12px;
  padding: 10px 20px;
  background: linear-gradient(90deg, #5f7fff88, #a7b8ff66);
  color: #f5f0ff;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(150, 90, 255, 0.3);
  text-shadow: 0 0 6px rgba(180, 120, 255, 0.3);
  backdrop-filter: blur(8px);
`;

// Grid
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

// Link Card
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
  box-shadow: 0 0px 10px rgba(120, 90, 255, 0.25);
  background-color: rgba(30, 0, 50, 0.3);
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ background }) => `url(${background}) center/cover`};
    filter: blur(5px) brightness(0.8);
    z-index: -1;
    transition: filter 0.5s ease-in-out, opacity 0.5s ease-in-out, background-size 0.8s ease-in-out;
    opacity: 1;
    background-size: 100%;
  }

  &:hover {
    box-shadow: 0 0 20px rgba(150, 90, 255, 0.6);
    background-color: rgba(100, 60, 200, 0.2);

    &::before {
      filter: blur(2px) brightness(1);
      opacity: 0.85;
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
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5);
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;

// Link Description
export const LinkDescription = styled.span`
  font-size: 0.9rem;
  padding: 6px 10px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.35);
  color: #ddd;
`;

// Coffee Button Wrapper
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
    filter: drop-shadow(0 0 12px rgba(255, 180, 255, 0.6));
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
  }
`;

// Title Fonts
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

// Section Title
export const SectionTitle = styled.h3`
  color: #d9c1ff;
  font-size: 1.3rem;
  margin: 32px 0 12px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-weight: 700;
  text-shadow: 0 0 4px rgba(200, 150, 255, 0.3);
`;

// Pip Tags
export const PipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Pip = styled.div`
  background-color: ${({ color, selected }) => (color ? `${color}${selected ? '88' : '33'}` : '#333333')};
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ color, selected }) => (color ? `${color}${selected ? 'dd' : '44'}` : '#666666')};
    flex-shrink: 0;
    transition: background-color 0.3s ease;
  }

  &:hover {
    background-color: ${({ color }) => color ? `${color}55` : '#666'};
    border-color: ${({ color }) => color || '#666'};

    &::before {
      background-color: ${({ color }) => color ? `${color}cc` : '#888888'};
    }
  }
`;
