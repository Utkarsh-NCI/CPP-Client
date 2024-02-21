import { ImageCard, ImageMeta } from "@/components/ui/ImageCard/imagecard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { imageColl } from "./data";

export default function Page() {
  return (
    <ScrollArea>
      <ScrollBar className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300" />
      <div className="flex flex-wrap flex-row">
        {imageColl.map((image: ImageMeta) => (
          <Dialog key={image.src}>
            <DialogTrigger asChild>
              <ImageCard
                image={image}
                className="w-[250px] pb-4 pl-4"
                aspectRatio="portrait"
                width={250}
                height={330}
                date={image.date}
              />
            </DialogTrigger>
            <DialogContent>
              <DialogDescription>
                <ImageCard
                  image={image}
                  className="p-3"
                  aspectRatio="portrait"
                  date={image.date}
                  width={1920}
                  height={1080}
                />
              </DialogDescription>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </ScrollArea>
  );
}
