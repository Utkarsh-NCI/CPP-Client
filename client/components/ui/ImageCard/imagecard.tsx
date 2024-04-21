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
import { ImageCardProps } from "@/types/imageCardType";
import { formatDate } from "@/utils";
import ContextItem from "@/components/client/ContextItem";

export function ImageCard({
  image,
  aspectRatio = "portrait",
  width,
  height,
  className,
  date,
  ...props
}: ImageCardProps) {
  const cloudfront: string = "https://d3o5s15a13yz2u.cloudfront.net";
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={`${cloudfront}/${image.name}`}
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
          <ContextItem title="Download" image={image} isDownload={true} />
          <ContextItem title="Delete" image={image} isDownload={false} />
          <ContextMenuItem>Info</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Share</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{image.name}</h3>
        <p className="text-xs text-muted-foreground">
          {formatDate(image.date)}
        </p>
      </div>
    </div>
  );
}
