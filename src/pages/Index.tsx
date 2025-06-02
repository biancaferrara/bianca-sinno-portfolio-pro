
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { SkillsSection } from "@/components/SkillsSection";
import { LanguagesSection } from "@/components/LanguagesSection";
import { ContactSection } from "@/components/ContactSection";
import { Moon, Sun, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const { toast } = useToast();

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

  const translations = {
    pt: {
      title: "Bianca Ferrara Sinno | Portfólio Administrativo-Financeiro",
      downloadCV: "Download Currículo",
      about: "Sobre",
      experience: "Experiência",
      education: "Formação",
      skills: "Habilidades",
      languages: "Idiomas",
      contact: "Contato"
    },
    en: {
      title: "Bianca Ferrara Sinno | Administrative-Financial Portfolio",
      downloadCV: "Download CV",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      contact: "Contact"
    }
  };

  const t = translations[language];

  const handleDownloadCV = () => {
    toast({
      title: "Download iniciado",
      description: "O currículo será baixado em breve.",
    });
    // Download do arquivo PDF localizado em public/assets/
    const link = document.createElement('a');
    link.href = '/assets/curriculo-bianca.pdf';
    link.download = 'curriculo-bianca-sinno.pdf';
    link.click();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gradient-to-br from-purple-900 via-pink-900 to-purple-800' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-white'}`}>
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
          className="text-xs"
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </Button>
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
        <Button
          onClick={handleDownloadCV}
          className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
        >
          <Download className="w-4 h-4 mr-2" />
          {t.downloadCV}
        </Button>
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
