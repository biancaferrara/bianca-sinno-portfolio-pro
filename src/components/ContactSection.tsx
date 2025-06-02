
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Linkedin } from "lucide-react";
import { useEmailJS } from "@/hooks/useEmailJS";

interface ContactSectionProps {
  language: 'pt' | 'en' | 'it';
  darkMode: boolean;
}

export const ContactSection = ({ language, darkMode }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { sendEmail } = useEmailJS(language);

  const translations = {
    pt: {
      title: "Entre em Contato",
      subtitle: "Vamos conversar sobre oportunidades",
      form: {
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        send: "Enviar Mensagem"
      },
      contact: {
        whatsapp: "WhatsApp",
        email: "E-mail",
        linkedin: "LinkedIn",
        location: "Localização",
        address: "Vila Sofia, São Paulo, SP"
      }
    },
    en: {
      title: "Get in Touch",
      subtitle: "Let's talk about opportunities",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message"
      },
      contact: {
        whatsapp: "WhatsApp",
        email: "Email",
        linkedin: "LinkedIn",
        location: "Location",
        address: "Vila Sofia, São Paulo, SP"
      }
    },
    it: {
      title: "Mettiti in Contatto",
      subtitle: "Parliamo di opportunità",
      form: {
        name: "Nome",
        email: "Email",
        message: "Messaggio",
        send: "Invia Messaggio"
      },
      contact: {
        whatsapp: "WhatsApp",
        email: "Email",
        linkedin: "LinkedIn",
        location: "Posizione",
        address: "Vila Sofia, São Paulo, SP"
      }
    }
  };

  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await sendEmail({
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    });

    if (success) {
      setFormData({ name: '', email: '', message: '' });
    }

    setIsLoading(false);
  };

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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className={`${darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white/80 border-gray-200'}`}>
            <CardHeader>
              <CardTitle className="text-2xl text-pink-600">{t.form.send}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">{t.form.name}</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    disabled={isLoading}
                    className={darkMode ? 'bg-black/20 border-white/20' : ''}
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t.form.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    disabled={isLoading}
                    className={darkMode ? 'bg-black/20 border-white/20' : ''}
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t.form.message}</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={4}
                    disabled={isLoading}
                    className={darkMode ? 'bg-black/20 border-white/20' : ''}
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                >
                  {isLoading ? 'Enviando...' : t.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className={`${darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white/80 border-gray-200'}`}>
            <CardHeader>
              <CardTitle className="text-2xl text-pink-600">{t.contact.location}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-lg font-medium mb-2">📍 {t.contact.address}</p>
              </div>
              
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">{t.contact.whatsapp}</span>
                </Button>
                
                <Button
                  onClick={handleEmail}
                  variant="outline"
                  className="w-full flex items-center gap-3"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">{t.contact.email}</span>
                </Button>
                
                <Button
                  onClick={handleLinkedIn}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-3"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">{t.contact.linkedin}</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
