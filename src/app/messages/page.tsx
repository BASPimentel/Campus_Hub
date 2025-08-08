import { Search, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { messageContacts, chatHistory } from "@/lib/placeholder-data";
import { Badge } from "@/components/ui/badge";

export default function MessagesPage() {
  return (
    <div className="h-[calc(100vh-8rem)]">
        <div className="grid h-full grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-4">
          <Card className="flex flex-col">
            <CardHeader className="p-4">
              <h1 className="text-2xl font-bold">Messages</h1>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-8" />
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="flex-1 overflow-y-auto p-0">
              <div className="flex flex-col">
                {messageContacts.map((contact) => (
                  <button key={contact.id} className="flex items-center gap-3 p-4 text-left hover:bg-muted/50 transition-colors">
                    <div className="relative">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={`https://placehold.co/40x40.png?text=${contact.avatar}`} data-ai-hint="person avatar" />
                            <AvatarFallback>{contact.avatar}</AvatarFallback>
                        </Avatar>
                        {contact.online && <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-card" />}
                    </div>
                    <div className="flex-1 truncate">
                      <p className="font-semibold">{contact.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                    </div>
                    <time className="text-xs text-muted-foreground self-start">{contact.lastMessageTime}</time>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col h-full">
            <CardHeader className="flex flex-row items-center gap-4 p-4">
              <Avatar>
                <AvatarImage src={`https://placehold.co/40x40.png?text=AJ`} data-ai-hint="person avatar" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Alex Johnson</p>
                <Badge variant="outline" className="text-green-600 border-green-600">Online</Badge>
              </div>
            </CardHeader>
            <Separator />
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatHistory.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                  {msg.sender === 'other' && (
                    <Avatar className="h-8 w-8">
                       <AvatarImage src={`https://placehold.co/40x40.png?text=AJ`} data-ai-hint="person avatar" />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                  )}
                  <div className={`max-w-xs rounded-lg px-4 py-2 ${msg.sender === 'me' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                    <p className="text-sm">{msg.text}</p>
                    <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{msg.timestamp}</p>
                  </div>
                   {msg.sender === 'me' && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://placehold.co/40x40.png?text=JD`} data-ai-hint="student avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </CardContent>
            <Separator />
            <div className="p-4">
              <form className="flex items-center gap-2">
                <Input placeholder="Type a message..." className="flex-1" />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </Card>
        </div>
    </div>
  );
}
