import React, { useState, useEffect } from "react";
import { Bottle, Cap, Lip, Neck, Body, DescriptionPanel, PageWrapper, PotionsGrid, PotionTitle, Liquid, Shelf, Background } from "./styles";
import { potions } from "./enums"; // List of potions and their details

const PotionPage = () => {
  const [selectedPotion, setSelectedPotion] = useState(potions[0]);
  const [potionBorderRadiuses, setPotionBorderRadiuses] = useState(
    {
      lip: 10,
      neck: 10,
      body: 10,
      liquid: "5px 5px 0 0"
    }
  );

  const [potionHeights, setPotionHeights] = useState(
    {
      cap: 8,
      lip: 5,
      neck: 10,
      body: 75
    }
  );

  const [potionWidths, setPotionWidths] = useState(
    {
      cap: 50,
      lip: 70,
      neck: 50,
      body: 80
    }
  );

  const [capColor, setCapColor] = useState("brown");
  const [potionFill, setPotionFill] = useState(80);

  // use the potion name as a seed, and generate border radius values based on the seed
  useEffect(() => {

    const lipBorderRadius = 10 + Math.floor(Math.random() * 20);
    const neckBorderRadius = 10 + Math.floor(Math.random() * 20);
    const bodyBorderRadius = 10 + Math.floor(Math.random() * 20);

    const liquidBorderRadius = `${bodyBorderRadius - 2}px ${bodyBorderRadius - 2}px 0 0`;

    setPotionBorderRadiuses({
      lip: lipBorderRadius,
      neck: neckBorderRadius,
      body: bodyBorderRadius,
      liquid: liquidBorderRadius
    });
  }, [selectedPotion]);

  useEffect(() => {

    const capHeight = 5 + Math.floor(Math.random() * 10);
    const lipHeight = 5 + Math.floor(Math.random() * 10);
    const neckHeight = 8 + Math.floor(Math.random() * 15);
    const bodyHeight = 50 + Math.floor(Math.random() * 50);

    setPotionHeights({
      cap: capHeight,
      lip: lipHeight,
      neck: neckHeight,
      body: bodyHeight
    });
  }, [selectedPotion]);
    

  useEffect(() => {

    let capWidth = 50 + Math.floor(Math.random() * 20) - 10;
    let lipWidth = 70 + Math.floor(Math.random() * 30) - 15;
    let neckWidth = 50 + Math.floor(Math.random() * 20) - 10;
    let bodyWidth = 80 + Math.floor(Math.random() * 40) - 20;

    // neck can not be bigger than body
    if (neckWidth > bodyWidth - potionBorderRadiuses.body) {
      neckWidth = bodyWidth - potionBorderRadiuses.body * 2 - 5;
    }

    // lip cannot be smaller than neck
    if (lipWidth - potionBorderRadiuses.lip < neckWidth) {
      lipWidth = neckWidth + potionBorderRadiuses.lip * 2 + 5;
    }

    // cap cannot be bigger than lip
    if (capWidth > neckWidth - 5) {
      capWidth = neckWidth - 5;
    }

    setPotionWidths({
      cap: capWidth,
      lip: lipWidth,
      neck: neckWidth,
      body: bodyWidth
    });
  }, [selectedPotion]);

  useEffect(() => {
    // different browns
    const capColors = [
      "#8B4513",
      "#A0522D",
      "#CD853F",
      "#D2691E",
      "#8B4513",
      "#A0522D",
      "#CD853F",
    ];
    const randomIndex = Math.floor(Math.random() * capColors.length);
    setCapColor(capColors[randomIndex]);
  }, [selectedPotion]);

  useEffect(() => {

    const fill = 80 + Math.floor(Math.random() * 20) - 10;
    setPotionFill(fill);
  }, [selectedPotion]);


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
    <>
      <Background />
      <PageWrapper>
        <Bottle>
          <Cap
            color={capColor}
            height={`${potionHeights.cap}%`}
            width={`${potionWidths.cap}%`}
            borderRadius={`${potionBorderRadiuses.cap}px`}
          />
          <Lip
            color={selectedPotion.color}
            height={`${potionHeights.lip}%`}
            width={`${potionWidths.lip}%`}
            borderRadius={`${potionBorderRadiuses.lip}px`}
          />
          <Neck
            color={selectedPotion.color}
            height={`${potionHeights.neck}%`}
            width={`${potionWidths.neck}%`}
            borderRadius={`${potionBorderRadiuses.neck}px`}
          />
          <Body
            color={selectedPotion.color}
            height={`${potionHeights.body}%`}
            width={`${potionWidths.body}%`}
            borderRadius={`${potionBorderRadiuses.body}px`}
          >
            <Liquid
              bottleColor={selectedPotion.color}
              color={selectedPotion.liquidColor}
              fill={`${potionFill}px`}
              borderRadius={potionBorderRadiuses.liquid}
            />
          </Body>

          
        </Bottle>
        <DescriptionPanel>
            <PotionTitle>{selectedPotion.name}</PotionTitle>
            <p>{selectedPotion.description}</p>
          </DescriptionPanel>
        <Shelf />
      </PageWrapper>
    </>
  );
};

export default PotionPage;
