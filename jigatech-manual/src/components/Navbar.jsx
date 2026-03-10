import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <span className="navbar-company">Jigatech Solutions</span>
        <div className="navbar-divider" />
        <span className="navbar-doc-title">Service Desk Training Manual</span>
      </div>
      <DarkModeToggle />
    </div>
  );
}