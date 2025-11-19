'use server';

/**
 * @fileOverview This file defines a Genkit flow for providing AI-based feedback on daily progress entries.
 *
 * - getAIProgressFeedback - A function that handles the process of generating AI feedback for a given progress entry.
 * - AIProgressFeedbackInput - The input type for the getAIProgressFeedback function.
 * - AIProgressFeedbackOutput - The return type for the getAIProgressFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIProgressFeedbackInputSchema = z.object({
  progressEntry: z.string().describe('The text of the daily progress entry.'),
  userProfile: z.string().optional().describe('Optional user profile information.'),
});
export type AIProgressFeedbackInput = z.infer<typeof AIProgressFeedbackInputSchema>;

const AIProgressFeedbackOutputSchema = z.object({
  feedback: z.string().describe('AI-generated feedback on the progress entry.'),
  improvementTips: z.string().describe('Personalized tips for improvement.'),
  motivationalMessage: z.string().describe('A motivational message to encourage the user.'),
});
export type AIProgressFeedbackOutput = z.infer<typeof AIProgressFeedbackOutputSchema>;

export async function getAIProgressFeedback(input: AIProgressFeedbackInput): Promise<AIProgressFeedbackOutput> {
  return aiProgressFeedbackFlow(input);
}

const aiProgressFeedbackPrompt = ai.definePrompt({
  name: 'aiProgressFeedbackPrompt',
  input: {schema: AIProgressFeedbackInputSchema},
  output: {schema: AIProgressFeedbackOutputSchema},
  prompt: `You are an AI assistant providing feedback on users' daily progress entries.

  Your goal is to provide constructive feedback, identify areas for improvement, offer personalized tips, and provide a motivational message.

  Consider the user's profile, if provided, to tailor the feedback.

  Progress Entry: {{{progressEntry}}}
  User Profile: {{{userProfile}}}

  Provide feedback, improvementTips, and motivationalMessage based on the progress entry.
  `,
});

const aiProgressFeedbackFlow = ai.defineFlow(
  {
    name: 'aiProgressFeedbackFlow',
    inputSchema: AIProgressFeedbackInputSchema,
    outputSchema: AIProgressFeedbackOutputSchema,
  },
  async input => {
    const {output} = await aiProgressFeedbackPrompt(input);
    return output!;
  }
);
