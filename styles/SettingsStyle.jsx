import styled from "styled-components";

export const SettingsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingsItem = styled.button`
  font-size: 2.2rem;
  color: white;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  gap: 5px;
  background: none rgba(255, 255, 255, 0.2);
  padding: 5px 12px 5px 12px;
  border-radius: 5px;
  p {
    font-size: 1.6rem;
    @media (max-width: 600px) {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    cursor: unset;
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
  max-width: 380px;
  height: 420px;
  width: 90%;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 14px;
    color: rgb(187, 187, 187);
    font-weight: bold;
    text-align: left;
    width: 100%;
    padding: 0 10px 0 0px;
  }
`;

export const GeneralContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 20px;
`;

export const ContainerOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 30px;
`;

export const Form = styled.article`
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: space-between;
`;

export const ModalInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  background-color: rgb(239, 239, 239);
  color: #000;
`;

export const InsideDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  @media screen and (max-width: 600px) {
    width: 90px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 30px 0px;
  border-bottom: 0.5px solid rgb(187, 187, 187);
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  padding: 0 0 10px 0;
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
  opacity: 1;
  font-size: 14px;
  padding: 8px 12px;
  min-width: 70px;
  background-color: rgb(34, 34, 34);
  border: 2px solid rgb(34, 34, 34);
  display: inline-block;
`;

export const SomeOption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const H3Modal = styled.h3`
  ${(props) => props.margin && `margin-bottom: 5px;`}
  width: 100%;
  font-size: 17px;
  color: rgb(85, 85, 85);
`;

export const OptionButtonDiv = styled.div`
  cursor: pointer;
  width: 50px;
  height: 22px;
  border-radius: 50px;
  background-color: ${(props) =>
    props.active ? "rgba(132, 199, 51, 0.8)" : "rgba(204, 204, 204)"};

  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;

  div {
    position: absolute;
    left: ${(props) => (props.active ? "auto" : "2px")};
    width: 18px;
    height: 18px;
    border-radius: 50px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 30%) 0px 1px 1px;
    ${(props) => props.active && "right: 2px"};
  }
`;
