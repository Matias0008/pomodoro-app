import React from "react";
import { AppContext } from "/context/AppContext.jsx";

import { Header, Nav } from "styles/NavbarStyle";
import { Settings } from "/components/Settings";
import { ProgressBar } from "./ProgressBar";

export const Navbar = () => {
  const { mode } = React.useContext(AppContext);
  return (
    <>
      <Header mode={mode}>
        <Nav>
          <h1>Pomotech</h1>
          <Settings />
        </Nav>
        <ProgressBar />
      </Header>
    </>
  );
};
