import styled from "styled-components";

// The outer container for the entire bottle
export const Bottle = styled.div`
  width: 120px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

// The cap of the bottle
export const Cap = styled.div`
  width: 50%; /* Cap width as a percentage of Bottle width */
  height: 8%; /* Cap height as a percentage of Bottle height */
  background-color: brown; /* Brown color for the cap */
  border-radius: 5px;
`;

// The lip of the bottle neck
export const Lip = styled.div`
  width: 70%; /* Lip width as a percentage of Bottle width */
  height: 5%; /* Lip height as a percentage of Bottle height */
  background-color: ${({ color }) => color || "#ccc"}; /* Potion color */
  border-radius: 10px;
`;

// The neck of the bottle
export const Neck = styled.div`
  width: 50%; /* Neck width as a percentage of Bottle width */
  height: 10%; /* Neck height as a percentage of Bottle height */
  background-color: ${({ color }) => color || "#ccc"}; /* Potion color */
`;

// The body of the bottle
export const Body = styled.div`
  width: 80%; /* Body width as a percentage of Bottle width */
  height: 75%; /* Body height as a percentage of Bottle height */
  padding: 5%;
  background-color: ${({ color }) => color || "#ccc"}; /* Potion color */
  border-radius: 10px;
`;

// The liquid of the bottle
export const Liquid = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => color || "#ccc"}; /* Potion color */
  border-radius: 5px 5px 0 0; /* Fixed typo: border-radius */
`;

// Description panel with blur effect
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
