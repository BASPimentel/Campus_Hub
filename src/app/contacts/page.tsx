import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { departments } from "@/lib/placeholder-data";
import { Mail, Phone, Building } from 'lucide-react';

export default function ContactsPage() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold">Contact Directory</h1>
        <p className="text-muted-foreground">Find contact information for university departments.</p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {departments.map((dept) => (
          <AccordionItem value={`item-${dept.id}`} key={dept.id}>
            <AccordionTrigger className="text-lg">{dept.name}</AccordionTrigger>
            <AccordionContent>
                <div className="space-y-2 text-base">
                    <p className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                            {dept.email}
                        </a>
                    </p>
                    <p className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{dept.phone}</span>
                    </p>
                    <p className="flex items-center gap-3">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span>{dept.office}</span>
                    </p>
                </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
