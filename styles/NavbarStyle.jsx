import styled from "styled-components";

export const Header = styled.header`
  height: 70px;
  background-color: ${(props) =>
    props.mode === "work" ? "rgb(217, 85 , 80)" : "rgb(76, 145, 149)"};
  background-color: ${(props) =>
    props.mode === "lbreak" && "rgb(69, 124, 163)"};
  width: 100%;
  position: fixed;
  top: 0;
  transition: background-color 1.5s ease;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;
  box-shadow: 0px 2.5px 2px -2px rgba(0, 0, 0, 0.2);
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }

  h1 {
    font-size: 2.6rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }
`;
