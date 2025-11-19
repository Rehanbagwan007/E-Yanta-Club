"use client";

import { ProfileHeader } from "@/components/profile/profile-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { progressEntries, events, users } from "@/lib/data";
import { ProgressCard } from "@/components/progress/progress-card";
import { EventCard } from "@/components/events/event-card";
import { useParams } from "next/navigation";
import type { User } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DynamicProfileHeader({ user }: { user: User }) {
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


export default function UserProfilePage() {
    const params = useParams();
    const { id } = params;
    const user = users.find(u => u.id === id);

    if (!user) return <p>User not found.</p>;

  return (
    <div>
        <DynamicProfileHeader user={user}/>

        <Tabs defaultValue="about" className="w-full">
            <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="mt-6">
                <Card className="shadow-soft border-0">
                    <CardHeader>
                        <CardTitle>About {user.name.split(' ')[0]}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Joined on {format(new Date(user.joinedDate), "MMMM dd, yyyy")}.</p>
                        <p className="mt-4">This section will contain a user-editable bio and other personal information.</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="skills" className="mt-6">
                 <Card className="shadow-soft border-0">
                    <CardHeader>
                        <CardTitle>Skills</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                        {user.skills.map(skill => (
                            <Badge key={skill} variant="secondary" className="text-md py-1 px-3 bg-accent text-accent-foreground">{skill}</Badge>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="progress" className="mt-6">
                <div className="grid gap-6">
                    {progressEntries.filter(p => p.userId === user.id).slice(0, 3).map(entry => (
                        <ProgressCard key={entry.id} entry={entry} />
                    ))}
                    {progressEntries.filter(p => p.userId === user.id).length === 0 && (
                        <Card className="shadow-soft border-0">
                            <CardContent className="pt-6">
                                <p className="text-muted-foreground">This member has not submitted any progress entries yet.</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </TabsContent>
             <TabsContent value="events" className="mt-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.slice(0,3).map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </TabsContent>
        </Tabs>
    </div>
  );
}
