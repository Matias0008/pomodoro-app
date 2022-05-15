import React from "react";

import { FooterDiv, FooterText } from "styles/FooterStyle";
import { AppContext } from "/context/AppContext";

import { VscGithubInverted } from "react-icons/vsc";

export const Footer = () => {
  const { mode } = React.useContext(AppContext);
  return (
    <>
      <FooterDiv mode={mode}>
        <FooterText>
          Made by{" "}
          <a
            href="https://matiasdelgado.com.ar"
            target="_blank"
            rel="noreferrer"
            style={{
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
            }}
          >
            Matias Delgado
          </a>
          <br></br>
        </FooterText>

        <a
          href="https://github.com/Matias008"
          target="_blank"
          rel="noreferrer"
          style={{ color: "white", fontSize: "32px" }}
        >
          <VscGithubInverted />
        </a>
      </FooterDiv>
    </>
  );
};
