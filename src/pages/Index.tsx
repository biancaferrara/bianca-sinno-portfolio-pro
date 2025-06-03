
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { CVDownloadButton } from "@/components/CVDownloadButton";
import { Moon, Sun, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'pt' | 'en' | 'it'>('pt');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const languageLabels = {
    pt: 'PT',
    en: 'EN',
    it: 'IT'
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-white'}`}>
      {/* Theme Toggle and Language Selector */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="text-xs">
              <Globe className="w-3 h-3 mr-1" />
              {languageLabels[language]}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setLanguage('pt')}>
              🇧🇷 Português
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage('en')}>
              🇺🇸 English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage('it')}>
              🇮🇹 Italiano
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="w-10 h-10"
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </div>

      {/* Download CV Button */}
      <div className="fixed top-4 left-4 z-50">
        <CVDownloadButton language={language} />
      </div>

      <Navigation language={language} darkMode={darkMode} />
      
      <main className="pt-16">
        <HeroSection language={language} darkMode={darkMode} />
        <ExperienceSection language={language} darkMode={darkMode} />
        <EducationSection language={language} darkMode={darkMode} />
        <SkillsSection language={language} darkMode={darkMode} />
        <LanguagesSection language={language} darkMode={darkMode} />
        <ContactSection language={language} darkMode={darkMode} />
      </main>
    </div>
  );
};

export default Index;
