import { cn } from "~/lib/utils";
import { T_Benefit } from "./benefits-overview";

type BenefitCardProps = {
  benefit: T_Benefit;
  className?: string;
};

export default function BenefitCard({ benefit, className }: BenefitCardProps) {
  return (
    <li
      className={cn(
        "bg-background-light h-full w-full overflow-clip rounded-md shadow-lg",
        className,
      )}
    >
      <div className="w-full overflow-hidden rounded-md">
        <img
          src={benefit.imgUrl}
          alt={benefit?.alt ?? benefit.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="text-brand text-lg font-semibold">{benefit.title}</h2>
      <p className="text-main text-base">{benefit.description}</p>
    </li>
  );
}
