import React from "react";
import { Background, Grid, Header, ChristosText, VaultText, LinkItem, LinkTitle, Wrapper, CoffeeWrapper, LinkDescription } from "./styled";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const links = [
    {
      title: "The Arcane Tablet",
      path: "/tablet",
      background: "assets/showcase-images/rotating-tablet.png",
      description: "An interactive puzzle for DMs to use",
    },
    { 
      title: "Random Potions",
      path: "/potions",
      background: "assets/showcase-images/potions.png",
      description: "A random potion generator",
    },
    { 
      title: "Easy Map Grids",
      path: "/map-grids",
      background: "assets/showcase-images/grids.png",
      description: "An easy to use, click and load grid added for maps",
    },
    { 
      title: "Character Generator",
      path: "/character-generator",
      background: "assets/showcase-images/character-generator.png",
      description: "A simple character generator for practicing DMs",
    }
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Background />
      <Header>
        <ChristosText>Christo's</ChristosText>
        <br/>
        <VaultText>Vault</VaultText>
      </Header>
      <CoffeeWrapper>
        <a href="https://www.buymeacoffee.com/christoffellis"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=christoffellis&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" alt="Buy me a coffee link" /></a>
      </CoffeeWrapper>
      <Grid>
        {links.map((link, index) => (
          <LinkItem
            key={index}
            onClick={() => handleClick(link.path)}
            background={link.background}
          >
            <LinkTitle>{link.title}</LinkTitle>
            <LinkDescription>{link.description}</LinkDescription>
          </LinkItem>
        ))}
      </Grid>
    </Wrapper>
  );
};
