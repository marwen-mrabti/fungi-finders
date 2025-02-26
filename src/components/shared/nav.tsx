import { Link } from "@tanstack/react-router";
import { fungiFindersLogoImg } from "~/assets";
import MobileNav from "./mobile-nav";

export type T_NavItem = {
  name: string;
  link: string;
};

const NavList: T_NavItem[] = [
  {
    name: "Discover",
    link: "/",
  },
  {
    name: "Mushroom Guide",
    link: "/guide",
  },
  {
    name: "FAQ",
    link: "/guide#faq",
  },
];

export default function Nav() {
  return (
    <nav className="flex w-full max-w-7xl items-center justify-between px-4 py-2">
      <Link
        to="/"
        preload="intent"
        className="[&.active]:text-brand-light w-32 shrink-0 [&.active]:font-bold"
      >
        <img
          src={fungiFindersLogoImg}
          alt="fungi finders logo"
          className="h-ful w-full object-cover"
        />
      </Link>

      <ul className="hidden gap-4 lg:flex">
        {NavList.map((item) => (
          <li
            key={item.name}
            className="hover:text-high-contrast cursor-pointer"
          >
            <Link
              to={item.link}
              preload="intent"
              className="font-semibold"
              activeProps={{
                className: "text-brand-light font-bold",
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <MobileNav navList={NavList} />
    </nav>
  );
}
