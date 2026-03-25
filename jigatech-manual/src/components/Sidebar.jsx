import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* Tech-styled logo mark — a stylized circuit/bracket icon */
const LogoMark = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer frame */}
    <rect x="2" y="2" width="28" height="28" rx="6" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
    {/* Inner circuit lines */}
    <path d="M8 10L12 10L14 8L18 8L20 10L24 10" stroke="#e05a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16L11 16L13 14L19 14L21 16L24 16" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 22L12 22L14 24L18 24L20 22L24 22" stroke="#e05a1a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Node dots */}
    <circle cx="8" cy="10" r="1.5" fill="#e05a1a"/>
    <circle cx="24" cy="10" r="1.5" fill="#e05a1a"/>
    <circle cx="8" cy="22" r="1.5" fill="#e05a1a"/>
    <circle cx="24" cy="22" r="1.5" fill="#e05a1a"/>
    <circle cx="16" cy="16" r="2" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
    {/* Corner accents */}
    <path d="M6 4H4V6" stroke="#e05a1a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 4H28V6" stroke="#e05a1a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M6 28H4V26" stroke="#e05a1a" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 28H28V26" stroke="#e05a1a" strokeWidth="1.5" strokeLinecap="round"/>
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
        <div className="sidebar-brand-row">
          <LogoMark />
          <div className="sidebar-brand-text">
            <div className="sidebar-brand-name">JIGA<span>TECH</span></div>
            <div className="sidebar-brand-sub">Solutions Inc.</div>
          </div>
        </div>
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
        Rev. 2026 / V 1.2.5
      </div>
    </div>
  );
}