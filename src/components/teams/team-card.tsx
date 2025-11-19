import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import type { Team } from "@/types";

export function TeamCard({ team }: { team: Team }) {
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('');
    }

  return (
    <Card className="overflow-hidden shadow-soft border-0 flex flex-col">
      <CardHeader className="p-0 relative h-32">
        <Image src={team.bgImageUrl} alt={team.name} layout="fill" objectFit="cover" data-ai-hint="abstract gradient" />
        <div className="absolute inset-0 bg-black/30" />
      </CardHeader>
      <CardContent className="p-6 flex-1">
        <CardTitle className="text-xl mb-2">{team.name}</CardTitle>
        <CardDescription>{team.description}</CardDescription>
        <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">Team Progress</p>
            <Progress value={team.progress} className="h-2" />
        </div>
        <div className="mt-4">
            <p className="text-sm font-medium text-muted-foreground mb-3">Members</p>
            <div className="flex -space-x-2">
                {team.members.map(member => (
                    <Avatar key={member.id} className="border-2 border-card">
                        <AvatarImage src={member.avatarUrl} />
                        <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                    </Avatar>
                ))}
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="secondary" className="w-full">View Team</Button>
      </CardFooter>
    </Card>
  );
}
