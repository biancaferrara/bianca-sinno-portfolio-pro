
import { Button } from "@/components/ui/button";

interface NavigationProps {
  language: 'pt' | 'en' | 'it';
  darkMode: boolean;
}

export const Navigation = ({ language, darkMode }: NavigationProps) => {
  const translations = {
    pt: {
      about: "Sobre",
      experience: "Experiência",
      education: "Formação",
      skills: "Habilidades",
      languages: "Idiomas",
      contact: "Contato"
    },
    en: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      contact: "Contact"
    },
    it: {
      about: "Chi Sono",
      experience: "Esperienza",
      education: "Formazione",
      skills: "Competenze",
      languages: "Lingue",
      contact: "Contatto"
    }
  };

  const t = translations[language];

  const menuItems = [
    { label: t.about, href: "#about" },
    { label: t.experience, href: "#experience" },
    { label: t.education, href: "#education" },
    { label: t.skills, href: "#skills" },
    { label: t.languages, href: "#languages" },
    { label: t.contact, href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 mt-4 px-6 py-3 rounded-full backdrop-blur-md border hidden md:flex ${
      darkMode 
        ? 'bg-black/20 border-white/20 text-white' 
        : 'bg-white/80 border-gray-200 text-gray-800'
    }`}>
      {/* Desktop Navigation Only */}
      <div className="flex space-x-6">
        {menuItems.map((item) => (
          <button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className={`hover:text-pink-600 transition-colors font-medium ${
              darkMode ? 'hover:text-pink-400' : 'hover:text-pink-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};
