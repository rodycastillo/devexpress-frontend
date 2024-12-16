import { Navbar } from "../components";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar/>
      <main>
        <h1>About Us</h1>
        {children}
      </main>
    </>
  );
}
