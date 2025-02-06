import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const Background = styled.div`
  position: absolute;
  left: -10%;
  top: -10%;
  width: 120%;
  height: 120%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: round;
//   transform: ${(props) => (props.rotate ? "rotate(90deg)" : "none")};
  z-index: -1;
  filter: blur(50px);
`;

export const BackgroundCover = styled.div`
  position: absolute;
  left: -10%;
  top: -10%;
  width: 120%;
  height: 120%;
  background-image: url('assets/grids/pattern.png');
  background-position: center;
  background-repeat: round;
//   transform: ${(props) => (props.rotate ? "rotate(90deg)" : "none")};
`;

export const AppContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const VideoWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const Grid = styled.div`
  position: absolute;
  top: ${(props) => ((props.rotated ? props.offsetX : props.offsetY) % props.cellSize) - props.cellSize}px;
  left: ${(props) => ((props.rotated ? props.offsetY : props.offsetX) % props.cellSize) - props.cellSize}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${(props) => props.cellSize}px);
  grid-template-rows: repeat(auto-fill, ${(props) => props.cellSize}px);
  width: ${(props) => props.xCount * props.cellSize}px;
  height: ${(props) => props.yCount * props.cellSize}px;

  background-image:
    repeating-linear-gradient(#ccc 0 ${(props) => 1/props.scale}px, transparent ${(props) => 1/props.scale}px 100%),
    repeating-linear-gradient(90deg, #ccc 0 ${(props) => 1/props.scale}px, transparent ${(props) => 1/props.scale}px 100%);
  background-size: ${(props) => `${props.cellSize}px ${props.cellSize}px`};

  div {
    border: ${(props) => 1/props.scale}px solid rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }
`;

export const Panel = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 8px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  backdrop-filter: blur(3px); /* Adds the blur effect */

  input {
    background: rgba(0, 0, 0, 0.4);
    color: white;
    border: none;
    padding: 5px;
    margin: 0 5px;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
  background-color: #5f7fff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    background-color:rgb(126, 152, 255);
  }
`;