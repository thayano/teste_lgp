import Link from 'next/link';
import { SectionHeader } from '@/components/shared/section-header';
import { itServices } from '@/features/marketing/data';

export function ITServices() {
  return (
    <section id="servicos-ti" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Serviços de T.I."
          subtitle="Infraestrutura completa e suporte especializado para sua empresa"
        />
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {itServices.map((service) => (
            <div key={service.title} className="min-h-72">
              <div
                className={`group flex flex-col md:min-h-96 rounded-t-xl justify-between border border-border/60 bg-card p-8 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 ${service.borderColor || 'hover:border-primary/30'}`}
              >
                <div>
                  <span
                    className={`mb-4 block text-xs font-bold uppercase tracking-wider ${service.labelColor}`}
                  >
                    {service.label}
                  </span>
                  <h3
                    className={`mb-6 text-3xl max-h-48 font-bold uppercase ${service.labelColor}`}
                  >
                    {service.title}
                  </h3>
                </div>
                <div className="min-h-32">
                  <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className={`rounded-b-xl ${service.buttonColor}`}>
                <Link
                  href={`/servicos-ti/${service.slug}`}
                  className={`block w-full rounded-md py-3 text-center text-sm font-semibold text-white transition-colors ${service.buttonColor}`}
                >
                  Saiba Mais
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
