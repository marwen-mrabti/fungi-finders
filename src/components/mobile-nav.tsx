import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "../lib/utils";
import { type T_NavItem } from "./nav";

export default function MobileNav({ navList }: { navList: T_NavItem[] }) {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className="relative grid lg:hidden">
      <button
        aria-label="Open navigation menu"
        className="group relative cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Menu
          className={cn(
            "group-hover:text-background-accent-light text-high-contrast focus-visible:text-brand size-6 transition-all duration-200 ease-linear",
          )}
        />
      </button>

      <div
        className={cn(
          "bg-background-accent-main min-w-54 rounded-sm px-2 shadow-lg",
          "absolute top-0 right-0 translate-x-[-3%] translate-y-[20%]",
          "invisible h-0 transition-all transition-discrete duration-300 ease-linear",
          {
            "visible h-auto": isOpen,
          },
        )}
      >
        <ul className={cn("divide-main flex flex-col divide-y-1")}>
          {navList.map((item) => (
            <li
              key={item.name}
              className="text-high-contrast hover:text-high-contrast/80 text-md w-full cursor-pointer font-bold"
              onClick={() => setIsOpen(false)}
            >
              <Link
                to={item.link}
                className="[&.active]:text-brand-light hover:[&.active]:text-brand inline-block w-full py-4 whitespace-nowrap"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
