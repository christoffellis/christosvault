import styled from "styled-components";

// Container for entire page
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #111;
  font-family: Arial, sans-serif;
`;

// Centralized panel
export const CenteredDiv = styled.div`
  background: #222;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 600px;
  color: white;
  box-shadow: 0px 4px 6px #000f;
`;

// Size panel (groups radius + image input)
export const SizePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #333;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  gap: 8px;
`;

// Sliders
export const Slider = styled.input`
  width: 100%;
  margin-top: 5px;
  -webkit-appearance: none;
  background: #555;
  height: 5px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

// Labels
export const Label = styled.label`
  font-size: 1.1em;
  color: white;
  display: block;
  margin-bottom: 5px;
`;

// Color Input
export const ColorInput = styled.input`
  width: 100px;
  padding: 5px;
  background: #444;
  color: white;
  border: 1px solid #666;
  border-radius: 5px;
  text-align: center;
`;

// Web Image URL Input
export const TextInput = styled.input`
  width: 100%;
  padding: 5px;
  background: #444;
  color: white;
  border: 1px solid #666;
  border-radius: 5px;
  text-align: center;
  margin-top: 5px;
`;

// Hidden file input
export const HiddenFileInput = styled.input`
  display: none;
`;

// Styled label to act as a button
export const ImageUploadButton = styled.label`
  display: inline-block;
  background-color: #f3a3; /* Green color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;

  &:hover {
    background-color: #f0794240; /* Darker shade of green */
    transform: scale(1.05);
  }

  &:active {
    background-color: #f27c4b40; /* Even darker green */
    transform: scale(1);
  }

  &:focus {
    outline: none;
  }

  /* Optional: Add box-shadow */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Image Preview
export const PreviewImage = styled.img`
  margin-top: 10px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 8px;
  border: 2px solid #666;
`;


export const StyledButton = styled.button`
  background-color: #f3a3; /* Green color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #f0794240; /* Darker shade of green */
    transform: scale(1.05);
  }

  &:active {
    background-color: #f27c4b40; /* Even darker green */
    transform: scale(1);
  }

  &:focus {
    outline: none;
  }

  /* Optional: Add box-shadow */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
