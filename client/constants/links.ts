import Bin from "@/components/ui/icons/bin";
import Browse from "@/components/ui/icons/browse";
import { NavItem } from "@/types/nav";

const sideNav: NavItem[] = [
  {
    name: "Browse",
    href: "/browse",
    icon: Browse,
  },
  {
    name: "Recently deleted",
    href: "/bin",
    icon: Bin,
  },
];

export { sideNav };
