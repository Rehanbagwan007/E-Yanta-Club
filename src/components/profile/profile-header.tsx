"use client";

import { useAuth } from "@/hooks/use-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function ProfileHeader() {
  const { user } = useAuth();
  
  if (!user) return null;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-soft mb-8">
        <div className="h-32 bg-primary-gradient" />
        <div className="bg-card px-6 pb-6 -mt-16">
            <div className="flex items-end gap-4">
                 <Avatar className="h-32 w-32 border-4 border-card ring-4 ring-background">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback className="text-4xl">{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div>
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">{user.email}</p>
                    <Badge className="mt-2 capitalize" variant="outline">{user.role} Member</Badge>
                </div>
            </div>
        </div>
    </div>
  );
}
