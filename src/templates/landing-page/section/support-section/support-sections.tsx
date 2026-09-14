import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { SupportCard } from "./support-card";

const supportItems = [
  {
    icon: PaintbrushVertical,
    title: "Personalize seu site",
    description:
      "Adicione sua logo, favicon, cores no seu catálogo e tenha tudo com a sua cara.",
    cardClassName: "bg-blue-400",
    iconClassName: "bg-blue-300"
  },
  {
    icon: Store,
    title: "Venda de qualquer loja",
    description:
      "Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.",
    cardClassName: "bg-cyan-300",
    iconClassName: "bg-cyan-200"
  },
  {
    icon: HeartHandshake,
    title: "Receba suporte amigável",
    description:
      "Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.",
    cardClassName: "bg-blue-400",
    iconClassName: "bg-blue-300"
  }
];

export function SupportSection() {
  return (
    <section className="relative pb-8 md:py-10 bg-gray-700">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />
      <div className="container flex flex-col items-center gap-12 relative">
        <h2 className=" font-sans text-balance text-center text-heading-xl text-gray-100">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {supportItems.map((item) => (
            <SupportCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
