import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const navItems = [
  { to: "/",                  num: "01", label: "Welcome & Overview" },
  { to: "/client-experience", num: "02", label: "Client Experience" },
  { to: "/communication",     num: "03", label: "Communication Skills" },
  { to: "/ticketing",         num: "04", label: "Ticketing System" },
  { to: "/incident-handling", num: "05", label: "Incident Handling" },
  { to: "/teamwork",          num: "06", label: "Teamwork" },
  { to: "/stress-management", num: "07", label: "Stress Management" },
];

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand-name">Jiga<span>tech</span></div>
        <div className="sidebar-brand-sub">Solutions Inc.</div>
      </div>

      <div className="sidebar-section-label">Chapters</div>

      <nav>
        {navItems.map(({ to, num, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
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