import React, { useState, useEffect } from "react";
import { AppContainer, Background, BackgroundCover, Button, Container, Grid, Panel, VideoWrapper } from "./styled";

export const MapGrid = () => {
  const defaultImage = "https://via.placeholder.com/1920x1080";
  const [backgroundImage, setBackgroundImage] = useState(defaultImage);
  const [scale, setScale] = useState(1);
  const [gridSize, setGridSize] = useState({
    cellSize: 50,
    offsetX: 0,
    offsetY: 0,
  });
  const [newImage, setNewImage] = useState("");

  const [panelOpacity, setPanelOpacity] = useState(1);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("backgroundImage"));
    const savedGridSize = JSON.parse(localStorage.getItem("gridSize"));
  
    if (savedData) setBackgroundImage(savedData);
    if (savedGridSize) setGridSize(savedGridSize);
  }, []);

  const extractYouTubeID = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };
  
  const handleImageChange = () => {
    const videoID = extractYouTubeID(newImage);
  
    if (videoID) {
      setBackgroundImage({ type: "video", id: videoID });
      localStorage.setItem("backgroundImage", JSON.stringify({ type: "video", id: videoID }));
    } else {
      setBackgroundImage({ type: "image", url: newImage });
      localStorage.setItem("backgroundImage", JSON.stringify({ type: "image", url: newImage }));
    }
  };
  

  const shouldRotateImage = (imageWidth, imageHeight) => {
    const screenAspectRatio = window.innerWidth / window.innerHeight;
    const imageAspectRatio = imageWidth / imageHeight;
    const rotatedAspectRatio = imageHeight / imageWidth;

    setScale(rotatedAspectRatio);

    return Math.abs(rotatedAspectRatio - screenAspectRatio) < Math.abs(imageAspectRatio - screenAspectRatio);
  };

  const handleFileUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const image = new Image();

      image.onload = () => {
        const rotate = shouldRotateImage(image.width, image.height);
        setBackgroundImage({
          url: URL.createObjectURL(file),
          rotate: rotate,
        });
      };

      image.src = URL.createObjectURL(file);
    }
  };

  useEffect(() => {
    let timeout;
    const handleMouseMove = () => {
      setPanelOpacity(1); // Make panel visible
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setPanelOpacity(0); // Fade out panel after delay
      }, 2500);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      {backgroundImage.type === "video" ? (
      <VideoWrapper>
        <iframe
          src={`https://www.youtube.com/embed/${backgroundImage.id}?autoplay=1&loop=1&playlist=${backgroundImage.id}&controls=0&showinfo=0&modestbranding=1&rel=0&mute=1&cc_load_policy=0`} 
          title="YouTube Video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </VideoWrapper>
    ) : (
      <>
        <Background backgroundImage={backgroundImage.url} />
        <AppContainer backgroundImage={backgroundImage.url} />
      </>
    )}
      <BackgroundCover />

      <AppContainer backgroundImage={backgroundImage.url} rotate={backgroundImage.rotate} scale={scale}>
        <Grid
          rotated={backgroundImage.rotate}
          scale={scale}
          cellSize={gridSize.cellSize}
          xCount={Math.ceil(window.innerWidth / gridSize.cellSize) + 2}
          yCount={Math.ceil(window.innerHeight / gridSize.cellSize) + 2}
          offsetX={gridSize.offsetX}
          offsetY={gridSize.offsetY}
        ></Grid>
      </AppContainer>

      {/* Panel with opacity transition */}
      <Panel
        style={{
          opacity: panelOpacity,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        <input
          type="text"
          placeholder="Enter image or Youtube URL"
          value={newImage}
          onChange={(e) => setNewImage(e.target.value)}
        />
        <Button onClick={handleImageChange}>Set Background</Button>
        <div>
          <label>
            Upload Image:
            <input type="file" accept="image/*" onChange={handleFileUpload} />
          </label>
        </div>
        <div>
          <label>
            Size (px):
            <input
              type="number"
              value={gridSize.cellSize}
              onChange={(e) => {
                const newSize = Number(e.target.value);
                setGridSize({ ...gridSize, cellSize: newSize });
                localStorage.setItem("gridSize", JSON.stringify({ ...gridSize, cellSize: newSize }));
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Offset X:
            <input
              type="number"
              value={gridSize.offsetX}
              onChange={(e) => {
                const newOffsetX = Number(e.target.value);
                setGridSize({ ...gridSize, offsetX: newOffsetX });
                localStorage.setItem("gridSize", JSON.stringify({ ...gridSize, offsetX: newOffsetX }));
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Offset Y:
            <input
              type="number"
              value={gridSize.offsetY}
              onChange={(e) => {
                const newOffsetY = Number(e.target.value);
                setGridSize({ ...gridSize, offsetY: newOffsetY });
                localStorage.setItem("gridSize", JSON.stringify({ ...gridSize, offsetY: newOffsetY }));
              }}
            />
          </label>
        </div>
      </Panel>
    </Container>
  );
};
