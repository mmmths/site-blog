import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../../components/ui/button";

type FeatureCardProps = {
  tag: string;
  title: string;
  featured?: boolean;
  image?: string;
};

export function FeatureCard({
  tag,
  title,
  featured = false,
  image
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-gray-500 p-6 md:p-12",
        featured && "col-span-full"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-4",
          featured && "grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4"
        )}
      >
        <div className="flex flex-col gap-4">
          <span className="w-fit rounded-sm bg-blue-400 px-2 py-1 text-body-tag uppercase text-blue-200">
            {tag}
          </span>

          <h2 className="text-heading-lg text-gray-100">{title}</h2>

          {featured && (
            <Link
              href="/create-store"
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-4 hidden w-fit rounded-full md:mt-auto md:flex"
              )}
            >
              Criar loja grátis
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {featured && image && (
          <div className="flex w-full flex-col items-center justify-center">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src={image}
                alt="Feature"
                width={440}
                height={330}
                className="w-full object-cover"
              />
            </div>

            <Link
              href="/create-store"
              className={cn(
                buttonVariants({ variant: "default" }),
                "mt-4 w-full gap-2 rounded-full md:hidden"
              )}
            >
              Criar loja grátis
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
