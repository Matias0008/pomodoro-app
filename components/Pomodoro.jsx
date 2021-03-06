import React, { useState, useEffect, useContext } from "react";

import { AppContext } from "/context/AppContext";

import swal from "sweetalert";
import start from "public/start.mp3";
import end from "public/end.mp3";

import {
  Main,
  Container,
  PomodoroDiv,
  ButtonStart,
  ButtonContainer,
  Timer,
  Tags,
  Tag,
  PomodoroCounter,
  PomodoroMode,
  FooterContainer,
} from "styles/PomodoroStyle";

export const Pomodoro = () => {
  const {
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    isRunning,
    setIsRunning,
    mode,
    setMode,
    activeTag,
    setActiveTag,
    counter,
    setCounter,
    timerMode,
    modeMinutes,
    timerMinutes,
    timerSeconds,
    tabState,
    autoStartBreak,
    autoStartPomodoro,
    setElapsedSeconds,
  } = useContext(AppContext);
  const [audioStart, setAudioStart] = useState(null);
  const [audioEnd, setAudioEnd] = useState(null);

  const intervalTime = tabState === "visible" ? 1000 : 950;

  function handleMode(mode) {
    setElapsedSeconds(0);
    if (mode === "work") {
      if (counter % modeMinutes.longBreakInterval === 0) {
        setMode("lbreak");
        setActiveTag(2);
        setCounter(counter + 1);
      } else {
        setCounter(counter + 1);
        setActiveTag(1);
        setMode("sbreak");
        setTimeout(() => {
          if (autoStartBreak) {
            setIsRunning(true);
          }
        }, [300]);
      }
      return;
    }

    setActiveTag(0);
    setMode("work");
    setTimeout(() => {
      if (autoStartPomodoro) {
        setIsRunning(true);
      }
    }, [300]);
    return;
  }

  function showAlert() {
    const swalText = mode === "work" ? "Work is done!" : "Break is done!";
    swal("Hey!", swalText, "success", {
      buttons: {
        ok: "OK",
      },
    }).then((value) => {
      switch (value) {
        default:
          setMinutes(
            mode === "work" ? modeMinutes.pomodoro : modeMinutes.break
          );
          setElapsedSeconds(0);
          handleMode(mode);

          break;
      }
    });
  }

  const handleStart = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      audioStart.play();
    }
  };

  const handleTagClick = (index) => {
    if (isRunning) return alert("Please stop the timer first!");
    setActiveTag(index);
    setElapsedSeconds(0);
    index === 0 && setMode("work");
    index === 1 && setMode("sbreak");
    index === 2 && setMode("lbreak");
    setSeconds(0);
    setIsRunning(false);
  };

  const buttonStartText = isRunning ? "Stop" : "Start";

  useEffect(() => {
    if (isRunning) {
      if (minutes === 0 && seconds === 0) {
        setIsRunning(false);
        showAlert();
        audioEnd.play();
      }

      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
        setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isRunning, seconds]);

  useEffect(() => {
    setAudioStart(new Audio(start));
    setAudioEnd(new Audio(end));
  }, []);

  return (
    <Main mode={mode}>
      <Container>
        <PomodoroDiv>
          <Tags>
            {["Pomodoro", "Short Break", "Long Break"].map((tag, index) => (
              <Tag
                key={index}
                activeTag={activeTag === index}
                onClick={() => handleTagClick(index)}
              >
                {tag}
              </Tag>
            ))}
          </Tags>
          <Timer>
            {timerMinutes}:{timerSeconds}
          </Timer>
          <ButtonContainer>
            <ButtonStart
              onClick={handleStart}
              isRunning={isRunning}
              mode={mode}
            >
              {buttonStartText}
            </ButtonStart>
          </ButtonContainer>
        </PomodoroDiv>
        <FooterContainer>
          <PomodoroCounter>#{counter}</PomodoroCounter>
          <PomodoroMode>{timerMode}</PomodoroMode>
        </FooterContainer>
      </Container>
    </Main>
  );
};
