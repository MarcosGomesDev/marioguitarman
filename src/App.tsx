import "./App.css";
import {
  AboutSection,
  ContactSection,
  Footer,
  Header,
  HomeSection,
  Layout,
  WorkingSection,
} from "./components";
import { Carousel } from "./components/Carousel";
import { images } from "./components/Carousel/images";

const sections = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "projects",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

export function App() {
  return (
    <>
      <Header sections={sections} />
      <HomeSection id="home" />
      <Layout>
        <AboutSection id="about" />
        <Carousel slides={images} options={{ loop: true }} />
        <WorkingSection id="projects" />
        <ContactSection id="contact" />
      </Layout>
      <Footer />
    </>
  );
}
