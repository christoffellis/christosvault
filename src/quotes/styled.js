import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
  background-color: ${({ selected }) => (selected ? '#f3a3' : '#333')};
  color: white;
  padding: 8px 14px;
  border-radius: 20px;
  font-size: 0.9em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  user-select: none;

  &:hover {
    background-color: #666;
  }
`;

export const QuoteContainer = styled.div`
  text-align: center;
  font-size: 1.4em;
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