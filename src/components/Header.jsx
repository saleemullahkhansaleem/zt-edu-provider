import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "about-us", "contact-us"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      console.log("current section: ", currentSection);
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary flex items-center gap-2">
            <FaGraduationCap size={36} /> TZ Education Provider
          </div>
          <div className="hidden md:flex space-x-6">
            {["Home", "Services", "About Us", "Contact Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase().replace(" ", "-")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
