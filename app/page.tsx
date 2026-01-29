import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Inventory } from '@/components/Inventory';
import { About } from '@/components/About';
import { HowItWorks } from '@/components/HowItWorks';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { fetchVehicles } from '@/lib/sheets';

export const revalidate = 300; // Revalidate every 5 minutes

export default async function Home() {
  const vehicles = await fetchVehicles();

  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Inventory initialVehicles={vehicles} />
      <About />
      <HowItWorks />
      <Contact vehicles={vehicles} />
      <Footer />
    </main>
  );
}
