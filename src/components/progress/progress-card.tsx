import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { ProgressEntry } from "@/types";
import { users } from "@/lib/data";
import { format } from "date-fns";
import { AiFeedback } from "./ai-feedback";

export function ProgressCard({ entry }: { entry: ProgressEntry }) {
  const user = users.find(u => u.id === entry.userId);

  if (!user) return null;
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  return (
    <Card className="shadow-soft border-0 w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">{user.name}</CardTitle>
            <CardDescription>{format(new Date(entry.date), 'MMMM dd, yyyy')}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg mb-2">{entry.title}</h3>
        <p className="text-muted-foreground mb-4">{entry.description}</p>
        {entry.imageUrl && (
          <div className="relative h-48 w-full rounded-lg overflow-hidden">
            <Image src={entry.imageUrl} alt={entry.title} layout="fill" objectFit="cover" data-ai-hint="project work" />
          </div>
        )}
        <AiFeedback entry={entry} />
      </CardContent>
    </Card>
  );
}
