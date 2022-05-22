import React, { useState, useContext, useEffect } from "react";

import { AppContext } from "/context/AppContext";
import { MdSettings, MdClose } from "react-icons/md";

import {
  SettingsDiv,
  SettingsItem,
  Modal,
  ModalBody,
  ModalInput,
  Form,
  InsideDiv,
  ModalHeader,
} from "/styles/SettingsStyle";

import {
  ButtonSubmit,
  ContainerOptions,
  GeneralContainer,
  H3Modal,
  ModalButtons,
  OptionButtonDiv,
  SomeOption,
} from "styles/SettingsStyle";

export const Settings = () => {
  const {
    modeMinutes,
    setModeMinutes,
    setSeconds,
    setAutoStartBreak,
    autoStartBreak,
    setAutoStartPomodoro,
    autoStartPomodoro,
    setElapsedSeconds,
    isRunning,
    setIsRunning,
  } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const [newValues, setNewValues] = useState({
    pomodoro: "",
    shortBreak: "",
    longBreak: "",
    longBreakInterval: "",
  });

  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("block-scroll");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewValues({ ...newValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setElapsedSeconds(0);
    if (isRunning) {
      setIsRunning(false);
    }

    e.preventDefault();
    if (
      newValues.pomodoro === "" ||
      newValues.shortBreak === "" ||
      newValues.longBreak === "" ||
      newValues.pomodoro <= 0 ||
      newValues.shortBreak <= 0 ||
      newValues.longBreak <= 0 ||
      newValues.longBreakInterval < 2 ||
      !Number.isInteger(Number(newValues.pomodoro)) ||
      !Number.isInteger(Number(newValues.shortBreak)) ||
      !Number.isInteger(Number(newValues.longBreak)) ||
      !Number.isInteger(Number(newValues.longBreakInterval))
    ) {
      toggle();
      setNewValues({
        pomodoro:
          JSON.parse(localStorage.getItem("minutes")).pomodoro ||
          modeMinutes.pomodoro,
        shortBreak:
          JSON.parse(localStorage.getItem("minutes")).shortBreak ||
          modeMinutes.shortBreak,
        longBreak:
          JSON.parse(localStorage.getItem("minutes")).longBreak ||
          modeMinutes.longBreak,
        longBreakInterval:
          JSON.parse(localStorage.getItem("minutes")).longBreakInterval ||
          modeMinutes.longBreakInterval,
      });
      return;
    }

    setModeMinutes({ ...newValues });
    localStorage.setItem("minutes", JSON.stringify(newValues));
    toggle();
    setSeconds(0);
  };

  const handleStartBreak = () => {
    localStorage.setItem("autoStartBreak", !autoStartBreak);
    setAutoStartBreak(!autoStartBreak);
  };

  const handleStartPomodoro = () => {
    localStorage.setItem("autoStartPomodoro", !autoStartPomodoro);
    setAutoStartPomodoro(!autoStartPomodoro);
  };

  useEffect(() => {
    if (localStorage.getItem("minutes")) {
      setNewValues({
        pomodoro: JSON.parse(localStorage.getItem("minutes")).pomodoro,
        shortBreak: JSON.parse(localStorage.getItem("minutes")).shortBreak,
        longBreak: JSON.parse(localStorage.getItem("minutes")).longBreak,
        longBreakInterval: JSON.parse(localStorage.getItem("minutes"))
          .longBreakInterval,
      });
    } else {
      setNewValues({
        pomodoro: modeMinutes.pomodoro,
        shortBreak: modeMinutes.shortBreak,
        longBreak: modeMinutes.longBreak,
        longBreakInterval: modeMinutes.longBreakInterval,
      });
    }
  }, []);

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalBody>
            <GeneralContainer>
              <ModalHeader>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "rgb(187, 187, 187)",
                    textTransform: "uppercase",
                  }}
                >
                  Timer settings
                </h4>

                <MdClose
                  onClick={toggle}
                  style={{
                    fontSize: "32px",
                    cursor: "pointer",
                    opacity: ".3",
                    hover: { opacity: "1" },
                  }}
                />
              </ModalHeader>
              <ContainerOptions>
                <Form>
                  <H3Modal margin>Time in minutes</H3Modal>
                  <InsideDiv>
                    <label htmlFor="pomodoro">Pomodoro</label>
                    <ModalInput
                      value={newValues.pomodoro}
                      name="pomodoro"
                      onChange={handleChange}
                      type="number"
                      min="1"
                      step="1"
                    />
                  </InsideDiv>
                  <InsideDiv>
                    <label htmlFor="shortBreak">Short Break</label>
                    <ModalInput
                      value={newValues.shortBreak}
                      name="shortBreak"
                      onChange={handleChange}
                      type="number"
                      min="1"
                    />
                  </InsideDiv>
                  <InsideDiv>
                    <label htmlFor="longBreak">Long Break</label>
                    <ModalInput
                      value={newValues.longBreak}
                      onChange={handleChange}
                      name="longBreak"
                      type="number"
                      min="1"
                    />
                  </InsideDiv>
                </Form>
                <Form>
                  <SomeOption>
                    <H3Modal>Auto start Breaks?</H3Modal>
                    <OptionButtonDiv
                      active={autoStartBreak}
                      onClick={handleStartBreak}
                    >
                      <div></div>
                    </OptionButtonDiv>
                  </SomeOption>
                  <Form>
                    <SomeOption>
                      <H3Modal>Auto start Pomodoros?</H3Modal>
                      <OptionButtonDiv
                        active={autoStartPomodoro}
                        onClick={handleStartPomodoro}
                      >
                        <div></div>
                      </OptionButtonDiv>
                    </SomeOption>
                    <Form>
                      <SomeOption
                        style={{
                          marginBottom: "10px",
                          paddingTop: "20px",
                        }}
                      >
                        <H3Modal>Long Break interval</H3Modal>
                        <ModalInput
                          style={{
                            width: "60px",
                          }}
                          type="number"
                          min="2"
                          value={newValues.longBreakInterval}
                          name="longBreakInterval"
                          onChange={handleChange}
                        />
                      </SomeOption>
                    </Form>
                  </Form>
                </Form>
              </ContainerOptions>
              <ModalButtons>
                <ButtonSubmit onClick={handleSubmit}>OK</ButtonSubmit>
              </ModalButtons>
            </GeneralContainer>
          </ModalBody>
        </Modal>
      )}
      <SettingsDiv>
        <SettingsItem onClick={toggle}>
          <p>Settings</p>
          <MdSettings />
        </SettingsItem>
      </SettingsDiv>
    </>
  );
};
