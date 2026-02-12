import dynamic from 'next/dynamic';
import { Hero } from './_components/hero';
import { SoftwareSolutions } from './_components/software-solutions';
import { ITServices } from './_components/it-services';
import { CustomSolutions } from './_components/custom-solutions';
import { Representation } from './_components/representation';

const Partners = dynamic(() =>
  import('./_components/partners').then((mod) => mod.Partners),
);
const About = dynamic(() =>
  import('./_components/about').then((mod) => mod.About),
);
const Testimonials = dynamic(() =>
  import('./_components/testimonials').then((mod) => mod.Testimonials),
);
const Contact = dynamic(() =>
  import('./_components/contact').then((mod) => mod.Contact),
);
const Cta = dynamic(() => import('./_components/cta').then((mod) => mod.Cta));

export default function HomePage() {
  return (
    <>
      <Hero />
      <SoftwareSolutions />
      <ITServices />
      <CustomSolutions />
      <Representation />
      <Testimonials />
      <Partners />
      <About />
      <Cta />
      <Contact />
    </>
  );
}
