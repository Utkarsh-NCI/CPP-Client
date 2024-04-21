"use client";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Icons } from "@/components/ui/icons";
import { uploadFile as _upload } from "x22229698-multi";

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    let _file: File | null = null;
    if (event.target.files) {
      _file = event.target.files[0];
    }
    setFile(_file);
    setShowAlert(false);
  };

  const uploadFile = () => {
    if (!file) {
      setShowAlert(true);
      return;
    }
    const formData = new FormData();
    formData.append("fileName", file.name);
    formData.append("file", file);
    setLoading(true);
    const size = 128 * 1024;
    _upload(
      file,
      size,
      3,
      "https://zw0s0hi573.execute-api.us-east-1.amazonaws.com/default/chunkque"
    )
      .then((res) => {
        if (res.statusCode === 200) {
          console.log(res.chunks[0].part);
          fetch(
            "https://81bhgc9w6g.execute-api.us-east-1.amazonaws.com/assembleChunks",
            {
              method: "POST",
              body: JSON.stringify({
                fileName: file.name,
                numberOfChunks: res.length,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
      })
      .catch((e) => {
        toast({
          description: "File upload failed",
        });
      })
      .finally(() => {
        setLoading(false);
        toast({
          description: "File upload successful",
        });
      });
  };
  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <div className="border-4 border-dashed w-3/4 justify-center flex flex-col items-center h-2/3 space-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
          />
        </svg>
        <p className="text-sm text-muted-foreground">Drag and Drop here</p>
        <p className="text-sm text-muted-foreground">or</p>
        <div className="flex space-x-4">
          <Input type="file" className="max-w-md " onChange={onFileChange} />
          {loading ? (
            <Button disabled>
              <Icons.Reload className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button onClick={uploadFile}>Upload</Button>
          )}
        </div>

        <div className={`flex w-3/4 ${showAlert ? "" : "invisible"}`}>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Please select a file to upload.</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
}
