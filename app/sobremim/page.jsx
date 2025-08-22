"use client";

import { FaHtml5, FaCss3, FaJs, FaJava} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs, SiC, SiPython} from "react-icons/si";

// about data
const about ={
  title: "Sobremim",
  description:
    "Motivado por aprender e compartilhar conhecimento, trabalho como desenvolvedor backend contribuindo para projetos inovadores e colaborativos, sempre visando eficiência e qualidade no código.",
  info: [
    {
      fieldName: "Nome",
      fieldValue: "Filipe Oliveira",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+55) 98982737132",
    },
    {
      fieldName: "Experiência",
      fieldValue: " 2 Years",
    },
    {
      fieldName: "Discord",
      fieldValue: "filipaobr",
    },
    {
      fieldName: "Nacionalidade",
      fieldValue: "Brasileiro",
    },
    {
      fieldName: "Email",
      fieldValue: "filipao.br@hotmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponível",
    },
    {
      fieldName: "Linguagens",
      fieldValue: "Português, Inglês",
    },          
  ]
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Minha experiência",
  description: "Atualmente participo do programa Jovem Tech, onde atuo como capacitando em desenvolvimento backend. Essa experiência tem sido essencial para ampliar meus conhecimentos técnicos e fortalecer minha base profissional.",

  items: [
    {
      company: "Jovem Tech",
      position: "Capacitando",
      duration: "2025 - Presente",
    },
  ]
}

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Minha experiência",
  description: "Busco constantemente aprimorar meus conhecimentos em tecnologia, unindo a formação acadêmica em Ciência da Computação a programas de capacitação como o Jovem Tech e cursos práticos em plataformas globais como o FreeCodeCamp.",

  items: [
    {
      institution: "UFMA",
      degreen: "Ciência Da Computação",
      duration: "2022/2026",
    },
    {
      institution: "Jovem Tech",
      degreen: "Jovem Tech - Include",
      duration: "2025",
    },
    {
      institution: "FreeCodeCamp",
      degreen: "JavaScript Algorithms and Data Structures",
      duration: "2025",
    },
    {
      institution: "Jovem Tech",
      degreen: "Data Science: analise e visualização de dados",
      duration: "2025",
    },
  ]
}

// skills data
const skills = {
  title: "Minhas habilidades",
  description: "Possuo experiência em desenvolvimento backend e frontend, com domínio de linguagens e frameworks voltados para criação de aplicações modernas, escaláveis e bem estruturadas. Busco sempre aprender novas tecnologias e aplicá-las em projetos práticos.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "netx.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiC />,
      name: "c",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiPython />,
      name: "python",
    },                         
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Sobremim = () => {
  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{
        opacity: 1, transition: {delay: 2.4, duration:0.4, ease: "easeIn"}
      }} 
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" 
    >
                
      <div className="container mx-auto px-4">
        <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="about">Sobremim</TabsTrigger>
          </TabsList>
            {/* {content} */}
            <div className="min-h-[70vh] w-full">
              {/* {experience} */}
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-x[600px] text- mx-auto xl:max-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-chart-3">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-chart-4">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-chart-4">{item.company}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* {education} */}
              <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-x[600px] text-chart-1 mx-auto xl:max-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-chart-3">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-chart-4">{item.degreen}</h3>
                          <div className="flex items-center gap-3">
                            {/* {dot} */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-chart-4">{item.institution}</p>
                          </div>
                        </li>
                      })}
                    </ul>
                  </ScrollArea> 
                </div>
              </TabsContent>
              {/* {skills} */}
              <TabsContent value="skills" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className="max-w-[600px] mx-auto xl:mx-0">{skills.description}</p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skills, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group text-chart-4">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skills.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">
                                {skills.name}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* {about} */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold ">{about.title}</h3>
                  <p className="max-w-[600px] text- mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                    {about.info.map((item, index) => {
                      return <li key={index} className="flex items-center  xl:jutify-start gap-4">
                        <span className="text- ">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </div>
              </TabsContent>                                          
            </div>
        </Tabs>
      </div>
    </motion.div>
  )

}

export default Sobremim;