import styled from "styled-components";

export const PageContainer = styled.div`
  padding-top: ${(({mode}) => mode === 'list' ? '56px' : '')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #111;
  font-family: 'Poppins', sans-serif;
`;

export const PipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Pip = styled.div`
  background-color: ${({ color, selected }) => (color ? `${color}${selected ? '80' : '20'}` : '#333333')};
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.5em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ color, selected }) => (color ? `${color}${selected ? 'ff': '20'}` : '#444444')};
    flex-shrink: 0;
    transition: background-color 0.3s ease;
  }

&:hover {
    background-color: ${({ color }) => color ? `${color}55` : '#666'};
    border-color: ${({ color }) => color || '#666'};
    
    &::before {
      background-color: ${({ color }) => color ? `${color}cc` : '#888888'};
    }
  }
`;


export const QuoteContainer = styled.div`
  text-align: center;
  font-size: 2em;
  color: white;
  max-width: 600px;
  line-height: 1.6;
`;

export const Word = styled.span`
  display: inline-block;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

export const SectionTitle = styled.h3`
  color: #f3a3;
  margin: 20px 0 10px;
  font-size: 1.1em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;