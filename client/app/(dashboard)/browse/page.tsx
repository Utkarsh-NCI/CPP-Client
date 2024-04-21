import { ImageCard } from "@/components/ui/ImageCard/imagecard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageMeta } from "@/types/imageCardType";

async function getData() {
  const res = await fetch(
    "https://egcy9u6mab.execute-api.us-east-1.amazonaws.com/default/fetchImages",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <ScrollArea>
      <ScrollBar className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300" />
      <div className="flex flex-wrap flex-row">
        {data.map((image: ImageMeta) => (
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
