export const CloseIcon = ({ className = "icon-stroke" }: { className?: string }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="2"
        className={className}
      >
        <line x1="3" y1="3" x2="21" y2="21" />
        <line x1="3" y1="21" x2="21" y2="3" />
      </svg>
    );
  };
  