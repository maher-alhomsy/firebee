import { useState } from "react";

import { Button } from "./ui/button";
import logo from "@/assets/logo.png";
import MobileMenu from "./MobileMenu";
import { HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";

const SECTIONS_NAME = ["How It Works", "Signals", "Reviews", "Blog"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="black-friday bg-cyan-900 h-10">
        <p className="text-center text-2xl font-extrabold uppercase text-white">
          Black Friday Sale - Save $100
        </p>
      </div>

      <nav className="flex justify-between items-center p-6">
        <div className="flex gap-6 items-center *:cursor-pointer">
          <div className="flex gap-6">
            <img src={logo} alt="logo" />
            <h1 className="title text-xl font-bold -ml-3">firebee</h1>
          </div>

          <ul className="gap-10 text-xl ml-4 hidden md:flex">
            {SECTIONS_NAME.map((section) => (
              <li key={section}>{section}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4 relative">
          <Button className="text-white rounded-xl">Buy Now</Button>

          <PersonIcon
            color="white"
            className="size-8 p-1 bg-[#4B93D0] rounded-2xl hidden md:block"
          />

          <HamburgerMenuIcon
            onClick={() => setIsOpen((prev) => !prev)}
            className="block md:hidden size-10 cursor-pointer"
          />

          {isOpen && <MobileMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
