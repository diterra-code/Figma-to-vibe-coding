import GameCard from './GameCard';
import { DiceIcon, CoinIcon, SlotsIcon } from './GameIcons';

export default function GamesSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-20">
      <div className="grid grid-cols-3 gap-6">
        <GameCard
          title="Dice"
          description="Roll the dice, the player with the highest number wins."
          icon={<DiceIcon />}
          buttonText="Create Game"
          buttonEnabled={true}
          glowColor="purple"
        />
        
        <GameCard
          title="Coin Flip"
          description="Flip the coin, the player that receives their side wins."
          icon={<CoinIcon />}
          buttonText="Create Game"
          buttonEnabled={true}
          glowColor="orange"
        />
        
        <GameCard
          title="Slots"
          description="Insert token and win the pot."
          icon={<SlotsIcon />}
          buttonText="Coming soon"
          buttonEnabled={false}
          glowColor="orange"
        />
      </div>
    </section>
  );
}
