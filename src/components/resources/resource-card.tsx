import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Resource } from "@/types";
import { FileText, Video } from "lucide-react";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="overflow-hidden shadow-soft border-0 group">
      <div className="relative h-40 w-full">
        <Image src={resource.imageUrl} alt={resource.title} layout="fill" objectFit="cover" data-ai-hint="learning material" />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
        <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
            {resource.type === 'pdf' ? <FileText className="w-4 h-4 mr-1"/> : <Video className="w-4 h-4 mr-1"/>}
            {resource.type}
        </Badge>
      </div>
      <CardContent className="p-4">
        <Badge variant="secondary" className="mb-2">{resource.category}</Badge>
        <h3 className="font-semibold text-md group-hover:text-primary transition-colors">{resource.title}</h3>
      </CardContent>
    </Card>
  );
}
