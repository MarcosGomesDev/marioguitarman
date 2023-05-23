import React, { useState } from "react";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { GlobalStyles } from "./styles/GlobalStyles";
import Contact from "./components/Contact";
import { CarouselComponent } from "./components/Carousel";

function App() {
  const home = React.useRef<HTMLElement | null>(null);
  const about = React.useRef<HTMLElement | null>(null);
  const qualifications = React.useRef<HTMLElement | null>(null);
  const service = React.useRef<HTMLElement | null>(null);
  const knowledge = React.useRef<HTMLElement | null>(null);
  const projects = React.useRef<HTMLElement | null>(null);
  const contact = React.useRef<HTMLElement | null>(null);

  const [activeElement, setActiveElement] = useState<boolean>(false);

  const ScrollOn = () => {
    if (window.scrollY >= 1000) {
      setActiveElement(true);
    } else {
      setActiveElement(false);
    }
  };

  window.addEventListener("scroll", ScrollOn);

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <GlobalStyles />
      <Header
        onClickToHome={() => scrollToSection(home)}
        onClickToAbout={() => scrollToSection(about)}
        onClickToQuality={() => scrollToSection(qualifications)}
        onClickToService={() => scrollToSection(service)}
        onClickToKnowledge={() => scrollToSection(knowledge)}
        onClickToProjects={() => scrollToSection(projects)}
        onClickToContact={() => scrollToSection(contact)}
      />
      <Home ref={home} onClick={() => scrollToSection(about)} />
      <About ref={about} />
      <CarouselComponent />
      <Projects ref={projects} />
      <Contact ref={contact} />
      <Button active={activeElement} onClick={() => scrollToSection(home)} />
      <Footer />
    </>
  );
}

export default App;
