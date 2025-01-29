import styled from "styled-components";

// Darker Background with a mystical glow effect
export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, #120326 5%, #0a0214 80%);
  z-index: -1;
`;

// Main wrapper for layout
export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

// Re-added Animated Gradient Title Panel
export const Header = styled.div`
  width: 90%;
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
  background: linear-gradient(to right, rgba(95, 127, 255, 0.4), rgba(167, 184, 255, 0.4), rgba(54, 82, 196, 0.4), rgba(95, 127, 255, 0.4), rgba(0, 51, 255, 0.4)); 
  box-shadow: 0px 0px 15px rgba(150, 90, 255, 0.4);
  border-radius: 10px;
  backdrop-filter: blur(8px);
  transition: transform 0.2s ease-in-out;

  /* Animated Gradient */
  background-size: 400%; 
  animation: gradient 15s ease infinite; 

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:hover {
    transform: scale(1.02);
  }
`;

// Uniform Text Styling for Header
export const HeaderText = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 36px;
  font-weight: 700;
  color: #c9a9ff; /* Soft enchanted glow */
  text-shadow: 0 2px 8px rgba(200, 150, 255, 0.5);
`;

// Darker Glassmorphic Panel for Grid (matches background)
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 40px;
  background: rgba(10, 2, 20, 0.85);
  border-radius: 15px;
  box-shadow: inset 0px 0px 15px rgba(255, 255, 255, 0.1), 
              0px 0px 10px rgba(100, 50, 150, 0.4);
  backdrop-filter: blur(8px);
  width: 85%;
  margin-top: 20px;
  position: relative;
  overflow: hidden;



  /* Subtle Arcane Texture */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/assets/landing/texture.png'); 
    animation: gradient 15s ease infinite; 
    background-size: cover;
    opacity: 0.12; /* Just enough to add depth without overpowering */
    pointer-events: none;

    @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
    }
  }

  /* Faint Glow on Hover */
  &:hover {
    box-shadow: 0px 0px 20px rgba(140, 70, 200, 0.5);
    transition: box-shadow 0.4s ease-in-out;
  }



  &:hover::before {
    animation: flicker 3s infinite ease-in-out;

      /* Flickering Arcane Glow */
    @keyframes flicker {
      0% { box-shadow: 0px 0px 12px rgba(140, 70, 200, 0.3); }
      50% { box-shadow: 0px 0px 15px rgba(200, 135, 70, 0.6); }
      100% { box-shadow: 0px 0px 12px rgba(140, 70, 200, 0.3); }
    }
  }
`;


// Individual Tile with a soft glow effect
export const LinkItem = styled.a`
  position: relative;
  display: block;
  height: 240px;
  background: ${({ background }) => `url(${background})`};
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  text-decoration: none;
  color: white;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0 5px 12px rgba(100, 50, 150, 0.3);
    backdrop-filter: blur(8px); /* Apply blur only to the background */

  /* Pseudo-element for background blur */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ background }) => `url(${background})`};
    background-size: cover;
    background-position: center;
    z-index: -1; /* Ensure it stays behind content */
    border-radius: 24px;
    transition: background 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.04);
    box-shadow: 0px 0px 18px rgba(150, 90, 255, 0.5);
  }

  /* Overlay on hover */
  &::before {
    background: rgba(10, 2, 20, 0.4); /* Initial overlay */
    transition: background 0.3s ease-in-out;
  }

  &:hover::before {
    background: rgba(150, 90, 255, 0.2); /* Hover overlay color */
  }
`;


// Title text inside tile
export const LinkTitle = styled.span`
  position: absolute;
  bottom: 60px;
  left: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  z-index: 2;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 12px;
  border-radius: 5px;
  text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
`;

// Description inside tile
export const LinkDescription = styled.span`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px 10px;
  border-radius: 5px;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.3);
`;

// "Buy me a Coffee" floating button with neon glow
export const CoffeeWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 10px rgba(255, 200, 255, 0.6));
  }
`;

export const ChristosText = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 48px;
  font-weight: 700;
  color: #c9a9ff;
  text-shadow: 0 2px 8px rgba(200, 150, 255, 0.5);
  display: inline-block;
  margin-right: 10px;
  position: relative;

  /* Shimmer effect */
  background: linear-gradient(90deg, #c9a9ff, #ffffff, #c9a9ff);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s infinite linear, float 7s infinite ease-in-out;

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

export const VaultText = styled.span`
  font-family: 'Cinzel', serif;
  font-size: 64px;
  font-weight: 700;
  color: #9f7cff;
  text-shadow: 0 2px 8px rgba(180, 120, 255, 0.5);
  display: inline-block;
  position: relative;

  /* Shimmer effect */
  background: linear-gradient(90deg, #9f7cff, #ffffff, #9f7cff);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s infinite linear, float 5s infinite ease-in-out;

  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;
