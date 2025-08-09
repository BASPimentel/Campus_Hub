
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from '@/contexts/auth-context';
import { GraduationCap } from 'lucide-react';
import { users } from '@/lib/placeholder-data'; // We'll use this for mock auth

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = () => {
    // In a real app, you'd validate against a server
    const foundUser = users.find(u => u.email === email);

    if (foundUser && password) { // Dummy password check
      login(foundUser);
      router.replace('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-6">
         <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="bg-primary rounded-lg p-4 text-primary-foreground">
            <GraduationCap className="h-10 w-10" />
          </div>
          <div className='space-y-1'>
            <h1 className="text-3xl font-bold text-foreground">
              Campus Hub
            </h1>
            <p className="text-muted-foreground">Your central hub for school life.</p>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your credentials to access your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="text-sm text-destructive">{error}</p>}
              <Button onClick={handleLogin} className="w-full">
                Login
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
