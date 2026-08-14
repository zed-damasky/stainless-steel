import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const roboto = Roboto({
  subsets: ["cyrillic"],
  variable: "--font-roboto",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={cn("h-full", "antialiased", roboto.className)}>
      <body>
          {children}
      </body>
    </html>
  );
}
