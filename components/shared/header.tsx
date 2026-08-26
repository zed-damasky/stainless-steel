"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { Button } from "../ui";
import { CartButton, Container, SearchInput } from ".";
import { UserRound } from "lucide-react";
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
          <SearchInput />
        </div>

        {/* right side */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="flex items-center gap-1"
            onClick={() =>
              alert("Приложение в разработке, войти пока не получится :(")
            }
          >
            <UserRound size={16} />
            Войти
          </Button>

          <CartButton />
        </div>
      </Container>
    </header>
  );
};
