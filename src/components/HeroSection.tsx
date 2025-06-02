
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

interface HeroSectionProps {
  language: 'pt' | 'en';
  darkMode: boolean;
}

export const HeroSection = ({ language, darkMode }: HeroSectionProps) => {
  const translations = {
    pt: {
      greeting: "Olá, eu sou",
      name: "Bianca Ferrara Sinno",
      title: "Coordenadora Administrativa-Financeira",
      description: "Profissional experiente na área administrativa e financeira com vivência internacional na Itália e Suíça. Especializada em gestão de processos, controle financeiro e relacionamento com clientes.",
      location: "Vila Sofia, São Paulo, SP",
      age: "29 anos",
      nationality: "Brasileira e Italiana",
      status: "Solteira",
      whatsapp: "WhatsApp",
      email: "E-mail",
      linkedin: "LinkedIn"
    },
    en: {
      greeting: "Hello, I'm",
      name: "Bianca Ferrara Sinno",
      title: "Administrative-Financial Coordinator",
      description: "Experienced professional in administrative and financial areas with international experience in Italy and Switzerland. Specialized in process management, financial control and customer relations.",
      location: "Vila Sofia, São Paulo, SP",
      age: "29 years old",
      nationality: "Brazilian and Italian",
      status: "Single",
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn"
    }
  };

  const t = translations[language];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511969201082', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:sinnobianca@gmail.com', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/bianca-ferrara-sinno-7a5a2426a/', '_blank');
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src="/lovable-uploads/b61d0cc7-515c-4f82-afa2-f2266e679691.png"
              alt="Bianca Ferrara Sinno"
              className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-600/20 to-purple-600/20"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className={`space-y-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          <div>
            <p className="text-lg font-medium text-pink-600 mb-2">{t.greeting}</p>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t.name}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">{t.title}</h2>
            <p className="text-lg leading-relaxed mb-6">{t.description}</p>
          </div>

          {/* Personal Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>📍 {t.location}</strong></p>
              <p><strong>🎂 {t.age}</strong></p>
            </div>
            <div>
              <p><strong>🌍 {t.nationality}</strong></p>
              <p><strong>💍 {t.status}</strong></p>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Button
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {t.whatsapp}
            </Button>
            <Button
              onClick={handleEmail}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {t.email}
            </Button>
            <Button
              onClick={handleLinkedIn}
              className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              {t.linkedin}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
