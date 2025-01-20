import React from "react";
import { Background, Grid, Header, ChristosText, VaultText, LinkItem, LinkTitle, Wrapper, CoffeeLink } from "./styled";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const links = [
    { title: "The Arcane Tablet", path: "/tablet", background: "assets/showcase-images/rotating-tablet.png" },
    { title: "Random Potions", path: "/potions", background: "assets/showcase-images/potions.png" }
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
      <CoffeeLink href="https://www.buymeacoffee.com/christoffellis" target="_blank" rel="noopener noreferrer">
        Buy Me a Coffee
      </CoffeeLink>
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
