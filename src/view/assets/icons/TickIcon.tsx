export const TickIcon = ({ className = "icon-stroke" }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        strokeWidth="4"
        strokeLinecap="round"
        className={className}
      >
        <line x1="2" y1="12" x2="6" y2="18" />
        <line x1="6" y1="18" x2="21" y2="6" />
      </svg>
    );
  };
  