import { Hero } from './_components/hero';
import { Services } from './_components/services';
import { About } from './_components/about';
import { Contact } from './_components/contact';
import { Cta } from './_components/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <Cta />
    </>
  );
}
