import { SectionHeader } from '@/components/shared/section-header';
import { softwareSolutions } from '@/features/marketing/data';
import { Workflow, PenTool, FileText } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  workflow: <Workflow className="h-6 w-6" />,
  'pen-tool': <PenTool className="h-6 w-6" />,
  'file-text': <FileText className="h-6 w-6" />,
};

export function SoftwareSolutions() {
  return (
    <section id="solucoes-software" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Soluções de Software"
          subtitle="Otimize processos e garanta segurança jurídica com nossa suíte de softwares"
        />
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareSolutions.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/15">
                {iconMap[service.icon]}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
