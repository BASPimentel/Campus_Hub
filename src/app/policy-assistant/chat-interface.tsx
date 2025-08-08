'use client';

import { useActionState, useRef, useEffect } from 'react';
import { useFormStatus } from 'react-dom';
import { Send, User, Bot, Loader2 } from 'lucide-react';
import { askQuestion, type AIState } from './actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="icon" disabled={pending}>
      {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
    </Button>
  );
}

export default function ChatInterface() {
  const [state, formAction] = useActionState<AIState, FormData>(askQuestion, { messages: [] });
  const formRef = useRef<HTMLFormElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [state.messages]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formAction(formData);
    formRef.current?.reset();
  };

  return (
    <Card className="flex flex-col flex-1">
      <CardContent className="flex flex-col flex-1 p-0">
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-6">
            {state.messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-4 ${message.role === 'user' ? 'justify-end' : ''}`}>
                 {message.role === 'assistant' && (
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback>
                  </Avatar>
                )}
                <div className={`max-w-xl rounded-lg px-4 py-3 ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  <p>{message.content}</p>
                </div>
                 {message.role === 'user' && (
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback><User className="h-5 w-5"/></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="border-t p-4 bg-card">
          <form ref={formRef} onSubmit={handleFormSubmit} className="flex items-center gap-2">
            <Input
              name="question"
              placeholder="e.g., What is the policy on late submissions?"
              className="flex-1"
              autoComplete="off"
            />
            <SubmitButton />
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
