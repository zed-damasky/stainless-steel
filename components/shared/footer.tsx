import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("border-t bg-muted/50 mt-auto", className)}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="font-semibold">Stainless Steel</span>
            <nav className="hidden md:flex gap-4 text-sm text-muted-foreground">
              {/* 
              <a
                href="/about"
                className="hover:text-foreground transition-colors"
              >
                О нас
              </a>
              <a
                href="/delivery"
                className="hover:text-foreground transition-colors"
              >
                Доставка
              </a>
              <a
                href="/contacts"
                className="hover:text-foreground transition-colors"
              >
                Контакты
              </a>
              */}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              © {new Date().getFullYear()}
            </p>

            <a
              href={process.env.GITHUB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Zed Damasky
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
