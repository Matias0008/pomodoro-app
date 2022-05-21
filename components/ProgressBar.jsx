import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";

import { AppContext } from "/context/AppContext";
export const ProgressBar = () => {
  const { seconds, setSeconds, minutes, mode, elapsedSeconds } =
    useContext(AppContext);
  const [minuto, setMinuto] = useState(0);
  const [formula, setFormula] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("minutes")) {
      if (mode === "work") {
        setMinuto(
          JSON.parse(localStorage.getItem("minutes")).pomodoro * 60 || minutes
        );
      }
      if (mode === "sbreak") {
        setMinuto(
          JSON.parse(localStorage.getItem("minutes")).shortBreak * 60 || minutes
        );
      }
      if (mode === "lbreak") {
        setMinuto(
          JSON.parse(localStorage.getItem("minutes")).longBreak * 60 || minutes
        );
      }
    } else {
      setMinuto(minutes * 60);
    }
  }, [minutes]);

  useEffect(() => {
    setFormula((elapsedSeconds / minuto) * 100 || 0);
  }, [seconds, mode]);

  return (
    <>
      <Container>
        <ProgressBarStyled>
          <ProgressBarInside width={formula} />
        </ProgressBarStyled>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: unset;
    width: 90%;
  }
`;
const ProgressBarStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 1px;
`;

const ProgressBarInside = styled.div`
  height: 3px;
  background-color: white;
  border-radius: 100px;
  transform: translateY(-1px);
  width: ${(props) => props.width}%;
`;
