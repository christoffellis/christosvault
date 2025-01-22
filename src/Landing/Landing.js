import React from "react";
import { Background, Grid, Header, ChristosText, VaultText, LinkItem, LinkTitle, Wrapper, CoffeeLink, CoffeeWrapper } from "./styled";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const links = [
    { title: "The Arcane Tablet", path: "/tablet", background: "assets/showcase-images/rotating-tablet.png" },
    { title: "Random Potions", path: "/potions", background: "assets/showcase-images/potions.png" },
    { title: "Easy Map Grids", path: "/map-grids", background: "assets/showcase-images/grids.png" }
  ];

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Background />
      <Header>
        <ChristosText>Christo's</ChristosText>
        <VaultText>Vault</VaultText>
      </Header>
      <CoffeeWrapper>
        <a href="https://www.buymeacoffee.com/christoffellis"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=christoffellis&button_colour=5F7FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" /></a>
      </CoffeeWrapper>
      <Grid>
        {links.map((link, index) => (
          <LinkItem
            key={index}
            onClick={() => handleClick(link.path)}
            background={link.background}
          >
            <LinkTitle>{link.title}</LinkTitle>
          </LinkItem>
        ))}
      </Grid>
    </Wrapper>
  );
};
