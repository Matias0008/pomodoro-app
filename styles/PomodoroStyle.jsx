import styled from "styled-components";

export const Main = styled.main`
  background-color: ${(props) =>
    props.mode === "work" ? "rgb(217, 85 , 80)" : "rgb(76, 145, 149)"};
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1.5s ease;
  ${(props) => props.mode === "lbreak" && "background-color: rgb(69, 124, 163)"}
`;

export const Container = styled.article`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PomodoroDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  gap: 20px;
  min-height: 350px;
  margin: 0 auto;
  width: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: clamp(5rem, 8vw, 6rem);
    text-transform: uppercase;
    text-align: center;
  }
`;

export const Timer = styled.h2`
  font-size: clamp(10rem, 12vw, 12rem);
  text-align: center;
  @media (max-width: 300px) {
    font-size: 9rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 6px;
`;

export const ButtonStart = styled.button`
  font-size: 3rem;
  font-weight: bold;
  height: 60px;
  width: 200px;
  cursor: pointer;
  border: none;
  padding: 0px 12px;
  border-radius: 4px;
  box-shadow: ${(props) =>
    !props.isRunning ? "rgb(235 235 235) 0px 6px 0px" : "none"};
  color: ${(props) =>
    props.mode === "work" ? "rgb(217, 85, 80);" : "rgb(76,145,149)"};
  background-color: white;
  ${(props) => props.mode === "lbreak" && "color: rgb(69, 124, 163)"}
  transition: color 1.5s ease-in-out;
`;

export const Tags = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 340px) {
    flex-direction: column;
  }
`;

export const Tag = styled.h3`
  display: flex;
  align-items: center;
  border: none;
  margin: 0px;
  font-size: 18px;
  padding: 2px 12px;
  height: 32px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: none;
  color: white;
  opacity: 1;
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 374px) {
    font-size: 14px;
  }
  @media (max-width: 340px) {
    width: 100%;
    justify-content: center;
  }
  ${(props) => (props.activeTag ? "font-weight: bold;" : "font-weight: 300;")}
  background: ${(props) =>
    props.activeTag ? "none rgb(0, 0, 0, 0.15)" : "none"};
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

export const PomodoroCounter = styled.h3`
  font-size: 18px;
  color: #b2c6c1;
  text-align: center;
`;

export const PomodoroMode = styled.h3`
  font-size: 18px;
  color: white;
  font-weight: 100;
  text-align: center;
`;
