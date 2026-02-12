import { SectionHeader } from '@/components/shared/section-header';
import { services } from '@/features/marketing/data';
import { Workflow, PenTool, FileText, Monitor, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  workflow: <Workflow className="h-8 w-8" />,
  'pen-tool': <PenTool className="h-8 w-8" />,
  'file-text': <FileText className="h-8 w-8" />,
  monitor: <Monitor className="h-8 w-8" />,
  headphones: <Headphones className="h-8 w-8" />,
};

export function Services() {
  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Nossos Serviços"
          subtitle="Soluções completas para atender às necessidades da sua empresa"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                {iconMap[service.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
