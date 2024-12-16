import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems: {title: string, path: string}[] = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Contact",
    path: "/contact",
  }
]

export const Navbar = async () => {
  return (
    <div className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <ActiveLink  path="/" className="flex items-center">
        <HomeIcon size={16} className="mr-2" />
        <span className="flex flex-1">Home</span>
      </ActiveLink>

      <div className="flex flex-1"></div>
      {
        navItems.map((item, index) => (
          <ActiveLink key={index} path={item.path} title={item.title} />))
      }
    </div>
  );
};
