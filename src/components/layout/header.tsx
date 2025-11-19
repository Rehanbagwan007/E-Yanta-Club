import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/layout/user-nav";
import { Notifications } from "./notifications";

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search resources, events..."
          className="w-full rounded-full bg-secondary pl-10 md:w-[300px] lg:w-[400px]"
        />
      </div>
      <div className="flex items-center gap-2">
        <Notifications />
        <UserNav />
      </div>
    </header>
  );
}
