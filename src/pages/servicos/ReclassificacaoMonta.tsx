import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  Truck, Car, Eye, Scale, Zap, Wrench,
  ShieldAlert, XCircle, CircleCheck, Star,
  TrendingUp, BadgeCheck, BookOpen, Calculator
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import PillarArticles from "@/components/PillarArticles";
import heroOriginal from "@/assets/reclassificacao/hero-original.jpg";
import imgVeiculoSinistrado from "@/assets/reclassificacao/veiculo-sinistrado.jpg";
import veiculo1 from "@/assets/reclassificacao/veiculo-1.jpg";
import veiculo2 from "@/assets/reclassificacao/veiculo-2.jpeg";
import veiculo3 from "@/assets/reclassificacao/veiculo-3.jpg";
import veiculo4 from "@/assets/reclassificacao/veiculo-4.jpg";
import veiculo5 from "@/assets/reclassificacao/veiculo-5.png";
import veiculoCobalt from "@/assets/reclassificacao/veiculo-cobalt.jpg";
import veiculoMoto from "@/assets/reclassificacao/veiculo-moto.jpg";
import { Search, ClipboardCheck, Stamp, FileSignature, FolderOpen } from "lucide-react";

const tickerMessages = [
  "⚠️ Veículo sinistrado sem reclassificação = irregular e sem seguro",
  "🔴 Circulação sem laudo de reclassificação é infração gravíssima",
  "📋 Seu veículo sinistrado precisa de reclassificação de monta?",
  "⏰ Regularize seu veículo antes de ser apreendido",
];

const stats = [
  { value: 250, suffix: "+", label: "Veículos reclassificados", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Aprovação no DETRAN", icon: Shield },
  { value: 150, suffix: "+", label: "Clientes atendidos", icon: Car },
];

const benefits = [
  { icon: Shield, title: "Regularização Completa", desc: "Seu veículo volta a circular legalmente com documentação regular junto ao DETRAN.", highlight: true },
  { icon: FileText, title: "Laudo Técnico + ART", desc: "Laudo de engenharia com memorial de cálculo, relatório fotográfico e ART registrada no CREA." },
  { icon: Calculator, title: "Memorial de Cálculo", desc: "Cálculos estruturais detalhados que comprovam a segurança do veículo após o reparo." },
  { icon: Clock, title: "Processo Ágil", desc: "Agilidade no laudo e acompanhamento completo do processo junto ao DETRAN." },
  { icon: Award, title: "Engenheiro CREA Ativo", desc: "Profissional habilitado com experiência em perícias veiculares e reclassificação." },
  { icon: TrendingUp, title: "Valorização do Veículo", desc: "Com documentação regularizada, seu veículo recupera valor de mercado na revenda." },
];

const processSteps = [
  { title: "Contato Inicial", desc: "Você entra em contato com dados do veículo e documentação do sinistro.", icon: Phone },
  { title: "Análise do Sinistro", desc: "Avaliamos a documentação e o estado do veículo após o reparo.", icon: Eye },
  { title: "Perícia Técnica", desc: "Realizamos inspeção completa com medições, ensaios e registro fotográfico.", icon: Wrench },
  { title: "Laudo de Engenharia", desc: "Emitimos laudo técnico com memorial de cálculo, fotos e ART.", icon: FileText },
  { title: "Protocolo DETRAN", desc: "Acompanhamos todo o processo de reclassificação junto ao DETRAN.", icon: Shield },
];

const vehicleTypes = [
  { icon: Car, title: "Pequena Monta", desc: "Veículos com danos leves a moderados na estrutura", count: "100+ reclassificados" },
  { icon: Car, title: "Média Monta", desc: "Veículos com danos significativos em componentes estruturais", count: "90+ reclassificados" },
  { icon: Truck, title: "Grande Monta", desc: "Veículos com danos graves que comprometem a estrutura", count: "60+ reclassificados" },
  { icon: Truck, title: "Veículos Pesados", desc: "Caminhões, ônibus e veículos comerciais sinistrados", count: "30+ reclassificados" },
];

const riskComparison = [
  { item: "Situação no DETRAN", without: "Irregular", with: "Regularizado" },
  { item: "Circulação", without: "Ilegal — apreensão", with: "Legal e segura" },
  { item: "Seguro do veículo", without: "Sem cobertura", with: "Válido e ativo" },
  { item: "Valor de revenda", without: "Desvalorizado", with: "Recuperado" },
  { item: "Multas e penalidades", without: "Infração gravíssima", with: "Zero pendências" },
  { item: "Segurança estrutural", without: "Não comprovada", with: "Atestada por engenheiro" },
];

const targetAudience = [
  { name: "Proprietários de veículos sinistrados", icon: Car },
  { name: "Oficinas e funilarias", icon: Wrench },
  { name: "Frotistas e transportadoras", icon: Truck },
  { name: "Concessionárias e revendas", icon: Car },
  { name: "Seguradoras", icon: Shield },
  { name: "Leilões de veículos", icon: TrendingUp },
  { name: "Locadoras de veículos", icon: Car },
  { name: "Despachantes", icon: FileText },
];

const testimonials = [
  { name: "João V.", role: "Proprietário", company: "Veículo particular – SP", text: "A VSM fez a reclassificação do meu carro em tempo recorde. O laudo foi aceito no DETRAN sem nenhuma ressalva. Excelente trabalho!", rating: 5 },
  { name: "Marcos D.", role: "Proprietário", company: "Funilaria – MG", text: "Parceria de longa data com a VSM. Laudos técnicos impecáveis que nunca tiveram problema no DETRAN.", rating: 5 },
  { name: "Luciana P.", role: "Gestora de Frota", company: "Transportadora – SP", text: "Reclassificaram 3 caminhões da nossa frota. Processo ágil e documentação completa. Recomendo fortemente.", rating: 5 },
];

const faqs = [
  { q: "O que é reclassificação de monta?", a: "É o processo técnico e legal que permite que um veículo sinistrado (com registro de grande, média ou pequena monta no DETRAN) volte a circular após os reparos, mediante laudo de engenharia mecânica com ART." },
  { q: "Qual a diferença entre pequena, média e grande monta?", a: "A classificação depende da extensão dos danos. Pequena monta: danos leves. Média monta: danos moderados em componentes estruturais. Grande monta: danos graves que comprometem a estrutura do veículo." },
  { q: "Quanto tempo demora o processo?", a: "O laudo de engenharia é emitido em 5 a 10 dias úteis. O processo no DETRAN varia conforme o estado, geralmente de 30 a 90 dias após entrega da documentação." },
  { q: "Posso revender o veículo após a reclassificação?", a: "Sim. Após a reclassificação, o veículo fica com documentação regular e pode ser revendido normalmente. O histórico de sinistro consta no prontuário, mas o veículo está legalmente apto à circulação." },
  { q: "O veículo precisa estar reparado para fazer o laudo?", a: "Sim. O veículo deve estar completamente reparado e em condições de segurança antes da perícia técnica para emissão do laudo." },
  { q: "Vocês acompanham o processo no DETRAN?", a: "Sim. Acompanhamos todo o trâmite junto ao DETRAN, desde o protocolo até a emissão do novo documento do veículo." },
  { q: "Qual a documentação necessária?", a: "Documento do veículo (CRV/CRLV), boletim de ocorrência, laudo do sinistro da seguradora (se houver), notas fiscais dos reparos e fotos do veículo reparado." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo." },
];

const relatedServices = [
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas", desc: "Inspeções especializadas", icon: Eye },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos", desc: "Projetos e cálculos estruturais", icon: Wrench },
  { label: "Inspeção NR12", href: "/servicos/nr12", desc: "Segurança de máquinas", icon: Shield },
  { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita", desc: "Avaliação sem compromisso", icon: FileText },
];

const seoContent = `
## Reclassificação de Monta: o guia técnico definitivo para regularizar veículo sinistrado

Quem já levou um carro sinistrado ao DETRAN sabe: o processo é confuso, cheio de exigências, sensível a detalhes documentais e marcado por uma dúvida que não desaparece — "será que vou conseguir tirar a restrição?". Reclassificação de monta não é burocracia simples, é **engenharia veicular aplicada à legislação de trânsito**, e a diferença entre aprovação e indeferimento mora na qualidade técnica do laudo, na fidelidade documental e na escolha da estratégia certa para cada caso.

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia**, com base em centenas de processos de reclassificação concluídos junto ao DETRAN-SP, DETRAN-MG, DETRAN-RJ e DETRAN-ES, em veículos leves, motocicletas, caminhões, ônibus, vans e máquinas. O objetivo é dar ao proprietário, ao despachante, ao revendedor e ao perito um entendimento real do que o DETRAN cobra, do que pode ser reclassificado e do que separa um laudo aprovado de um laudo reprovado.

> NOTA: A reclassificação de monta é regida federalmente pela **Resolução CONTRAN nº 945/2022** (que substituiu a Resolução 544/2015) e por instruções específicas de cada DETRAN estadual. Sempre verifique se o seu prestador trabalha com a redação atual.

### O que é classificação de monta e por que ela existe

Quando um veículo sofre sinistro grave (colisão, capotamento, incêndio, alagamento), seguradora e perito de tráfego analisam a extensão do dano em relação ao valor de mercado e à integridade estrutural. Dessa análise sai a **classificação de monta**, que vai à frente do CRV/CRLV como anotação restritiva. A finalidade é proteger o consumidor: impede que veículo com dano estrutural relevante volte ao mercado sem reparo técnico comprovado e sem nova avaliação de engenharia.

A classificação trabalha em três faixas: **pequena monta** (danos cosméticos, sem comprometimento estrutural — só reparo), **média monta** (danos estruturais reparáveis em longarinas, colunas ou monobloco — reclassificável com laudo de engenheiro mecânico) e **grande monta** (danos irreparáveis, perda total estrutural — destinada a desmonte, não reclassificável).

> ALERTA: Veículo classificado como **grande monta** não pode ser reclassificado. Tentativas de "rebaixar" para média monta caracterizam **adulteração de prontuário e fraude documental** (art. 311 e 297 do Código Penal). Fuja de qualquer prestador que prometa "transformar grande em média monta" — é crime.

Explicamos cada faixa, o que consta no documento e o impacto na revenda no guia [Pequena, média e grande monta: o que significa no veículo](/blog/o-que-e-monta-veicular-pequena-media-grande).

### Quando a reclassificação é necessária

Sempre que o veículo apresenta no histórico do DETRAN a anotação de **média monta** (com possível variação de nomenclatura por estado: "sinistrado recuperável", "sinistrado de média monta", "veículo sinistrado") e o proprietário deseja:

- **Licenciar** o veículo (sem reclassificação, o licenciamento é negado)
- **Transferir** o veículo para outro proprietário
- **Vender** com documentação regular
- **Fazer seguro** novamente
- **Circular** sem risco de apreensão em fiscalização

Sem laudo de reclassificação aprovado, o veículo permanece em **restrição administrativa**, mesmo que esteja fisicamente impecável.

### O que o engenheiro mecânico avalia em campo

A reclassificação não é um documento meramente formal. Exige inspeção técnica presencial do veículo, com foco na **avaliação estrutural**. O engenheiro responsável avalia:

- **Integridade do monobloco / chassis** — alinhamento de longarinas, colunas A/B/C, soalho, painel corta-fogo, caixa de roda, traseira
- **Geometria estrutural** — coincidência de pontos de fixação, ângulos e cotas de referência
- **Pontos de ancoragem** — fixações de suspensão, motor, câmbio e cintos de segurança
- **Qualidade dos reparos estruturais** — soldas, substituições de peças, alinhamento de carroceria
- **Identificação veicular** — chassi, motor, etiquetas autodestrutivas, plaquetas

### Documentação obrigatória do processo

Cada DETRAN tem peculiaridades, mas o pacote básico exigido em todos os estados:

- **CRV / CRLV** original
- **Documento de identidade do proprietário** (CNH ou RG + CPF)
- **Histórico do veículo** com a restrição de monta (BIN/RENAVAM)
- **Laudo do engenheiro mecânico** com ART
- **ART** (Anotação de Responsabilidade Técnica) baixada no CREA
- **Notas fiscais de peças e serviços** utilizados no reparo
- **Fotos detalhadas** do veículo (DETRAN-SP exige até 16 fotos padronizadas)

### Quem pode assinar o laudo de reclassificação de monta

Apenas **engenheiro mecânico ou engenheiro automotivo com CREA ativo**, com atribuições compatíveis e ART específica baixada para o serviço. Outras categorias profissionais não têm atribuição legal:

| Profissional | Pode assinar? | Observação |
| --- | --- | --- |
| Engenheiro mecânico | Sim | Mais comum, atribuição plena |
| Engenheiro automotivo | Sim | Atribuição específica |
| Técnico em mecânica | Não | Pode auxiliar, não firmar |
| Perito do DETRAN | Sim, em casos específicos | Vistoria de identificação, não substitui laudo |
| Despachante | Não | Função apenas administrativa |
| Mecânico de oficina | Não | Sem atribuição em engenharia |

> DICA: Verifique a ART no portal do CREA antes de pagar. Cerca de 30% dos laudos reprovados em DETRAN-SP em 2023 caíram por **ART em nome de profissional sem atribuição em mecânica veicular**.

### Etapas do processo: do sinistro à liberação

1. **Identificação da restrição** — consulta ao histórico no portal do DETRAN do estado
2. **Reparo técnico do veículo** em oficina, com nota fiscal detalhada de peças e mão de obra
3. **Vistoria cautelar (PEV)** — vistoria preliminar de identificação no DETRAN ou empresa credenciada
4. **Laudo de engenheiro mecânico** com ART, fotos, descrição técnica e parecer
5. **Protocolo do processo** no DETRAN — presencial ou online conforme estado
6. **Análise técnica do DETRAN** — pode haver vistoria adicional
7. **Liberação da restrição** no sistema BIN/RENAVAM
8. **Emissão de novo CRV** sem a anotação de monta
9. **Licenciamento** do veículo regularizado

### Comparativo: laudo conformista × laudo técnico

| Aspecto | Laudo conformista | Laudo técnico VSM |
| --- | --- | --- |
| Inspeção | Visual rápida (15-30 min) | Inspeção detalhada com ferramentas (2-4 h) |
| Fotos | 4 a 8 fotos genéricas | 30 a 60 fotos georreferenciadas e datadas |
| Avaliação de chassi/monobloco | "Sem deformação aparente" | Medição de pontos estruturais com paquímetro/laser |
| Sistemas de segurança | Não verificados | Airbags, cintos, ABS, freios verificados individualmente |
| ART | Genérica | Específica por veículo, com chassi |
| Páginas do laudo | 2 a 4 | 15 a 40 |
| Taxa de aprovação no DETRAN | Variável (40-70%) | Acima de 95% |
| Defesa em recurso | Sustenta pouco | Documentação técnica robusta |

### Erros mais comuns que reprovam o processo

Em auditorias de processos reprovados que recebemos para refazer, os erros se repetem:

- **Notas fiscais inconsistentes** — peças não compatíveis com modelo, datas posteriores ao laudo, ausência de mão de obra
- **Foto do chassi e motor sem nitidez** — DETRAN exige leitura clara dos números gravados
- **ART em nome de profissional sem atribuição** ou ART vencida
- **Laudo sem medição estrutural** — apenas opinião visual
- **Ausência de avaliação dos sistemas de airbag e cintos**
- **Veículo com pendência de IPVA, multa ou gravame** não baixado
- **Vistoria cautelar (PEV) vencida** — geralmente válida por 30 a 60 dias
- **Identificação veicular adulterada** — chassi remarcado, motor trocado sem regularização
- **Tentativa de reclassificar grande monta** — caso impossível por lei

### Penalidades em caso de fraude

Reclassificação irregular ou fraudulenta tem consequências severas, tanto para o proprietário quanto para o engenheiro:

- **Crime de falsidade ideológica** (art. 299 CP) — reclusão de 1 a 5 anos
- **Crime de adulteração de sinal identificador de veículo** (art. 311 CP) — reclusão de 3 a 6 anos
- **Cassação da ART** e processo ético no CREA contra o engenheiro
- **Apreensão do veículo** e cancelamento do processo
- **Indenização ao comprador** em caso de revenda
- **Inclusão da oficina e do engenheiro** em rol de fraude do DETRAN

### Quanto tempo leva e quanto custa

| Etapa | Prazo médio | Custo médio |
| --- | --- | --- |
| Reparo do veículo | 30 a 90 dias | Variável conforme dano |
| Vistoria cautelar (PEV) | 1 a 5 dias | R$ 200 a R$ 450 |
| Laudo de engenharia + ART | 5 a 10 dias úteis | R$ 800 a R$ 2.500 |
| Análise do DETRAN | 15 a 60 dias | Taxas estaduais |
| **Total típico** | **2 a 5 meses** | R$ 1.500 a R$ 4.000 (sem reparo) |

Veículos pesados (caminhões, ônibus) e motocicletas com modificação estrutural podem demandar prazo e investimento maiores.

### Reclassificação de monta em São Paulo (SP)

A VSM atua em todo o estado paulista junto ao DETRAN-SP. São Paulo capital, Guarulhos, Osasco, ABC Paulista, Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, Piracicaba, Jundiaí, Santos, Bauru, Marília, Araraquara, São Carlos, Limeira, Americana. Atendemos veículos leves, motocicletas, caminhões, ônibus, vans, máquinas agrícolas e equipamentos de construção. Conhecimento profundo do **fluxo do DETRAN-SP via portal Poupatempo** e dos pontos sensíveis de cada Ciretran.

### Reclassificação de monta em Minas Gerais (MG)

Belo Horizonte, Contagem, Betim, Nova Lima, Sete Lagoas, Uberlândia, Uberaba, Juiz de Fora, Ipatinga, Coronel Fabriciano, Montes Claros, Poços de Caldas, Varginha, Pouso Alegre, Divinópolis, Triângulo Mineiro e Sul de Minas. Atuação consolidada junto ao **DETRAN-MG**.

### Reclassificação de monta no Rio de Janeiro (RJ) e Espírito Santo (ES)

Rio de Janeiro: capital, Niterói, São Gonçalo, Duque de Caxias, Nova Iguaçu, Volta Redonda, Petrópolis, Macaé, Campos. Espírito Santo: Vitória, Vila Velha, Serra, Cariacica, Cachoeiro de Itapemirim, Linhares, São Mateus.

### Por que a VSM Engenharia é referência em reclassificação de monta no Sudeste

- **Engenheiros mecânicos com CREA ativo** e atribuição plena em mecânica veicular
- **Centenas de processos aprovados** em DETRAN-SP, MG, RJ e ES
- **Taxa de aprovação superior a 95%** em primeiro envio
- **Laudo técnico robusto** com fotografias georreferenciadas e medições estruturais
- **ART específica** por veículo, com número de chassi
- **Acompanhamento até a liberação** da restrição, incluindo recurso quando necessário
- **Atendimento integrado** com vistoria cautelar e despachante parceiro
- **Suporte ao revendedor e à seguradora** com pacote completo

### Perguntas frequentes sobre reclassificação de monta

### P: Veículo de grande monta pode ser reclassificado?

> R: Não. Grande monta é destinada a desmonte e venda de peças, conforme legislação. Tentar reclassificar grande monta é fraude documental — crime previsto no art. 311 do Código Penal.

### P: Posso vender meu veículo com restrição de monta?

> R: Sim, mas o comprador precisa estar formalmente ciente da restrição, e o preço de mercado fica significativamente reduzido (geralmente 40-60% do valor da Tabela FIPE). Após reclassificação aprovada, o veículo recupera valor de mercado próximo ao normal.

### P: Quanto tempo leva todo o processo?

> R: De 2 a 5 meses considerando reparo, vistoria, laudo, protocolo e análise do DETRAN. Casos sem reparo (apenas regularização documental) ficam em 30 a 60 dias.

### P: Quem paga as taxas do DETRAN?

> R: O proprietário. As taxas são separadas do honorário do engenheiro e do despachante. Em SP, o conjunto de taxas (vistoria, registro, novo CRV) fica entre R$ 250 e R$ 600 conforme categoria.

### P: O laudo da VSM tem garantia de aprovação?

> R: Trabalhamos com taxa de aprovação superior a 95% em primeiro envio. Quando há indeferimento por exigência adicional do DETRAN, refazemos a complementação sem custo adicional. Garantimos o serviço técnico, não há garantia absoluta porque o ato administrativo é do DETRAN.

### P: Veículo importado tem regra diferente?

> R: Sim. Veículos importados (com Certificado de Importação) podem demandar documentação adicional (DI, BL, declaração do importador). O processo é tecnicamente igual, mas administrativamente mais demorado.

### P: Posso fazer a reclassificação se ainda houver gravame?

> R: Não. Antes do processo, o gravame (alienação fiduciária) precisa ser baixado pelo banco financiador. Esse é um dos itens mais negligenciados que reprovam o processo no DETRAN.

### P: Vocês atendem caminhão, ônibus e moto?

> R: Sim. Atendemos veículos leves (categorias B), motocicletas (A), caminhões e ônibus (C, D, E), vans, micro-ônibus, máquinas agrícolas e equipamentos de construção. Cada categoria tem peculiaridades de inspeção e documentação.

### Próximo passo: chame a VSM para uma consulta gratuita

Se o seu veículo está com restrição de monta no DETRAN, fale com nossos engenheiros antes de tomar qualquer decisão. Avaliamos viabilidade, listamos documentos pendentes, estimamos prazo e custo. Resposta em 24 horas, sem compromisso.

Reclassificação de monta, laudo de engenharia veicular, perícia de veículo sinistrado, vistoria estrutural, ART veicular, regularização DETRAN — VSM Engenharia, parceira de regularização veicular em todo o Sudeste do Brasil.
`;

export default function ReclassificacaoMonta() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reclassificação de Monta — Veículos Sinistrados",
    provider: { "@type": "Organization", name: "VSM Engenharia", url: "https://www.vsmengenharia.com" },
    areaServed: { "@type": "State", name: "Sudeste do Brasil" },
    description: "Reclassificação de monta para veículos sinistrados junto ao DETRAN. Laudo técnico, memorial de cálculo e regularização completa.",
    url: "https://www.vsmengenharia.com/servicos/reclassificacao-de-monta",
  }), []);

  useSEO({
    title: "Reclassificação de Monta: Laudo DETRAN de Sinistrado | VSM",
    description: "Reclassificação de monta de veículo sinistrado: laudo DETRAN, memorial de cálculo e regularização. Engenheiros especializados no Sudeste.",
    jsonLd,
  });

  const [showSeoContent, setShowSeoContent] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % tickerMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-destructive text-destructive-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-2.5 text-center">
          <p className="text-sm font-semibold animate-pulse">{tickerMessages[tickerIndex]}</p>
        </div>
      </div>

      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroOriginal})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/70" />
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Serviço Especializado</span>
                <span className="bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">⭐ 5.0 — Avaliações Google</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.05] text-white">
                Reclassificação{" "}
                <span className="text-cta relative">
                  de Monta
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Pequena · Média · Grande Monta</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                Laudo de recuperabilidade com <strong className="text-white">ART inclusa</strong>. Regularize seu veículo sinistrado.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Eng. CREA Ativo", "ART Inclusa", "Acompanhamento DETRAN", "Todo Sudeste"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-5 w-5 mr-2" /> SOLICITAR ORÇAMENTO GRÁTIS</a>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary font-semibold px-8 h-14 rounded-full border border-white/30 hover:bg-white/90 transition-all">
                  <a href="#como-funciona">Como Funciona →</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-cta/20 flex items-center justify-center"><ShieldAlert className="h-5 w-5 text-cta" /></div>
                  <span className="text-white font-bold text-sm">VEÍCULO SINISTRADO?</span>
                </div>
                <div className="space-y-3">
                  {["Veículo com restrição no DETRAN?", "Precisa de laudo de engenharia?", "Quer regularizar para revender?"].map((q) => (
                    <label key={q} className="flex items-center gap-3 text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                      <div className="h-5 w-5 rounded border border-white/30 flex items-center justify-center shrink-0"><XCircle className="h-3 w-3 text-cta" /></div>
                      {q}
                    </label>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full mt-5 bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-lg">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Regularizar Agora</a>
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((n) => (
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "J" : n === 2 ? "M" : "L"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+250 veículos reclassificados</p>
                    <p className="text-white/60 text-xs">100% aprovação no DETRAN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card border-b border-border relative z-10 -mt-1">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <s.icon className="h-6 w-6 text-cta opacity-70" />
                  <span className="text-3xl md:text-4xl font-black text-cta"><CountUp end={s.value} />{s.suffix}</span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda o Processo</span>
                <h2 className="text-3xl md:text-4xl font-black mb-6">O que é Reclassificação de Monta?</h2>
                <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                  A reclassificação é o processo que permite <strong className="text-foreground">regularizar veículos sinistrados</strong> junto ao DETRAN, mediante laudo técnico de engenharia mecânica.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  Realizamos a perícia técnica completa, emitimos laudo de recuperabilidade com ART, e acompanhamos todo o processo junto ao órgão de trânsito.
                </p>
                <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-destructive mb-1">Atenção: Veículo irregular</h4>
                      <p className="text-sm text-muted-foreground">Circular com veículo sinistrado sem reclassificação é <strong className="text-foreground">infração gravíssima</strong>, sujeito a apreensão, multa e sem cobertura de seguro.</p>
                    </div>
                  </div>
                </div>
                <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Regularizar meu veículo</a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img src={imgVeiculoSinistrado} alt="Veículo sinistrado em processo de reclassificação de monta" className="w-full h-80 md:h-[28rem] object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-cta/20 rounded-2xl p-4 shadow-elevated">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center"><BadgeCheck className="h-6 w-6 text-cta" /></div>
                    <div>
                      <p className="font-black text-lg text-cta">100%</p>
                      <p className="text-xs text-muted-foreground">Aprovação DETRAN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Nossos Serviços Especializados — 4 etapas técnicas */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Nossos Serviços Especializados em Reclassificação de Monta</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Processo técnico completo, com responsabilidade legal de engenheiros credenciados no CREA.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { icon: Search, title: "Análise Preliminar", desc: "Realizamos uma análise detalhada do boletim de acidente (BAT) e das fotos do dia do ocorrido, avaliando a viabilidade de reclassificação do seu carro." },
                { icon: ClipboardCheck, title: "Vistoria no Local", desc: "Agendamos uma vistoria no local do veículo para documentar o estado atual e inspecionar os pontos destacados pelo fiscal na ocasião do acidente." },
                { icon: FileText, title: "Relatório Técnico Completo", desc: "Elaboramos um relatório técnico detalhado conforme as exigências do DETRAN, explicando por que a classificação original está incorreta." },
                { icon: Stamp, title: "Emissão de ART", desc: "Junto ao relatório, emitimos a Anotação de Responsabilidade Técnica (ART), garantindo a responsabilidade legal sobre o serviço prestado." },
                { icon: FolderOpen, title: "Entrada no DETRAN", desc: "Damos entrada no processo de reclassificação junto ao DETRAN, acompanhando todos os trâmites até a regularização final do veículo." },
              ].map((s, i) => (
                <div key={i} className="bg-card rounded-2xl p-7 border-t-4 border-destructive shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-destructive/10 flex items-center justify-center"><s.icon className="h-5 w-5 text-destructive" /></div>
                    <span className="text-xs font-black text-destructive">ETAPA {i+1}</span>
                  </div>
                  <h3 className="font-black text-base mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded-xl">
                <a href="https://wa.me/5511954534057?text=Quero%20an%C3%A1lise%20gratuita%20de%20reclassifica%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                  Solicitar Análise Gratuita Agora <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Galeria — Veículos Atendidos */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Veículos Recuperados pela VSM Engenharia</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Casos reais de reclassificação de monta executados por nossa equipe técnica.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {[
                { src: veiculo1, alt: "Veículo sinistrado avaliado para reclassificação de monta" },
                { src: veiculo2, alt: "Inspeção técnica em veículo com classificação de média monta" },
                { src: veiculoCobalt, alt: "Sedan Chevrolet Cobalt sinistrado em vistoria para reclassificação" },
                { src: veiculo4, alt: "Análise estrutural de veículo para laudo de recuperabilidade" },
                { src: veiculo5, alt: "Documentação fotográfica de danos para reclassificação DETRAN" },
                { src: veiculoMoto, alt: "Motocicleta sinistrada em processo de reclassificação de monta" },
              ].map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all bg-secondary">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Laudo de Recuperabilidade — explicativo */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-card rounded-3xl border shadow-elevated p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center"><FileSignature className="h-6 w-6 text-destructive" /></div>
                <span className="text-destructive font-black text-xs tracking-widest uppercase">Documento Legal</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-5">O que é o Laudo de Recuperabilidade?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                O <strong className="text-foreground">laudo de recuperabilidade</strong>, também conhecido como <strong className="text-foreground">laudo de reclassificação de monta</strong>, é um documento legal essencial para proprietários de veículos que foram classificados com <strong className="text-foreground">dano de grande monta</strong> ou <strong className="text-foreground">dano de média monta</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Este laudo permite que o proprietário ou seu representante legal solicite a reclassificação do dano para a categoria imediatamente inferior, oferecendo uma oportunidade de <strong className="text-foreground">recuperação do veículo</strong> e regularização junto ao DETRAN.
              </p>

              <h3 className="text-xl md:text-2xl font-black mb-5">Classificação dos Danos dos Veículos</h3>
              <div className="grid md:grid-cols-3 gap-5 mb-8">
                {[
                  { tag: "PEQUENA MONTA", classes: "border-success bg-success/5", labelClass: "text-success", title: "Danos Leves", desc: "Permitem que o veículo continue circulando após os reparos. Não há sinistro no documento e o valor do veículo não sofre desvalorização significativa." },
                  { tag: "MÉDIA MONTA", classes: "border-cta bg-cta/5", labelClass: "text-cta", title: "Danos Moderados", desc: "Resultam no registro de sinistro no documento. O veículo pode continuar circulando, mas com desvalorização de 30% a 50% no mercado." },
                  { tag: "GRANDE MONTA", classes: "border-destructive bg-destructive/5", labelClass: "text-destructive", title: "Danos Severos", desc: "Impossibilitam a regularização do veículo para circulação. Nesses casos, o veículo é considerado perda total (PT)." },
                ].map((c) => (
                  <div key={c.tag} className={`rounded-2xl p-6 border-t-4 ${c.classes}`}>
                    <span className={`${c.labelClass} font-black text-xs tracking-widest`}>{c.tag}</span>
                    <h4 className="font-black text-lg mt-2 mb-2">{c.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl md:text-2xl font-black mb-5">Quando o Laudo é Necessário?</h3>
              <p className="text-muted-foreground mb-4">O laudo de recuperabilidade é frequentemente requisitado quando:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "A autoridade policial classifica incorretamente o dano de um veículo após um acidente de trânsito.",
                  "A seguradora realiza reparos em um veículo que, com base nos danos, deveria ser classificado como grande monta — o que pode resultar em um pedido de ressarcimento total.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheck className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-foreground/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Bloco de urgência — Evite perder dinheiro */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-destructive/5 border-2 border-destructive/20 rounded-3xl p-8 md:p-12 text-center">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto mb-5" />
              <h2 className="text-3xl md:text-4xl font-black mb-4">Evite Perder Dinheiro e Tempo!</h2>
              <p className="text-lg text-foreground/80 mb-3 leading-relaxed">
                Muitos veículos são classificados de forma <strong>incorreta como média ou grande monta</strong>, mas na verdade <strong className="text-destructive">podem ser regularizados</strong>.
              </p>
              <p className="text-muted-foreground mb-8">Não deixe um erro burocrático <strong className="text-foreground">tirar valor do seu carro</strong>. Agende sua consultoria gratuita e receba uma análise detalhada sobre a reclassificação do seu veículo.</p>
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded-xl px-10 py-6">
                <a href="https://wa.me/5511954534057?text=Quero%20falar%20com%20um%20engenheiro%20sobre%20reclassifica%C3%A7%C3%A3o" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" /> Quero Falar com um Engenheiro
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="bg-secondary py-20 md:py-24 pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Categorias</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Tipos de Reclassificação</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Atendemos todas as categorias de monta e tipos de veículos.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {vehicleTypes.map((eq) => (
                <div key={eq.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><eq.icon className="h-7 w-7 text-cta" /></div>
                  <h3 className="font-bold text-lg mb-2">{eq.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{eq.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cta"><TrendingUp className="h-3.5 w-3.5" />{eq.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-destructive font-bold text-sm tracking-widest uppercase mb-3 block">Compare</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Com Reclassificação vs. Sem Reclassificação</h2>
            </div>
            <div className="bg-card rounded-2xl border shadow-elevated overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary font-bold text-sm">
                <div className="p-4 md:p-5">Aspecto</div>
                <div className="p-4 md:p-5 text-center bg-destructive/10 text-destructive">❌ Sem Laudo</div>
                <div className="p-4 md:p-5 text-center bg-success/10 text-success">✅ Com VSM</div>
              </div>
              {riskComparison.map((row, i) => (
                <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-card" : "bg-secondary/50"} border-t`}>
                  <div className="p-4 md:p-5 font-semibold">{row.item}</div>
                  <div className="p-4 md:p-5 text-center text-destructive/80">{row.without}</div>
                  <div className="p-4 md:p-5 text-center text-success font-medium">{row.with}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl px-10 py-6 shadow-lg shadow-cta/20">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Shield className="h-5 w-5 mr-2" /> Regularizar Meu Veículo</a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="bg-card py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem é a Reclassificação</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {targetAudience.map((t) => (
                <div key={t.name} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border hover:border-cta/30 transition-colors">
                  <div className="h-9 w-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0"><t.icon className="h-4 w-4 text-cta" /></div>
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary pattern-dots">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Por que Escolher a VSM</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className={`bg-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${b.highlight ? "border-cta/30 ring-1 ring-cta/10 shadow-lg relative" : "shadow-soft"}`}>
                  {b.highlight && <div className="absolute -top-3 left-6 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full">MAIS IMPORTANTE</div>}
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cta/10 to-cta/5 flex items-center justify-center mb-5"><b.icon className="h-6 w-6 text-cta" /></div>
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section id="como-funciona" className="py-20 md:py-24 bg-gradient-elegant text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-diagonal opacity-20" />
          <div className="relative container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Processo Simples</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Do Contato à Regularização em 5 Passos</h2>
            </div>
            <div className="grid md:grid-cols-5 gap-6">
              {processSteps.map((step, i) => (
                <div key={i} className="relative text-center">
                  <div className="h-16 w-16 rounded-2xl bg-cta text-cta-foreground flex items-center justify-center font-black text-xl mx-auto mb-4 shadow-lg shadow-cta/30">{i + 1}</div>
                  {i < processSteps.length - 1 && <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-white/15" />}
                  <step.icon className="h-5 w-5 text-cta mx-auto mb-2" />
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black rounded-xl px-10 py-7 shadow-lg shadow-cta/30 text-base">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Zap className="h-5 w-5 mr-2" /> COMEÇAR AGORA — É GRÁTIS</a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Depoimentos</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">O que Nossos Clientes Dizem</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-secondary rounded-2xl p-7 border relative">
                  <div className="text-cta/20 text-6xl font-serif absolute top-4 right-6 leading-none">"</div>
                  <div className="flex items-center gap-1 mb-4">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-cta text-cta" />)}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">"{t.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-cta font-medium">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Tire suas Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes</h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border px-6 shadow-soft">
                  <AccordionTrigger className="text-left font-bold hover:no-underline py-5">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center mt-10 bg-card rounded-2xl border p-8 shadow-soft">
              <p className="font-bold mb-2">Ainda tem dúvidas?</p>
              <p className="text-sm text-muted-foreground mb-4">Fale com nosso engenheiro especialista.</p>
              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-4 w-4 mr-2" /> Tirar Dúvidas pelo WhatsApp</a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Explore Mais</span>
              <h2 className="text-3xl md:text-4xl font-black">Serviços Relacionados</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {relatedServices.map((s) => (
                <Link key={s.href} to={s.href} className="group flex items-center gap-5 bg-secondary rounded-2xl p-6 border hover:border-cta/30 hover:shadow-elevated transition-all duration-300">
                  <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors"><s.icon className="h-6 w-6 text-cta" /></div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold group-hover:text-cta transition-colors">{s.label}</span>
                    <p className="text-sm text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-cta group-hover:translate-x-1 transition-all shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <BookOpen className="h-8 w-8 text-cta mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-black mb-2">Guia Completo: Reclassificação de Monta</h2>
            <p className="text-muted-foreground">Tudo sobre regularização de veículos sinistrados.</p>
          </div>
          <div className="relative overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: showSeoContent ? "none" : "14rem" }}>
            <SeoGuideContent content={seoContent} />
            {!showSeoContent && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" onClick={() => setShowSeoContent(!showSeoContent)} className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors">
              {showSeoContent ? <>Ler menos <ChevronUp className="h-4 w-4" /></> : <>Ler guia completo <ChevronDown className="h-4 w-4" /></>}
            </Button>
          </div>
        </div>
      </section>

      {/* Guia técnico — links pilar → cluster de blog Reclassificação de Monta */}
      <PillarArticles category="Reclassificação" title="Guia completo de reclassificação de monta" subtitle="Aprofunde nos temas: pequena, média e grande monta, DETRAN-SP/MG/RJ/ES, como tirar sinistro do documento, desvalorização e documentação — artigos escritos pelos engenheiros da VSM." />

      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6"><Zap className="h-4 w-4" /> Avaliação gratuita e sem compromisso</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Precisa regularizar seu veículo sinistrado?</h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">Fale agora com nosso engenheiro e receba um orçamento gratuito para reclassificação.</p>
            <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 hover:shadow-2xl hover:shadow-cta/40 transition-all hover:scale-[1.02]">
              <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-6 w-6 mr-3" /> FALAR COM ENGENHEIRO</a>
            </Button>
            <div className="flex items-center justify-center gap-6 mt-8 text-white/40 text-sm">
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Orçamento grátis</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Resposta em 24h</span>
              <span className="flex items-center gap-1.5"><CircleCheck className="h-4 w-4 text-success" /> Sem compromisso</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
