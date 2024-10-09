import { Image } from "../../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

export default function ImageCard({ image, onImageClick }: ImageCardProps) {
  return (
    <div className={css.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.image}
        onClick={() => onImageClick(image)}
      />
    </div>
  );
}
