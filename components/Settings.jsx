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
import { ButtonSubmit } from "styles/SettingsStyle";

export const Settings = () => {
  const { modeMinutes, setModeMinutes, setSeconds } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
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

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalBody>
            <ModalHeader>
              <h4
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Time (minutes)
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
              <InsideDiv>
                <label htmlFor="pomodoro">Work</label>
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
              <InsideDiv>
                <ButtonSubmit onClick={handleSubmit}>OK</ButtonSubmit>
              </InsideDiv>
            </Form>
          </ModalBody>
        </Modal>
      )}
      <SettingsDiv>
        <SettingsItem>
          <MdSettings onClick={toggle} style={{ cursor: "pointer" }} />
        </SettingsItem>
      </SettingsDiv>
    </>
  );
};
