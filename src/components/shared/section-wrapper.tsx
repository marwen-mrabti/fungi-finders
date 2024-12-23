import { cn } from "~/lib/utils";

type T_SectionWrapper = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function SectionWrapper({
  children,
  id,
  className,
  style,
}: T_SectionWrapper) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate h-full w-full px-4 py-10 select-none md:py-20",
        className,
      )}
      style={{ ...style }}
    >
      {children}
    </section>
  );
}
