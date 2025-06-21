import { forwardRef } from "react";
import usePublicAsset from "../../../Hooks/usePublicAsset"; // <-- importa il tuo hook

interface InlineImageProps {
  folder: string;
  name: string;
  size: "S" | "M" | "L" | "X";
  alt?: string;
  className?: string;
  type: "png" | "jpg";
}

const InlineImage = forwardRef<HTMLImageElement, InlineImageProps>(
  ({ folder, name, size, className = "", alt = "", type }, ref) => {
    const path = usePublicAsset(
      folder,
      `Name=${name}, Dimension=${size}.${type}`
    );

    if (!path) return null;

    return (
      <img
        ref={ref}
        src={path}
        alt={alt}
        className={`inline-image ${className}`}
        loading="lazy"
        draggable={false}
        aria-hidden={!alt}
      />
    );
  }
);

export default InlineImage;
