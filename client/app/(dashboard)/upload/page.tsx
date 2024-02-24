"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="flex flex-1 h-full justify-center items-center">
      <div
        className="border-4 border-dashed w-3/4 justify-center flex flex-col items-center h-2/3 space-y-1"
        onDrop={(e) => {
          e.preventDefault();
          console.log("drop");
        }}
      >
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
        <Input type="file" className="max-w-md" />
      </div>
    </div>
  );
}
