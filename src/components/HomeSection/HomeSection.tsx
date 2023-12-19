import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { TitleShadowAnimated } from "./components/TitleShadowAnimated";

interface Props {
  id: string;
}

const email = "contatosmarioguitarman@gmail.com";

export function HomeSection({ id }: Props) {
  return (
    <div
      id={id}
      className="h-[50vh] md:h-screen w-full bg-no-repeat bg-bottom bg-contain bg-music-background flex flex-col justify-end items-center"
    >
      <div className="md:absolute flex flex-col items-center bottom-20">
        <TitleShadowAnimated title="Mário Guitarman" />
        <a
          href="#about"
          role="link"
          aria-labelledby="Ir a sessão de sobre"
          aria-label="Ir a sessão de sobre"
          className="text-white text-2xl tracking-widest bg-[#9E0000] px-20 py-4 rounded-2xl hover:scale-110 transition-all duration-300 ease-in-out font-semibold mt-12 md:mt-20"
        >
          Saiba mais
        </a>
        <div className="flex mt-12 gap-8 mb-6 mb:mb-0">
          <a
            href="https://www.youtube.com/@marioguitarman8337/"
            target="_blank"
            className="text-6xl text-white hover:cursor-pointer hover:scale-110 hover:text-red transition-all duration-300 ease-in-out"
            aria-labelledby="Abrir youtube"
            aria-braillelabel="Abrir youtube"
            aria-label="Abrir youtube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/marioguitarman/"
            target="_blank"
            className="text-6xl text-white hover:cursor-pointer hover:scale-110 hover:text-red transition-all duration-300 ease-in-out"
            aria-labelledby="Abrir instagram"
            aria-label="Abrir instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={`mailto:${email}`}
            target="_blank"
            className="text-6xl text-white hover:cursor-pointer hover:scale-110 hover:text-red transition-all duration-300 ease-in-out"
            aria-labelledby="Enviar e-mail"
            aria-label="Enviar e-mail"
          >
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>
  );
}
