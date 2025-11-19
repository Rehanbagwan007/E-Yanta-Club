"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Users,
  BarChart3,
  BookOpen,
  UserCircle,
  Settings,
} from "lucide-react";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/progress", icon: BarChart3, label: "Progress" },
  { href: "/events", icon: Calendar, label: "Events" },
  { href: "/teams", icon: Users, label: "Teams" },
  { href: "/resources", icon: BookOpen, label: "Resources" },
  { href: "/profile", icon: UserCircle, label: "Profile" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-background">
      <div className="h-16 flex items-center px-6 border-b">
        <Logo />
      </div>
      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-primary/10",
              pathname === item.href && "bg-primary/10 text-primary font-semibold"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4">
        <Link
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-primary/10"
        >
          <Settings className="h-5 w-5" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
