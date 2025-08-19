import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import  Social  from "@/components/Social";
import { Photo } from "@/components/Photo";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* {texte} */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Back-End Developer</span>
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6">
              Olá eu sou o <br /> <span className="text-accent">Filipe Oliveira</span>
            </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                Sou um desenvolvedor back-end apaixonado por criar soluções eficientes e escaláveis. 
                Sempre em busca de desafios que me permitam aprimorar minhas habilidades e contribuir para projetos inovadores.
              </p>
              {/* {btn and social} */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                   <Social 
                   containerStyles="flex gap-6"
                   iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
                   hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
          </div>
          {/* {image} */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
