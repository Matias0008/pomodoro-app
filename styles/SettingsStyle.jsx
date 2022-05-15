import styled from "styled-components";

export const SettingsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingsItem = styled.button`
  font-size: 35px;
  color: white;
  display: flex;
  outline: none !important;
  border: none;
  background: none;
  cursor: pointer;
  @media (max-width: 1200px) {
    cursor: none;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  position: relative;
  max-width: 450px;
  height: 50%;
  @media (max-width: 768px) {
    height: 95%;
  }
  width: 90%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 18px;
    text-align: center;
    color: rgb(187, 187, 187);
    font-weight: bold;
  }
`;

export const Form = styled.form`
  flex-wrap: wrap;
  max-width: 400px;
  height: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const ModalInput = styled.input`
  width: 90px;
  height: 50px;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 18px;
  outline: none;
  background-color: rgb(239, 239, 239);
  color: #000;
`;

export const InsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100px;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 10px 10px 0 20px;
`;

export const ButtonSubmit = styled.button`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 2px;
  color: white;
  opacity: 0.9;
  font-size: 14px;
  padding: 8px 12px;
  min-width: 70px;
  background-color: rgb(34, 34, 34);
  border: 2px solid rgb(34, 34, 34);
  display: inline-block;
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
