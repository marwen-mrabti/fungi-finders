import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { fungiFindersLogoImg } from "~/assets";

export default function Nav() {
  return (
    <nav className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
      <Link
        to="/"
        className="[&.active]:text-brand-light w-32 [&.active]:font-bold"
      >
        <img
          src={fungiFindersLogoImg}
          alt="fungi finders logo"
          className="h-ful w-full object-cover"
        />
      </Link>

      <ul className="hidden gap-4 lg:flex">
        <li className="hover:text-high-contrast cursor-pointer">
          <Link
            to="/"
            className="[&.active]:text-brand-light [&.active]:font-bold"
          >
            Discover
          </Link>
        </li>
        <li className="hover:text-high-contrast cursor-pointer">
          <Link
            to="/mushroom-guide"
            className="[&.active]:text-brand-light [&.active]:font-bold"
          >
            Mushroom Guide
          </Link>
        </li>
        <li className="hover:text-high-contrast cursor-pointer">
          <Link
            to="/faq"
            className="[&.active]:text-brand-light [&.active]:font-bold"
          >
            FAQ
          </Link>
        </li>
      </ul>
      <button className="group grid cursor-pointer place-items-center lg:hidden">
        <Menu className="group-hover:text-brand-light focus-visible:text-brand transition-all duration-200 ease-linear" />
      </button>
    </nav>
  );
}
