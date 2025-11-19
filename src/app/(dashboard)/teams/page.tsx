import { TeamCard } from "@/components/teams/team-card";
import { teams } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Check, X } from "lucide-react";

const joinRequests = [
    { name: "Meera Iyer", avatarUrl: "https://picsum.photos/seed/601/200/200", team: "Alpha Coders" },
    { name: "Karan Desai", avatarUrl: "https://picsum.photos/seed/602/200/200", team: "Circuit Breakers" },
];

export default function TeamsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Teams</h1>
        <Button>Create New Team</Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Our Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {teams.map((team) => (
                    <TeamCard key={team.id} team={team} />
                ))}
            </div>
        </div>
        <div>
            <h2 className="text-xl font-semibold mb-4">Join Requests</h2>
            <Card className="shadow-soft border-0">
                <CardContent className="p-4 space-y-4">
                    {joinRequests.map(req => (
                        <div key={req.name} className="flex items-center justify-between">
                           <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={req.avatarUrl} />
                                <AvatarFallback>{req.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{req.name}</p>
                                <p className="text-sm text-muted-foreground">wants to join {req.team}</p>
                            </div>
                           </div>
                           <div className="flex gap-2">
                                <Button size="icon" variant="outline" className="h-8 w-8 bg-green-100 text-green-700 border-green-200 hover:bg-green-200"><Check className="h-4 w-4"/></Button>
                                <Button size="icon" variant="outline" className="h-8 w-8 bg-red-100 text-red-700 border-red-200 hover:bg-red-200"><X className="h-4 w-4"/></Button>
                           </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
