import React, { useState, useEffect } from "react";
import {
  PageContainer,
  CenteredDiv,
  StyledButton,
  Slider,
  Label,
  ColorInput,
  ImageInput,
  PreviewImage,
  SizePanel,
  TextInput,
  ImageUploadButton,
  HiddenFileInput,
} from "./styled"; // Import styles

export const LoaderController = () => {
  const [radius, setRadius] = useState(50);
  const [color, setColor] = useState("408810");
  const [speed, setSpeed] = useState(0.01);
  const [image, setImage] = useState(""); // Holds the actual image
  const [imageToUpdate, setImageToUpdate] = useState(""); // Temporary state for image input
  const channel = new BroadcastChannel("loader_channel");

  // Function to send updated values immediately
  const sendMessage = (updatedValues) => {
    channel.postMessage(updatedValues);
  };

  // Whenever any state changes, send the updated value automatically
  useEffect(() => {
    sendMessage({ radius, color, speed, image });
  }, [radius, color, speed, image]);

  // Handle Image Upload (Local File)
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageToUpdate(e.target.result); // Save base64 data of local image
      };
      reader.readAsDataURL(file);
    }
  };

  // Update the image only when the button is pressed
  const updateImage = () => {
    const prevColor = color;
    setColor("");

    setTimeout(() => {
      setImage(imageToUpdate);
      setColor(prevColor);
    }, 5000);
  };

  return (
    <PageContainer>
      {/* Control Panel */}
      <CenteredDiv>
        <h2>Control Loader Page</h2>

        {/* Controls Section (Radius, Color, Speed) */}
        <div>
          {/* Radius Control */}
          <Label>Radius: {radius}</Label>
          <Slider
            type="range"
            min="1"
            max="200"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
          <br /><br />

          {/* Color Control */}
          <Label>Color:</Label>
          <ColorInput
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <br /><br />

          {/* Speed Control */}
          <Label>Speed: {speed}</Label>
          <Slider
            type="range"
            min="0"
            max="0.5"
            step="0.001"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
          <br /><br />
        </div>

        {/* Image Section */}
        <SizePanel>
          {/* Image URL Input */}
          <div>
            <Label>Image URL:</Label>
            <TextInput
              type="text"
              placeholder="Enter Image URL..."
              value={imageToUpdate}
              onChange={(e) => setImageToUpdate(e.target.value)}
            />
          </div>

          {/* Local File Upload */}
          <div>
            <Label>Upload Image:</Label>
            <ImageUploadButton htmlFor="file-upload">Upload Image</ImageUploadButton>
            <HiddenFileInput id="file-upload" type="file" accept="image/*" onChange={handleImageUpload} />

          </div>

          {/* Image Preview */}
          {imageToUpdate && <PreviewImage src={imageToUpdate} alt="Preview" />}
          
          {/* Update Image Button */}
          <StyledButton onClick={updateImage}>Update Image</StyledButton>
        </SizePanel>
      </CenteredDiv>
    </PageContainer>
  );
};
