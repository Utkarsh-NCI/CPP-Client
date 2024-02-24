import { Icons } from "@/components/ui/icons";
import { NavItem } from "@/types/nav";

const sideNav: NavItem[] = [
  {
    name: "Recents",
    href: "/recents",
    icon: Icons.Upload,
  },
  {
    name: "Upload",
    href: "/upload",
    icon: Icons.Upload,
  },
  {
    name: "Browse",
    href: "/browse",
    icon: Icons.browse,
  },
  {
    name: "Recently deleted",
    href: "/bin",
    icon: Icons.bin,
  },
];

export { sideNav };
