"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Event } from "@/types";
import { Calendar, Clock } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";

export function EventCard({ event }: { event: Event }) {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const distance = new Date(event.date).getTime() - new Date().getTime();
            if (distance < 0) {
                setCountdown('Event has passed');
                clearInterval(interval);
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            setCountdown(`${days}d ${hours}h ${minutes}m`);
        }, 1000);
        return () => clearInterval(interval);
    }, [event.date]);

  return (
    <Card className="overflow-hidden shadow-soft border-0 w-full">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image src={event.imageUrl} alt={event.title} layout="fill" objectFit="cover" data-ai-hint="robotics technology" />
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{countdown}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex gap-2 mb-2">
            {event.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-accent text-accent-foreground">{tag}</Badge>
            ))}
        </div>
        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
        <div className="flex items-center text-sm text-muted-foreground gap-2">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(event.date), 'MMMM dd, yyyy')}</span>
        </div>
        <div className="flex items-center gap-2 mt-4">
            <Avatar className="h-8 w-8">
                <AvatarImage src={event.guest.avatarUrl} />
                <AvatarFallback>{event.guest.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="text-sm font-medium">Guest Speaker</p>
                <p className="text-sm text-muted-foreground">{event.guest.name}</p>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  );
}
