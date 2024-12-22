import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";
import { type T_NavItem } from "./nav";

export default function MobileNav({ navList }: { navList: T_NavItem[] }) {
  const navRef = useRef<HTMLDivElement>(null);
  const navListRef = useRef<HTMLDivElement>(null);

  const closePopover = () => {
    if (navListRef.current) {
      navListRef.current.setAttribute("popover-open", "false");
    }
  };

  useEffect(() => {
    const handleCloseMenu = (event: Event) => {
      event.stopPropagation();
      if (
        navRef.current &&
        event.target instanceof HTMLElement &&
        !navRef.current.contains(event.target)
      ) {
        closePopover();
      }
    };

    document.addEventListener("click", handleCloseMenu);
    document.addEventListener("touchend", handleCloseMenu);

    return () => {
      document.removeEventListener("click", handleCloseMenu);
      document.removeEventListener("touchend", handleCloseMenu);
    };
  }, []);

  return (
    <div
      ref={navRef}
      className="relative grid grid-cols-1 place-items-center lg:hidden"
    >
      <button
        aria-label="Open navigation menu"
        className="group relative cursor-pointer"
        popoverTarget="mobile-nav-list"
        style={{ anchorName: "--mobile-nav-list" } as React.CSSProperties}
      >
        <Menu
          className={cn(
            "group-hover:text-background-accent-light text-high-contrast focus-visible:text-brand size-6 transition-all duration-200 ease-linear",
          )}
        />
      </button>

      <div
        ref={navListRef}
        popover="auto"
        id="mobile-nav-list"
        className={cn(
          "bg-background-accent-light absolute mr-2 min-w-54 overflow-clip rounded-sm px-2 shadow-lg",
          "h-0 opacity-0 open:h-fit open:opacity-100 starting:open:h-0 starting:open:opacity-0",
          "transition-all transition-discrete duration-500",
          "[&:popover-open]:bg-background-accent-main",
        )}
        style={
          {
            positionAnchor: "--mobile-nav-list",
            positionArea: "bottom left", // ref: https://css-tricks.com/yet-another-anchor-positioning-quirk
          } as React.CSSProperties
        }
      >
        <ul className={cn("divide-main flex flex-col divide-y-1")}>
          {navList.map((item) => (
            <li
              key={item.name}
              className="text-high-contrast hover:text-high-contrast/80 text-md w-full cursor-pointer font-bold"
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
