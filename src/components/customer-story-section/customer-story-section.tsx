import { PT_Sans_Caption } from "next/font/google";
import { CustomerStoryCard, CustomerStory } from "./customer-story-card";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700"
});

const testimonials: CustomerStory[] = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corp",
      avatar: "/Ellipse5.svg"
    }
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: "/Ellipse5-2.svg"
    }
  }
];

export function CustomerStorySection() {
  return (
    <section className="container py-8 md:py-10">
      <div className="flex flex-col items-center gap-12">
        <h2 className={`${ptSansCaption} text-heading-xl text-gray-100`}>
          Quem utiliza, aprova!
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <CustomerStoryCard
              key={testimonial.author.name}
              customerStory={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
