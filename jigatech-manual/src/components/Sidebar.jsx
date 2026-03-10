import { Link } from "react-router-dom";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Jigatech Inc.</h2>

      <nav>
        <Link to="/">Welcome</Link>
        <Link to="/client-experience">Client Experience</Link>
        <Link to="/communication">Communication</Link>
        <Link to="/ticketing">Ticketing System</Link>
        <Link to="/incident-handling">Incident Handling</Link>
        <Link to="/teamwork">Teamwork</Link>
        <Link to="/stress-management">Stress Management</Link>
      </nav>
    </div>
  );
}