import Head from "next/head";
import { useContext } from "react";
import { AppContext } from "/context/AppContext";
import { Pomodoro } from "../components/Pomodoro";

import { About } from "components/About";
import { Footer } from "components/Footer";

export default function Home() {
  const { minutes, timerMinutes, timerSeconds, timerMode } =
    useContext(AppContext);
  const originalTitle = minutes === null ? "Pomodoro App" : "";
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
          content="Portafolio de Matias Delgado, desarrollador web de Villa Maria, Cordoba, Argentina. Creado con Next JS."
        />
        <meta property="og:locale" content="es_ES" />
        <meta
          property="og:title"
          content="Matias Delgado | Portafolio - Desarrollador Web"
        />
        <meta
          property="og:description"
          content="Portafolio de Matias Delgado, desarrollador web de Villa Maria, Cordoba, Argentina. Creado con Next JS."
        />
        <meta property="og:url" content="https://matiasdelgado.com.ar" />
        <meta property="og:site_name" content="Portafolio de Matias Delgado" />
      </Head>
      <Pomodoro />
      <About />
      <Footer />
    </>
  );
}
