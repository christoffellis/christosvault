import React, { useState, useEffect } from "react";
import { Bottle, Cap, Lip, Neck, Body, DescriptionPanel, PageWrapper, PotionsGrid, PotionTitle, Liquid } from "./styles";
import { potions } from "./enums"; // List of potions and their details

const PotionPage = () => {
  const [selectedPotion, setSelectedPotion] = useState(potions[0]);

  // Function to get a random potion
  const getRandomPotion = () => {
    const randomIndex = Math.floor(Math.random() * potions.length);
    setSelectedPotion(potions[randomIndex]);
  };

  // Event listener for the spacebar press to change potion
  useEffect(() => {
    const handleSpacebarPress = (event) => {
      if (event.code === "Space") {
        getRandomPotion();
      }
    };

    // Add event listener for keydown
    window.addEventListener("keydown", handleSpacebarPress);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleSpacebarPress);
    };
  }, []);

  return (
    <PageWrapper>
      <PotionsGrid>
        <Bottle>
          <Cap />
          <Lip color={selectedPotion.color} />
          <Neck color={selectedPotion.color} />
          <Body color={selectedPotion.color} >
            <Liquid color={selectedPotion.liquidColor} />
          </Body>
          <DescriptionPanel>
            <PotionTitle>{selectedPotion.name}</PotionTitle>
            <p>{selectedPotion.description}</p>
          </DescriptionPanel>
        </Bottle>
      </PotionsGrid>
    </PageWrapper>
  );
};

export default PotionPage;
