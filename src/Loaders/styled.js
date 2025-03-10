import styled from "styled-components";

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
