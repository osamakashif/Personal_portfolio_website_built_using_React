export const SunMoonIcon = ({
  className = "icon-stroke icon-transparent-background-fill icon-padding",
}: {
  className?: string;
}) => {
  return (
    // Original SVG Source: https://www.svgrepo.com/svg/384302/day-night-sun-moon-cycle
    // Original SVG Authour: wishforge.games.
    // Original SVG License: CC Attribution License.
    // Original License link: https://www.svgrepo.com/page/licensing/#CC%20Attribution
    // Information obtained: 24th May 2024.
    // Modifications done.
    // Classname added.
    <svg height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
      <path d="M16,23c-3.87,0-7-3.13-7-7s3.13-7,7-7"></path>
      <line x1="6.81" y1="6.81" x2="8.93" y2="8.93"></line>
      <line x1="3" y1="16" x2="6" y2="16"></line>
      <line x1="6.81" y1="25.19" x2="8.93" y2="23.07"></line>
      <path d="M16,12.55C17.2,10.43,19.48,9,22.09,9c0.16,0,0.31,0.01,0.47,0.02c-1.67,0.88-2.8,2.63-2.8,4.64 c0,2.9,2.35,5.25,5.25,5.25c1.6,0,3.03-0.72,3.99-1.85C28.48,20.43,25.59,23,22.09,23c-2.61,0-4.89-1.43-6.09-3.55"></path>{" "}
      <line x1="16" y1="3" x2="16" y2="29"></line>
    </svg>
  );
};
