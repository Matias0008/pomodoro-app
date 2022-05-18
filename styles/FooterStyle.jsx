import styled from "styled-components";

export const FooterDiv = styled.footer`
  background-color: ${(props) =>
    props.mode === "work" ? "rgb(217, 85, 80)" : "rgb(76, 145, 149)"};
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  width: 100%;
  flex-direction: column;
  gap: 15px;
  transition: background-color 1.5s ease;

  ${(props) => props.mode === "lbreak" && "background-color: rgb(69, 124, 163)"}
`;

export const FooterText = styled.p`
  font-size: 2rem;
  text-align: center;
`;
