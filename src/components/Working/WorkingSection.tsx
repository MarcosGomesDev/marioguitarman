import { workings } from "./workings";

interface Props {
  id: string;
}

export function WorkingSection({ id }: Props) {
  return (
    <div
      id={id}
      className="flex flex-col min-w-full lg:mb-0 pt-40 items-center"
    >
      <p className="text-[#FF4040]  text-center md:text-justify text-4xl md:text-6xl font-semibold tracking-wide pb-20">
        Conheça um pouco do meu trabalho
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 min-w-full px-6 md:px-0">
        {workings.map((working, index) => (
          <div
            key={index}
            className="md:h-96 border-[#808080] border-2 relative rounded-lg bg-black hover:[&>img]:opacity-20 transition-all duration-300 hover:[&>div]:opacity-100 hover:[&>div]:animate-up-card hover:cursor-pointer"
          >
            <img
              src={working.image}
              alt="Mário Guitarman tocando"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="h-full w-full flex flex-col items-center justify-center gap-8 opacity-0 absolute top-0 hover:bg-black hover:bg-opacity-60">
              <nav className="w-full flex justify-center gap-4 z-20">
                <button
                  className="w-64 h-12 rounded-lg border-2 border-transparent cursor-pointer transition-all duration-300 hover:scale-110 text-white bg-red"
                  onClick={() => window.open(working.link)}
                >
                  {working.title}
                </button>
              </nav>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
