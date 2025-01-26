export const NewTabIcon = ({ className = "icon-background-fill icon-padding" }: { className?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g strokeLinecap="round" strokeLinejoin="round"></g>
      <path d="M0 0h48v48H0z" fill="none"></path>
      <polygon points="40,38 8,38 8,10 20,10 20,6 4,6 4,42 44,42 44,30 40,30 "></polygon>
      <polygon points="26,6 26,10 37.172,10 23.172,24 26,26.828 40,12.828 40,24 44,24 44,6 "></polygon>
    </svg>
  );
};
