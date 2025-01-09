import { ActiveLink } from '../active-link/ActiveLink';

const navItems: { title: string; path: string }[] = [
  {
    title: 'Inicio',
    path: '/',
  },
  {
    title: 'Tienda',
    path: '/tienda',
  },
  {
    title: 'Nosotros',
    path: '/nosotros',
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
          <span className="flex flex-1 text-center leading-7 text-3xl font-amatic font-bold text-black">
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
              className="font-amatic text-black text-xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
