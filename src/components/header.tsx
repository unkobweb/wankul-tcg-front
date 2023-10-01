import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from 'lucide-react'
import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <>
      <header className="bg-background flex flex-row items-center justify-between p-4 gap-6 sticky top-0 z-10">
        <h1 className="font-bold">Wankul</h1>
        <div className="flex flex-row items-center w-[70%] max-w-[800px]">
          <Input className="mr-2" placeholder="Search..." />
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <Button variant="secondary" className="mr-2">Se connecter</Button>
          <ModeToggle />
        </div>
      </header>
      <Separator className="mb-6" />
    </>
  );
};

export default Header;