import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BackgroundCover, ButtonContainer, Container, Content, Description, EditorButton, Header, ImageContainer, MapImage, ModeButton, NotFound, Title, ToggleSwitch, YouTubeContainer } from "./styled";
import { Maps } from "./enums";

export const MapsPage = () => {
    const { "map-name": mapName } = useParams();
    const mapData = Maps.find((item) => item.path.split('/')[2] === mapName);
  
    // Default to day mode
    const [isDay, setIsDay] = useState(true);
  
    if (!mapData) {
      return <NotFound>Map not found</NotFound>;
    }
  
    return (
        <>
        <BackgroundCover />
        
      <Container
        isDay={isDay}
      >
        <Header>
          <Title>{mapData.title}</Title>
        </Header>
  
        <Content>
          <ImageContainer>
            <MapImage src={isDay ? mapData.assets.image.day : mapData.assets.image.night} alt={mapData.name} />
            <ToggleSwitch onClick={() => setIsDay(!isDay)}>
              {isDay ? "🌞 Day" : "🌙 Night"}
            </ToggleSwitch>
          </ImageContainer>
  
          <Description
            isDay={isDay}
          >
            {mapData.longDescription}
          </Description>
        </Content>
  
        <ButtonContainer>
          <ModeButton onClick={() => setIsDay(true)}>Day</ModeButton>
          <ModeButton onClick={() => setIsDay(false)}>Night</ModeButton>
          <EditorButton href={`https://mapeditor.com/edit/${mapName}`} target="_blank">
            Open in Map Editor
          </EditorButton>
        </ButtonContainer>
  
        <YouTubeContainer>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${(isDay ? mapData.assets.video.day : mapData.assets.video.night).split('/')[3]}?loop=1&showinfo=1&modestbranding=0&rel=0`}
            title="Map Showcase"
            frameBorder="0"
            allowFullScreen
          />
        </YouTubeContainer>
      </Container>
      </>
    );
  };