"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <div className="flex flex-1">
      <div className="flex flex-1 flex-col justify-center space-y-6 items-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to create your account
        </p>
        <Input
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          disabled={false}
          className="max-w-xs"
        />
        <Input
          id="password"
          placeholder="Password"
          type="password"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          disabled={false}
          className="max-w-xs"
        />
        <Input
          id="confirm-password"
          placeholder="Confirm Password"
          type="password"
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          disabled={false}
          className="max-w-xs"
        />
        <Button disabled={false} onClick={onSubmit} className="min-w-80">
          {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
          Sign In
        </Button>
        <Separator className="my-4 max-w-80" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account ?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
