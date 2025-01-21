import styled from "styled-components";

// This component will hold the background and apply the blur
export const Background = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100vh + 40px);
  
  /* Background image and blur effect */
  background-image: url('assets/rotating-tablet/background.jpg'); /* Path to your background image */
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Center the image */
  
  /* Apply a blur effect */
  filter: blur(8px); /* Adjust the blur value as needed */
  -webkit-filter: blur(8px); /* Safari and older browser support */
  
  /* Optional: Add some opacity to darken the background image */
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black to darken the image */
  z-index: -1; /* Put the background behind the content */
`;

// Content wrapper that will be positioned above the background
export const Wrapper = styled.div` 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  color: #ddd; /* Light text color for contrast */
  font-family: 'Noto Sans Runic', sans-serif;
  z-index: 1; /* Make sure this is above the background */
`;


// Base circle styles with a stone-like appearance and dark mysterious theme
const CircleBase = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #444; /* Dark stone-like border */
  cursor: pointer;
  transition: transform 0.5s ease-in-out; /* Smooth rotation */
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8); /* Subtle glowing effect for mystery */
  background-color: #333; /* Stone-like background */
  background-image: radial-gradient(circle, rgba(50, 50, 50, 0.9), rgba(30, 30, 30, 0.8)); /* Gradient for texture */
  
`;

// Outer circle: Largest circle with stone texture
export const OuterCircle = styled(CircleBase)`
  width: 80vh; /* Increased size */
  height: 80vh;
  background-color: #333; /* Dark stone-like circle */
  border: 3px solid #555; /* Lighter stone border */
  background-image: radial-gradient(circle, rgba(60, 60, 60, 0.9), rgba(40, 40, 40, 0.8)); /* Subtle stone texture */
`;

// Middle circle: Middle circle with a "hole" effect, similar stone texture
export const MiddleCircle = styled(CircleBase)`
  width: 60vh; /* Increased size */
  height: 60vh;
  background-color: #222; /* Darker "hole" */
  background-image: none;
  border: 3px solid #444; /* Stone border */
`;

// Inner circle: Smallest circle, darker with a "hole" effect
export const InnerCircle = styled(CircleBase)`
  width: 40vh; /* Increased size */
  height: 40vh;
  background-color: #111; /* Darker "hole" */
  background-image: none;
  border: 3px solid #444; /* Stone border */
`;

export const Letter = styled.span`
  font-size: 20px; /* Adjust size as needed */
  font-weight: bold;
  color: #333;
  font-family: "Noto Sans Runic", sans-serif; /* Using Noto Sans Runic font */
  text-align: center;
  display: inline-block;
  position: relative;
  transition: text-shadow 0.3s ease-in-out; /* Smooth transition for glowing effect */

  /* Apply glow based on input color (using a dynamic prop) */
  ${({ glowColor }) => glowColor && `
    text-shadow: 0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 30px ${glowColor}, 0 0 40px ${glowColor};
  `}
`;

// Label style with a smaller size and mysterious vibe
export const Label = styled.span`
  font-size: 12px;
  color: #bbb; /* Slightly lighter text for contrast */
  font-family: Arial, sans-serif;
  display: block;
  margin-top: 10px; /* Spacing between rune and label */
  text-align: center;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.3); /* Slight glowing effect on the text */
  background-color: rgba(0, 0, 0, 0.5); /* Dark transparent background behind label */
  padding: 2px 5px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2); /* Glowing border effect */
`;

