import styled from "styled-components";

/// The outer container for the entire bottle
export const Bottle = styled.div`
width: 120px;
height: 300px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;
z-index: 2 /* Put the bottle above the shelf */
`;

// The cap of the bottle
export const Cap = styled.div`
  width: ${({ width }) => width || '50%'}; /* Cap width as a percentage of Bottle width */
  height: ${({ height }) => height || '8%'}; /* Cap height as a percentage of Bottle height */
  background-color: ${({ color }) => color || 'brown'}; 
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  border-right: 4px solid rgba(0, 0, 0, 0.2); /* Vector shadow */
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-color 0.3s ease; /* Animation */

`;

// The lip of the bottle neck
export const Lip = styled.div`
  width: ${({ width }) => width || '70%'}; /* Lip width as a percentage of Bottle width */
  height: ${({ height }) => height || '5%'}; /* Lip height as a percentage of Bottle height */
  background-color: ${({ color }) => color || '#ccc'}; /* Potion color */
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  border-right: 6px solid rgba(0, 0, 0, 0.2); /* Vector shadow */
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-color 0.3s ease; /* Animation */

`;

// The neck of the bottle
export const Neck = styled.div`
  width: ${({ width }) => width || '50%'}; /* Neck width as a percentage of Bottle width */
  height: ${({ height }) => height || '10%'}; /* Neck height as a percentage of Bottle height */
  background-color: ${({ color }) => color || '#ccc'}; /* Potion color */
  border-right: 4px solid rgba(0, 0, 0, 0.2); /* Vector shadow */
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-color 0.3s ease; /* Animation */

`;

// The body of the bottle
export const Body = styled.div`
  width: ${({ width }) => width || '80%'}; /* Body width as a percentage of Bottle width */
  height: ${({ height }) => height || '75%'}; /* Body height as a percentage of Bottle height */
  padding: 5% 5% ${({borderRadius}) => borderRadius || '10%'} 5%;
  background-color: ${({ color }) => color || '#ccc'}; /* Potion color */
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  border-right: 10px solid rgba(0, 0, 0, 0.2); /* Vector shadow */
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-color 0.3s ease; /* Animation */
  // set align to bottom
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

// The liquid of the bottle
export const Liquid = styled.div`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  border-top: ${({ fill }) => fill || '0px'} solid ${({ bottleColor }) => bottleColor || '#ccc'}; /* Liquid color */
  background-color: ${({ color }) => color || '#ccc'}; /* Potion color */
  border-radius: ${({ borderRadius }) => borderRadius || '5px 5px 0 0'}; /* Fixed typo: border-radius */
  box-shadow: 0 0 10px ${({ color }) => color || '#ccc'}; /* Glow effect */
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, border-top 0.3s ease;
`;

export const DescriptionPanel = styled.div`
  width: 60%;
  padding: 20px;
  background-color: #f9f1d3; /* Light paper color */
  color: #333; /* Darker text color for contrast */
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  border: 2px dashed #d4af37; /* Goldish dashed border for tag style */
  text-align: center;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.3s ease, filter 0.3s ease;
  filter: blur(8px);

  /* Small circle to mimic a punched hole for the tag */
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 12px;
    height: 12px;
    background-color: rgba(0, 0, 0, 0.90); /* Same as the background */
    border: 2px solid #d4af37;
    border-radius: 50%;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-2px); /* Subtle lift on hover */
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
    filter: blur(0px);
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
  color: #222;
  font-family: 'Noto Sans Runic', sans-serif;
  margin-bottom: 10px;
`;

// Wrapper for the page
export const PageWrapper = styled.div`
  position: relative;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
`;

export const Background = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100vh + 40px);
  
  /* Background image and blur effect */
  background-image: url('assets/potions/background.jpg'); /* Path to your background image */
  background-size: cover; /* Ensures the image covers the entire background */
  background-position: center; /* Center the image */
  
  /* Apply a blur effect */
  filter: blur(8px); /* Adjust the blur value as needed */
  -webkit-filter: blur(8px); /* Safari and older browser support */
  
  /* Optional: Add some opacity to darken the background image */
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent black to darken the image */
  z-index: -1; /* Put the background behind the content */
`;

export const Shelf = styled.div`
  width: 40%;
  height: 40px;
  background-color: #8b4513; /* Wood color for the shelf */
  margin-top: -2px;
  border-top: 4px solid rgba(255, 255, 255, 0.1); /* Vector shadow */
  border-right: 40px solid rgba(0, 0, 0, 0.2); /* Vector shadow */
  position: relative;
  display: flex;
  z-index: 1; /* Put the shelf above the background */
`;

// Wrapper for display ogf bottle and description side by side
export const BottleDescriptionWrapper = styled.div`
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
`;

export const ShuffleButton = styled.button`
  position: absolute;
  bottom: 20%;


  padding: 10px 20px;
  font-size: 16px;
  background-color: #5F7FFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }
`;