import { Menu } from "lucide-react";
import { fungiFindersLogoImg } from "~/assets";

export default function Nav() {
  return (
    <nav className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
      <div className="w-32">
        <img
          src={fungiFindersLogoImg}
          alt="fungi finders logo"
          className="h-ful w-full object-cover"
        />
      </div>
      <ul className="hidden gap-4 lg:flex">
        <li className="hover:text-high-contrast cursor-pointer">Discover</li>
        <li className="hover:text-high-contrast cursor-pointer">
          Mushroom Guide
        </li>
        <li className="hover:text-high-contrast cursor-pointer">FAQ</li>
      </ul>
      <button className="group grid cursor-pointer place-items-center lg:hidden">
        <Menu className="group-hover:text-brand-light focus-visible:text-brand transition-all duration-200 ease-linear" />
      </button>
    </nav>
  );
}
