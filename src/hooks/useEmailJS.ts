
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
}

export const useEmailJS = (language: 'pt' | 'en' | 'it') => {
  const { toast } = useToast();

  const translations = {
    pt: {
      success: "Mensagem enviada com sucesso!",
      successDesc: "Retornarei o contato em breve.",
      error: "Erro ao enviar mensagem",
      errorDesc: "Por favor, tente novamente mais tarde.",
      configError: "Erro de configuração",
      configErrorDesc: "Configure as credenciais do EmailJS primeiro."
    },
    en: {
      success: "Message sent successfully!",
      successDesc: "I'll get back to you soon.",
      error: "Error sending message",
      errorDesc: "Please try again later.",
      configError: "Configuration error",
      configErrorDesc: "Please configure EmailJS credentials first."
    },
    it: {
      success: "Messaggio inviato con successo!",
      successDesc: "Ti ricontatterò presto.",
      error: "Errore nell'invio del messaggio",
      errorDesc: "Riprova più tardi.",
      configError: "Errore di configurazione",
      configErrorDesc: "Configura prima le credenziali EmailJS."
    }
  };

  const t = translations[language];

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    // Credenciais do EmailJS - você precisa configurar estas variáveis
    const serviceId = 'your_service_id'; // Substitua pelo seu Service ID
    const templateId = 'your_template_id'; // Substitua pelo seu Template ID  
    const publicKey = 'your_public_key'; // Substitua pela sua Public Key

    if (!serviceId || !templateId || !publicKey || 
        serviceId === 'your_service_id' || 
        templateId === 'your_template_id' || 
        publicKey === 'your_public_key') {
      toast({
        title: t.configError,
        description: t.configErrorDesc,
        variant: "destructive",
      });
      return false;
    }

    try {
      console.log('Enviando email com dados:', data);
      
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.from_name,
          from_email: data.from_email,
          message: data.message,
          to_name: 'Bianca Ferrara Sinno',
        },
        publicKey
      );

      console.log('Resposta do EmailJS:', response);

      if (response.status === 200) {
        toast({
          title: t.success,
          description: t.successDesc,
        });
        return true;
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      toast({
        title: t.error,
        description: t.errorDesc,
        variant: "destructive",
      });
      return false;
    }
  };

  return { sendEmail };
};
