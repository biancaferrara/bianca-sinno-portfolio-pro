
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CVDownloadButtonProps {
  language: 'pt' | 'en' | 'it';
}

export const CVDownloadButton = ({ language }: CVDownloadButtonProps) => {
  const { toast } = useToast();

  const translations = {
    pt: {
      downloadCV: "Download Currículo",
      portuguese: "Português",
      english: "English",
      downloadStarted: "Download iniciado",
      downloadDesc: "O currículo será baixado em breve."
    },
    en: {
      downloadCV: "Download CV",
      portuguese: "Português", 
      english: "English",
      downloadStarted: "Download started",
      downloadDesc: "The CV will be downloaded shortly."
    },
    it: {
      downloadCV: "Scarica CV",
      portuguese: "Português",
      english: "English", 
      downloadStarted: "Download avviato",
      downloadDesc: "Il CV verrà scaricato a breve."
    }
  };

  const t = translations[language];

  const handleDownloadCV = (cvLanguage: 'pt' | 'en') => {
    const fileName = cvLanguage === 'pt' ? 'curriculo-bianca.pdf' : 'curriculo-bianca-en.pdf';
    const downloadName = cvLanguage === 'pt' ? 'curriculo-bianca-sinno.pdf' : 'curriculo-bianca-sinno-en.pdf';

    toast({
      title: t.downloadStarted,
      description: t.downloadDesc,
    });

    const link = document.createElement('a');
    link.href = `/assets/${fileName}`;
    link.download = downloadName;
    link.click();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white">
          <Download className="w-4 h-4 mr-2" />
          {t.downloadCV}
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleDownloadCV('pt')}>
          🇧🇷 {t.portuguese}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleDownloadCV('en')}>
          🇺🇸 {t.english}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
