//components
import Articles from '@/components/Articles';
import Cta from '@/components/Cta';
import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Articles />
      <Reviews />
      <Cta />
    </main>
  )
}
