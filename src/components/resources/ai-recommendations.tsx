"use client";

import { useState, useEffect } from "react";
import { getAILearningRecommendations } from "@/ai/flows/ai-learning-recommendations";
import { useAuth } from "@/hooks/use-auth";
import { resources as resourceBank, events as eventList } from "@/lib/data";
import { ResourceCard } from "./resource-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import type { Resource } from "@/types";

export function AiRecommendations() {
  const { user } = useAuth();
  const [recommendedResources, setRecommendedResources] = useState<Resource[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!user) return;

      setIsLoading(true);
      try {
        // Mocking the AI call for UI-only purposes
        const input = {
          userProfile: {
            skills: user.skills,
            interests: ["Robotics", "AI"], // Mock interests
          },
          resourceBank: resourceBank.map(r => r.title),
          eventList: eventList.map(e => e.title),
        };
        // This would be a call to the backend which invokes the genkit flow
        // const result = await getAILearningRecommendations(input);
        
        // Mocked result
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = {
            recommendedResources: ["Official Python Tutorial", "Intro to ROS"],
            personalizedEventSuggestions: ["Robotics & Automation Workshop"]
        };

        const filteredResources = resourceBank.filter(r => result.recommendedResources.includes(r.title));
        setRecommendedResources(filteredResources);
      } catch (error) {
        console.error("Failed to get AI recommendations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  }, [user]);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">
        <span className="text-gradient">AI</span> Recommendations For You
      </h2>
      
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-60 w-full" />)}
        </div>
      ) : (
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {recommendedResources.map((resource) => (
              <CarouselItem key={resource.id} className="md:basis-1/2 lg:basis-1/4">
                <ResourceCard resource={resource} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12"/>
          <CarouselNext className="mr-12"/>
        </Carousel>
      )}
    </div>
  );
}
