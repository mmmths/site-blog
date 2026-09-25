import type { Metadata } from "next";
import { LandingPage } from "@/templates/landing-page";

export const metadata: Metadata = {
  title: "Site.set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Site.set",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://site-blog-phi-lyart.vercel.app/"
  }
};

export default function HomePage() {
  return <LandingPage />;
}
