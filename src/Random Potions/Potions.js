import React, { useState, useEffect } from "react";
import { Bottle, DescriptionPanel, PageWrapper, PotionsGrid, PotionTitle } from "./styles";
import { potions } from "./enums"; // List of potions and their details

// SVG component for a simple potion bottle
const PotionSVG = ({ color }) => (
  <svg width="100" height="200" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="30" width="60" height="140" rx="20" fill={color} stroke="black" strokeWidth="2" />
    <circle cx="50" cy="15" r="15" fill="#222" />
    <rect x="40" y="155" width="20" height="10" fill="#333" />
  </svg>
);

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
        <Bottle color={selectedPotion.color}>
          <PotionSVG color={selectedPotion.color} />
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
