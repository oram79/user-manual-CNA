import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import "../styles/layout.css";
import "../styles/sidebar.css";
import "../styles/pages.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}