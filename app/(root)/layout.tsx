import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Нержавеющая сталь и не только",
  description:
    "Сайт для продажи и покупки изделий из нержавеющей стали, стали, железа, иных металлов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
    </main>
  );
}
