import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, ChevronDown, ChevronUp,
  Wrench, Eye, Scale, Cog, Lock, Zap,
  ShieldAlert, XCircle, CircleCheck, Star,
  Factory, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import heroNR12 from "@/assets/nr12/hero-nr12.jpg";
import imgPerimetral from "@/assets/nr12/protecao-perimetral.jpg";
import imgIntertravamento from "@/assets/nr12/sistema-intertravamento.jpg";
import imgCompleta from "@/assets/nr12/protecao-completa.jpg";
import imgIndustrial from "@/assets/nr12/protecao-industrial-maquinas.jpg";

const galleryServices = [
  {
    img: imgPerimetral,
    title: "Proteção Perimetral NR12",
    desc: "Cercamento perimetral robusto com painéis amarelos de alta visibilidade, isolando completamente a zona de perigo de prensas e equipamentos pesados.",
  },
  {
    img: imgIntertravamento,
    title: "Sistema de Intertravamento NR12",
    desc: "Portas de proteção com chaves de segurança e intertravamento elétrico — garantem parada imediata da máquina ao serem abertas.",
  },
  {
    img: imgCompleta,
    title: "Proteção Completa NR12",
    desc: "Sistema integrado de telas, grades e dispositivos de segurança envolvendo toda a máquina para conformidade total.",
  },
  {
    img: imgIndustrial,
    title: "Proteção Industrial de Máquinas",
    desc: "Adequação de linhas industriais completas com proteções estruturadas em parques fabris de médio e grande porte.",
  },
];

const criticalRisks = [
  {
    icon: "💰",
    title: "Multas Pesadas",
    desc: "De R$ 6.708 até R$ 134.730 por máquina não conforme. Uma única fiscalização pode gerar prejuízos milionários para sua empresa.",
    risk: "Risco: Até R$ 134 mil por máquina",
  },
  {
    icon: "⚖️",
    title: "Responsabilização Criminal",
    desc: "Diretores e gestores podem responder civil e criminalmente por acidentes causados por máquinas não adequadas à NR12.",
    risk: "Risco: Processo criminal e prisão",
  },
  {
    icon: "🚨",
    title: "Interdição Total",
    desc: "Paralisação forçada da produção com prejuízos incalculáveis, contratos importantes e clientes estratégicos perdidos.",
    risk: "Risco: Paralisação imediata",
  },
  {
    icon: "⚠️",
    title: "Acidentes Graves",
    desc: "Amputações, esmagamentos e fatalidades causam processos trabalhistas milionários e danos irreparáveis à imagem da empresa.",
    risk: "Risco: Vidas em perigo",
  },
  {
    icon: "📉",
    title: "Perda de Contratos",
    desc: "Multinacionais e grandes empresas exigem conformidade total de seus fornecedores. Sem NR12, você perde oportunidades de negócio.",
    risk: "Risco: Perda de grandes clientes",
  },
];

const realCases = [
  {
    badge: "Caso Crítico",
    badgeColor: "bg-destructive/10 text-destructive",
    title: "Metalúrgica – Grande Porte",
    location: "São Paulo – SP",
    metric: "4 vidas",
    metricLabel: "PROTEGIDAS",
    results: ["Zero acidentes em 2 anos", "Aprovação em auditoria multinacional"],
    challenge: "Prensas hidráulicas sem proteção adequada com risco crítico de amputação detectado em inspeção interna.",
    solution: "Adequação completa com cortinas de luz duplas e sistema de intertravamento redundante, garantindo segurança máxima.",
  },
  {
    badge: "Maior Escala",
    badgeColor: "bg-cta/10 text-cta",
    title: "Indústria Química – Multinacional",
    location: "Rio de Janeiro – RJ",
    metric: "25 máquinas",
    metricLabel: "ADEQUADAS",
    results: ["R$ 5 milhões em multas evitadas", "Certificação internacional mantida"],
    challenge: "25 máquinas não conformes identificadas em auditoria externa com risco de interdição total da planta.",
    solution: "Projeto emergencial com mobilização de equipe dedicada, adequação completa em 45 dias sem parar a produção.",
  },
  {
    badge: "Emergência",
    badgeColor: "bg-success/10 text-success",
    title: "Alimentos – Médio Porte",
    location: "Ribeirão Preto – SP",
    metric: "R$ 2,8 mi",
    metricLabel: "ECONOMIZADOS",
    results: ["Interdição evitada", "Operação normalizada"],
    challenge: "Notificação de interdição com prazo de 15 dias e pena de interdição total do setor produtivo.",
    solution: "Mobilização imediata com trabalho em turnos, adequação completa e validação dentro do prazo legal.",
  },
];

const tickerMessages = [
  "⚠️ Máquinas sem adequação NR12 = risco de interdição imediata",
  "🔴 Acidentes com máquinas podem gerar responsabilidade criminal",
  "📋 Sua empresa está com a adequação NR12 em dia?",
  "⏰ Agende sua análise de risco antes da próxima fiscalização",
];

const stats = [
  { value: 300, suffix: "+", label: "Máquinas adequadas", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Conformidade garantida", icon: Shield },
  { value: 120, suffix: "+", label: "Empresas atendidas", icon: Factory },
];

const benefits = [
  { icon: Shield, title: "Conformidade Total", desc: "Adequação completa de máquinas e equipamentos à NR12, evitando multas, interdições e paralisação da produção.", highlight: true },
  { icon: AlertTriangle, title: "Prevenção de Acidentes", desc: "Análise de risco detalhada que identifica pontos críticos e elimina condições inseguras antes que causem acidentes." },
  { icon: FileText, title: "Documentação Completa", desc: "Relatórios técnicos com APR, memorial descritivo, inventário de máquinas, procedimentos de segurança e ART." },
  { icon: Clock, title: "Entrega Ágil", desc: "Relatórios e projetos de adequação entregues em prazos competitivos, sem comprometer a qualidade técnica." },
  { icon: Award, title: "Engenheiros CREA Ativo", desc: "Profissionais habilitados com especialização em segurança de máquinas e análise de risco." },
  { icon: Scale, title: "ART + Seguro Incluso", desc: "Anotação de Responsabilidade Técnica e seguro de responsabilidade civil em todos os serviços." },
];

const processSteps = [
  {
    title: "Diagnóstico Gratuito e Completo",
    desc: "Análise técnica detalhada da situação atual de suas máquinas e equipamentos, identificando todas as não conformidades críticas e prioritárias.",
    icon: Eye,
    items: ["Visita técnica in loco", "Levantamento fotográfico completo", "Identificação de não conformidades", "Proposta técnica personalizada"],
  },
  {
    title: "Apreciação de Risco (HRN)",
    desc: "Levantamento técnico completo com metodologia HRN certificada internacionalmente, reconhecida por auditorias e fiscalizações.",
    icon: ShieldAlert,
    items: ["Análise de riscos por máquina", "Classificação método HRN", "Priorização de ações", "Emissão de ART técnica"],
  },
  {
    title: "Projetos Técnicos Detalhados",
    desc: "Desenvolvimento de projetos mecânicos, elétricos e de automação personalizados para cada máquina e processo produtivo.",
    icon: Wrench,
    items: ["Projetos mecânicos 3D", "Diagramas elétricos completos", "Especificação de dispositivos", "Aprovação do cliente"],
  },
  {
    title: "Fabricação e Instalação",
    desc: "Execução com tecnologia de ponta, fabricação própria e instalação por profissionais habilitados e experientes.",
    icon: Cog,
    items: ["Fabricação interna controlada", "Instalação profissional", "Testes de segurança", "Comissionamento completo"],
  },
  {
    title: "Validação e Documentação",
    desc: "Entrega completa com toda documentação legal, treinamentos obrigatórios e acesso ao portal do cliente.",
    icon: Shield,
    items: ["Laudo técnico com ART", "Manuais atualizados", "Treinamento de operadores", "Portal do cliente ativo"],
  },
];

const equipmentTypes = [
  { icon: Cog, title: "Prensas e Injetoras", desc: "Prensas hidráulicas, mecânicas e injetoras de plástico", count: "80+ adequadas" },
  { icon: Wrench, title: "Tornos e Fresadoras", desc: "Tornos CNC e convencionais, fresadoras e centros de usinagem", count: "70+ adequados" },
  { icon: Lock, title: "Serras e Guilhotinas", desc: "Serras de fita, circulares, guilhotinas e cisalhadoras", count: "60+ adequadas" },
  { icon: Factory, title: "Equipamentos Diversos", desc: "Esteiras, misturadores, calandras, dobradeiras e mais", count: "90+ adequados" },
];

const riskComparison = [
  { item: "Multas do MTE", without: "Até R$ 50.000+", with: "Zero multas" },
  { item: "Risco de acidente", without: "Alto — sem controle", with: "Controlado e documentado" },
  { item: "Interdição de máquinas", without: "Produção parada", with: "Operação garantida" },
  { item: "Responsabilidade criminal", without: "Gestor responde", with: "Documentação protege" },
  { item: "Seguro de trabalho", without: "Sem cobertura", with: "Válido e ativo" },
  { item: "Produtividade", without: "Paradas frequentes", with: "Operação contínua" },
];

const targetAudience = [
  { name: "Indústrias com parque de máquinas", icon: Factory },
  { name: "Setor alimentício e automotivo", icon: Cog },
  { name: "Indústrias metalúrgicas e mecânicas", icon: Wrench },
  { name: "Empresas preparando-se para auditorias", icon: Shield },
  { name: "Indústrias plásticas e químicas", icon: AlertTriangle },
  { name: "Setor têxtil e de embalagens", icon: Factory },
  { name: "Indústrias de papel e celulose", icon: FileText },
  { name: "Empresas em expansão ou modernização", icon: TrendingUp },
];

const testimonials = [
  { name: "Marcos L.", role: "Gerente Industrial", company: "Metalúrgica – SP", text: "A VSM fez a adequação NR12 de todo nosso parque de máquinas. Passamos na fiscalização sem nenhuma pendência.", rating: 5 },
  { name: "Juliana R.", role: "Coord. de Segurança", company: "Indústria Alimentícia – MG", text: "Profissionais extremamente competentes. Identificaram riscos que não imaginávamos. O projeto de proteções ficou excelente.", rating: 5 },
  { name: "Eduardo P.", role: "Diretor de Operações", company: "Indústria Plástica – SP", text: "Atendimento rápido e documentação impecável. Recomendo a VSM para qualquer empresa que precise adequar máquinas.", rating: 5 },
];

const faqs = [
  { q: "A NR12 se aplica a quais tipos de máquinas?", a: "A NR12 se aplica a todas as máquinas e equipamentos utilizados no trabalho, desde prensas, tornos e fresadoras até serras, injetoras, guilhotinas, esteiras, misturadores e qualquer equipamento que ofereça risco ao operador." },
  { q: "Preciso adequar máquinas antigas?", a: "Sim. A NR12 exige que todas as máquinas, independente da idade ou fabricante, estejam em conformidade com os requisitos de segurança. Máquinas antigas geralmente precisam de mais adequações." },
  { q: "Qual a documentação necessária para NR12?", a: "Inventário de máquinas atualizado, Análise Preliminar de Risco (APR) de cada máquina, manual de instruções, procedimentos de segurança, certificados de adequação e ART do responsável técnico." },
  { q: "Quanto custa a adequação NR12?", a: "O valor depende da quantidade de máquinas, tipo de equipamento e nível de adequação necessário. Oferecemos orçamento gratuito e sem compromisso em até 24h." },
  { q: "Quanto tempo leva para adequar uma máquina?", a: "O prazo varia conforme a complexidade. A análise de risco e relatório técnico levam de 5 a 15 dias úteis. Projetos de proteções podem levar de 15 a 30 dias." },
  { q: "O que acontece se não adequar as máquinas?", a: "Consequências graves: multas pelo Ministério do Trabalho, interdição das máquinas, paralisação da produção, responsabilização civil e criminal do gestor em caso de acidentes." },
  { q: "Vocês fazem o projeto das proteções?", a: "Sim. Desenvolvemos projetos completos de proteções físicas, dispositivos de segurança, intertravamentos e sistemas de parada de emergência, com memorial de cálculo e ART." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo. Cobertura completa nas principais regiões industriais." },
];

const relatedServices = [
  { label: "Inspeção NR13", href: "/servicos/nr13", desc: "Caldeiras, vasos de pressão e tubulações", icon: Shield },
  { label: "NR11 / Inspeções e Plano de Rigging", href: "/servicos/nr11", desc: "Movimentação de carga e içamento", icon: Wrench },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos", desc: "Projetos e cálculos estruturais", icon: Cog },
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas", desc: "Inspeções especializadas", icon: Eye },
];

const seoContent = `
## Adequação NR12: o guia técnico definitivo para segurança de máquinas e equipamentos

A NR12 é, ao mesmo tempo, a norma mais cara, mais negligenciada e mais decisiva da segurança industrial brasileira. Cara porque exige investimento em proteções físicas, sistemas de comando e engenharia. Negligenciada porque grande parte do parque fabril nacional opera com máquinas adquiridas antes de 2010, sem os dispositivos exigidos hoje. Decisiva porque, segundo dados consolidados da Previdência Social, **mutilações de mãos e dedos em prensas, injetoras, calandras e máquinas com partes móveis acessíveis representam o maior volume de afastamentos por acidente de trabalho** no setor industrial.

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia** com base em centenas de adequações realizadas em indústrias do Sudeste — de pequenas metalúrgicas com tornos universais a grandes plantas automotivas com células robotizadas. O objetivo é claro: explicar com profundidade técnica como adequar máquinas à NR12 sem parar a produção, sem investimento desperdiçado e sem laudo de fachada.

> NOTA: A NR12 vigente foi consolidada pela **Portaria SEPRT nº 916/2019** e suas atualizações posteriores. Toda análise de risco e projeto de adequação deve referenciar essa redação. Laudos baseados na versão de 2010 são tecnicamente desatualizados.

### O que é a NR12 e qual o seu objetivo real

A Norma Regulamentadora nº 12 trata da segurança no trabalho em máquinas e equipamentos, em todas as fases do ciclo de vida: projeto, fabricação, importação, comercialização, instalação, utilização, manutenção, modificação e desativação. Ela aplica-se a praticamente toda máquina industrial — de uma serra-fita de marcenaria até uma linha completa de envase asséptico farmacêutico.

O objetivo da norma não é "burocratizar a fábrica". É algo muito mais direto: **eliminar ou controlar os perigos mecânicos, elétricos, ergonômicos, térmicos e químicos** associados ao uso de máquinas, garantindo que nenhum trabalhador seja morto ou mutilado por uma falha de projeto, de proteção ou de procedimento.

A NR12 trabalha sobre a hierarquia clássica de controle de riscos:

1. **Eliminar** o perigo na concepção (engenharia inerentemente segura)
2. **Substituir** processo perigoso por processo menos perigoso
3. **Proteger** com barreiras físicas e dispositivos de segurança
4. **Sinalizar e treinar**
5. **Equipamento de proteção individual (EPI)** apenas como última camada

Quem inverte essa hierarquia — começa por EPI e ignora proteção coletiva — está fora da NR12, ponto.

### Quem precisa cumprir a NR12

Praticamente todo empregador no Brasil que opere máquinas e equipamentos. A norma não distingue porte, faturamento ou setor. Aplica-se a:

- Indústrias **metalúrgicas e metalmecânicas** (prensas, dobradeiras, guilhotinas, tornos, fresadoras, centros de usinagem)
- Indústrias **automotivas e autopeças** (linhas robotizadas, células de soldagem, prensas de estampagem, injetoras de plástico)
- Indústrias **alimentícias e de bebidas** (envasadoras, encaixotadoras, fatiadoras, moedores, misturadores, paletizadoras)
- Indústrias **plásticas e químicas** (injetoras, sopradoras, extrusoras, calandras)
- Indústrias **têxteis** (teares, cardas, urdideiras)
- Indústrias **de papel e celulose** (cortadeiras, calandras, rebobinadeiras)
- **Madeireiras e marcenarias** (serra-fita, esquadrejadeira, plaina, tupia)
- **Construção civil e canteiros** (betoneiras, serra circular, pranchas-guincho, gruas)
- **Logística e movimentação** (paletizadores automáticos, transportadores de correia)

> ALERTA: Máquinas usadas, importadas, recondicionadas ou doadas **não são exceção**. Se a máquina entrou na sua planta após dezembro de 2010, ela precisa estar adequada ao Anexo XI da NR12 desde o primeiro dia de operação.

### Hierarquia de controle e zonas de perigo

Toda análise NR12 começa pelo mapeamento das **zonas de perigo** da máquina: ponto de operação (onde a ferramenta toca a peça), partes móveis acessíveis (engrenagens, polias, correias, eixos, fusos), zonas de prensagem, esmagamento, corte, perfuração, projeção e enrolamento. Para cada zona, define-se a **proteção adequada**: fixa, móvel intertravada, ajustável, distanciamento ou dispositivo eletrosensitivo.

A escolha do tipo de proteção segue a **ABNT NBR 14153** (categorias de segurança B, 1, 2, 3 e 4), a **EN ISO 13849-1** (níveis de desempenho PL a, b, c, d, e) e a **EN IEC 62061** (SIL 1 a 3). Quem não trabalha com essas normas referenciadas está fazendo "achismo de proteção", e isso reprova em qualquer auditoria.

### Análise de risco (APR / HRN): o ponto de partida obrigatório

Nenhuma adequação NR12 começa pela compra de cortina de luz. Começa pela **análise de risco documentada**, máquina por máquina, perigo por perigo. A NR12 menciona explicitamente a obrigatoriedade da análise; a ABNT NBR ISO 12100 detalha a metodologia.

Os métodos mais usados em campo:

| Método | Sigla | Foco | Aplicação típica |
| --- | --- | --- | --- |
| Análise Preliminar de Risco | APR | Identificação qualitativa de perigos | Etapa inicial de qualquer projeto |
| Hazard Rating Number | HRN | Score quantitativo (frequência × probabilidade × severidade × exposição) | Priorização de investimento |
| What-If | WI | Brainstorming estruturado de cenários | Linhas complexas e processos novos |
| FMEA de Segurança | FMEA-S | Modos de falha de componentes de segurança | Validação de circuitos categoria 3 e 4 |
| Análise por Categoria (NBR 14153) | — | Definição de categoria de comando exigida | Especificação de relés, CLPs e cortinas |

> DICA: Exija que cada perigo identificado tenha **HRN antes** e **HRN depois** da medida de controle. Um relatório que só descreve perigos sem quantificar redução de risco não atende ao espírito da NR12 e não sustenta defesa em auditoria.

### As cinco famílias de medidas de controle exigidas pela NR12

Toda solução de adequação cabe em cinco categorias. Boa engenharia **combina** várias delas — nunca depende de uma só.

#### 1. Proteções fixas
Grades, carenagens, capôs, painéis e tampas que só podem ser removidos com ferramenta. Aplicação ideal em zonas de perigo de **acesso pouco frequente** (manutenção, lubrificação, limpeza programada). Exigência de resistência mecânica conforme NBR ISO 14120.

#### 2. Proteções móveis com intertravamento
Portas, tampas e barreiras com sensor de posição (chave de segurança magnética, mecânica ou eletrônica codificada). Quando abertas, **interrompem o comando da máquina** com tempo de resposta compatível com a distância de aproximação. Aplicação em zonas de troca de ferramenta, ajuste e produção em pequenos lotes.

#### 3. Dispositivos eletrosensitivos
Cortinas de luz, scanners de área a laser, tapetes sensíveis, sensores 3D. Permitem proteção sem barreira física, ideais para alimentação manual, robôs colaborativos e células de produção. Exigem dimensionamento de **distância de segurança** segundo a NBR 13855 (S = K × T + C).

#### 4. Sistemas de comando de segurança
Relés de segurança, CLPs de segurança (Pilz, Sick, Siemens Safety, Omron), botoeiras de emergência (cogumelo amarelo/vermelho de retenção mecânica), comandos bimanuais. **A categoria de segurança do circuito (B/1/2/3/4) precisa ser justificada pela análise de risco**, não escolhida pelo preço da peça.

#### 5. Procedimentos, sinalização e treinamento
Procedimentos operacionais padronizados (POP), bloqueio e etiquetagem de energia (LOTO conforme NR-10), sinalização visível em português, programa de capacitação dos operadores. Última camada — nunca a primeira.

### Categorias de segurança e nível de desempenho — a tabela que ninguém te explica

Esta é a tabela que diferencia uma adequação real de uma "adequação de fachada". A categoria do circuito de segurança precisa ser **dimensionada pelo risco**, e há jurisprudência consolidada de auditores fiscais reprovando categoria 1 onde a análise pediu categoria 3.

| Categoria (NBR 14153) | PL equivalente (ISO 13849-1) | Falha simples gera perigo? | Aplicação típica |
| --- | --- | --- | --- |
| B | a | Sim | Risco baixíssimo, lesões reversíveis leves |
| 1 | b/c | Sim, mas com componentes bem testados | Risco baixo |
| 2 | c | Detecta falha em check periódico | Risco médio com proteção adicional |
| 3 | d | Falha simples não gera perigo, é detectada | Risco alto — maioria das máquinas industriais |
| 4 | e | Falhas múltiplas detectadas, segurança preservada | Risco altíssimo — prensas, robôs, linhas automatizadas |

A esmagadora maioria das prensas mecânicas, injetoras e máquinas com risco de amputação cai em **categoria 3 (PL d)**. Soluções com chave fim-de-curso comum, relé eletromecânico convencional ou contator sem monitoramento **não atendem**.

### Adequação NR12 sem parar a produção: é possível?

Sim, mas exige planejamento. A VSM aplica metodologia em três frentes paralelas:

- **Frente de engenharia (off-line)** — análise de risco, projeto mecânico das proteções, esquema elétrico do circuito de segurança, lista de materiais. Não impacta produção.
- **Frente de pré-montagem (off-line)** — fabricação das proteções no fornecedor, programação de CLP de segurança, montagem de painéis. Não impacta produção.
- **Frente de instalação (com janela)** — instalação física na máquina, integração elétrica, comissionamento, validação. Realizada em **paradas programadas curtas**: turno noturno, fins de semana, paradas de manutenção mensal.

Em adequações típicas de uma planta de 30 a 50 máquinas, conseguimos reduzir o tempo total de parada a **menos de 8% do cronograma calendário**, mantendo o atendimento ao cliente.

### Comparativo: adequação NR12 conformista × adequação NR12 técnica

| Aspecto | Adequação conformista | Adequação técnica VSM |
| --- | --- | --- |
| Análise de risco | Genérica, copiada para várias máquinas | APR + HRN específicos por máquina, antes e depois |
| Categoria de comando | Sempre B ou 1 (mais barato) | Dimensionada por análise (geralmente 3, com PL d) |
| Cortinas de luz | Modelo único para tudo | Especificação por resolução (R 14, 30 ou 40 mm) e distância |
| Botão de emergência | Botão simples | Cogumelo de retenção mecânica com monitoramento |
| Painel de comando | Reaproveitado | Reformado com relé/CLP de segurança certificado |
| Documentação | Laudo de 5 páginas | Dossiê técnico + ART + manual operacional + treinamento |
| Treinamento dos operadores | Não incluído | Incluído, com lista de presença e avaliação |

### Documentação obrigatória da NR12

Toda máquina adequada precisa ter o **dossiê técnico** disponível para fiscalização. Sem ele, a adequação física não vale.

- **Inventário das máquinas** com identificação única, fabricante, ano, número de série, localização
- **Manual de instruções em português** (Anexo I da NR12) — fornecimento, operação, manutenção, riscos
- **Análise de risco** documentada, com HRN antes/depois e medidas de controle
- **Projeto técnico das proteções** (mecânico e elétrico) com ART do engenheiro responsável
- **Esquema elétrico do circuito de segurança** atualizado e disponível na máquina
- **Procedimentos operacionais (POP)**, de manutenção e de emergência
- **Registro de capacitação dos operadores** conforme item 12.135 da NR12
- **Registro de inspeção e manutenção preventiva** dos dispositivos de segurança

### Erros mais comuns na adequação NR12 — e como evitá-los

Em mais de 200 inspeções de auditoria que realizamos para terceiros, esses são os erros que aparecem em quase todas as plantas:

- Cortina de luz instalada **dentro da distância de segurança** (operador alcança a zona de perigo antes do equipamento parar)
- Chave de segurança comum em vez de codificada (operador anula com fita adesiva ou imã)
- Relé de segurança com canal duplo monitorado, mas conectado a um único contator (anula a redundância)
- Botão de emergência com retorno por mola em vez de retenção mecânica
- Proteção fixa removível sem ferramenta (parafuso borboleta)
- Painel de comando aberto por operador para "destravar" a máquina
- Reset automático após ciclo seguro (a NR12 exige reset manual fora da zona de perigo)
- Treinamento dado pelo "colega mais experiente" sem registro formal nem conteúdo programático

### Penalidades pelo descumprimento da NR12

Auditoria do MTE em máquina sem proteção adequada gera **interdição imediata** do equipamento (Auditor Fiscal lacra a chave geral). Em caso de acidente, o cenário é catastrófico:

- Multa administrativa por máquina irregular (R$ 6.708 a R$ 670.840 — NR-28)
- Interdição da máquina ou da planta
- Suspensão do alvará de funcionamento
- Indenização cível ao trabalhador (danos materiais, morais e estéticos)
- Ação regressiva da Previdência Social cobrando o INSS pago ao acidentado
- Responsabilidade criminal (lesão corporal culposa, art. 129 §6º CP)
- Inclusão da empresa no rol de empregadores reincidentes do MPT

> ALERTA: Em acidente com mutilação, o MPT entra obrigatoriamente com Termo de Ajustamento de Conduta exigindo adequação **integral da planta** em até 12 meses, com multa diária por descumprimento.

### Como a VSM conduz uma adequação NR12, do diagnóstico à entrega

1. **Diagnóstico inicial gratuito** — visita técnica, levantamento das máquinas, cálculo preliminar de investimento e prazo
2. **Inventário detalhado e priorização** — classificação por HRN para investir primeiro nas máquinas de maior risco
3. **Análise de risco máquina-a-máquina** — APR + HRN, com fotos e croquis
4. **Projeto técnico** — mecânico (proteções) e elétrico (circuito de segurança), com ART
5. **Especificação e cotação de materiais** — em parceria com fornecedores certificados (Pilz, Sick, Schmersal, Allen-Bradley, etc.)
6. **Pré-montagem em fornecedor** — proteções e painéis montados off-line
7. **Instalação em janela programada** — minimizando parada produtiva
8. **Comissionamento e teste** — validação de tempo de resposta, distância de segurança, integridade de circuito
9. **Treinamento dos operadores e mantenedores**
10. **Entrega do dossiê técnico** e plano de manutenção dos dispositivos de segurança

### Adequação NR12 em São Paulo (SP)

A VSM Engenharia atende todo o estado paulista. São Paulo capital, Guarulhos, Osasco, Barueri, **ABC Paulista** (Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá), Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, Piracicaba, Jundiaí, Indaiatuba, Vinhedo, Itu, Salto, Santos, Cubatão, Bauru, Marília, Araraquara, São Carlos, Limeira, Americana, Sumaré, Hortolândia. Forte presença em **polos automotivos do Vale do Paraíba**, **química e plástica de Cubatão**, **alimentício de Campinas e interior**.

### Adequação NR12 em Minas Gerais (MG)

Belo Horizonte, Contagem, Betim, Nova Lima, Sete Lagoas, Uberlândia, Uberaba, Juiz de Fora, Governador Valadares, Ipatinga, Coronel Fabriciano, Timóteo, Montes Claros, Poços de Caldas, Varginha, Pouso Alegre, Passos, Patos de Minas, Divinópolis, Triângulo Mineiro e Sul de Minas. Cobertura forte em **Pólo Automotivo de Betim** (FCA, Iveco e cadeia de autopeças).

### Adequação NR12 no Rio de Janeiro (RJ) e Espírito Santo (ES)

Rio de Janeiro: capital, Niterói, São Gonçalo, Duque de Caxias, Nova Iguaçu, Volta Redonda, Barra Mansa, Resende (polo automotivo), Macaé, Campos. Espírito Santo: Vitória, Vila Velha, Serra, Cariacica, Cachoeiro de Itapemirim, Linhares, Aracruz.

### Por que a VSM Engenharia é referência em NR12 no Sudeste

- **Engenheiros mecânicos com CREA ativo** e atribuições para projeto de máquinas e segurança
- **Mais de 1.500 máquinas adequadas** em campo no Sudeste
- **Parceria técnica com fornecedores certificados** (Pilz, Sick, Schmersal, Allen-Bradley)
- **Análise de risco com metodologia HRN auditável**
- **Projetos com ART** específica por contrato, baixada no CREA
- **Adequação executada em janelas curtas** sem comprometer produção
- **Treinamento dos operadores** incluído no escopo
- **Garantia técnica** dos dispositivos instalados e do circuito de segurança

### Perguntas frequentes sobre a adequação NR12

### P: Toda máquina antiga precisa ser adequada?

> R: Sim. A NR12 não tem cláusula de "direito adquirido". Toda máquina em uso, independentemente da data de fabricação, precisa atender aos requisitos vigentes. O que muda é o **nível de exigência**: máquinas mais antigas frequentemente precisam de retrofit completo do sistema de comando.

### P: Posso adequar minha máquina sem parar a produção?

> R: Quase sempre sim. A análise de risco e o projeto rodam off-line. A pré-montagem das proteções e do painel também. A instalação física exige janela, mas costuma ser feita em paradas de manutenção noturnas ou de fim de semana, com poucas horas por máquina.

### P: Preciso de ART para adequação NR12?

> R: Sim. A análise de risco e o projeto técnico das proteções e do circuito de segurança são responsabilidade técnica de engenheiro habilitado (mecânico, eletricista ou de segurança), com ART específica baixada no CREA. Adequação sem ART **não tem validade legal**.

### P: Cortina de luz substitui grade?

> R: Em muitos casos sim, mas depende da análise de risco. Cortina é ideal para alimentação manual frequente. Grade é ideal para zonas de acesso esporádico. A escolha **não é estética** — ela vem do estudo de exposição e severidade.

### P: Quanto custa adequar uma máquina à NR12?

> R: Varia muito. Uma furadeira de bancada pode ser adequada por R$ 800 (proteção do mandril e botão de emergência). Uma prensa hidráulica de 200 toneladas pode demandar R$ 25.000 (cortina de luz, comando bimanual, painel novo, intertravamento). Uma linha automatizada pode ultrapassar R$ 200.000. Solicite diagnóstico gratuito para orçamento real.

### P: O que é mais cobrado em fiscalização do MTE?

> R: Em ordem de frequência: distância de segurança incorreta, ausência de análise de risco documentada, categoria de comando inadequada, manual em português ausente, falta de capacitação dos operadores e ausência de POP de manutenção segura.

### P: Adequação NR12 vale para máquina nova importada?

> R: Sim. A NR12 obriga que toda máquina **comercializada, importada ou cedida** no Brasil atenda à norma. Compre máquina importada apenas com declaração de conformidade NR12 — ou orce a adequação no momento da compra.

### Próximo passo: chame a VSM para um diagnóstico gratuito

Solicite um diagnóstico técnico gratuito do seu parque de máquinas: nossa equipe visita a planta, faz inventário rápido, prioriza máquinas por risco e devolve um plano técnico-orçamentário em até 5 dias úteis. Sem compromisso, sem custo.

Adequação NR12, análise de risco, APR, HRN, projeto de proteções, dispositivos de segurança, retrofit de painel — VSM Engenharia, parceira de conformidade e segurança industrial em todo o Sudeste do Brasil.
`;

export default function NR12() {
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
      {/* Urgency ticker */}
      <div className="bg-destructive text-destructive-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-2.5 text-center">
          <p className="text-sm font-semibold animate-pulse">{tickerMessages[tickerIndex]}</p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroNR12})` }}
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
                Adequação{" "}
                <span className="text-cta relative">
                  NR12
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Máquinas · Equipamentos · Proteções</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                Análise de risco (APR), relatórios técnicos e projetos de adequação com <strong className="text-white">ART inclusa</strong>. Proteção total para sua operação.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {["Eng. CREA Ativo", "ART Inclusa", "Atendimento 24h", "Todo Sudeste"].map((t) => (
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
                  <span className="text-white font-bold text-sm">SUAS MÁQUINAS ESTÃO SEGURAS?</span>
                </div>
                <div className="space-y-3">
                  {["Máquinas sem proteção adequada?", "APR desatualizada?", "Fiscalização agendada?"].map((q) => (
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
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "M" : n === 2 ? "J" : "E"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+120 empresas confiam na VSM</p>
                    <p className="text-white/60 text-xs">Avaliação 5.0 ⭐ no Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card border-b border-border relative z-10 -mt-1">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <s.icon className="h-6 w-6 text-cta opacity-70" />
                  <span className="text-3xl md:text-4xl font-black text-cta">
                    <CountUp end={s.value} />{s.suffix}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que é */}
      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda a Norma</span>
                  <h2 className="text-3xl md:text-4xl font-black mb-6">O que é a Adequação NR12?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                    A NR12 estabelece requisitos mínimos para prevenção de acidentes com <strong className="text-foreground">máquinas e equipamentos industriais</strong>, abrangendo proteções, dispositivos de segurança e procedimentos operacionais.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    Realizamos análises de risco completas (APR), elaboramos relatórios técnicos e desenvolvemos projetos de adequação para que suas máquinas operem em total conformidade.
                  </p>

                  <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-5 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-destructive mb-1">Atenção: Riscos do descumprimento</h4>
                        <p className="text-sm text-muted-foreground">Multas superiores a <strong className="text-foreground">R$ 50.000</strong>, interdição de máquinas, paralisação da produção e responsabilização criminal do gestor em caso de acidentes.</p>
                      </div>
                    </div>
                  </div>

                  <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                    <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" /> Verificar minha conformidade
                    </a>
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elevated h-80 md:h-[28rem]">
                    <img
                      src={heroNR12}
                      alt="Adequação NR12 - máquinas e equipamentos industriais - VSM Engenharia"
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

      {/* ALERTA CRÍTICO — Por que sua empresa não pode esperar */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-gradient-to-br from-destructive/5 via-destructive/10 to-destructive/5 border-y-4 border-destructive/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cta via-destructive to-cta animate-pulse" />
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-5 py-2 rounded-full text-xs font-black tracking-widest uppercase mb-5 shadow-lg shadow-destructive/30">
                <AlertTriangle className="h-4 w-4 animate-pulse" /> ALERTA CRÍTICO
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
                Por Que Sua Empresa <span className="text-destructive">Não Pode Esperar Mais</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A cada dia sem conformidade NR12, sua empresa está exposta a riscos graves que podem comprometer toda a operação e a liberdade dos gestores.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
              {criticalRisks.map((risk) => (
                <div
                  key={risk.title}
                  className="group bg-card rounded-2xl p-7 shadow-soft hover:shadow-elevated border border-destructive/10 hover:border-destructive/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-14 w-14 rounded-2xl bg-destructive/10 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform">
                    {risk.icon}
                  </div>
                  <h3 className="font-black text-xl mb-3 text-foreground">{risk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{risk.desc}</p>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-lg px-4 py-2.5">
                    <p className="text-xs font-bold text-destructive flex items-center gap-1.5">
                      <AlertTriangle className="h-3.5 w-3.5" /> {risk.risk}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
              <Button asChild size="lg" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 font-bold rounded-xl px-8 py-6 shadow-lg shadow-destructive/20 flex-1">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  Solicitar Diagnóstico Gratuito NR12
                </a>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-xl px-8 py-6 shadow-lg flex-1">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  Falar com Engenheiro Especialista
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* GALERIA — Nossos Serviços Realizados */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Cases Reais em Operação</span>
              <h2 className="text-3xl md:text-5xl font-black mb-5 leading-tight">
                Nossos Serviços Realizados
              </h2>
              <p className="text-muted-foreground text-lg">
                Adequações NR12 profissionais com proteções de segurança instaladas em máquinas industriais de nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {galleryServices.map((g) => (
                <div
                  key={g.title}
                  className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated border border-border hover:border-cta/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={g.img}
                      alt={`${g.title} - VSM Engenharia`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 border-t-2 border-cta/30">
                    <h3 className="font-bold text-base mb-2 group-hover:text-cta transition-colors">{g.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl px-10 py-6 shadow-lg shadow-cta/20">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" /> Adequar Minhas Máquinas Agora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Equipamentos */}
      <RevealSection>

        <section className="bg-secondary py-20 md:py-24 pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Escopo Completo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Máquinas que Adequamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Cobertura completa para todos os tipos de máquinas e equipamentos do seu parque industrial.</p>
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
                    <TrendingUp className="h-3.5 w-3.5" />
                    {eq.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Process */}
      <RevealSection>
        <section id="como-funciona" className="py-20 md:py-24 bg-card relative overflow-hidden">
          <div className="relative container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black mb-3">Metodologia VSM: 5 Fases Para Conformidade Total</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Processo transparente, estruturado e comprovado que garante resultados mensuráveis em cada etapa do projeto.</p>
            </div>
            <div className="space-y-5">
              {processSteps.map((step, i) => (
                <div key={i} className="bg-background rounded-2xl border border-border/60 p-6 md:p-8 shadow-soft">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-sm shrink-0">
                      {i + 1}
                    </div>
                    <step.icon className="h-5 w-5 text-cta" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-3xl">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {step.items.map((it) => (
                      <div key={it} className="flex items-center gap-2 bg-secondary/50 border border-border/40 rounded-lg px-3 py-2.5">
                        <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                        <span className="text-xs md:text-sm font-medium">{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black rounded-xl px-10 py-6 shadow-lg shadow-cta/30">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  Iniciar Adequação Agora <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Risk comparison */}
      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-destructive font-bold text-sm tracking-widest uppercase mb-3 block">Compare os Riscos</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Com Adequação NR12 vs. Sem Adequação</h2>
              <p className="text-muted-foreground text-lg">Veja o que acontece quando suas máquinas não estão em conformidade.</p>
            </div>
            <div className="bg-card rounded-2xl border shadow-elevated overflow-hidden">
              <div className="grid grid-cols-3 bg-secondary font-bold text-sm">
                <div className="p-4 md:p-5">Aspecto</div>
                <div className="p-4 md:p-5 text-center bg-destructive/10 text-destructive">❌ Sem Adequação</div>
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
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Shield className="h-5 w-5 mr-2" /> Garantir Minha Conformidade
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* CASES REAIS — Empresas Que Confiaram na VSM */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 pattern-grid opacity-10" />
          <div className="relative container mx-auto px-4">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Resultados Reais</span>
              <h2 className="text-3xl md:text-5xl font-black mb-5 text-white leading-tight">
                Empresas Que Confiaram na VSM e <span className="text-cta">Evitaram Prejuízos Milionários</span>
              </h2>
              <p className="text-white/70 text-lg">
                Resultados reais de empresas que investiram em segurança e conformidade com a VSM Engenharia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mb-10">
              {realCases.map((c) => (
                <div key={c.title} className="bg-white text-foreground rounded-2xl overflow-hidden shadow-elevated hover:-translate-y-1 transition-all duration-300">
                  <div className="bg-secondary p-6 border-b">
                    <span className={`inline-block ${c.badgeColor} text-xs font-bold px-3 py-1 rounded-full mb-3`}>{c.badge}</span>
                    <h3 className="font-black text-lg mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">📍 {c.location}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-3xl md:text-4xl font-black text-primary mb-1">{c.metric}</p>
                    <p className="text-xs font-bold text-success tracking-widest mb-5">{c.metricLabel}</p>
                    <div className="space-y-2 mb-5">
                      {c.results.map((r) => (
                        <div key={r} className="bg-success/10 border border-success/20 rounded-lg px-3 py-2 text-sm font-medium text-foreground flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" /> {r}
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-bold text-destructive mb-1">Desafio:</p>
                        <p className="text-muted-foreground leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="font-bold text-success mb-1">Solução:</p>
                        <p className="text-muted-foreground leading-relaxed">{c.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl px-10 py-6 shadow-lg shadow-cta/30">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Shield className="h-5 w-5 mr-2" /> Evitar Multas e Interdição Agora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Target Audience */}
      <RevealSection>
        <section className="bg-card py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem é a Adequação NR12</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {targetAudience.map((t) => (
                <div key={t.name} className="flex items-center gap-3 bg-secondary rounded-xl p-4 border hover:border-cta/30 transition-colors">
                  <div className="h-9 w-9 rounded-lg bg-cta/10 flex items-center justify-center shrink-0">
                    <t.icon className="h-4 w-4 text-cta" />
                  </div>
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Benefits */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary pattern-dots">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Por que +120 Empresas Escolhem a VSM</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Cada adequação NR12 é conduzida com rigor técnico e foco total na sua segurança.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className={`bg-card rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated ${b.highlight ? "border-cta/30 ring-1 ring-cta/10 shadow-lg relative" : "shadow-soft"}`}>
                  {b.highlight && (
                    <div className="absolute -top-3 left-6 bg-cta text-cta-foreground text-xs font-bold px-3 py-1 rounded-full">MAIS IMPORTANTE</div>
                  )}
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cta/10 to-cta/5 flex items-center justify-center mb-5">
                    <b.icon className="h-6 w-6 text-cta" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>
      {/* Testimonials */}
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
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-cta text-cta" />
                    ))}
                  </div>
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

      {/* FAQ */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Tire suas Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes sobre NR12</h2>
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
              <p className="text-sm text-muted-foreground mb-4">Fale diretamente com nosso engenheiro especialista em NR12.</p>
              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" /> Tirar Dúvidas pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Related Services */}
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
                  <div className="h-12 w-12 rounded-xl bg-cta/10 flex items-center justify-center shrink-0 group-hover:bg-cta/20 transition-colors">
                    <s.icon className="h-6 w-6 text-cta" />
                  </div>
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

      {/* SEO Content */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <BookOpen className="h-8 w-8 text-cta mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-black mb-2">Guia Completo: Adequação NR12</h2>
            <p className="text-muted-foreground">Tudo sobre segurança de máquinas, análise de risco e adequação.</p>
          </div>
          <div className="relative overflow-hidden transition-all duration-700 ease-in-out" style={{ maxHeight: showSeoContent ? "none" : "14rem" }}>
            <SeoGuideContent content={seoContent} />
            {!showSeoContent && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" onClick={() => setShowSeoContent(!showSeoContent)} className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors">
              {showSeoContent ? <>Ler menos <ChevronUp className="h-4 w-4" /></> : <>Ler o guia completo sobre NR12 <ChevronDown className="h-4 w-4" /></>}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="h-4 w-4" /> Avaliação gratuita e sem compromisso
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Suas máquinas estão em conformidade com a NR12?
            </h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">
              Não espere um acidente acontecer. Fale agora com nosso engenheiro e receba um diagnóstico gratuito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta-hover font-black text-lg px-12 py-8 rounded-2xl shadow-xl shadow-cta/30 hover:shadow-2xl hover:shadow-cta/40 transition-all hover:scale-[1.02]">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-6 w-6 mr-3" /> FALAR COM ENGENHEIRO
                </a>
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
