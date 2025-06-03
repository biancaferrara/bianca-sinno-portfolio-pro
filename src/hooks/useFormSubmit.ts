
import { useToast } from "@/hooks/use-toast";

interface EmailData {
  from_name: string;
  from_email: string;
  message: string;
}

export const useFormSubmit = (language: 'pt' | 'en' | 'it') => {
  const { toast } = useToast();

  const translations = {
    pt: {
      success: "Mensagem enviada com sucesso!",
      successDesc: "Retornarei o contato em breve.",
      error: "Erro ao enviar mensagem",
      errorDesc: "Por favor, tente novamente mais tarde."
    },
    en: {
      success: "Message sent successfully!",
      successDesc: "I'll get back to you soon.",
      error: "Error sending message",
      errorDesc: "Please try again later."
    },
    it: {
      success: "Messaggio inviato con successo!",
      successDesc: "Ti ricontatterò presto.",
      error: "Errore nell'invio del messaggio",
      errorDesc: "Riprova più tardi."
    }
  };

  const t = translations[language];

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    try {
      console.log('Enviando email com dados:', data);
      
      const response = await fetch('https://formsubmit.co/ajax/sinnobianca@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: data.from_name,
          email: data.from_email,
          subject: 'Contato do Portfólio',
          message: data.message,
          _subject: `Contato do Portfólio: ${data.from_name}`
        })
      });

      const result = await response.json();
      console.log('Resposta do FormSubmit:', result);

      if (response.ok) {
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
