
export const CheckIcon = ({ isAvailable }: { isAvailable: boolean }) => (
    <svg 
      width="17" 
      height="13" 
      viewBox="0 0 17 13" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M15 2L6.33333 11L2 6.5" 
        stroke={isAvailable ? "#FFC000" : "#E0DAC5"} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );