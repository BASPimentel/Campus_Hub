'use server';

/**
 * @fileOverview An AI-powered tool that answers student questions about school policies.
 *
 * - policyQA - A function that handles the policy question answering process.
 * - PolicyQAInput - The input type for the policyQA function.
 * - PolicyQAOutput - The return type for the policyQA function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PolicyQAInputSchema = z.object({
  question: z.string().describe('The question about school policies.'),
});
export type PolicyQAInput = z.infer<typeof PolicyQAInputSchema>;

const PolicyQAOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about school policies.'),
});
export type PolicyQAOutput = z.infer<typeof PolicyQAOutputSchema>;

export async function policyQA(input: PolicyQAInput): Promise<PolicyQAOutput> {
  return policyQAFlow(input);
}

const prompt = ai.definePrompt({
  name: 'policyQAPrompt',
  input: {schema: PolicyQAInputSchema},
  output: {schema: PolicyQAOutputSchema},
  prompt: `You are a helpful AI assistant that answers questions about school policies.

  Question: {{{question}}}
  Answer:`, // Removed unnecessary backticks and added Answer:
});

const policyQAFlow = ai.defineFlow(
  {
    name: 'policyQAFlow',
    inputSchema: PolicyQAInputSchema,
    outputSchema: PolicyQAOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
