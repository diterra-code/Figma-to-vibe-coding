export function DiceIcon() {
  return (
    <div className="w-24 h-24 relative">
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform rotate-12"
      >
        <rect
          x="12"
          y="12"
          width="72"
          height="72"
          rx="12"
          fill="#8B4AFF"
          stroke="#FFFFFF"
          strokeWidth="2"
        />
        <circle cx="36" cy="36" r="4" fill="white" />
        <circle cx="60" cy="36" r="4" fill="white" />
        <circle cx="36" cy="60" r="4" fill="white" />
        <circle cx="60" cy="60" r="4" fill="white" />
        <circle cx="48" cy="48" r="4" fill="white" />
      </svg>
    </div>
  );
}

export function CoinIcon() {
  return (
    <div className="w-24 h-24 relative">
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="48" cy="48" r="32" fill="#FF8C42" stroke="#FFFFFF" strokeWidth="3" />
        <text
          x="48"
          y="58"
          fontSize="32"
          fill="white"
          fontWeight="bold"
          textAnchor="middle"
          fontFamily="League Spartan, sans-serif"
        >
          $
        </text>
      </svg>
    </div>
  );
}

export function SlotsIcon() {
  return (
    <div className="w-24 h-24 relative">
      <svg
        width="96"
        height="96"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="16" y="12" width="64" height="72" rx="8" fill="#2A2A2A" stroke="#FF8C42" strokeWidth="2" />
        <rect x="24" y="28" width="16" height="20" rx="4" fill="#8B4AFF" />
        <rect x="44" y="28" width="16" height="20" rx="4" fill="#8B4AFF" />
        <rect x="64" y="28" width="16" height="20" rx="4" fill="#8B4AFF" />
        <path d="M76 68 L88 68 L88 76 L76 76 Z" fill="#FF8C42" />
      </svg>
    </div>
  );
}
