import React from 'react';
import { Leaf, Truck, ShoppingCart, CreditCard } from 'lucide-react';

const items = [
  {
    title: 'Frescura Garantizada',
    description:
      'Nuestros productos provienen directamente del campo, asegurando frescura en cada entrega.',
    icon: <Leaf className="mx-auto" />,
  },
  {
    title: 'Entrega Rápida en 1-3 Días',
    description:
      'Garantizamos entrega en 1 a 3 días, directamente en tu puerta.',
    icon: <Truck className="mx-auto" />,
  },
  {
    title: 'Sin Intermediarios',
    description:
      'Trabajamos directamente con productores locales para ofrecerte precios bajos y calidad superior.',
    icon: <ShoppingCart className="mx-auto" />,
  },
  {
    title: 'Compra Fácil y Segura',
    description:
      'Pago seguro y sencillo para que disfrutes de tu compra sin preocupaciones.',
    icon: <CreditCard className="mx-auto" />,
  },
];

const Benefits = () => {
  return (
    <section className="bg-background-light py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-amatic font-bold text-black">
          ¿Por qué elegir Fresca Ruta?
        </h2>
        <p className="text-lg text-black mt-4">
          Ofrecemos productos frescos y naturales con la mejor experiencia de
          compra. ¡Así de fácil!
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <CardBenefit key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

type CardBenefitProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CardBenefit = (props: CardBenefitProps) => {
  const { title, description, icon } = props;
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-amatic font-bold text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};
