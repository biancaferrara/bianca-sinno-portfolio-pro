
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EducationSectionProps {
  language: 'pt' | 'en' | 'it';
  darkMode: boolean;
}

export const EducationSection = ({ language, darkMode }: EducationSectionProps) => {
  const translations = {
    pt: {
      title: "Formação Acadêmica",
      education: [
        {
          year: "2019",
          degree: "Bacharelado em Ciências da Comunicação",
          institution: "Università della Svizzera Italiana",
          location: "Lugano, Suíça",
          link: "https://search.usi.ch/en/courses/explore"
        },
        {
          year: "2018",
          degree: "Ênfase em Comunicação Corporativa",
          institution: "USI",
          location: "Lugano, Suíça",
          link: "https://search.usi.ch/en/courses/explore"
        },
        {
          year: "2013",
          degree: "Diploma de Liceu Científico",
          institution: "Scuola Italiana Eugenio Montale",
          location: "São Paulo, Brasil",
          link: "https://www.montale.com.br/pt/"
        }
      ]
    },
    en: {
      title: "Academic Background",
      education: [
        {
          year: "2019",
          degree: "Bachelor in Communication Sciences",
          institution: "Università della Svizzera Italiana",
          location: "Lugano, Switzerland",
          link: "https://search.usi.ch/en/courses/explore"
        },
        {
          year: "2018",
          degree: "Emphasis in Corporate Communication",
          institution: "USI",
          location: "Lugano, Switzerland",
          link: "https://search.usi.ch/en/courses/explore"
        },
        {
          year: "2013",
          degree: "Scientific High School Diploma",
          institution: "Scuola Italiana Eugenio Montale",
          location: "São Paulo, Brazil",
          link: "https://www.montale.com.br/pt/"
        }
      ]
    },
    it: {
      title: "Formazione Accademica",
      education: [
        {
          year: "2019",
          degree: "Laurea in Scienze della Comunicazione",
          institution: "Università della Svizzera Italiana",
          location: "Lugano, Svizzera",
          link: "https://search.usi.ch/en/courses/explore"
        },
        {
          year: "2018",
          degree: "Specializzazione in Comunicazione Aziendale",
          institution: "USI",
          location: "Lugano, Svizzera",
          link: "https://search.usi.ch/en/courses/explore"
        },
        {
          year: "2013",
          degree: "Diploma di Liceo Scientifico",
          institution: "Scuola Italiana Eugenio Montale",
          location: "São Paulo, Brasile",
          link: "https://www.montale.com.br/pt/"
        }
      ]
    }
  };

  const t = translations[language];

  const handleInstitutionClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {t.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.education.map((edu, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${
              darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white/80 border-gray-200'
            }`}>
              <CardHeader>
                <div className="text-2xl font-bold text-pink-600 mb-2">{edu.year}</div>
                <CardTitle className="text-lg">{edu.degree}</CardTitle>
                <Button
                  variant="ghost"
                  onClick={() => handleInstitutionClick(edu.link)}
                  className={`p-0 h-auto justify-start text-left hover:bg-transparent hover:text-pink-600 transition-colors ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {edu.institution}
                </Button>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  📍 {edu.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
