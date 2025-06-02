
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillsSectionProps {
  language: 'pt' | 'en';
  darkMode: boolean;
}

export const SkillsSection = ({ language, darkMode }: SkillsSectionProps) => {
  const translations = {
    pt: {
      title: "Competências Técnicas",
      skills: [
        {
          category: "Sistemas ERP/CRM",
          items: ["Omie (ERP)", "Mercos (CRM)"]
        },
        {
          category: "Pacote Office",
          items: ["Word - Avançado", "Excel - Avançado", "PowerPoint - Avançado", "Outlook - Avançado"]
        },
        {
          category: "Programação",
          items: ["HTML - Básico", "CSS - Básico", "XML - Básico"]
        },
        {
          category: "Sistemas Operacionais",
          items: ["Windows", "Mac OS"]
        }
      ]
    },
    en: {
      title: "Technical Skills",
      skills: [
        {
          category: "ERP/CRM Systems",
          items: ["Omie (ERP)", "Mercos (CRM)"]
        },
        {
          category: "Office Suite",
          items: ["Word - Advanced", "Excel - Advanced", "PowerPoint - Advanced", "Outlook - Advanced"]
        },
        {
          category: "Programming",
          items: ["HTML - Basic", "CSS - Basic", "XML - Basic"]
        },
        {
          category: "Operating Systems",
          items: ["Windows", "Mac OS"]
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {t.skills.map((skillGroup, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${
              darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white/80 border-gray-200'
            }`}>
              <CardHeader>
                <CardTitle className="text-xl text-pink-600">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2">
                      <span className="text-pink-600">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
