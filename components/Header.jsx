import Link from "next/link";
import { Button } from "./ui/button";

// Components
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle"; // 👈 importa aqui

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-chart-2"> 
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Filipe <span className="text-accent"> .</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="contact">
            <Button>Acesse meu CV</Button> 
          </Link>
          <ThemeToggle />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
