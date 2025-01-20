import styled from "styled-components";

// Background with blur
export const Background = styled.div`
  position: absolute;
  top: -20px;
  left: -20px;
  width: calc(100% + 40px);
  height: calc(100vh + 40px);
  background-image: url('assets/landing/background.jpg'); /* Replace with your background image */
  background-size: cover;
  background-position: center;
  filter: blur(8px);
  -webkit-filter: blur(8px);
  z-index: -1;
`;

// Main wrapper
export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Header bar


export const Header = styled.div`
  width: 250px;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
  padding: 20px;
  border-radius: 8px;
  color: white;
  text-align: center;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.8); /* Subtle shadow for depth */
  
  /* Center the header horizontally */
  margin: 10px auto;
`;

export const ChristosText = styled.span`
  font-family: 'Playfair Display', serif; /* Elegant decorative font */
  font-size: 36px;
  color: #d4af37; /* Golden bronze color */
  text-shadow: 0 2px 4px rgba(200, 200, 200, 0.6); /* Subtle shadow for depth */
  display: block;
  margin-bottom: -5px; /* Slight overlap with Vault */
`;

export const VaultText = styled.span`
  font-family: 'Roboto Slab', sans-serif; /* Clean modern font */
  font-size: 50px; /* Larger size */
  font-weight: 900; /* Bold for emphasis */
  color: #444; /* Metallic gray */
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.8); /* Stronger shadow for depth */
  display: block;
`;

// Grid container for tiles
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 50px;
  background-color: #6b4a33; /* Lighter brown for tile background */
  border-radius: 15px;
  margin: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Subtle shadow around the grid */
`;

// Individual tile (LinkItem)
export const LinkItem = styled.a`
  position: relative;
  display: block;
  height: 200px;
  background-image: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: #f2f2f2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4); /* Semi-transparent overlay */
    backdrop-filter: blur(4px); /* Frosted glass effect */
    z-index: 1;
    transition: backdrop-filter 0.3s ease;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(0px);
  }
  &:hover::before {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(1px);
  }
`;

// Title inside the tile
export const LinkTitle = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.7); /* Dark transparent background for the text */
  padding: 5px 10px;
  border-radius: 5px;
  text-shadow: 0 2px 5px rgba(255, 255, 255, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const CoffeeLink = styled.a`
  max-width: 200px;
  // center the link horizontally
  margin: 0 auto;
  

  display: inline-block;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #ff813f; /* Coffee orange */
  color: white;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #e67335; /* Darker coffee orange */
    transform: scale(1.05);
  }
`;