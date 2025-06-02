
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LanguagesSectionProps {
  language: 'pt' | 'en';
  darkMode: boolean;
}

export const LanguagesSection = ({ language, darkMode }: LanguagesSectionProps) => {
  const translations = {
    pt: {
      title: "Idiomas",
      languages: [
        {
          language: "Português",
          level: "Nativo",
          code: "C2"
        },
        {
          language: "Italiano",
          level: "Fluente",
          code: "C2"
        },
        {
          language: "Inglês",
          level: "Avançado",
          code: "B2"
        },
        {
          language: "Espanhol",
          level: "Intermediário",
          code: "B1"
        },
        {
          language: "Francês",
          level: "Intermediário",
          code: "B1"
        }
      ]
    },
    en: {
      title: "Languages",
      languages: [
        {
          language: "Portuguese",
          level: "Native",
          code: "C2"
        },
        {
          language: "Italian",
          level: "Fluent",
          code: "C2"
        },
        {
          language: "English",
          level: "Advanced",
          code: "B2"
        },
        {
          language: "Spanish",
          level: "Intermediate",
          code: "B1"
        },
        {
          language: "French",
          level: "Intermediate",
          code: "B1"
        }
      ]
    }
  };

  const t = translations[language];

  const getLevelColor = (code: string) => {
    switch (code) {
      case 'C2': return 'bg-green-500';
      case 'B2': return 'bg-blue-500';
      case 'B1': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="languages" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.languages.map((lang, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${
              darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white/80 border-gray-200'
            }`}>
              <CardHeader>
                <CardTitle className="text-xl">{lang.language}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-lg">{lang.level}</span>
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${getLevelColor(lang.code)}`}>
                    {lang.code}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
