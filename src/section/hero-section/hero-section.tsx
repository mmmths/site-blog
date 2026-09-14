import Image from "next/image";
import Link from "next/link";
import { Clock, Store, ArrowRight } from "lucide-react";

import { buttonVariants } from "../../components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="container relative mt-16 flex items-center justify-center">
      <div className="grid min-h-[20rem] grid-cols-1 items-center gap-8 md:h-[36rem] md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start">
          <h1 className="text-gray-100 text-heading-hg">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-cyan-100" />
              <span className="text-gray-200">
                Crie o seu site em menos de 5 minutos
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Store className="h-4 w-4 text-cyan-100" />
              <span className="text-gray-200">
                Acompanhe e otimize seu negócio online
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-col items-center gap-2 text-white md:items-start">
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

            <p className="text-gray-300 text-body-xs">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        <div className="relative order-first hidden h-[20rem] items-center justify-center md:order-last md:flex">
          <Image
            width={200}
            height={400}
            src="/background.svg"
            className="h-full w-auto object-contain"
            alt="Ilustração com ícones de store, tag e sacola"
          />
        </div>
      </div>
    </section>
  );
}
