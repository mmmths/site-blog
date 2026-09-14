import { cn } from "cn";
import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import { buttonVariants } from "@/components/ui/button";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700"
});

export function CallToAction() {
  return (
    <section className="bg-gradient-to-b from-red-500 to-blue-500 py-24">
      {" "}
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="p-4 bg-cyan-300 w-fit rounded-full">
            <Store className="text-cyan-100" />
          </div>

          <h2
            className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl`}
          >
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          <Link
            href="/create-store"
            className={cn(
              buttonVariants({ variant: "default" }),
              "w-fit rounded-full"
            )}
          >
            Criar loja grátis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
