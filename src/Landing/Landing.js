import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Background,
  Grid,
  Header,
  ChristosText,
  VaultText,
  LinkItem,
  LinkTitle,
  Wrapper,
  CoffeeWrapper,
  LinkDescription,
  GridLabel,
} from "./styled";
import { Maps } from "../Maps/enums";

export const LandingPage = () => {
  const navigate = useNavigate();

  const Puzzles = [
    {
      title: "The Arcane Tablet",
      path: "/tablet",
      background: "assets/showcase-images/rotating-tablet.png",
      description: "An interactive puzzle for DMs to use",
    },
  ];

  const Tools = [
    {
      title: "Easy Map Grids",
      path: "/map-grids",
      background: "assets/showcase-images/grids.png",
      description: "An easy-to-use, click-and-load grid for maps",
    },
    {
      title: "Background Assist",
      path: "/backgrounds",
      background: "assets/showcase-images/backgroundAssist.png",
      description: "An easy-to-use, click-and-load grid for maps",
    },
  ];

  const Generators = [
    {
      title: "Random Potions",
      path: "/potions",
      background: "assets/showcase-images/potions.png",
      description: "A random potion generator",
    },

    {
      title: "Character Generator",
      path: "/character-generator",
      background: "assets/showcase-images/character-generator.png",
      description: "A simple character generator for practicing DMs",
    },
    {
      title: "NPC Quick Stats",
      path: "/quick-stats",
      background: "assets/showcase-images/stats-generator.png",
      description: "A simple character generator for practicing DMs",
    },
  ];

  
  const Loaders = [
    {
      title: "Fluid Loader",
      path: "/loader/fluid",
      background: "assets/showcase-images/loader_fluid.png",
      description: "A mystical fluid animation to display while you're not using a screen",
    },
  ];

  const GridList = {
    "Tools": Tools,
    "Generators": Generators,
    "Puzzles": Puzzles,
    "Loaders": Loaders
  }

  const SortedGridList = Object.fromEntries(
    Object.entries(GridList).sort((a, b) => b[1].length - a[1].length)
  );
  


  return (
    <Wrapper>
      <Background />
      <Header>
        <ChristosText>Christo's</ChristosText>
        <br />
        <VaultText>Vault</VaultText>
      </Header>

      {/* Buy Me a Coffee */}
      <CoffeeWrapper>
        <a href="https://www.buymeacoffee.com/christoffellis">
          <img
            src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&slug=christoffellis&button_colour=5F7FFF&font_colour=ffffff"
            alt="Buy me a coffee"
          />
        </a>
      </CoffeeWrapper>
      {Object.entries(SortedGridList).map(([key, value], index) => (
        <>
        <GridLabel>{key}</GridLabel>
        <Grid>
          {value.map((link, index) => (
            <LinkItem key={index} onClick={() => navigate(link.path)} background={link.background}>
              <LinkTitle>{link.title}</LinkTitle>
              {link.description && (<LinkDescription>{link.description}</LinkDescription>)}
            </LinkItem>
          ))}
        </Grid>
        </>
      ))}

      <GridLabel>Maps</GridLabel>
        <Grid>
          {Maps.map((link, index) => (
            <LinkItem key={index} onClick={() => navigate(link.path)} background={link.background}>
              <LinkTitle>{link.title}</LinkTitle>
              {link.description && (<LinkDescription>{link.description}</LinkDescription>)}
            </LinkItem>
          ))}
        </Grid>
      
    </Wrapper>
  );
};
