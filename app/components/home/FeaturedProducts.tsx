import React from 'react';
import { Star, Heart, ThumbsUp } from 'lucide-react';

const featuredProducts = [
  {
    title: 'Producto Estrella',
    description: 'El producto más popular entre nuestros clientes.',
    icon: <Star className="mx-auto" />,
  },
  {
    title: 'Favorito del Público',
    description: 'Altamente recomendado por nuestros usuarios.',
    icon: <Heart className="mx-auto" />,
  },
  {
    title: 'Mejor Valorado',
    description: 'Producto con las mejores valoraciones.',
    icon: <ThumbsUp className="mx-auto" />,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-background-light py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-amatic font-bold text-black">
          Productos Destacados
        </h2>
        <p className="text-lg text-black mt-4">
          Una selección de los productos más populares o altamente recomendados
          para que los clientes los vean y compren.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <CardFeaturedProduct key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

type CardFeaturedProductProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CardFeaturedProduct = (props: CardFeaturedProductProps) => {
  const { title, description, icon } = props;
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-amatic font-bold text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};
