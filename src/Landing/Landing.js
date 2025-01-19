import React from "react";
import { Background, Grid, Header, ChristosText, VaultText, LinkItem, LinkTitle, Wrapper } from "./styled";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const links = [
    { title: "The Arcane Tablet", path: "/tablet", background: "assets/showcase-images/rotating-tablet.png" },
    { title: "Random Potions", path: "/potions", background: "assets/showcase-images/rotating-tablet.png" }
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
