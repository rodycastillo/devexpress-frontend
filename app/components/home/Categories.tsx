import React from 'react';
import { Apple, Carrot, Eclipse } from 'lucide-react';

const categories = [
  {
    title: 'Frutas',
    description: 'Las mejores frutas frescas y de temporada.',
    icon: <Apple className="mx-auto" />,
  },
  {
    title: 'Verduras',
    description: 'Verduras frescas y saludables directamente del campo.',
    icon: <Carrot className="mx-auto" />,
  },
  {
    title: 'Cestas Especiales',
    description: 'Cestas seleccionadas con los mejores productos.',
    icon: <Eclipse className="mx-auto" />,
  },
];

const Categories = () => {
  return (
    <section className="bg-background-light py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-amatic font-bold text-black">
          Categorías de Productos
        </h2>
        <p className="text-lg text-black mt-4">
          Organiza los productos en diferentes categorías para facilitar la
          navegación.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CardCategory key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

type CardCategoryProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CardCategory = (props: CardCategoryProps) => {
  const { title, description, icon } = props;
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-amatic font-bold text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};
