import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Button } from "./ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";

export default function Header({ setDarkMode, darkMode }) {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="sticky top-0 z-30 bg-background bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold flex items-center gap-2">
            <FaGraduationCap size={36} className="text-primary" /> TZ Education
            Provider
          </div>
          <div className="hidden md:flex space-x-6">
            {["Home", "Services", "About Us", "Contact Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-primary relative border-y-2 border-transparent ${
                  activeSection === item.toLowerCase().replace(" ", "-")
                    ? "text-primary border-b-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item}
                {/* {activeSection === item.toLowerCase().replace(" ", "-") && (
                  <span className="absolute -bottom-4 w-0 h-0 border-[16px] border-transparent border-b-foreground mx-auto"></span>
                )} */}
              </a>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-auto md:ml-2"
          >
            {darkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </Button>
          <div className="block md:hidden">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setMenuOpen(true)}
            >
              <Menu />
            </Button>
            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } fixed inset-0 h-screen w-full bg-background backdrop-blur flex flex-col items-center justify-center gap-2 z-50`}
            >
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMenuOpen(false)}
                className="absolute right-4 top-4"
              >
                <X />
              </Button>
              {["Home", "Services", "About Us", "Contact Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className={`font-medium transition-colors hover:text-primary p-2 ${
                    activeSection === item.toLowerCase().replace(" ", "-")
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
