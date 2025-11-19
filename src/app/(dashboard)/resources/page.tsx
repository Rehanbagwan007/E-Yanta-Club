import { ResourceCard } from "@/components/resources/resource-card";
import { resources } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { AiRecommendations } from "@/components/resources/ai-recommendations";

export default function ResourcesPage() {
    const allCategories = [...new Set(resources.map(r => r.category))];

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                <h1 className="text-3xl font-bold">Resource Center</h1>
                <div className="relative md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search resources..." className="pl-10" />
                </div>
            </div>

            <AiRecommendations />

            <div className="mt-12">
                <h2 className="text-2xl font-semibold mb-4">All Resources</h2>
                <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-6 bg-transparent p-0">
                    <TabsTrigger value="all" className="rounded-full">All</TabsTrigger>
                    {allCategories.map(cat => (
                        <TabsTrigger key={cat} value={cat} className="rounded-full">{cat}</TabsTrigger>
                    ))}
                    </TabsList>

                    <TabsContent value="all">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {resources.map((resource) => (
                                <ResourceCard key={resource.id} resource={resource} />
                            ))}
                        </div>
                    </TabsContent>
                    {allCategories.map(cat => (
                        <TabsContent key={cat} value={cat}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {resources.filter(r => r.category === cat).map((resource) => (
                                    <ResourceCard key={resource.id} resource={resource} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </div>
    );
}
