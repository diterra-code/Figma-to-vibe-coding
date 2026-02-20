import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import GamesSection from '@/components/GamesSection';
import MatchesTable from '@/components/MatchesTable';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A1A1A]">
      <Navigation
        balance={{ usd: '$56.5 k', eth: '25.00 ETH' }}
        activeTab="play"
      />
      <Hero />
      <GamesSection />
      <MatchesTable />
      <Footer />
    </div>
  );
}
