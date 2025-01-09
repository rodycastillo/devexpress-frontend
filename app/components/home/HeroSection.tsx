import React from 'react';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/assets/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white relative">
        <h1 className="text-6xl font-amatic font-bold">Fruta Fresca</h1>
        <p className="mt-4 text-2xl">
          La mejor selección de frutas frescas y saludables
        </p>
        <button className="mt-8 px-6 py-3 bg-primary text-black font-bold rounded">
          Explorar Productos
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
