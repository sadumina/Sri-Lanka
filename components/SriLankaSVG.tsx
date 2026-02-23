export default function SriLankaSVG({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Simplified Sri Lanka island shape */}
      <path
        d="M100 20C110 25 120 35 125 50C130 70 132 90 130 110C128 130 125 150 120 170C115 190 108 210 100 225C95 235 88 245 80 255C72 265 62 275 50 280C40 283 30 282 22 278C15 274 10 268 7 260C4 250 3 238 5 225C7 210 12 195 18 180C25 165 34 150 44 137C55 123 67 110 80 100C88 93 95 85 100 75C103 68 105 60 105 52C105 43 103 35 100 28C98 23 96 20 100 20Z"
        fill="currentColor"
        className="text-[#C9A227]"
        opacity="0.9"
      />
      
      {/* Inner glow effect */}
      <path
        d="M100 30C108 34 115 42 119 55C123 72 125 88 123 105C121 122 118 138 114 154C110 170 104 186 97 198C93 206 87 214 81 222C75 230 67 238 58 243C50 246 42 245 36 242C31 239 27 234 25 228C23 220 22 210 24 199C26 187 30 175 35 163C41 151 48 139 56 129C65 118 75 108 85 100C92 94 98 87 102 79C104 74 106 68 106 62C106 55 104 49 102 43C100 38 99 34 100 30Z"
        fill="currentColor"
        className="text-white"
        opacity="0.15"
      />

      {/* Location markers for major cities */}
      <circle cx="100" cy="80" r="3" fill="white" opacity="0.8">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="90" cy="120" r="2.5" fill="white" opacity="0.7">
        <animate
          attributeName="opacity"
          values="0.4;0.9;0.4"
          dur="2.5s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="75" cy="180" r="2.5" fill="white" opacity="0.7">
        <animate
          attributeName="opacity"
          values="0.5;1;0.5"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}
