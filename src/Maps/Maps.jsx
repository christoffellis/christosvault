import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BackgroundCover, ButtonContainer, Container, Content, Description, EditorButton, Header, ImageContainer, MapImage, ModeButton, NotFound, OverlayImage, Title, ToggleSwitch, VideoWrapper, YouTubeContainer, YouTubeFrame } from "./styled";
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
            <MapImage
              isDay={isDay}
              src={mapData.assets.image.day}
              nightSrc={mapData.assets.image.night}
              alt={mapData.name}
            />

            <OverlayImage
              isDay={isDay}
              src={mapData.assets.image.night}
              alt={mapData.name}
            />

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
          <VideoWrapper>
            <YouTubeFrame
              src={`https://www.youtube.com/embed/${mapData.assets.video.day.split('/')[3]}?loop=1&modestbranding=1&rel=0`}
              title="Daytime Map Showcase"
              isDay={false} // Always visible
            />
            <YouTubeFrame
              src={`https://www.youtube.com/embed/${mapData.assets.video.night.split('/')[3]}?loop=1&modestbranding=1&rel=0`}
              title="Nighttime Map Showcase"
              isDay={isDay} // Toggles opacity
            />
          </VideoWrapper>
        </YouTubeContainer>
      </Container>
      </>
    );
  };