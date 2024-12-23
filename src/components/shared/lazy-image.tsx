import { useState } from "react";

const shimmer = `
  relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full
  before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent
  before:via-white/60 before:to-transparent
`;

type T_LazyImage = {
  src: string;
  alt: string;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  className?: string;
};

export const LazyImage = ({
  src,
  alt,
  priority = false,
  placeholder = "blur",
  className = "",
}: T_LazyImage) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative h-full w-full overflow-clip ${className}`}>
      {isLoading && placeholder === "blur" && (
        <div className={`absolute inset-0 bg-gray-200 ${shimmer}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

export default Image;
