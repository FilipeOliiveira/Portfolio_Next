"use client"
import {Sheet, SheetContent, SheetTrigger} from "./ui/sheet"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"

const links=[
    {
        name: "home", 
        path: "/",
    },
    {
        name: "sobremim", 
        path: "/sobremim",
    },
    {
        name: "projetos", 
        path: "/projetos",
    },
    {
        name: "contato", 
        path: "/contato",
    },    
]

export const MobileNav = () => {
    const pathname = usePathname(); 
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="tex-32px text-accent"/>
        </SheetTrigger>
        <SheetContent side="right" className="bg-primary p-6">
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Filipe<span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>

            <nav className="flex flex-col justify-center items-center gap-8 mt-12">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname &&
                            "text-accent border-b-2 border-accent "}
                            capitalize font-medium hover:text-accent transition-all text-2xl`}
                        >
                            {link.name}
                        </Link>
                    );
                })}     
            </nav>
        </SheetContent> 
    </Sheet>
  )
}
