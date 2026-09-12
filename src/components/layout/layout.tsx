import { Inter } from "next/font/google";
import { Footer } from "../footer";
import { Header } from "../header";

type LayoutProps = {
  children: React.ReactNode;
};

const fontInter = Inter({ subsets: ["latin"] });

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`${fontInter} relative flex min-h-screen flex-col bg-gray-700`}
    >
      <Header />
      <main className="flex-1 flex flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
}
