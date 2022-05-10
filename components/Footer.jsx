import React from "react";

import { FooterDiv, FooterText } from "styles/FooterStyle";
import { VscGithubInverted } from "react-icons/vsc";

export const Footer = () => {
  return (
    <>
      <FooterDiv>
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
          <span style={{ fontSize: "16px", opacity: "0.7" }}>
            Design by pomofocus
          </span>
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
