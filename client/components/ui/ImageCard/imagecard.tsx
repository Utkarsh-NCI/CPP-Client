import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export interface ImageMeta {
  name: string;
  date: string;
  src: string;
}

interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: ImageMeta;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
  date: string;
}

export function ImageCard({
  image,
  aspectRatio = "portrait",
  width,
  height,
  className,
  date,
  ...props
}: ImageCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={image.src}
              alt={image.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
              )}
            />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-40">
          <ContextMenuItem>Open</ContextMenuItem>
          <ContextMenuSub></ContextMenuSub>
          <ContextMenuSeparator />
          <ContextMenuItem>Download</ContextMenuItem>
          <ContextMenuItem>Rename</ContextMenuItem>
          <ContextMenuItem>Info</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{image.name}</h3>
        <p className="text-xs text-muted-foreground">{image.date}</p>
      </div>
    </div>
  );
}
