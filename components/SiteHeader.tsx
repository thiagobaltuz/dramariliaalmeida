"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const isHome = usePathname() === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid 
          ? "bg-white/95 backdrop-blur border-b border-black/5 text-gray-900" 
          : "bg-white text-gray-900"  // Menu sempre branco no topo
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img 
            src="/images/logo.png" 
            alt="Marília Almeida" 
            className={`transition-all duration-300 ${
              solid ? "h-9 w-auto" : "h-9 w-auto"  // Aumentado 50% (de h-6 para h-9)
            }`}
            style={{
              transform: solid ? "scale(1)" : "scale(1.1)"  // Logo levemente maior no topo
            }}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="/atendimento" 
            className={`nav-link transition-colors ${
              solid ? "text-gray-900 hover:text-[#8a2d4a]" : "text-gray-900 hover:text-[#8a2d4a]"
            }`}
          >
            ATENDIMENTO
          </Link>
          <Link 
            href="/especialidades" 
            className={`nav-link transition-colors ${
              solid ? "text-gray-900 hover:text-[#8a2d4a]" : "text-gray-900 hover:text-[#8a2d4a]"
            }`}
          >
            ESPECIALIDADES
          </Link>
          <Link 
            href="/faq" 
            className={`nav-link transition-colors ${
              solid ? "text-gray-900 hover:text-[#8a2d4a]" : "text-gray-900 hover:text-[#8a2d4a]"
            }`}
          >
            PERGUNTAS FREQUENTES
          </Link>
          <Link 
            href="/blog" 
            className={`nav-link transition-colors ${
              solid ? "text-gray-900 hover:text-[#8a2d4a]" : "text-gray-900 hover:text-[#8a2d4a]"
            }`}
          >
            BLOG
          </Link>
          <Link 
            href="/contato" 
            className={`ml-3 btn transition-colors ${
              solid 
                ? "bg-[#8a2d4a] hover:bg-[#7a2540] text-white" 
                : "bg-[#8a2d4a] hover:bg-[#7a2540] text-white"
            }`}
          >
            Agende agora
          </Link>
        </nav>
      </div>
    </header>
  );
}