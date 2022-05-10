import React from "react";
import {
  AboutItem,
  AboutParagraph,
  AboutTitle,
  Container,
  Title,
} from "styles/AboutStyle";

export const About = () => {
  return (
    <>
      <Container>
        <Title>An online Pomodoro Timer to boost your productivity</Title>
        <AboutItem>
          <AboutTitle>What is the website?</AboutTitle>
          <AboutParagraph>
            This website is a customizable pomodoro timer that works on desktop
            & mobile browser. The aim of this app is to help you focus on any
            task you are working on, such as study, writing, or coding. This app
            is inspired by Pomodoro Technique which is a time management method
            developed by Francesco Cirillo.
          </AboutParagraph>
        </AboutItem>
        <AboutItem>
          <AboutTitle>What is pomodoro technique?</AboutTitle>
          <AboutParagraph>
            The Pomodoro Technique is created by Francesco Cirillo for a more
            productive way to work and study. The technique uses a timer to
            break down work into intervals, traditionally 25 minutes in length,
            separated by short breaks. Each interval is known as a pomodoro,
            from the Italian word for 'tomato', after the tomato-shaped kitchen
            timer that Cirillo used as a university student.
          </AboutParagraph>
        </AboutItem>
      </Container>
    </>
  );
};
