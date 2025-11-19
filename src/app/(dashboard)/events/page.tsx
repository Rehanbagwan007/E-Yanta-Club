import { EventCard } from "@/components/events/event-card";
import { events } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EventsPage() {
  const allTags = [...new Set(events.flatMap(e => e.tags))];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Events & Hackathons</h1>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6 bg-transparent p-0">
          <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
          {allTags.map(tag => (
            <TabsTrigger key={tag} value={tag} className="rounded-full">{tag}</TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </TabsContent>
        {allTags.map(tag => (
            <TabsContent key={tag} value={tag}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.filter(e => e.tags.includes(tag)).map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
