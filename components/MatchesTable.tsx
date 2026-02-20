import { OpenNewWindow, Dice, Coin, RefreshCircle } from 'iconoir-react';

interface Match {
  id: string;
  dateCreated: string;
  game: 'Dice' | 'Coin Flip';
  wager: {
    amount: number;
    currency: string;
  };
  escrowUrl: string;
}

const mockMatches: Match[] = [
  {
    id: '1',
    dateCreated: '04/06/23',
    game: 'Dice',
    wager: { amount: 5, currency: 'USDC' },
    escrowUrl: '#',
  },
  {
    id: '2',
    dateCreated: '04/06/23',
    game: 'Coin Flip',
    wager: { amount: 10, currency: 'USDC' },
    escrowUrl: '#',
  },
  {
    id: '3',
    dateCreated: '04/06/23',
    game: 'Coin Flip',
    wager: { amount: 10, currency: 'USDC' },
    escrowUrl: '#',
  },
];

export default function MatchesTable() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-20">
      <h2 className="text-white text-[32px] font-semibold mb-8">Join matches instantly</h2>
      
      <div className="space-y-3">
        {/* Header */}
        <div className="grid grid-cols-[15%_20%_15%_30%_20%] gap-4 px-6 py-4">
          <div className="text-[#666666] text-sm font-medium">Date created</div>
          <div className="text-[#666666] text-sm font-medium">Game</div>
          <div className="text-[#666666] text-sm font-medium">Wager</div>
          <div className="text-[#666666] text-sm font-medium">Escrow</div>
          <div className="text-[#666666] text-sm font-medium"></div>
        </div>
        
        {/* Rows */}
        {mockMatches.map((match) => (
          <div
            key={match.id}
            className="grid grid-cols-[15%_20%_15%_30%_20%] gap-4 bg-[#2A2A2A] rounded-lg px-6 py-5 items-center hover:bg-[#323232] transition-colors"
          >
            <div className="text-[#A0A0A0] text-sm">{match.dateCreated}</div>
            
            <div className="flex items-center gap-2">
              {match.game === 'Dice' ? (
                <div className="w-5 h-5 bg-[#8B4AFF] rounded flex items-center justify-center">
                  <Dice className="w-3 h-3 text-white" />
                </div>
              ) : (
                <div className="w-5 h-5 bg-[#FF8C42] rounded-full flex items-center justify-center">
                  <Coin className="w-3 h-3 text-white" />
                </div>
              )}
              <span className="text-white text-sm">{match.game}</span>
            </div>
            
            <div className="bg-[#1A1A1A] px-3 py-1.5 rounded-md inline-flex items-center gap-2 w-fit">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">$</span>
              </div>
              <span className="text-white text-sm font-medium">
                {match.wager.amount} {match.wager.currency}
              </span>
            </div>
            
            <a
              href={match.escrowUrl}
              className="text-[#A0A0A0] text-sm hover:text-white transition-colors flex items-center gap-2"
            >
              View on explorer
              <OpenNewWindow className="w-4 h-4" />
            </a>
            
            <button className="border-2 border-[#FF8C42] text-[#FF8C42] px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#FF8C42] hover:text-white transition-all flex items-center justify-center gap-2 ml-auto">
              Play
              <RefreshCircle className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
