import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <button onClick={toggle}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}