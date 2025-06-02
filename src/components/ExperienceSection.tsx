
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceSectionProps {
  language: 'pt' | 'en';
  darkMode: boolean;
}

export const ExperienceSection = ({ language, darkMode }: ExperienceSectionProps) => {
  const translations = {
    pt: {
      title: "Experiência Profissional",
      experiences: [
        {
          company: "Plant Choice Alimentos Vegetais Ltda.",
          location: "São Paulo",
          position: "Coordenadora Administrativa-Financeira",
          period: "08/2024 – Atual",
          responsibilities: [
            "Gestão estratégica das operações administrativas e financeiras, garantindo eficiência e conformidade regulatória",
            "Controle de fluxo de caixa, conciliação bancária e acompanhamento de contas a receber e a pagar",
            "Desenvolvimento e análise de orçamentos, planejamento financeiro e otimização de custos empresariais",
            "Relacionamento com clientes e fornecedores, negociação de condições comerciais e supervisão de contratos",
            "Gestão de departamento pessoal, incluindo recrutamento, desligamento, benefícios e conferência de folha de pagamento"
          ]
        },
        {
          company: "VIVA Nutrição Ltda.",
          location: "São Paulo",
          position: "Analista Administrativo-Financeiro",
          period: "04/2023 – 08/2024",
          responsibilities: [
            "Administração financeira, controle de fluxo de caixa e conciliações bancárias",
            "Supervisão de contas a pagar e a receber, garantindo precisão nos registros contábeis",
            "Relacionamento direto com clientes para alinhamento comercial e operacional",
            "Controle de folha de pagamento e tributações, assegurando cumprimento de obrigações legais"
          ]
        },
        {
          company: "SGLOBAL Assessoria",
          location: "São Paulo",
          position: "Coordenadora Administrativa",
          period: "08/2022 – 03/2023",
          responsibilities: [
            "Estruturação e implementação de processos administrativos, garantindo maior eficiência operacional",
            "Gestão de contratos e orçamentos, analisando viabilidade financeira e regulatória",
            "Controle e organização de documentação empresarial, garantindo conformidade técnica e jurídica"
          ]
        },
        {
          company: "SGLOBAL Assessoria",
          location: "São Paulo",
          position: "Assistente Financeiro",
          period: "12/2021 – 08/2022",
          responsibilities: [
            "Emissão de faturamento, controle de pagamentos e análise de fluxo financeiro",
            "Conciliação bancária e supervisão dos recebíveis da empresa",
            "Apoio administrativo na organização documental e regulatória do setor financeiro"
          ]
        },
        {
          company: "Bob's (Bilu Comércio de Alimentos Eireli)",
          location: "São Paulo",
          position: "Gerente Administrativa",
          period: "05/2019 – 07/2022",
          responsibilities: [
            "Gestão operacional, controle de qualidade e administração de estoque e compras",
            "Planejamento financeiro, conciliação de cartões e relacionamento com instituições bancárias",
            "Desenvolvimento de estratégias comerciais e marketing digital para ampliação de vendas",
            "Supervisão de equipe, recrutamento, treinamento e acompanhamento de desempenho",
            "Implementação de medidas para otimização de custos e rentabilidade da unidade"
          ]
        }
      ]
    },
    en: {
      title: "Professional Experience",
      experiences: [
        {
          company: "Plant Choice Alimentos Vegetais Ltda.",
          location: "São Paulo",
          position: "Administrative-Financial Coordinator",
          period: "08/2024 – Current",
          responsibilities: [
            "Strategic management of administrative and financial operations, ensuring efficiency and regulatory compliance",
            "Cash flow control, bank reconciliation and monitoring of accounts receivable and payable",
            "Development and analysis of budgets, financial planning and business cost optimization",
            "Relationship with clients and suppliers, negotiation of commercial conditions and contract supervision",
            "Personnel department management, including recruitment, dismissal, benefits and payroll review"
          ]
        },
        {
          company: "VIVA Nutrição Ltda.",
          location: "São Paulo",
          position: "Administrative-Financial Analyst",
          period: "04/2023 – 08/2024",
          responsibilities: [
            "Financial administration, cash flow control and bank reconciliations",
            "Supervision of accounts payable and receivable, ensuring accuracy in accounting records",
            "Direct relationship with clients for commercial and operational alignment",
            "Payroll and taxation control, ensuring compliance with legal obligations"
          ]
        },
        {
          company: "SGLOBAL Assessoria",
          location: "São Paulo",
          position: "Administrative Coordinator",
          period: "08/2022 – 03/2023",
          responsibilities: [
            "Structuring and implementation of administrative processes, ensuring greater operational efficiency",
            "Contract and budget management, analyzing financial and regulatory feasibility",
            "Control and organization of business documentation, ensuring technical and legal compliance"
          ]
        },
        {
          company: "SGLOBAL Assessoria",
          location: "São Paulo",
          position: "Financial Assistant",
          period: "12/2021 – 08/2022",
          responsibilities: [
            "Billing issuance, payment control and financial flow analysis",
            "Bank reconciliation and supervision of company receivables",
            "Administrative support in documentary and regulatory organization of the financial sector"
          ]
        },
        {
          company: "Bob's (Bilu Comércio de Alimentos Eireli)",
          location: "São Paulo",
          position: "Administrative Manager",
          period: "05/2019 – 07/2022",
          responsibilities: [
            "Operational management, quality control and inventory and purchasing administration",
            "Financial planning, card reconciliation and relationship with banking institutions",
            "Development of commercial strategies and digital marketing for sales expansion",
            "Team supervision, recruitment, training and performance monitoring",
            "Implementation of measures for cost optimization and unit profitability"
          ]
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {t.title}
        </h2>
        
        <div className="space-y-6">
          {t.experiences.map((exp, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow ${
              darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white/80 border-gray-200'
            }`}>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-pink-600">
                  {exp.position}
                </CardTitle>
                <CardDescription className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {exp.company} – {exp.location}
                </CardDescription>
                <p className={`text-sm font-medium ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                  {exp.period}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2">
                      <span className="text-pink-600 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
