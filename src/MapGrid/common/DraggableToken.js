import React, { useState } from "react";
import styled from "styled-components";

const Token = styled.div`
  position: absolute;
  width: ${(props) => props.cellSize}px;
  height: ${(props) => props.cellSize}px;
  background-color: red;
  border-radius: 50%;
  cursor: grab;
  transform: translate(${(props) => props.x}px, ${(props) => props.y}px);
  z-index:10
`;

const DraggableToken = ({ initialX, initialY, cellSize }) => {
  const [position, setPosition] = useState({
    x: initialX,
    y: initialY,
  });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    e.target.style.cursor = "grabbing";
  };

  const handleMouseUp = (e) => {
    if (dragging) {
      // Snap to grid
      const snappedX = Math.round(position.x / cellSize) * cellSize;
      const snappedY = Math.round(position.y / cellSize) * cellSize;
      setPosition({ x: snappedX, y: snappedY });
      e.target.style.cursor = "grab";
    }
    setDragging(false);
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - cellSize / 2,
        y: e.clientY - cellSize / 2,
      });
    }
  };

  return (
    <Token
      cellSize={cellSize}
      x={position.x}
      y={position.y}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    />
  );
};

export default DraggableToken;
