import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/use-seo";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  Wrench, Eye, Scale, HardHat, Anchor, Zap, Container,
  ShieldAlert, XCircle, CircleCheck, Star,
  Factory, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import PillarArticles from "@/components/PillarArticles";
import heroNR11 from "@/assets/nr11/hero-nr11.jpg";
import imgPonteRolanteMetro from "@/assets/nr11/ponte-rolante-metro.jpg";
import imgCasePonteRolante from "@/assets/nr11/case-ponte-rolante-metro.jpg";
import imgLaudoMunck from "@/assets/nr11/laudo-munck.jpg";
import imgTesteCargaMunck from "@/assets/nr11/teste-carga-munck.jpg";
import imgEmpilhadeira from "@/assets/nr11/empilhadeira-inspecao.jpg";
import imgLP from "@/assets/nr11/liquidos-penetrantes.jpg";
import imgLaudoART from "@/assets/nr11/laudo-art.jpg";

const serviceCards = [
  {
    img: imgLaudoMunck,
    title: "Inspeção de Caminhão Munck",
    desc: "Análise estrutural completa do guindauto, verificação de estabilizadores, lanças e sistema hidráulico conforme NR11 e NR12.",
    tags: ["GUINDAUTO", "MEC", "ESTABILIZADOR"],
  },
  {
    img: imgPonteRolanteMetro,
    title: "Inspeção de Pontes Rolantes",
    desc: "Ensaios não destrutivos (END), medição de flecha, alinhamento de trilhos e verificação de freios para equipamentos de grande porte.",
    tags: ["VISUAL", "TRILHOS", "CARGA"],
  },
  {
    img: imgEmpilhadeira,
    title: "Inspeção de Empilhadeiras",
    desc: "Laudo técnico para empilhadeiras elétricas e a combustão. Testes de garfos, correntes e sistema de elevação para logística segura.",
    tags: ["LOGÍSTICA", "HIDRÁULICA", "SEGURANÇA"],
  },
  {
    img: imgTesteCargaMunck,
    title: "Plano de Rigging",
    desc: "Elaboração de plano de rigging 3D e içamentos de risco. Cálculos precisos para içamentos críticos e movimentação de cargas complexas.",
    tags: ["IÇAMENTO", "CÁLCULO", "3D"],
  },
  {
    img: imgLP,
    title: "Líquidos Penetrantes (LP)",
    desc: "Ensaio não destrutivo para detecção de trincas e descontinuidades superficiais em soldas, ganchos e componentes estruturais críticos.",
    tags: ["END", "SOLDAS", "TRINCAS"],
  },
  {
    img: imgLaudoART,
    title: "Laudos Técnicos e ART",
    desc: "Emissão de Laudo Técnico e ART (Anotação de Responsabilidade Técnica) assinada por engenheiro mecânico credenciado no CREA.",
    tags: ["CREA", "JURÍDICO", "REGULARIZAÇÃO"],
  },
];

const tickerMessages = [
  "⚠️ Operações de içamento sem plano de rigging = risco de acidente fatal",
  "🔴 Equipamentos sem inspeção NR11 podem ser interditados",
  "📋 Seus equipamentos de movimentação estão em dia?",
  "⏰ Agende a inspeção dos seus equipamentos de içamento",
];

const stats = [
  { value: 200, suffix: "+", label: "Equipamentos inspecionados", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Conformidade garantida", icon: Shield },
  { value: 80, suffix: "+", label: "Planos de rigging", icon: Factory },
];

const benefits = [
  { icon: Shield, title: "Conformidade Total", desc: "Adequação completa à NR11 e normas ABNT aplicáveis, evitando multas e interdições.", highlight: true },
  { icon: AlertTriangle, title: "Prevenção de Acidentes", desc: "Planos de rigging detalhados e inspeções que previnem tombamentos, quedas de carga e acidentes fatais." },
  { icon: FileText, title: "Documentação Completa", desc: "Plano de rigging, laudos de inspeção, memoriais de cálculo, relatórios fotográficos e ART." },
  { icon: Clock, title: "Entrega Ágil", desc: "Planos de rigging e laudos entregues em prazos competitivos para não atrasar sua operação." },
  { icon: Award, title: "Engenheiros CREA Ativo", desc: "Profissionais habilitados com experiência em operações de içamento e movimentação de carga." },
  { icon: Scale, title: "ART + Seguro Incluso", desc: "Anotação de Responsabilidade Técnica e seguro de responsabilidade civil em todos os serviços." },
];

const processSteps = [
  { title: "Contato Inicial", desc: "Você entra em contato e nosso engenheiro avalia sua necessidade de inspeção ou plano de rigging.", icon: Phone },
  { title: "Análise da Operação", desc: "Avaliamos tipo de carga, equipamentos disponíveis e condições do local de operação.", icon: Eye },
  { title: "Inspeções e Testes", desc: "Realizamos inspeção técnica dos equipamentos, ensaios não destrutivos e testes de carga em campo.", icon: HardHat },
  { title: "Documentação Técnica", desc: "Entregamos laudos, plano de rigging com cálculos, relatório fotográfico e ART.", icon: FileText },
  { title: "Suporte Contínuo", desc: "Acompanhamos a operação e lembramos das próximas inspeções obrigatórias.", icon: Shield },
];

const equipmentTypes = [
  { icon: Container, title: "Caminhões Munck", desc: "Guindautos e caminhões munck de todas as capacidades", count: "60+ inspecionados" },
  { icon: Anchor, title: "Pontes Rolantes", desc: "Pontes rolantes, pórticos e semi-pórticos industriais", count: "50+ inspecionadas" },
  { icon: HardHat, title: "Empilhadeiras", desc: "Empilhadeiras a combustão, elétricas e retráteis", count: "40+ inspecionadas" },
  { icon: Wrench, title: "Plataformas Elevatórias", desc: "Plataformas articuladas, tesoura e telescópicas", count: "50+ inspecionadas" },
];

const riskComparison = [
  { item: "Multas do MTE", without: "Até R$ 50.000+", with: "Zero multas" },
  { item: "Risco de tombamento", without: "Alto — sem controle", with: "Controlado e documentado" },
  { item: "Queda de carga", without: "Risco permanente", with: "Plano de rigging seguro" },
  { item: "Interdição de equipamento", without: "Operação parada", with: "Equipamento liberado" },
  { item: "Responsabilidade criminal", without: "Gestor responde", with: "Documentação protege" },
  { item: "Seguro de trabalho", without: "Sem cobertura", with: "Válido e ativo" },
];

const targetAudience = [
  { name: "Empresas com caminhões munck", icon: Container },
  { name: "Indústrias com pontes rolantes", icon: Anchor },
  { name: "Operações com empilhadeiras", icon: HardHat },
  { name: "Plataformas elevatórias", icon: Wrench },
  { name: "Empresas de logística pesada", icon: Factory },
  { name: "Construção civil e montagem", icon: HardHat },
  { name: "Indústrias metalúrgicas", icon: Wrench },
  { name: "Empresas portuárias e mineração", icon: Anchor },
];

const testimonials = [
  { name: "Ricardo M.", role: "Gerente de Logística", company: "Transportadora – SP", text: "A VSM fez o plano de rigging e inspeção de todos os nossos guindautos. Documentação impecável e atendimento rápido.", rating: 5 },
  { name: "Ana C.", role: "Coord. de Segurança", company: "Indústria Metalúrgica – MG", text: "Inspeção das pontes rolantes feita com muito profissionalismo. Identificaram problemas que não sabíamos que existiam.", rating: 5 },
  { name: "Paulo S.", role: "Diretor de Operações", company: "Construtora – RJ", text: "O plano de rigging da VSM nos deu total segurança na operação de içamento. Recomendo sem hesitar.", rating: 5 },
];

const faqs = [
  { q: "O que é um plano de rigging?", a: "É um documento técnico que detalha como uma operação de içamento deve ser realizada, incluindo cálculos de carga, posicionamento de equipamentos, acessórios necessários, raios de operação e procedimentos de segurança." },
  { q: "Quais equipamentos precisam de inspeção NR11?", a: "Todos os equipamentos de transporte e movimentação de materiais: empilhadeiras, pontes rolantes, talhas, guindastes, caminhões munck, plataformas elevatórias, guindautos e acessórios de içamento." },
  { q: "Com que frequência devo inspecionar os equipamentos?", a: "A periodicidade depende do tipo de equipamento e intensidade de uso. Em geral, inspeções anuais são recomendadas, mas equipamentos em uso intensivo podem exigir inspeções semestrais." },
  { q: "O plano de rigging é obrigatório?", a: "Sim, para operações de içamento acima de determinados limites de carga e complexidade. Além da obrigatoriedade, é uma prática essencial de segurança que previne acidentes graves." },
  { q: "Quanto custa uma inspeção NR11?", a: "O valor depende da quantidade e tipo de equipamentos. Oferecemos orçamento gratuito e sem compromisso em até 24h." },
  { q: "Vocês fazem inspeção em campo?", a: "Sim. Toda inspeção é realizada no local onde os equipamentos operam, com avaliação das condições reais de uso." },
  { q: "Qual a documentação entregue?", a: "Laudo técnico de inspeção, plano de rigging (quando aplicável), relatório fotográfico, recomendações técnicas e ART registrada no CREA." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo." },
];

const relatedServices = [
  { label: "Inspeção NR13", href: "/servicos/nr13", desc: "Caldeiras, vasos de pressão e tubulações", icon: Shield },
  { label: "Inspeção NR12", href: "/servicos/nr12", desc: "Segurança de máquinas e equipamentos", icon: Shield },
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas", desc: "Inspeções especializadas", icon: Eye },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos", desc: "Projetos e cálculos estruturais", icon: Wrench },
];

const seoContent = `
## NR11 e Plano de Rigging: o guia técnico definitivo para movimentação e içamento de cargas

Movimentar carga é fácil. Movimentar carga **com segurança, repetidamente, em uma planta industrial real, com pessoas embaixo, em condições de vento, com equipamento envelhecido e operador sob pressão de cronograma** é outra história. A NR11 é a norma que separa essas duas realidades. Quem trata o içamento como atividade trivial colhe acidentes graves: queda de carga, tombamento de guindaste, ruptura de cabo, esmagamento de operador. Quem trata como engenharia colhe operação fluida, sem acidente, sem perda patrimonial e sem multa.

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia** com base em mais de 800 inspeções de equipamentos de içamento e centenas de planos de rigging executados em obras críticas do Sudeste — refinaria, siderurgia, montagem industrial, infraestrutura urbana, eólico onshore, óleo & gás. O objetivo é dar à pessoa que assina o documento — ou que confia nele — a base técnica para distinguir um plano de rigging real de uma planilha decorativa.

> NOTA: A NR11 vigente foi atualizada pela **Portaria SEPRT nº 2.318/2020** e aplica-se a transporte, movimentação, armazenagem e manuseio de materiais. Para atividades específicas, ela conversa diretamente com a **NR-18** (construção civil), **NR-12** (segurança em máquinas), **NR-34** (construção naval) e **NR-35** (trabalho em altura).

### O que é a NR11 e qual o seu escopo

A Norma Regulamentadora nº 11 estabelece os requisitos mínimos de segurança para operações de **transporte interno, içamento, armazenagem e manuseio de materiais** dentro do ambiente de trabalho. Cobre:

- **Operações com cabos de aço, cordas, correntes** e outros acessórios de içamento
- **Movimentação por tração mecânica** — guindastes, gruas, pontes rolantes, talhas, pórticos, paus-de-carga
- **Movimentação por tração manual** com auxílio de polias, talhas manuais, alavancas
- **Veículos industriais** — empilhadeiras, paleteiras motorizadas, transpaleteiras, rebocadores
- **Caminhões munck (guindautos)** — equipamentos veiculares com lança hidráulica
- **Plataformas elevatórias** quando associadas à movimentação de materiais
- **Armazenagem** — estiva, empilhamento, rack industrial, segregação de produtos perigosos

Para operações **externas em construção civil**, a NR-18 sobrepõe-se com requisitos adicionais (gruas com licença de instalação, projeto de fundação, plano de cargas).

### Equipamentos cobertos pela NR11 — e o que cada inspeção exige

A inspeção NR11 não é uma atividade única: o escopo varia drasticamente conforme o tipo de equipamento. A tabela abaixo resume os principais equipamentos, periodicidades e exigências de ensaio.

| Equipamento | Periodicidade mínima | Ensaios típicos | Documentação |
| --- | --- | --- | --- |
| Ponte rolante / pórtico | Anual (inspeção completa) + diária (operador) | Visual, END em ganchos e cabos, teste dinâmico de freio | Laudo + ART + Livro de Inspeção |
| Caminhão munck / guindauto | Anual + teste de carga | Visual, LP em soldas críticas, teste de carga 1,1× SWL | Laudo + ART + Certificado |
| Guindaste sobre esteira ou pneus | Anual + teste anual de carga | Visual + UT em pinos + teste estático e dinâmico | Laudo + ART + curvas de carga |
| Grua de obra (NR-18) | Mensal + montagem/desmontagem | Visual, torque de parafusos, ancoragem, alinhamento | PRGM + ART + licença local |
| Empilhadeira | Diária (operador) + semestral (técnica) | Visual, freio, hidráulico, garfos, sistema de elevação | Checklist + Laudo Anual |
| Talha elétrica / manual | Anual | Visual + LP em gancho + teste de carga | Laudo + ART |
| Cabos de aço, cintas, manilhas | Diária + descarte conforme NBR 13541 / NBR 15637 | Visual conforme critério da norma | Registro de inspeção |
| Plataforma elevatória | Anual + diária | Visual, hidráulico, sistemas de segurança, teste de carga | Laudo + ART |

> ALERTA: Inspeção visual sem ensaio em **gancho** é meio caminho para acidente. O gancho é o componente mais solicitado em todo equipamento de içamento — a fissura inicia internamente, na garganta, e só LP ou PM detecta antes que o componente abra.

### Plano de Rigging: o que é, quando é obrigatório e o que precisa conter

Plano de rigging (também chamado plano de içamento, lifting plan ou PRGM) é o **documento técnico de engenharia** que define como uma operação específica de içamento será realizada com segurança. Não é um formulário genérico — é um projeto, com cálculos, croquis, análise de risco e responsabilidade técnica.

O plano de rigging é **obrigatório** em qualquer içamento que envolva:

- **Carga crítica** — equipamento de processo, vaso, transformador, estrutura de grande porte
- **Carga acima de 75% da capacidade nominal** do equipamento de içamento
- **Içamento múltiplo** (dois ou mais equipamentos atuando em conjunto na mesma carga)
- **Içamento próximo a redes elétricas energizadas, ferrovias, vias públicas, edificações ocupadas**
- **Içamento sobre pessoas ou áreas ocupadas** (sempre que possível, evitar)
- **Operações em ambiente classificado** (Ex, atmosfera explosiva)

Conteúdo mínimo de um plano de rigging técnico:

- **Identificação da operação** (cliente, obra, data, número do plano)
- **Caracterização da carga** — peso real, centro de gravidade, dimensões, pontos de içamento, certificados quando aplicável
- **Caracterização do equipamento principal** — guindaste, capacidade, raio de operação, ângulo da lança, gráficos de carga aplicados
- **Acessórios de içamento** — cintas, manilhas, balancim, cabos de retenção (taglines), com SWL e fator de segurança documentados
- **Estudo de posicionamento** — croqui em planta e elevação, com obstáculos, raio de giro, área de exclusão
- **Verificação do solo** — capacidade de suporte, sapatas, nivelamento, estudos geotécnicos quando necessário
- **Análise de interferências** — redes elétricas, edificações, vias, pessoas
- **Análise de risco** específica da operação (APR ou JSA)
- **Procedimento operacional passo a passo**
- **Plano de emergência** — falha mecânica, queda de energia, vento, queda de carga
- **Critérios de paralisação** — vento máximo, visibilidade, chuva, temperatura
- **Identificação da equipe** — sinaleiro, rigger, operador, supervisor, com habilitações
- **ART do engenheiro responsável**, baixada no CREA

### Cálculos críticos do plano de rigging — o que separa engenharia de "feeling"

Quem faz plano de rigging de verdade calcula, anota e justifica. Os cálculos básicos:

#### 1. Peso real da carga
Não confiar em "peso de catálogo". Pesar quando possível, ou calcular pelo desenho com densidade real do material. Erro comum: ignorar acessórios próprios da carga (motor, redutor, óleo, conexões, isolamento).

#### 2. Centro de gravidade (CG)
Determinante para escolha dos pontos de içamento. CG deslocado gera braços de alavanca, sobrecarga em uma das pernas do balancim e instabilidade.

#### 3. Tensão nas pernas da lingada
Para uma lingada simétrica de N pernas com ângulo θ entre a perna e a vertical:
**T = (Peso ÷ N) ÷ cos(θ)**
Com ângulo de 60° entre as pernas, cada perna sustenta ~57% do peso total. Com 90°, sobe para ~71%. Com 120°, vai para ~100% — situação proibida sem balancim.

#### 4. Capacidade líquida do equipamento
A capacidade de catálogo é **bruta**. Da capacidade bruta, subtraem-se: peso do moitão, peso do gancho, peso do cabo de aço suspenso, peso de balancim, peso de cintas. O resultado é a **capacidade líquida disponível** para a carga.

#### 5. Carga / capacidade (utilização)
Operação acima de **75% da capacidade líquida** exige plano de rigging com avaliação especial. Operação acima de **90%** geralmente exige aprovação de engenheiro independente e backup operacional (segundo equipamento em sobreaviso).

#### 6. Reação no solo / sapatas
Em guindastes telescópicos, a reação por sapata pode chegar a 60% do peso total combinado (guindaste + carga + lastro). Solo precisa suportar essa reação com fator de segurança ≥ 1,5. Em piso compactado, geralmente exige-se chapas de distribuição.

### Capacitação de operadores — o item mais ignorado da NR11

Operadores de empilhadeira, ponte rolante, guindaste e munck **precisam de treinamento específico** com carga horária mínima e reciclagem periódica (empilhadeira e ponte rolante a cada 3 anos; guindaste/munck e rigger anualmente). Operador sem certificado é, na prática, o mesmo que máquina sem laudo: a empresa responde objetivamente por qualquer acidente.

O conteúdo programático e as cargas horárias por equipamento estão detalhados em [Treinamento NR11: conteúdo e carga horária](/blog/treinamento-nr11-conteudo-carga-horaria) e em [Validade da NR11: quando renovar o treinamento](/blog/validade-nr11-quando-renovar-treinamento).

### Erros mais comuns em laudos NR11 e planos de rigging

Em auditorias técnicas que realizamos para terceiros, os erros se repetem:

- Plano de rigging **sem cálculo de tensão por perna da lingada**
- Plano sem **gráfico de carga** do guindaste para o raio real da operação
- Capacidade líquida **igual à capacidade bruta** (esquecimento do peso de moitão, balancim, cintas)
- Centro de gravidade da carga **assumido como geométrico** sem verificação
- Plano genérico, copiado, com nome do cliente trocado
- Inspeção de munck **sem teste de carga** ou com teste a 100% (norma exige 110% para confirmação)
- Cabos de aço com critério de descarte ignorado (NBR 13541)
- Ganchos sem ensaio LP/PM em garganta
- Operadores sem certificação válida
- ART não baixada ou em nome de profissional não habilitado em mecânica

### Penalidades pelo descumprimento da NR11

A fiscalização pelo MTE classifica grande parte das infrações como graves ou gravíssimas:

- Multa por equipamento sem laudo (R$ 6.708 a R$ 670.840 — NR-28)
- Interdição imediata do equipamento ou da obra
- Embargo da obra em casos de plano de rigging ausente
- Indenização ao trabalhador acidentado
- Ação regressiva da Previdência cobrando o INSS
- Responsabilidade criminal (lesão corporal culposa, homicídio culposo)
- Inclusão da empresa em rol de reincidentes do MPT
- **Negativa de seguro patrimonial** em caso de queda de carga sobre estrutura

> ALERTA: Em caso de queda fatal de carga, o Ministério Público abre inquérito e exige plano de rigging assinado, ART do engenheiro, certificado dos operadores, laudo do equipamento e registro do briefing pré-operação. Falta de qualquer um desses documentos transforma o caso em homicídio culposo do empregador e do engenheiro responsável.

### Como a VSM conduz inspeção NR11 e elaboração de plano de rigging

#### Inspeção NR11 de equipamentos

1. Análise documental prévia (laudos anteriores, manuais, certificados)
2. Inspeção visual estrutural — chassis, lança, torre, contrapesos, soldas críticas
3. Inspeção visual e END nos pontos críticos (gancho, polias, eixos)
4. Verificação dos sistemas de segurança — limites, freios, válvulas hidráulicas, indicadores de carga
5. Teste dinâmico e de carga (110% conforme aplicável)
6. Avaliação da documentação operacional e capacitação dos operadores
7. Emissão do laudo com fotos, ensaios, recomendações e ART

#### Plano de rigging

1. Reunião técnica com cliente e construtora
2. Coleta de dados: desenho da carga, peso, centro de gravidade, área da operação
3. Levantamento topográfico e geotécnico do local quando necessário
4. Seleção do equipamento principal e cálculos de capacidade
5. Dimensionamento dos acessórios e lingadas
6. Análise de interferências e risco
7. Elaboração do plano em PDF (croquis, gráficos de carga, procedimento, APR)
8. Apresentação e treinamento da equipe operacional
9. Acompanhamento da operação por engenheiro residente quando contratado
10. Relatório pós-operação

### Inspeção NR11 e plano de rigging em São Paulo (SP)

A VSM atende toda a malha industrial paulista. Capital, Guarulhos, Osasco, Barueri, Cotia, ABC Paulista (Santo André, São Bernardo, São Caetano, Diadema, Mauá), Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, Piracicaba, Jundiaí, Santos, Cubatão, Bauru, Marília, Araraquara, São Carlos, Limeira, Americana. Forte atuação em **canteiros de Cubatão, Paulínia, Vale do Paraíba** e **logística e centros de distribuição da Grande São Paulo**.

### Inspeção NR11 em Minas Gerais (MG)

Belo Horizonte, Contagem, Betim, Sete Lagoas, Uberlândia, Uberaba, Juiz de Fora, Ipatinga, Coronel Fabriciano, Timóteo (Vale do Aço), Montes Claros, Poços de Caldas, Varginha, Pouso Alegre, Divinópolis, Triângulo Mineiro e Sul de Minas. Cobertura em **siderurgia do Vale do Aço, mineração** e **Pólo Automotivo de Betim**.

### Inspeção NR11 no Rio de Janeiro (RJ) e Espírito Santo (ES)

Rio de Janeiro: capital, Niterói, São Gonçalo, Duque de Caxias, Itaboraí (COMPERJ), Volta Redonda e Barra Mansa (CSN), Resende (polo automotivo), Macaé e Campos (offshore). Espírito Santo: Vitória, Vila Velha, Serra, Cariacica, Cachoeiro de Itapemirim, Linhares, Aracruz (siderurgia e portos).

### Por que a VSM Engenharia é referência em NR11 no Sudeste

- **Engenheiros mecânicos com CREA ativo** e atribuições para projeto e inspeção de equipamentos de içamento
- **Mais de 800 equipamentos inspecionados** em campo no Sudeste
- **Centenas de planos de rigging** executados em obras de infraestrutura, indústria e energia
- **Inspetores certificados** em ensaios não destrutivos (LP, PM, UT)
- **ART inclusa** em todo serviço, sem custo adicional
- **Acompanhamento operacional** de içamentos críticos por engenheiro residente
- **Suporte técnico contínuo** pós-laudo
- **Atendimento emergencial** em até 48 horas para liberação de equipamentos

### Perguntas frequentes sobre NR11 e plano de rigging

### P: Toda movimentação de carga precisa de plano de rigging?

> R: Não. Operações rotineiras dentro da capacidade nominal e sem fatores críticos podem ser cobertas por procedimento padrão. Planos de rigging são obrigatórios em **operações críticas**: cargas pesadas, lances múltiplos, içamento próximo a obstáculos, cargas de geometria complexa, operações sobre pessoas ou áreas ocupadas.

### P: Quem pode assinar um plano de rigging?

> R: Engenheiro mecânico ou civil com CREA ativo e atribuições compatíveis, com ART específica baixada. Técnico em segurança do trabalho **não tem atribuição** para assinar plano de rigging — pode auxiliar, nunca firmar.

### P: Qual a periodicidade da inspeção NR11?

> R: Para a maioria dos equipamentos a inspeção técnica é **anual**, mas há exigência de **inspeção diária** (pré-operação) feita pelo operador, registrada em checklist. Empilhadeiras geralmente têm inspeção semestral mais detalhada além da anual.

### P: Preciso de teste de carga em todo munck?

> R: Sim. O teste de carga é parte da inspeção anual completa do guindauto, geralmente realizado a 110% da capacidade nominal para confirmação do sistema, ou conforme critério técnico do engenheiro. Munck sem teste de carga **não tem laudo válido**.

### P: O que é SWL e como ele difere de WLL?

> R: SWL (Safe Working Load) e WLL (Working Load Limit) são termos próximos. WLL é o limite operacional de uso seguro do componente conforme o fabricante. SWL pode incorporar fatores adicionais (corrosão, idade, condição) para reduzir o limite efetivo. Em qualquer dúvida, opera-se pelo menor valor.

### P: Qual o fator de segurança aplicado em cabos e cintas?

> R: Cabos de aço para içamento de pessoas: **fator 10**. Cabos para içamento de carga: **fator 5**. Cintas têxteis: **fator 7** (fator de uso). Manilhas e ganchos: **fator 5**. Esses fatores estão definidos em NBRs específicas (13541, 15637) e em normas internacionais (EN, ASME).

### P: Posso usar empilhadeira sem CNH?

> R: Em via pública não. Dentro da planta industrial fechada, a NR-11 exige **treinamento específico documentado**, mas a CNH não é exigência legal explícita. A maioria das empresas exige CNH B como pré-requisito interno por questão de segurança e seguro.

### P: Vocês emitem ART para plano de rigging?

> R: Sim. Todo plano de rigging entregue pela VSM tem ART específica baixada no CREA-SP, em nome do engenheiro mecânico responsável, sem custo adicional para o cliente.

### Próximo passo: chame a VSM para uma análise gratuita

Solicite avaliação gratuita do seu parque de equipamentos de içamento ou orçamento para o seu próximo plano de rigging crítico. Resposta em até 24 horas, com escopo técnico detalhado. Sem compromisso.

Inspeção NR11, plano de rigging, laudo de ponte rolante, inspeção de empilhadeira, inspeção de munck, teste de carga em guindauto, plano de içamento crítico — VSM Engenharia, parceira de segurança em movimentação de cargas em todo o Sudeste do Brasil.
`;

export default function NR11() {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Inspeção NR11 — Rigging, Munck, Ponte Rolante e Empilhadeiras",
    provider: { "@type": "Organization", name: "VSM Engenharia", url: "https://www.vsmengenharia.com" },
    areaServed: { "@type": "State", name: "Sudeste do Brasil" },
    description: "Inspeção NR11 e planos de rigging para caminhão munck, ponte rolante, empilhadeira e plataformas com laudos e ART.",
    url: "https://www.vsmengenharia.com/servicos/nr11",
  }), []);

  useSEO({
    title: "Inspeção NR11 e Plano de Rigging: Munck e Guindauto | VSM",
    description: "Inspeção NR11 e plano de rigging para munck, ponte rolante e empilhadeira. Teste de carga e laudo com ART. Engenheiros CREA no Sudeste.",
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
          style={{ backgroundImage: `url(${heroNR11})` }}
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
                NR11{" "}
                <span className="text-cta relative">
                  Inspeções
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Plano de Rigging · Munck · Ponte Rolante</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                Inspeções técnicas e planos de rigging para operações de içamento com <strong className="text-white">ART inclusa</strong>. Segurança total para movimentação de carga.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Eng. CREA Ativo", "ART Inclusa", "Plano de Rigging", "Todo Sudeste"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm text-white/90 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-success" /> {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-semibold text-base px-8 h-14 rounded-full shadow-[0_6px_20px_-4px_hsl(var(--cta)/0.45)] hover:shadow-[0_8px_28px_-4px_hsl(var(--cta)/0.55)] transition-all hover:scale-[1.02]">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                    <Phone className="h-5 w-5 mr-2" /> SOLICITAR ORÇAMENTO GRÁTIS
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-white text-primary font-semibold px-8 h-14 rounded-full border border-white/30 hover:bg-white/90 transition-all">
                  <a href="#como-funciona">Como Funciona →</a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-cta/20 flex items-center justify-center">
                    <ShieldAlert className="h-5 w-5 text-cta" />
                  </div>
                  <span className="text-white font-bold text-sm">OPERAÇÃO DE IÇAMENTO SEGURA?</span>
                </div>
                <div className="space-y-3">
                  {["Equipamentos sem inspeção?", "Plano de rigging desatualizado?", "Operação sem documentação?"].map((q) => (
                    <label key={q} className="flex items-center gap-3 text-white/80 text-sm cursor-pointer hover:text-white transition-colors">
                      <div className="h-5 w-5 rounded border border-white/30 flex items-center justify-center shrink-0">
                        <XCircle className="h-3 w-3 text-cta" />
                      </div>
                      {q}
                    </label>
                  ))}
                </div>
                <Button asChild size="sm" className="w-full mt-5 bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-lg">
                  <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Resolver Agora</a>
                </Button>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((n) => (
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "R" : n === 2 ? "A" : "P"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+80 planos de rigging elaborados</p>
                    <p className="text-white/60 text-xs">Avaliação 5.0 ⭐ no Google</p>
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
              <div key={s.label} className="text-center group">
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
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda a Norma</span>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">O que é a NR11 e o Plano de Rigging?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                    A NR11 regulamenta o <strong className="text-foreground">transporte, movimentação e manuseio de materiais</strong>. O plano de rigging detalha como operações de içamento devem ser realizadas com segurança.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    Realizamos inspeções em equipamentos de içamento e elaboramos planos de rigging personalizados com cálculos de carga, posicionamento e procedimentos de segurança.
                  </p>
                  <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-5 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-destructive mb-1">Atenção: Riscos em operações de içamento</h4>
                        <p className="text-sm text-muted-foreground">Operações sem plano de rigging podem resultar em <strong className="text-foreground">tombamentos, quedas de carga e acidentes fatais</strong>, além de multas e responsabilização criminal.</p>
                      </div>
                    </div>
                  </div>
                  <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                    <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" /> Solicitar plano de rigging
                    </a>
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elevated h-80 md:h-[28rem]">
                    <img
                      src={imgPonteRolanteMetro}
                      alt="Inspeção NR11 de ponte rolante - VSM Engenharia"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-4 md:-left-8 bg-card border-2 border-cta/20 rounded-2xl p-4 shadow-elevated">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center">
                        <BadgeCheck className="h-6 w-6 text-cta" />
                      </div>
                      <div>
                        <p className="font-black text-lg text-cta">CREA Ativo</p>
                        <p className="text-xs text-muted-foreground">Engenheiros habilitados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="bg-secondary py-20 md:py-24 pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Escopo Completo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Equipamentos que Inspecionamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Cobertura completa para equipamentos de movimentação e içamento.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {equipmentTypes.map((eq) => (
                <div key={eq.title} className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cta/10 to-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <eq.icon className="h-7 w-7 text-cta" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{eq.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{eq.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cta">
                    <TrendingUp className="h-3.5 w-3.5" />{eq.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Nossos Serviços</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Serviços de Inspeção NR11 e Engenharia</h2>
              <p className="text-muted-foreground text-lg">
                Conheça os principais serviços que a VSM Engenharia executa em campo para garantir conformidade, segurança e produtividade nas operações de movimentação de cargas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {serviceCards.map((c) => (
                <div
                  key={c.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 border hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg text-primary leading-snug mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{c.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {c.tags.map((t) => (
                        <span key={t} className="text-[10px] font-bold tracking-wider bg-secondary text-secondary-foreground px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Button
                      asChild
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-lg"
                    >
                      <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                        ENTRAR EM CONTATO
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
              <div>
                <span className="inline-block border border-primary-foreground/30 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-6">
                  Expertise da Nossa Empresa
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 !text-primary-foreground">
                  Case de Sucesso: Inspeção da Maior Ponte Rolante da América Latina
                </h2>
                <div className="flex items-center gap-3 mb-6">
                  <span className="block w-10 h-1 bg-cta rounded" />
                  <span className="text-cta font-bold text-sm tracking-wider uppercase">Cliente: Metrô de São Paulo</span>
                </div>
                <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-8">
                  Desafio de alta complexidade na ampliação da Linha Verde: inspeção técnica de equipamento com capacidade de 45 toneladas. Nossa equipe realizou ensaios não-destrutivos, testes de carga e análise estrutural detalhada, garantindo a segurança de milhares de passageiros.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-2 border-cta pl-4">
                    <div className="text-3xl md:text-4xl font-black mb-1">45 Ton</div>
                    <div className="text-xs font-bold tracking-wider uppercase text-primary-foreground/70">Capacidade Inspecionada</div>
                  </div>
                  <div className="border-l-2 border-cta pl-4">
                    <div className="text-3xl md:text-4xl font-black mb-1">100%</div>
                    <div className="text-xs font-bold tracking-wider uppercase text-primary-foreground/70">Conformidade Técnica</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={imgCasePonteRolante}
                  alt="Inspeção da maior ponte rolante da América Latina - Metrô de São Paulo"
                  className="w-full h-full object-cover aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-destructive font-bold text-sm tracking-widest uppercase mb-3 block">Compare os Riscos</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Com Inspeção NR11 vs. Sem Inspeção</h2>
              <p className="text-muted-foreground text-lg">Veja os riscos de operar sem documentação adequada.</p>
            </div>
            <div className="bg-card rounded-2xl border shadow-elevated overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary font-bold text-sm">
                <div className="p-4 md:p-5">Aspecto</div>
                <div className="p-4 md:p-5 text-center bg-destructive/10 text-destructive">❌ Sem Inspeção</div>
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
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Shield className="h-5 w-5 mr-2" /> Garantir Minha Conformidade</a>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem é a Inspeção NR11</h2>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Por que Escolher a VSM para NR11</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Cada inspeção e plano de rigging é conduzido com rigor técnico máximo.</p>
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
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Do Contato ao Laudo Técnico NR11 em 5 Passos</h2>
              <p className="text-white/60 max-w-xl mx-auto text-lg">Processo ágil e seguro.</p>
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
              <h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes sobre NR11</h2>
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
            <h2 className="text-2xl md:text-3xl font-black mb-2">Guia Completo: NR11 e Plano de Rigging</h2>
            <p className="text-muted-foreground">Tudo sobre inspeção de equipamentos de içamento e movimentação de carga.</p>
          </div>
          <div className="relative overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: showSeoContent ? "none" : "14rem" }}>
            <SeoGuideContent content={seoContent} />
            {!showSeoContent && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" onClick={() => setShowSeoContent(!showSeoContent)} className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors">
              {showSeoContent ? <>Ler menos <ChevronUp className="h-4 w-4" /></> : <>Ler o guia completo sobre NR11 <ChevronDown className="h-4 w-4" /></>}
            </Button>
          </div>
        </div>
      </section>

      {/* Guia técnico — links pilar → cluster de blog NR11 */}
      <PillarArticles category="NR11" title="Guia técnico NR11 e Plano de Rigging" subtitle="Aprofunde nos temas de NR11: laudo de munck, plano de rigging, ponte rolante, empilhadeira, teste de carga e treinamento — artigos escritos pelos engenheiros da VSM." />

      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6"><Zap className="h-4 w-4" /> Avaliação gratuita e sem compromisso</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">Seus equipamentos de içamento estão seguros?</h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">Fale agora com nosso engenheiro e receba um diagnóstico gratuito para sua operação.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 hover:shadow-2xl hover:shadow-cta/40 transition-all hover:scale-[1.02]">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer"><Phone className="h-6 w-6 mr-3" /> FALAR COM ENGENHEIRO</a>
              </Button>
            </div>
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
