import { FeatureCard } from "./feature-card";

export function FeatureSection() {
  return (
    <section className="container grid gap-6 bg-gray-700 pb-8 pt-8 md:grid-cols-2 md:py-10">
      <FeatureCard
        tag="Simples"
        title="Crie um catálogo de produtos online em poucos minutos"
      />

      <FeatureCard
        tag="Prático"
        title="Venda para seu público através de uma plataforma única"
      />

      <FeatureCard
        tag="Personalizável"
        title="Tenha uma loja online personalizada com a cara da sua marca"
        image="/image.svg"
        featured
      />
    </section>
  );
}
