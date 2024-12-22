import Nav from "./nav";

export default function Header() {
  return (
    <header className="shadow-background-light bg-background-main sticky top-0 left-0 z-100 flex w-full justify-center py-2 shadow-md">
      <Nav />
    </header>
  );
}
