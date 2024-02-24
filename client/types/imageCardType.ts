export interface ImageMeta {
  name: string;
  date: string;
  src: string;
}

export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: ImageMeta;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  date: string;
}
