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
import { SortedGridList } from "./enums";


export const LandingPage = () => {
  const navigate = useNavigate();

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
