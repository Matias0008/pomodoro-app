import Head from "next/head";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "/context/AppContext";
import { Pomodoro } from "../components/Pomodoro";

import { About } from "components/About";
import { Footer } from "components/Footer";
import { Loader } from "components/Loader";
import { Navbar } from "components/Navbar";

export default function Home() {
  const { minutes, timerMinutes, timerSeconds, timerMode } =
    useContext(AppContext);
  const originalTitle = minutes === null ? "Pomodoro App" : "";
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.body.classList.add("block-scroll");
    setTimeout(() => {
      setLoader(false);
      document.body.classList.remove("block-scroll");
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>
          {originalTitle || `${timerMinutes}:${timerSeconds} - ${timerMode}`}
        </title>
        <link rel="icon" href="./favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1"
        />
        <meta
          name="description"
          content="Pomotech is a simple pomodoro timer app. It's a simple way to get focused. Made by Matias Delgado"
        />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:title"
          content="Pomodoro App - Simple Pomodoro Timer"
        />
        <meta
          property="og:description"
          content="Pomotech is a simple pomodoro timer app. It's a simple way to get focused. Made by Matias Delgado"
        />
        <meta property="og:url" content="https://matiasdelgado.com.ar" />
        <meta property="og:site_name" content="Pomodoro App" />
        <style css>{`* {margin: 0;padding: 0;box-sizing: border-box;font-family: "Arial Rounded", sans-serif;}html {font-size: 10px;}@media (max-width: 768px) {html: font-size: 9px;}}.block-scroll {overflow: hidden;}`}</style>
      </Head>
      {loader && <Loader />}
      <Navbar />
      <Pomodoro />
    </>
  );
}
