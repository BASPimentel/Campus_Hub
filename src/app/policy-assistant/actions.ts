
'use server';

import { z } from 'zod';
import { policyQA, PolicyQAInput } from '@/ai/flows/policy-qa';

export interface UIState {
  id: string;
  display: React.ReactNode;
}

export interface AIState {
  messages: {
    id: string;
    role: 'user' | 'assistant';
    content: string;
  }[];
}

const AskQuestionSchema = z.object({
  question: z.string(),
});

export async function askQuestion(
  prevState: AIState,
  formData: FormData,
): Promise<AIState> {
  const validatedFields = AskQuestionSchema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      messages: [
        ...prevState.messages,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: 'Please enter a valid question.',
        },
      ],
    };
  }

  const { question } = validatedFields.data;

  const userMessage = {
    id: Date.now().toString(),
    role: 'user' as const,
    content: question,
  };

  try {
    const response = await policyQA({ question });
    const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: response.answer,
    };
    return {
      messages: [
        ...prevState.messages,
        userMessage,
        assistantMessage,
      ],
    };
  } catch (error) {
    console.error(error);
    const errorMessage = {
        id: Date.now().toString(),
        role: 'assistant' as const,
        content: 'Sorry, I encountered an error. Please try again.',
    };
    return {
      messages: [
        ...prevState.messages,
        userMessage,
        errorMessage,
      ],
    };
  }
}
