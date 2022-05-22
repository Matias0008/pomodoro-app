import React from "react";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [minutes, setMinutes] = useState(null);
  const [modeMinutes, setModeMinutes] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
  });
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");
  const [activeTag, setActiveTag] = useState(0);
  const [counter, setCounter] = useState(1);
  const [tabState, setTabState] = useState("visible");
  const [autoStartBreak, setAutoStartBreak] = useState(false);
  const [autoStartPomodoro, setAutoStartPomodoro] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  let timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  if (minutes === null) {
    timerMinutes = "00";
  }

  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  function getTimerMode() {
    if (mode === "work") {
      return "Time to focus!";
    }
    if (mode === "sbreak") {
      return "Time to take a short break!";
    }
    return "Time to take a long break!";
  }
  const timerMode = getTimerMode();

  useEffect(() => {
    setElapsedSeconds(0);
    if (localStorage.getItem("minutes")) {
      switch (mode) {
        case "work":
          setMinutes(JSON.parse(localStorage.getItem("minutes")).pomodoro);
          break;
        case "sbreak":
          setMinutes(JSON.parse(localStorage.getItem("minutes")).shortBreak);
          break;
        case "lbreak":
          setMinutes(JSON.parse(localStorage.getItem("minutes")).longBreak);
          break;
      }
    } else {
      mode === "sbreak" && setMinutes(modeMinutes.shortBreak);
      mode === "work" && setMinutes(modeMinutes.pomodoro);
      mode === "lbreak" && setMinutes(modeMinutes.longBreak);
    }
  }, [mode, modeMinutes]);

  useEffect(() => {
    if (localStorage.getItem("autoStartBreak")) {
      setAutoStartBreak(JSON.parse(localStorage.getItem("autoStartBreak")));
    } else {
      setAutoStartBreak(false);
    }
    if (localStorage.getItem("autoStartPomodoro")) {
      setAutoStartPomodoro(
        JSON.parse(localStorage.getItem("autoStartPomodoro"))
      );
    } else {
      setAutoStartPomodoro(false);
    }
  }, [autoStartPomodoro, autoStartBreak]);

  useEffect(() => {
    document.addEventListener("visibilitychange", function () {
      setTabState(document.visibilityState);
    });
  }, [tabState]);

  return (
    <AppContext.Provider
      value={{
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
        timerMinutes,
        timerSeconds,
        timerMode,
        modeMinutes,
        setModeMinutes,
        tabState,
        autoStartBreak,
        setAutoStartBreak,
        autoStartPomodoro,
        setAutoStartPomodoro,
        elapsedSeconds,
        setElapsedSeconds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
