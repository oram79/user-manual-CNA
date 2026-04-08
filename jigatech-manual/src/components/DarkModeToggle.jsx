import { useState } from "react";

export default function DarkModeToggle() {
  const [light, setLight] = useState(false);
  const [hovered, setHovered] = useState(false);

  const toggle = () => {
    setLight(!light);
    document.body.classList.toggle("light");
  };

  return (
    <button
      onClick={toggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: hovered ? "var(--accent)" : "var(--accent-light)",
        border: "1px solid var(--accent)",
        color: hovered ? "#ffffff" : "var(--accent)",
        borderRadius: "6px",
        padding: "8px 16px",
        fontSize: "12.5px",
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: "700",
        cursor: "pointer",
        letterSpacing: "0.05em",
        transition: "all 0.2s",
        lineHeight: "1",
      }}
    >
      {light ? <MoonIcon /> : <SunIcon />}
      {light ? "Dark" : "Light"}
    </button>
  );
}

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);