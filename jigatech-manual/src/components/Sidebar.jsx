import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const navItems = [
  { to: "/",                  num: "01", label: "Welcome & Overview" },
  { to: "/client-experience", num: "02", label: "Client Experience" },
  { to: "/communication",     num: "03", label: "Communication Skills" },
  { to: "/ticketing",         num: "04", label: "Ticketing System" },
  { to: "/incident-handling", num: "05", label: "Incident Handling" },
  { to: "/teamwork",          num: "06", label: "Teamwork" },
  { to: "/stress-management", num: "07", label: "Stress Management" },
];

export default function Sidebar({ open, onClose }) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <div className="sidebar-brand">
        <div className="sidebar-brand-name">Jiga<span>tech</span></div>
        <div className="sidebar-brand-sub">Solutions Inc.</div>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          <CloseIcon />
        </button>
      </div>

      <div className="sidebar-section-label">Chapters</div>

      <nav>
        {navItems.map(({ to, num, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={onClose}
          >
            <span className="sidebar-chapter-num">{num}</span>
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        CR1260<br />
        Jigatech Solutions<br />
        Rev. 2026
      </div>
    </div>
  );
}