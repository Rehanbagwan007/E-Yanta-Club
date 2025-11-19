'use server';

/**
 * @fileOverview AI-powered learning resource and event recommendation flow.
 *
 * This file defines a Genkit flow that leverages AI to provide personalized
 * learning resource recommendations and event suggestions to users based on
 * their skills and interests.
 *
 * @module src/ai/flows/ai-learning-recommendations
 *
 * @interface AILearningRecommendationsInput - The input type for the flow.
 * @interface AILearningRecommendationsOutput - The output type for the flow.
 * @function getAILearningRecommendations - The exported function to trigger the flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AILearningRecommendationsInputSchema = z.object({
  userProfile: z
    .object({
      skills: z.array(z.string()).describe('List of user skills.'),
      interests: z.array(z.string()).describe('List of user interests.'),
      pastEvents: z.array(z.string()).optional().describe('List of past events attended by the user.'),
    })
    .describe('User profile containing skills and interests.'),
  resourceBank: z
    .array(z.string())
    .describe('List of available learning resources (e.g., PDF titles, video links).'),
  eventList: z.array(z.string()).describe('List of upcoming events.'),
});

export type AILearningRecommendationsInput = z.infer<typeof AILearningRecommendationsInputSchema>;

const AILearningRecommendationsOutputSchema = z.object({
  recommendedResources: z
    .array(z.string())
    .describe('List of learning resources recommended for the user.'),
  personalizedEventSuggestions: z
    .array(z.string())
    .describe('List of events suggested for the user.'),
});

export type AILearningRecommendationsOutput = z.infer<typeof AILearningRecommendationsOutputSchema>;

export async function getAILearningRecommendations(
  input: AILearningRecommendationsInput
): Promise<AILearningRecommendationsOutput> {
  return aiLearningRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiLearningRecommendationsPrompt',
  input: {schema: AILearningRecommendationsInputSchema},
  output: {schema: AILearningRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized learning resource and event recommendations to users.

  Based on the user's profile (skills, interests, and past events), recommend relevant learning resources from the resource bank and suggest upcoming events that align with their profile.

  User Profile:
  Skills: {{userProfile.skills}}
  Interests: {{userProfile.interests}}
  Past Events: {{userProfile.pastEvents}}

  Resource Bank: {{resourceBank}}
  Event List: {{eventList}}

  Recommended Resources:
  Personalized Event Suggestions: `,
});

const aiLearningRecommendationsFlow = ai.defineFlow(
  {
    name: 'aiLearningRecommendationsFlow',
    inputSchema: AILearningRecommendationsInputSchema,
    outputSchema: AILearningRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
