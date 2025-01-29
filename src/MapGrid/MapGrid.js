// App.js
import React, { useState, useEffect } from "react";
import { AppContainer, Background, BackgroundCover, Button, Container, Grid, Panel } from "./styled";

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
  
    useEffect(() => {
      const savedImage = localStorage.getItem("backgroundImage");

      const savedGridSize = JSON.parse(localStorage.getItem("gridSize"));
  
      if (savedImage) setBackgroundImage(savedImage);
      if (savedGridSize) setGridSize(savedGridSize);
    }, []);
  
    const handleImageChange = () => {
      setBackgroundImage(newImage);
      localStorage.setItem("backgroundImage", newImage);
    };

    const shouldRotateImage = (imageWidth, imageHeight) => {
        const screenAspectRatio = window.innerWidth / window.innerHeight;
        const imageAspectRatio = imageWidth / imageHeight;
      
        // Check if rotating the image improves the fit
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

    return (
    <Container>
      <Background
        backgroundImage={backgroundImage.url}
        rotate={backgroundImage.rotate}
      />
      <BackgroundCover />

      <AppContainer
        backgroundImage={backgroundImage.url}
        rotate={backgroundImage.rotate}
        scale={scale}
      >
        <Grid
          rotated={backgroundImage.rotate}
          scale={scale}
          cellSize={gridSize.cellSize}
          xCount={(Math.ceil(window.innerWidth / gridSize.cellSize) + 2)}
          yCount={(Math.ceil(window.innerHeight / gridSize.cellSize) + 2)}
          offsetX={gridSize.offsetX}
          offsetY={gridSize.offsetY}
        >
          {/* {Array.from({
            length: (Math.ceil(window.innerWidth / gridSize.cellSize) + 2) *
                    (Math.ceil(window.innerHeight / gridSize.cellSize) + 2),
            }).map((_, index) => (
            <div key={index}></div>
            ))} */}

        </Grid>
      </AppContainer>
      <Panel>
      <input
        type="text"
        placeholder="Enter image URL"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <Button onClick={handleImageChange}>Set Background</Button>
      <div>
        <label>
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              handleFileUpload(e);
            }}
          />
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
              localStorage.setItem(
                "gridSize",
                JSON.stringify({ ...gridSize, cellSize: newSize })
              );
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
              localStorage.setItem(
                "gridSize",
                JSON.stringify({ ...gridSize, offsetX: newOffsetX })
              );
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
              localStorage.setItem(
                "gridSize",
                JSON.stringify({ ...gridSize, offsetY: newOffsetY })
              );
            }}
          />
        </label>
      </div>
      {/* <div>
        <label>Choose Color:</label>
        <SketchPicker color={color} onChange={handleColorChange} />
      </div> */}
    </Panel>
    </Container>
    );
  };