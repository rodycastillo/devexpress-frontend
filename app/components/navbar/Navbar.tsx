import { ActiveLink } from '../active-link/ActiveLink';

const navItems: { title: string; path: string }[] = [
  {
    title: 'Inicio',
    path: '/',
  },
  {
    title: 'Productos',
    path: '/products',
  },
  {
    title: 'Beneficios',
    path: '/beneficios',
  },
  {
    title: 'Testimonios',
    path: '/testimonios',
  },
  {
    title: 'Contacto',
    path: '/contacto',
  },
];

export const Navbar = async () => {
  return (
    <div className="bg-primary">
      <div className="flex py-5 container mx-auto items-center">
        <ActiveLink path="/" className="flex items-center">
          <span className="flex flex-1 text-center leading-6 text-4xl font-amatic font-bold text-black">
            Fruta <br /> Fresca
          </span>
        </ActiveLink>

        <div className="flex flex-1"></div>
        <div className="flex items-center justify-center gap-5">
          {navItems.map((item, index) => (
            <ActiveLink
              key={index}
              path={item.path}
              title={item.title}
              className="font-amatic text-black text-2xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
