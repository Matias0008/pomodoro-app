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
  } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("block-scroll");
    if (document.querySelector(".hHNEff")) {
      !isOpen
        ? (document.querySelector(".hHNEff").style.zIndex = "-1")
        : (document.querySelector(".hHNEff").style.zIndex = "1");
    }
  };
  const [error, setError] = useState(false);
  const [newValues, setNewValues] = useState({
    pomodoro: "",
    shortBreak: "",
    longBreak: "",
  });

  useEffect(() => {
    if (localStorage.getItem("minutes")) {
      setNewValues({
        pomodoro: JSON.parse(localStorage.getItem("minutes")).pomodoro,
        shortBreak: JSON.parse(localStorage.getItem("minutes")).shortBreak,
        longBreak: JSON.parse(localStorage.getItem("minutes")).longBreak,
      });
    } else {
      setNewValues({
        pomodoro: modeMinutes.pomodoro,
        shortBreak: modeMinutes.shortBreak,
        longBreak: modeMinutes.longBreak,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || value < 0 || value.match(/[+-]?([0-9]*[.])?[0-9]+/)) {
      setError(true);
    }
    setNewValues({ ...newValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newValues.pomodoro === "" ||
      newValues.shortBreak === "" ||
      newValues.longBreak === "" ||
      newValues.pomodoro < 0 ||
      newValues.shortBreak < 0 ||
      newValues.longBreak < 0 ||
      !Number.isInteger(Number(newValues.pomodoro)) ||
      !Number.isInteger(Number(newValues.shortBreak)) ||
      !Number.isInteger(Number(newValues.longBreak))
    ) {
      toggle();
      setNewValues({
        pomodoro: modeMinutes.pomodoro,
        shortBreak: modeMinutes.shortBreak,
        longBreak: modeMinutes.longBreak,
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
                  }}
                />
              </ModalHeader>
              <Form>
                <H3Modal margin>Time (minutes)</H3Modal>
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
                </Form>
              </Form>
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
