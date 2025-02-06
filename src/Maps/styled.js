import styled from "styled-components";

export const Container = styled.div`
  background-color:${({isDay}) => isDay ? 'rgb(243, 230, 207)' : 'rgb(27, 10, 58)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color:${({isDay}) => isDay ? '#222b' : '#eeeb'};
  transition: 0.3s;

`;

export const BackgroundCover = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 100%;
  background-image: url('assets/grids/pattern.png');
  background-position: center;
  background-repeat: round;
  z-index: -1;
`;

export const Header = styled.div`
  font-size: 32px;
  font-weight: bold;
  padding: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 42px;
  text-shadow: 0px 0px 10px ${({isDay}) => isDay ? '#222b' : '#eeeb'};
;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 90%;
  max-width: 800px;

  @media (min-width: 900px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
  max-width: 600px;
`;

export const MapImage = styled.img`
  width: 100%;
  border-radius: 12px;
  transition: box-shadow 0.5s ease;

  &:hover {
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.3);
  }
  `;

export const ToggleSwitch = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 12px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const Description = styled.p`
  font-size: 18px;
  padding: 20px;
  background-color: ${({isDay}) => isDay ? '#0002' : '#000c'};;
  color:${({isDay}) => isDay ? '#222b' : '#eeeb'};
  flex: 0.5;
  border-radius: 10px;
  margin-top: 20px;
  max-width: 600px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const ModeButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #6f42c1, #9f7cff);
  color: white;
  transition: 0.3s;

  &:hover {
    background: #c9a9ff;
  }
`;

export const EditorButton = styled.a`
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: #ff7b72;
  color: white;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #ff9992;
  }
`;

export const YouTubeContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
`;

export const NotFound = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
  color: red;
`;