export default function MasterSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 540 160"
      role="img"
      aria-label="Símbolo Leyla de la Peña"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 128C55 125 91 96 127 69C177 31 229 17 281 16C334 15 386 29 420 52C452 74 470 100 464 119C459 136 440 145 421 141C402 137 393 125 398 115C403 105 416 99 430 101"
        fill="none"
        stroke="#5E4636"
        strokeWidth="19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="507" cy="128" r="22" fill="#5E4636" />
    </svg>
  );
}
