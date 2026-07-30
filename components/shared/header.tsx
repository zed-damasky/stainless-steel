import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { Container, SearchInput } from ".";
import { ArrowRight, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

interface Props {
  classname?: string;
}

export const Header: React.FC<Props> = ({ classname }) => {
  return (
    <header className={cn("border border-b", classname)}>
      <Container className="flex items-center justify-between py-2 px-2 gap-10">
        {/* left side */}
        <Link href="/">
          <div className="flex items-center gap-4 select-none pointer-events-none ">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <div className="">
              <h1 className="text 2xl uppercase font-black">
                Нержавеющая сталь
              </h1>
              <p className="text-sm text-gray-400 leading-3">и не только</p>
            </div>
          </div>
        </Link>

        {/* center */}
        <div className="flex-1 mx-10">
         <SearchInput/>
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <UserRound size={16} />
            Войти
          </Button>
          <div className="">
            <Button className="group relative">
              <div className="relative flex items-center">
                <div className="flex items-center gap-1 transition-opacity duration-300 group-hover:opacity-0">
                  <ShoppingCart size={16} strokeWidth={2} />
                  <b>{(300).toLocaleString("ru-RU")}</b>
                </div>
                <ArrowRight
                  size={20}
                  className="absolute left-1/2 top-1/2 -translate-y-1/2 transition-all duration-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:-translate-x-1/2"
                />
              </div>
              <span className="h-full w-px bg-white/30 mx-3" />
              <div>
                <b>{(150).toLocaleString("ru-RU")} ₽</b>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
