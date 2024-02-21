"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { sideNav } from "@/constants/links";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {sideNav.map((link) => {
        return (
          <Link href={link.href} key={link.href}>
            <Button
              variant={pathname === link.href ? "secondary" : "ghost"}
              className="w-full justify-start"
            >
              {<link.icon></link.icon>}
              {link.name}
            </Button>
          </Link>
        );
      })}
    </>
  );
}
