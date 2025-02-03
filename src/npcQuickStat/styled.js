import styled from "styled-components";

// Styled container for the page
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #111;
  font-family: Arial, sans-serif;
`;

// Container for character image
export const CharacterImageWrapper = styled.div`
  position: absolute;
  top: 0px; /* Moves image up */
  left: 50%;
  transform: translateX(-50%) translateY(-50%); /* Center image */
  width: 140px;
  height: 140px;
  background-color: #222; /* Matches pane background */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

// Character image with circular shape
export const CharacterImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
`;

// Modify the description pane to have a cutout effect
export const CenteredDiv = styled.div`
  position: relative;
  background: white;
  padding: 70px 20px 20px; /* Extra top padding to accommodate image */
  border-radius: 10px;
  box-shadow: 0px 4px 6px #000f;
  text-align: center;
  max-width: 600px;
  background-color: #222;
  color: white;

  /* Create a cutout effect */
  &:before {
    content: "";
    position: absolute;
    top: -75px;
    left: 50%;
    width: 150px;
    height: 150px;
    background: #111; /* Background color of the page */
    border-radius: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

// Styling for each code block
export const StyledCode = styled.code`
  display: inline-block;
  background-color: #f3a3;
  color: #f7f7f7;
  font-family: 'Poppins', sans-serif; /* Changed to Poppins for a softer feel */
  font-size: 1.1em;
  padding: 2px 5px;
  margin: 0 2px;
  border-radius: 5px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #666;
  }
`;

// Styling for the button
export const StyledButton = styled.button`
  background-color: #f3a3; /* Matches the code block background */
  color: white;
  font-family: 'Poppins', sans-serif; /* Keep font consistent */
  font-size: 1.2em;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f0794240; /* Slightly darker shade for hover effect */
    transform: translateY(-2px); /* Lift effect on hover */
  }

  &:active {
    background-color: #f27c4b40; /* Darker shade for active */
    transform: translateY(1px); /* Slightly pressed effect */
  }
`;

// Styling for the dropdown
export const Dropdown = styled.select`
  background-color: ${({color}) => color || "#444444"}90;
  color: white;
  font-family: 'Poppins', sans-serif;
  font-size: 1em;
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #666;
  }

  &:active {
    background-color: #888;
  }
`;

// Label for the dropdown
export const Label = styled.label`
  font-size: 1.1em;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
  margin-right: 16px;
  display: inline-block;
`;
