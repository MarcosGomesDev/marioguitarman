import { useEffect, useState } from "react";
import "./TitleShadowAnimated.css";

export function TitleShadowAnimated({ title }: { title: string }) {
  const [animationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    setAnimationActive(true);
  }, []);

  return (
    <p className="text-white font-normal text-5xl md:text-9xl cursor-default relative">
      {title.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block ${
            index !== 0 ? "ml-2" : "" // Adiciona uma margem à esquerda após o primeiro caractere
          } looping-shadow ${animationActive ? "animate-looping" : ""}`}
        >
          {letter}
        </span>
      ))}
    </p>
  );
}
