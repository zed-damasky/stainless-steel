import type { Metadata } from "next";
import { Footer, Header } from "@/components/shared";

export const metadata: Metadata = {
  title: "Нержавеющая сталь и не только",
  description:
    "Сайт для продажи и покупки изделий из нержавеющей стали, стали, железа, иных металлов",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Header />
      {children}
      {modal}
      <Footer />
    </main>
  );
}
