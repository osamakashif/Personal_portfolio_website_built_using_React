import "./NavbarLogo.css";

export const NavbarLogo = () => {
  return (
    <a
      href="."
      aria-label="Website logo. Click to refresh and go to the start of the website."
      className="nav-logo-link"
    >
      <div className="nav-logo-ring"></div>
      <p className="nav-logo-text">OK</p>
    </a>
  );
};
