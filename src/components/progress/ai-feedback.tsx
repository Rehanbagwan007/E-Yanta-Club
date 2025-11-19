"use client";
import { useState } from "react";
import { getAIProgressFeedback } from "@/ai/flows/ai-progress-feedback";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Bot, Lightbulb, Sparkles, Loader2 } from "lucide-react";
import type { ProgressEntry } from "@/types";

type AIFeedback = NonNullable<ProgressEntry['aiFeedback']>;

export function AiFeedback({ entry }: { entry: ProgressEntry }) {
  const [feedback, setFeedback] = useState<AIFeedback | undefined>(entry.aiFeedback);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetFeedback = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would fetch this from your backend, which calls the Genkit flow.
      // For this UI-only example, we'll use a timeout and mock data.
      const result = await new Promise<AIFeedback>((resolve) => {
        setTimeout(() => {
          resolve({
            feedback: "Excellent progress on your project! Your description is clear and shows a solid understanding of the task.",
            improvementTips: "Consider breaking down the next steps into smaller, more manageable tasks. This can help in tracking progress more effectively.",
            motivationalMessage: "Keep up the great work! Every step forward is a step towards achieving your goal.",
          });
        }, 1500);
      });
      setFeedback(result);
    } catch (error) {
      console.error("Failed to get AI feedback", error);
      // Handle error display
    } finally {
      setIsLoading(false);
    }
  };

  if (feedback) {
    return (
        <Accordion type="single" collapsible className="w-full mt-4">
        <AccordionItem value="item-1" className="border-t border-b-0">
          <AccordionTrigger className="text-primary hover:no-underline justify-start gap-2">
            <Sparkles className="h-5 w-5" /> View AI Feedback
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="flex gap-3">
              <Bot className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Feedback</h4>
                <p className="text-muted-foreground">{feedback.feedback}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Lightbulb className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Improvement Tips</h4>
                <p className="text-muted-foreground">{feedback.improvementTips}</p>
              </div>
            </div>
             <div className="flex gap-3">
              <Sparkles className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Motivational Message</h4>
                <p className="text-muted-foreground">{feedback.motivationalMessage}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div className="mt-4 border-t pt-4">
      <Button onClick={handleGetFeedback} disabled={isLoading} variant="outline" size="sm">
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Get AI Feedback
          </>
        )}
      </Button>
    </div>
  );
}
