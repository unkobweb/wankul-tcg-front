import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from 'lucide-react'
import { Separator } from "./ui/separator";
import {
  Link,
} from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-background flex flex-row items-center justify-between p-4 gap-6 sticky top-0 z-10">
        <img src="/Wankul_Logo_Blanc.png" className="h-[30px] hidden dark:block" />
        <img src="/Wankul_Logo_Noir.png" className="h-[30px] dark:hidden" />
        <div className="flex flex-row items-center w-[70%] max-w-[800px]">
          <Input className="mr-2" placeholder="Search..." />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <Link to="/login">
            <Button variant="secondary" className="mr-2">Se connecter</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline" className="mr-2">S'inscrire</Button>
          </Link>
          <ModeToggle />
        </div>
      </header>
      <Separator />
    </>
  );
};

export default Header;