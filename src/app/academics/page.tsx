
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Book, Calendar, ClipboardList } from 'lucide-react';

const academicFeatures = [
    {
        title: "Subject Management",
        description: "Define and manage academic subjects.",
        icon: Book,
        href: "/academics/subjects",
        cta: "Manage Subjects"
    },
    {
        title: "Academic Year Setup",
        description: "Configure school years, terms, and semesters.",
        icon: Calendar,
        href: "#",
        cta: "Coming Soon",
        disabled: true
    },
    {
        title: "Grade Levels & Classes",
        description: "Set up grade levels and assign classes.",
        icon: ClipboardList,
        href: "#",
        cta: "Coming Soon",
        disabled: true
    }
]

export default function AcademicsDashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Academic Management</h1>
                <p className="text-muted-foreground">Oversee your school's academic structure and curriculum.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {academicFeatures.map((feature) => (
                    <Card key={feature.title} className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-4 mb-2">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <feature.icon className="w-6 h-6 text-primary" />
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </div>
                            <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-end">
                             <Button asChild className="w-full" disabled={feature.disabled}>
                                <Link href={feature.href}>
                                    {feature.cta}
                                    {!feature.disabled && <ArrowRight className="ml-2 h-4 w-4" />}
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
