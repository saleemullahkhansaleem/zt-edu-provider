import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { useEffect, useState } from "react";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`max-w-[100vw] overflow-x-hidden text-foreground bg-background max-h-screen overflow-y-auto scroll-smooth ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </div>
  );
}
