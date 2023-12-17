import { FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

interface Props {
  id: string;
}

const email = "contatosmarioguitarman@gmail.com";

export function ContactSection({ id }: Props) {
  return (
    <div
      id={id}
      className="py-32 flex flex-col justify-center items-center min-w-full"
    >
      <div className="flex flex-col items-center mb-8">
        <p className="text-[#FF4040]  text-center md:text-justify text-6xl font-semibold tracking-wide pb-10 md:pb-20">
          Networking
        </p>
        <p className="text-white text-3xl md:text-4xl text-center leading-9">
          Você pode me enviar um email ou entrar em contato comigo através das
          minhas redes.
        </p>
      </div>

      <div className="flex flex-col col-span-3 md:flex-row w-full px-8 justify-between">
        <button
          className="text-white hover:border-red hover:scale-110 hover:bg-red w-full h-24 border-2 border-dark cursor-pointer items-center justify-center flex rounded-lg text-3xl mb-10 mr-4 transition-all ease-in-out duration-300"
          onClick={() =>
            window.open("https://www.youtube.com/@marioguitarman8337")
          }
        >
          <FaYoutube className="mr-4" size={24} />
          Youtube
        </button>

        <button
          className="text-white hover:border-red hover:scale-110 hover:bg-red w-full h-24 border-2 border-dark cursor-pointer items-center justify-center flex rounded-lg text-3xl mb-10 mr-4 transition-all ease-in-out duration-300"
          onClick={() => window.open(`mailto:${email}`)}
        >
          <AiOutlineMail className="mr-4" size={24} />
          Gmail
        </button>

        <button
          className="text-white  w-full h-24 border-2 border-dark cursor-pointer items-center justify-center flex rounded-lg text-3xl mb-10 mr-4 hover:border-red hover:scale-110 hover:bg-red transition-all ease-in-out duration-300"
          onClick={() =>
            window.open("https://www.instagram.com/marioguitarman/")
          }
        >
          <FaInstagram className="mr-4" size={24} />
          Instagram
        </button>
      </div>
    </div>
  );
}
