import styled, { keyframes } from "styled-components";

// Animation: Fade in and slide up
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main container for the game page
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #111;
  font-family: Arial, sans-serif;
`;

// Styled container for the choice prompt with animation
export const CenteredDiv = styled.div`
  position: relative;
  background: white;
  padding: 40px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  text-align: center;
  max-width: 500px;
  background-color: #222;
  color: white;
  animation: ${fadeInUp} 0.5s ease-out;
`;

export const StyledH2 = styled.h2`

  cursor: alias;
`;

// Styled button for choices
export const StyledButton = styled.button`
  background-color: #f3a3;
  color: white;
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  margin: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, opacity 0.3s ease;
  animation: ${fadeInUp} 0.4s ease-out;

  &:hover {
    background-color: #f07942;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #f27c4b;
    transform: translateY(1px);
  }
`;


// Container for character image
export const CharacterImageWrapper = styled.div`
  position: absolute;
  top: 0px; /* Moves image up */
  left: 50%;
  transform: translateX(-50%) translateY(-50%); /* Center image */
  width: 100px;
  height: 100px;
  background-color: #222; /* Matches pane background */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

// Character image with circular shape
export const CharacterImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  // border: 5px solid #111;
`;