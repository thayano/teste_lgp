import { Hero } from './_components/hero';
import { SoftwareSolutions } from './_components/software-solutions';
import { ITServices } from './_components/it-services';
import { CustomSolutions } from './_components/custom-solutions';
import { Representation } from './_components/representation';
import { Partners } from './_components/partners';
import { About } from './_components/about';
import { Testimonials } from './_components/testimonials';
import { Contact } from './_components/contact';
import { Cta } from './_components/cta';

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
