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
  Shield,
} from "lucide-react";
import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/use-auth";

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/progress", icon: BarChart3, label: "Progress" },
  { href: "/events", icon: Calendar, label: "Events" },
  { href: "/teams", icon: Users, label: "Teams" },
  { href: "/resources", icon: BookOpen, label: "Resources" },
  { href: "/profile", icon: UserCircle, label: "Profile" },
];

const managementItems = [
    { href: "/members", icon: Shield, label: "Members" },
]

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const showManagement = user && ['faculty', 'president', 'vp'].includes(user.role);

  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-card">
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
        {showManagement && (
            <>
                <div className="px-3 py-2">
                    <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Management</h2>
                </div>
                 {managementItems.map((item) => (
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
            </>
        )}
      </nav>
      <div className="mt-auto p-4 border-t">
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
