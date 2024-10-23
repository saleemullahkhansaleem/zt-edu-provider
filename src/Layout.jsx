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
    <main
      className={`max-w-[100vw] overflow-x-hidden dark:text-white max-h-screen overflow-y-auto ${
        darkMode ? "dark" : ""
      }`}
    >
      <Header setDarkMode={setDarkMode} darkMode={darkMode} />
      <Outlet />
      <Footer />
    </main>
  );
}
