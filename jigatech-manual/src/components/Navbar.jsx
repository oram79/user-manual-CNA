import DarkModeToggle from "./DarkModeToggle";

export default function Navbar({ onMenuToggle }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={onMenuToggle} aria-label="Open menu">
          <MenuIcon />
        </button>
        <span className="navbar-company">Jigatech Solutions</span>
        <div className="navbar-divider" />
        <span className="navbar-doc-title">Service Desk Training Manual</span>
      </div>
      <div className="navbar-right">
        <DarkModeToggle />
      </div>
    </div>
  );
}

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);