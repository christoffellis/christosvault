import styled from "styled-components";

export const StyledCanvas = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledTag = styled.div`
  position: absolute;
  width: 100px;
  height: 50px;
  background-color: #f9f1d3; /* Light paper color */
  border: 2px dashed #d4af37; /* Dashed border for paper tag */
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, -50%);
  pointer-events: none;
`;
