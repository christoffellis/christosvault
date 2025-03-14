import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AppBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 10px 0px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
  transform: translateX(-40px);
`;

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  border-radius: 5px;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px) translateX(-50%);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;

  ${DropdownContainer}:hover & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px) translateX(-50%);
  }
`;

const DropdownItem = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  padding: 10px;
  width: 150px;
  text-align: left;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const AppBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const canDismiss = React.useRef(false);
    const timeoutId = React.useRef();
  
    useEffect(() => {
      if (location.pathname === "/") return; // Exclude landing page
  
      const showAppBar = () => {
        setVisible(true);
  
        if (timeoutId.current) clearTimeout(timeoutId.current);

        timeoutId.current = setTimeout(() => {
            if (canDismiss.current) setVisible(false);
        }, 3500);
      };
  
      const handleScroll = () => showAppBar();
  
      const handleMouseMove = (event) => {
        if (event.clientY < 100)
        {
            canDismiss.current = false;
            showAppBar(); // If mouse is within 100px from the top
        }
        else
        {
            canDismiss.current = true;
        }
      };
  
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }, [location.pathname]);
  
    return (
    <AppBarContainer style={{ transform: visible ? "translateY(0)" : "translateY(-100%)" }}>
      <Logo onClick={() => navigate("/")}>Christo's Vault</Logo>
      <NavLinks>
        {/* Maps Dropdown */}
        <DropdownContainer>
          <DropdownButton>Maps</DropdownButton>
          <DropdownMenu>
            <DropdownItem onClick={() => navigate("/map-grids")}>Easy Map Grids</DropdownItem>
            <DropdownItem onClick={() => navigate("/backgrounds")}>Background Assist</DropdownItem>
          </DropdownMenu>
        </DropdownContainer>

        {/* Potions Dropdown */}
        <DropdownContainer>
          <DropdownButton>Potions</DropdownButton>
          <DropdownMenu>
            <DropdownItem onClick={() => navigate("/potions")}>Random Potions</DropdownItem>
          </DropdownMenu>
        </DropdownContainer>

        {/* Characters Dropdown */}
        <DropdownContainer>
          <DropdownButton>Characters</DropdownButton>
          <DropdownMenu>
            <DropdownItem onClick={() => navigate("/character-generator")}>Character Generator</DropdownItem>
            <DropdownItem onClick={() => navigate("/quick-stats")}>NPC Quick Stats</DropdownItem>
          </DropdownMenu>
        </DropdownContainer>

        {/* Loaders Dropdown */}
        <DropdownContainer>
          <DropdownButton>Loaders</DropdownButton>
          <DropdownMenu>
            <DropdownItem onClick={() => navigate("/loader/controller")}>Loader Controller</DropdownItem>
            <DropdownItem onClick={() => navigate("/loader/fluid")}>Fluid Loader</DropdownItem>
          </DropdownMenu>
        </DropdownContainer>
      </NavLinks>
    </AppBarContainer>
  );
};
