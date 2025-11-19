"use client";

import {
  Bell,
  Check,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { notifications } from "@/lib/data";
import { Badge } from "../ui/badge";
import { formatDistanceToNow } from "date-fns";

export function Notifications() {
    const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
             <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 justify-center p-0">{unreadCount}</Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((notification) => (
          <DropdownMenuItem key={notification.id} className="flex items-start gap-3">
            <div className={`mt-1 h-2 w-2 rounded-full ${notification.read ? 'bg-transparent' : 'bg-primary'}`} />
            <div className="grid gap-1">
              <p className="text-sm font-medium">{notification.title}</p>
              <p className="text-sm text-muted-foreground">
                {notification.description}
              </p>
              <p className="text-xs text-muted-foreground">
                {formatDistanceToNow(new Date(notification.date), { addSuffix: true })}
              </p>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center text-sm text-primary">
            <Check className="mr-2 h-4 w-4" />
            Mark all as read
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
