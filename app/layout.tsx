import "./../styles/globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import WhatsappFab from "@/components/WhatsappFab";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata = {
  title: "Dra. Marília Almeida | Endocrinologia e Saúde Hormonal",
  description: "Atendimento especializado para cuidar da sua saúde hormonal e promover qualidade de vida.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <WhatsappFab />
      </body>
    </html>
  );
}
