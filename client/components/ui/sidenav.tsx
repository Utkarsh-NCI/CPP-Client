import { Button } from "@/components/ui/button";
import NavLinks from "./nav-links";

export default function Sidebar() {
  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
