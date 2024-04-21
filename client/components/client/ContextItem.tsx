"use client";
import React from "react";
import { ContextMenuItem } from "@/components/ui/context-menu";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import FileSaver from "file-saver";
import { ImageMeta } from "@/types/imageCardType";

const ContextItem = ({
  title,
  image,
  isDownload,
}: {
  title: string;
  image: ImageMeta;
  isDownload: boolean;
}) => {
  const { toast } = useToast();
  const router = useRouter();

  const onClick = async () => {
    if (isDownload) {
      FileSaver.saveAs(image.src, image.name);
    } else {
      fetch(
        "https://gu5nisnr0g.execute-api.us-east-1.amazonaws.com/default/deleteFile",
        {
          method: "POST",
          body: JSON.stringify({
            fileName: image.name,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(() => {
          toast({
            description: "Image deletion successful",
          });
        })
        .finally(() => {
          router.refresh();
        });
    }
  };
  return <ContextMenuItem onClick={onClick}>{title}</ContextMenuItem>;
};

export default ContextItem;
