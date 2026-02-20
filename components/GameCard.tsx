interface GameCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonEnabled: boolean;
  glowColor: 'purple' | 'orange';
  onCreateGame?: () => void;
}

export default function GameCard({
  title,
  description,
  icon,
  buttonText,
  buttonEnabled,
  glowColor,
  onCreateGame,
}: GameCardProps) {
  const glowClass = glowColor === 'purple' 
    ? 'shadow-[0_0_60px_rgba(139,74,255,0.3)]' 
    : 'shadow-[0_0_60px_rgba(255,107,53,0.3)]';

  return (
    <div className="bg-[#2A2A2A] rounded-2xl p-8 text-center hover:scale-[1.02] transition-transform duration-300">
      <div className={`mb-6 flex justify-center ${glowClass}`}>
        {icon}
      </div>
      
      <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
      
      <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6">
        {description}
      </p>
      
      <button
        onClick={onCreateGame}
        disabled={!buttonEnabled}
        className={`w-full py-3.5 px-8 rounded-lg font-semibold text-base transition-all ${
          buttonEnabled
            ? 'bg-[#FF8C42] text-black hover:bg-[#FF7A2E]'
            : 'bg-[#6B4423] text-[#A0A0A0] cursor-not-allowed'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
