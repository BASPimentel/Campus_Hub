import ChatInterface from './chat-interface';

export default function PolicyAssistantPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">AI Policy Assistant</h1>
        <p className="text-muted-foreground">
          Ask any question about school policies and get an instant answer.
        </p>
      </div>
      <ChatInterface />
    </div>
  );
}
