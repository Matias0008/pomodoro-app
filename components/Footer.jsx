import React from "react";

import { FooterDiv, FooterText } from "styles/FooterStyle";
import { AppContext } from "/context/AppContext";

import { VscGithubInverted } from "react-icons/vsc";

export const Footer = () => {
  const { mode } = React.useContext(AppContext);
  return (
    <>
      <FooterDiv mode={mode}>
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
