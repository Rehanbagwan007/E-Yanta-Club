"use client";
import { ProfileHeader } from "@/components/profile/profile-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { format } from "date-fns";
import { progressEntries, events } from "@/lib/data";
import { ProgressCard } from "@/components/progress/progress-card";
import { EventCard } from "@/components/events/event-card";

export default function ProfilePage() {
    const { user } = useAuth();

    if (!user) return null;

  return (
    <div>
        <ProfileHeader />

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
                    {progressEntries.filter(p => p.userId === user.id || user.role !== 'member').slice(0, 3).map(entry => (
                        <ProgressCard key={entry.id} entry={entry} />
                    ))}
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
