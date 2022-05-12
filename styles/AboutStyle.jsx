import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 80%;
  margin: 0 auto;
  max-width: 600px;
  min-height: 100vh;
  @media (max-width: 600px) {
    min-height: 150vh;
  }
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: black;
  @media (max-width: 600px) {
    font-size: 3.8rem;
  }
`;

export const AboutItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  text-align: end;
  font-weight: bold;
  color: black;
  @media (max-width: 600px) {
    font-size: 2.4rem;
  }

  &::after {
    content: "";
    display: block;
    width: 24px;
    padding-top: 20px;
    border-bottom: 4px solid #f05b56;
    opacity: 0.6;
  }
`;

export const AboutParagraph = styled.p`
  font-size: 18px;
  line-height: 1.6em;
  color: hsl(357, 12%, 42%);
`;
