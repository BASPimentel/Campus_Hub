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
  const anId = Date.now().toString();

  const validatedFields = AskQuestionSchema.safeParse({
    question: formData.get('question'),
  });

  if (!validatedFields.success) {
    return {
      messages: [
        ...prevState.messages,
        {
          id: anId,
          role: 'assistant',
          content: 'Please enter a valid question.',
        },
      ],
    };
  }

  const { question } = validatedFields.data;

  try {
    const response = await policyQA({ question });
    return {
      messages: [
        ...prevState.messages,
        { id: anId, role: 'user', content: question },
        { id: anId + 1, role: 'assistant', content: response.answer },
      ],
    };
  } catch (error) {
    console.error(error);
    return {
      messages: [
        ...prevState.messages,
        {
          id: anId,
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ],
    };
  }
}
