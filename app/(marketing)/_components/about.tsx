import { SectionHeader } from '@/components/shared/section-header';
import { companyInfo } from '@/features/marketing/data';

export function About() {
  return (
    <section id="sobre" className="bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Sobre Nós" subtitle={companyInfo.tagline} />
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {companyInfo.description}
          </p>
        </div>
      </div>
    </section>
  );
}
