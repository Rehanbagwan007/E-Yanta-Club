import { users } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MemberManagement() {
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('');
    }

  return (
    <Card className="shadow-soft border-0">
      <CardHeader>
        <CardTitle>All Members</CardTitle>
        <CardDescription>
          Inspect member profiles and their activities.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <Link href={`/profile/${user.id}`} key={user.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors group">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant="secondary" className="capitalize">{user.role}</Badge>
                <ArrowRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
