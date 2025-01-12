import Benefits from './components/home/Benefits';
import Categories from './components/home/Categories';
import FeaturedProducts from './components/home/FeaturedProducts';
import HeroSection from './components/home/HeroSection';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <Benefits />
      <Categories />
      <FeaturedProducts />
    </div>
  );
}
