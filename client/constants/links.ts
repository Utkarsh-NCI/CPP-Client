import { Icons } from "@/components/ui/icons";
import { NavItem } from "@/types/nav";

const sideNav: NavItem[] = [
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
