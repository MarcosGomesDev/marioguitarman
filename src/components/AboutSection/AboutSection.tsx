import { IoIosArrowForward } from "react-icons/io";

interface Props {
  id: string;
}

export function AboutSection({ id }: Props) {
  return (
    <div id={id} className="flex min-w-full mb-6 lg:mb-0 py-32 md:py-48">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        <img
          src="https://res.cloudinary.com/gomesdev/image/upload/v1702993726/marioguitarman/Novo_Projeto_o6gxaq_zfao7m.webp"
          alt="mario"
          className="rounded-full border-4 border-red object-cover mb-7 lg:mb-0 md:scale-100 scale-90"
          width={450}
          height={450}
          loading="lazy"
          decoding="async"
        />

        <div className="lg:w-1/2 flex flex-col h-max justify-between px-8">
          <p className="text-white text-xl md:text-2xl flex items-center tracking-wide mb-8">
            <IoIosArrowForward color="#ff0000" className="ml-1" />
            <IoIosArrowForward color="#ff0000" className="-ml-8" />
            <p className="ml-5">GUITARRISTA PROFISSIONAL MÁRIO GUITARMAN</p>
          </p>
          <p className="text-white text-3xl md:text-5xl md:text-justify leading-snug mb-12">
            Mário Henrique Nunes Bezerra.
          </p>
          <p className="text-white text-3xl text-justify leading-snug">
            Comecei minha vida musical desde cedo como baterista na igreja dos
            meus pais em Honório Gurgel, RJ. Com 11 anos, me interessei pela
            guitarra ao assistir a performance de um guitarrista incrível em uma
            igreja. Aos 17, comecei a tocar profissionalmente em diferentes
            lugares. Aos 26, fui contratado como guitarrista em uma igreja em
            Copacabana, RJ, e desde então as oportunidades cresceram. Tornei-me
            diretor musical na banda do cantor Gilson (Casinha Branca) por
            vários anos e fiz freelancers para diversos artistas através dele.
            Em 2011, comecei a tocar em uma igreja em Nova Iguaçu, onde tive a
            oportunidade de acompanhar vários cantores gospel.
          </p>
        </div>
      </div>
    </div>
  );
}
