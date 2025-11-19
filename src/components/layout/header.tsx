import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/layout/user-nav";
import { Notifications } from "./notifications";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Sidebar } from "./sidebar";
import Logo from "../logo";
import Link from "next/link";


const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/progress", label: "Progress" },
  { href: "/events", label: "Events" },
  { href: "/teams", label: "Teams" },
  { href: "/resources", label: "Resources" },
  { href: "/profile", label: "Profile" },
];


export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-6">
       <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col w-64 p-0">
               <div className="h-16 flex items-center px-6 border-b">
                <Logo />
              </div>
              <nav className="grid gap-2 text-lg font-medium p-4">
                 {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
       </div>
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-full bg-muted pl-10 md:w-[300px] lg:w-[400px] border-transparent focus:border-border"
        />
      </div>
      <div className="flex items-center gap-2">
        <Notifications />
        <UserNav />
      </div>
    </header>
  );
}
