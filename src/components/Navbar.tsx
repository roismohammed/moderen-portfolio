"use client";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Suspense, useState, useEffect } from "react";
import Link from "next/link";
import { GitStarButton } from "./eldoraui/gitstarbutton";
import Image from "next/image";
import logo from '../../public/img/rd.png'
const TopMenu = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/projects" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Contact", href: "#faq" },
];

export default function Header01() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex justify-center transition-all duration-200 ease-in-out ${sticky
          ? 'px-2 lg:px-14 pt-2 lg:pt-5 rounded-lg '
          : 'pt-0 border-0 rounded-none'
        }`}
    >
      <div className={`min-w-full border  w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-4 px-4 lg:px-20 ${sticky ? 'rounded-lg' : ''}`}>
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-1">
              {/* < size={32} strokeWidth={2.7} className="text-primary" /> */}
              <Image src={logo} alt="RoisDev" width={32} height={32}/>
              <span className="text-xl font-bold">RoisDev</span>
            </Link>
          </div>

          <div className="items-center flex gap-6 mx-auto">
            <div className="flex items-center">
              {TopMenu.map((menu, idx) => (
                <Link
                  key={idx}
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    navigationMenuTriggerStyle,
                    "hover:text-primary"
                  )}
                  href={menu.href}
                >
                  {menu.name}
                </Link>
              ))}
            </div>

          </div>

          <div className="flex gap-2">
            <Suspense>
              <ThemeToggle />
            </Suspense>
            <GitStarButton/>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-1">
              <Rocket size={32} strokeWidth={2.7} className="text-primary" />
              <span className="text-xl font-bold">RoisDev</span>
            </Link>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"outline"} size={"icon"}>
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <Link href="/" className="flex items-center gap-1">
                         <Image src={logo} alt="RoisDev" width={32} height={32}/>
                        <span className="text-xl font-bold">Roisdev</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-4 flex flex-col gap-0 px-4">
                    {TopMenu.map((menu, idx) => (
                      <Link
                        key={idx}
                        href={menu.href}
                        className="font-semibold text-lg py-2 hover:text-primary"
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="mt-2 flex flex-col gap-2 px-4">
                      <Link
                        href="/login"
                        className={buttonVariants({ variant: "default" })}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}