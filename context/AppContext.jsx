import React from "react";
import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [minutes, setMinutes] = useState(null);
  const [modeMinutes, setModeMinutes] = useState({
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  });
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");
  const [activeTag, setActiveTag] = useState(0);
  const [counter, setCounter] = useState(1);
  const [tabState, setTabState] = useState("visible");

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
