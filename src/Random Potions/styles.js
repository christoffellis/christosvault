import styled from "styled-components";

// Styling for the bottle
export const Bottle = styled.div`
  width: 150px;
  height: 300px;
  background-color: ${({ color }) => color || "#000"}; /* Dynamically set color */
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
`;

// Panel that holds the description, initially blurred
export const DescriptionPanel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  text-align: center;
  opacity: 0;
  visibility: hidden;
  filter: blur(8px); /* Initially blurred */
  transition: opacity 0.3s, visibility 0.3s, filter 0.3s;

  /* Reveal on hover */
  ${Bottle}:hover & {
    opacity: 1;
    visibility: visible;
    filter: blur(0);
  }
`;

// Container for the potion items
export const PotionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

// Potion name style
export const PotionTitle = styled.h3`
  color: white;
  font-family: 'Noto Sans Runic', sans-serif;
  margin-bottom: 10px;
`;

// Wrapper for the page
export const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;
