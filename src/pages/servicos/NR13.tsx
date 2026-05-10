import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  CheckCircle2, ArrowRight, Shield, AlertTriangle,
  FileText, Award, Clock, Phone, MapPin, ChevronDown, ChevronUp,
  Gauge, Wrench, Flame, Droplets, Scale, Eye,
  ShieldAlert, Banknote, XCircle, CircleCheck, Star,
  Factory, Zap, TrendingUp, BadgeCheck, BookOpen
} from "lucide-react";
import RevealSection from "@/components/RevealSection";
import CountUp from "@/components/CountUp";
import SeoGuideContent from "@/components/SeoGuideContent";
import nr13Img from "@/assets/nr13-real.jpg";
import artConsultoria from "@/assets/nr13/consultoria-tecnica.jpg";
import artHidrostatico from "@/assets/nr13/teste-hidrostatico.jpg";
import artTipos from "@/assets/nr13/tipos-inspecoes.jpg";
import artPlano from "@/assets/nr13/plano-inspecao.webp";
import artErros from "@/assets/nr13/erros-comuns.jpg";
import artVasos from "@/assets/nr13/vasos-pressao.jpg";
import artDocumentacao from "@/assets/nr13/documentacao.jpg";
import caldeiraReal from "@/assets/nr13-vasos-pressao.jpg";
import campoCaldeiraAta from "@/assets/nr13/campo-caldeira-ata-mp810.jpg";
import campoVasoAzul from "@/assets/nr13/campo-vaso-pressao-azul.jpg";
import campoCaldeiraInox from "@/assets/nr13/campo-caldeira-inox.jpg";
import campoCalibManometro from "@/assets/nr13/campo-calibracao-manometro.jpg";
import campoCalibDigital from "@/assets/nr13/campo-calibrador-digital.jpg";
import { Folder } from "lucide-react";

/* ─── Urgency ticker messages ─── */
const tickerMessages = [
  "⚠️ Multas por descumprimento da NR13 podem ultrapassar R$ 50.000",
  "🔴 Caldeiras sem inspeção = risco de interdição imediata",
  "📋 Sua empresa está com a inspeção NR13 em dia?",
  "⏰ Agende sua inspeção antes da próxima fiscalização",
];

/* ─── Data ─── */
const stats = [
  { value: 500, suffix: "+", label: "Inspeções NR13 realizadas", icon: BadgeCheck },
  { value: 10, suffix: "+", label: "Anos de experiência", icon: Award },
  { value: 100, suffix: "%", label: "Conformidade garantida", icon: Shield },
  { value: 150, suffix: "+", label: "Empresas atendidas", icon: Factory },
];

const equipmentTypes = [
  { icon: Flame, title: "Caldeiras a Vapor", desc: "Flamotubulares e aquatubulares — Cat. A, B e C", count: "200+ inspecionadas" },
  { icon: Gauge, title: "Vasos de Pressão", desc: "Compressores, autoclaves, reatores e trocadores de calor", count: "180+ inspecionados" },
  { icon: Droplets, title: "Tubulações Industriais", desc: "Vapor, ar comprimido, gases e fluidos pressurizados", count: "100+ sistemas avaliados" },
  { icon: Wrench, title: "Acessórios de Segurança", desc: "Válvulas de segurança, manômetros e pressostatos", count: "500+ verificados" },
];


const targetAudience = [
  { name: "Indústrias com caldeiras a vapor", icon: Flame },
  { name: "Empresas com vasos de pressão", icon: Gauge },
  { name: "Indústrias alimentícias e sucroalcooleiras", icon: Factory },
  { name: "Plantas com tubulações pressurizadas", icon: Droplets },
  { name: "Hospitais e lavanderias industriais", icon: Shield },
  { name: "Indústrias químicas e petroquímicas", icon: AlertTriangle },
  { name: "Cervejarias e destilarias", icon: Droplets },
  { name: "Indústrias têxteis e metalúrgicas", icon: Wrench },
];

const testimonials = [
  { name: "Carlos M.", role: "Gerente de Manutenção", company: "Indústria Alimentícia – SP", text: "A VSM entregou o laudo NR13 em 3 dias. Passamos na fiscalização do MTE sem nenhuma pendência. Recomendo fortemente.", rating: 5 },
  { name: "Fernanda S.", role: "Diretora Industrial", company: "Química Industrial – MG", text: "Profissionalismo impecável. O engenheiro identificou uma trinca em vaso de pressão que poderia ter causado um acidente grave.", rating: 5 },
  { name: "Roberto A.", role: "Coord. de Segurança", company: "Usina Sucroalcooleira – SP", text: "Desde que contratamos a VSM, nunca mais tivemos problemas com fiscalização. Laudos completos e suporte contínuo.", rating: 5 },
];

const faqs = [
  { q: "Qual a periodicidade obrigatória da inspeção NR13?", a: "Depende do tipo e categoria do equipamento. Caldeiras categoria A: inspeção interna a cada 12 meses e externa a cada 12 meses. Categoria B: interna a cada 24 meses e externa a cada 24 meses. Vasos de pressão: periodicidade definida pela classe de fluido e categoria, variando de 1 a 6 anos. Não cumprir esses prazos pode resultar em multas e interdição imediata." },
  { q: "Quanto custa uma inspeção NR13?", a: "O valor depende da quantidade e tipo de equipamentos, localização da planta e complexidade dos ensaios necessários. Oferecemos orçamento gratuito e sem compromisso em até 24h. Entre em contato pelo WhatsApp para uma cotação personalizada." },
  { q: "O que acontece se minha empresa não tiver a inspeção em dia?", a: "Consequências graves: multas pelo Ministério do Trabalho (superiores a R$ 50.000 por infração), interdição imediata dos equipamentos, paralisação da produção, invalidação do seguro industrial e responsabilização civil e criminal do gestor em caso de acidentes." },
  { q: "Quais documentos são entregues ao final da inspeção?", a: "Pacote completo: laudo técnico de inspeção, prontuário atualizado do equipamento, livro de registro (Registro de Segurança), memorial de cálculo quando aplicável, relatório fotográfico detalhado e ART (Anotação de Responsabilidade Técnica) registrada no CREA." },
  { q: "Vocês fazem inspeção em caldeiras paradas e em operação?", a: "Sim. Realizamos inspeção interna (caldeira parada e fria), inspeção externa (caldeira em operação), teste hidrostático e todos os ensaios não destrutivos exigidos: ultrassom, líquidos penetrantes, partículas magnéticas e inspeção visual detalhada." },
  { q: "Quanto tempo leva do contato ao laudo pronto?", a: "Em média 7 a 10 dias úteis do primeiro contato à entrega do laudo. A inspeção em campo leva 1 a 2 dias e o laudo é emitido em até 5 dias úteis. Para urgências, oferecemos atendimento express com laudo em 48h." },
  { q: "Vocês atendem em quais estados?", a: "Atendemos todo o Sudeste: São Paulo (capital, Grande SP, Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, ABC Paulista), Minas Gerais (BH, Triângulo Mineiro, Sul de Minas), Rio de Janeiro (capital, Niterói, Volta Redonda, Macaé) e Espírito Santo (Vitória, Serra, Vila Velha)." },
  { q: "A inspeção NR13 é obrigatória para empresas de pequeno porte?", a: "Sim. A NR13 é obrigatória para TODAS as empresas que operam caldeiras, vasos de pressão ou tubulações pressurizadas, independente do porte. Não existe isenção por tamanho da empresa." },
];

const relatedServices = [
  { label: "Inspeção NR12", href: "/servicos/nr12", desc: "Segurança de máquinas e equipamentos", icon: Shield },
  { label: "NR11 / Plano de Rigging", href: "/servicos/nr11", desc: "Movimentação de carga e içamento", icon: Wrench },
  { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas", desc: "Inspeções especializadas em estruturas", icon: Eye },
  { label: "Projetos Mecânicos", href: "/servicos/projetos-mecanicos", desc: "Projetos e cálculos estruturais", icon: Gauge },
];

const technicalArticles = [
  { img: artConsultoria, title: "Consultoria Técnica NR13: Guia Completo para Garantir Segurança e Conformidade na Sua Empresa", desc: "Saiba como uma consultoria técnica especializada em NR13 protege sua operação de multas, interdições e acidentes graves." },
  { img: artHidrostatico, title: "Sempre precisa ser feito o Teste Hidrostático em inspeções NR13?", desc: "Entenda quando o teste hidrostático é obrigatório, quando pode ser substituído por outros ensaios e quais critérios técnicos a NR13 exige." },
  { img: artTipos, title: "NR-13: Diferença entre Inspeções Iniciais, Periódicas e Extraordinárias", desc: "Confira o que muda em cada tipo de inspeção, prazos legais e quando você precisa contratar cada uma delas." },
  { img: artPlano, title: "Plano de Inspeção NR-13", desc: "Descubra como elaborar um plano de inspeção eficiente, alinhado à categoria do equipamento e à realidade operacional da sua planta." },
  { img: artErros, title: "Erros comuns na aplicação da NR13 e como evitá-los", desc: "Os erros mais frequentes que levam empresas a serem autuadas — e como a VSM Engenharia previne cada um deles." },
  { img: artVasos, title: "Tudo Sobre Inspeção em Vasos de Pressão NR13: Segurança, Conformidade e Eficiência", desc: "Periodicidades, classes de fluido, ensaios obrigatórios e documentação técnica para vasos de pressão sob NR13." },
  { img: artDocumentacao, title: "Documentação NR13", desc: "Prontuário, livro de registro, projeto, laudo técnico e ART: o pacote documental obrigatório para cada equipamento." },
];

const seoContent = `
## Inspeção NR13: o guia técnico definitivo para caldeiras, vasos de pressão e tubulações

A NR13 deixou de ser um simples formulário de "atestado de boas condições" há muito tempo. Hoje, ela funciona como o principal mecanismo legal e técnico que o Brasil possui para evitar que uma caldeira exploda dentro de uma indústria, que um vaso de pressão rasgue um galpão ao meio ou que uma tubulação de vapor mate um operador a três metros de distância. Não é alarmismo: o histórico brasileiro de acidentes com equipamentos pressurizados — Bauru, Bragança Paulista, Cubatão, Mauá — é longo, documentado e quase sempre liga a causa-raiz a uma inspeção atrasada, mal feita ou simplesmente fictícia.

Este guia foi escrito por engenheiros mecânicos da **VSM Engenharia**, com mais de uma década de campo entre indústrias do Sudeste, e tem um objetivo simples: dar à pessoa responsável pela operação — gestor industrial, gerente de manutenção, técnico de segurança, dono da empresa — o entendimento real do que a norma cobra, como ela é fiscalizada e o que separa um laudo técnico íntegro de um pedaço de papel sem valor.

> NOTA: A NR13 vigente foi consolidada pela **Portaria MTP nº 1.846/2022**, que substituiu a Portaria 672/2021. Toda inspeção realizada hoje deve seguir essa redação atualizada. Se o seu prestador atual ainda cita "NR-13/2014" no laudo, há um problema sério de defasagem técnica.

### O que é a NR13 e por que ela existe

A Norma Regulamentadora nº 13 é a norma do Ministério do Trabalho e Emprego que regulamenta a **gestão da integridade estrutural** de quatro famílias de equipamentos: caldeiras a vapor, vasos de pressão, tubulações de interligação e tanques metálicos de armazenamento. O verbo central é "gestão", e isso é importante: a NR13 não é apenas uma vistoria pontual — é um sistema contínuo de controle de risco que envolve projeto, fabricação, instalação, operação, manutenção, inspeções periódicas, treinamento de operadores e documentação rastreável durante toda a vida útil do equipamento.

A norma existe porque equipamentos que armazenam ou geram pressão interna falham de modo violento. Diferente de uma máquina rotativa que para quando trava, um vaso pressurizado falha com liberação súbita de energia. Uma caldeira flamotubular de 6 toneladas operando a 10 bar contém energia equivalente a aproximadamente 25 quilos de TNT. Quando essa energia é liberada de uma só vez por uma trinca não detectada, o resultado é destruição estrutural, projéteis e mortes em raio de dezenas de metros.

### Quem é obrigado a cumprir a NR13

Praticamente todas as empresas brasileiras com algum grau de processo térmico ou pressurizado. Na prática, a obrigatoriedade alcança:

- Indústrias **alimentícias** (laticínios, frigoríficos, processadoras de soja, cervejarias, destilarias, refinarias de açúcar)
- Indústrias **químicas e petroquímicas** (reatores, colunas de destilação, vasos separadores)
- Indústrias **têxteis** (caldeiras de tingimento, autoclaves, vasos de vapor)
- **Hospitais e clínicas** (autoclaves de esterilização classificam como vasos de pressão)
- **Lavanderias industriais** (caldeiras de geração de vapor)
- **Sucroalcooleiras** (caldeiras aquatubulares de bagaço, vasos de fermentação pressurizados)
- **Usinas termelétricas e cogeradoras**
- **Plantas de gases industriais** (vasos criogênicos, cilindros de armazenagem)
- Qualquer empresa que opere **compressores de ar** com reservatórios acima dos limites da norma

A regra prática é direta: se o equipamento gera, armazena ou movimenta fluido sob pressão e cai dentro dos limites de volume e pressão definidos pela NR13, o cumprimento é integral, sem exceções por porte da empresa.

### Categorização: a base de todo o cronograma de inspeção

A NR13 categoriza caldeiras e vasos de pressão. Essa categoria define **periodicidade de inspeção, profissionais habilitados, exigências documentais e nível de ensaios não destrutivos** exigidos. Errar a categorização é o erro número um que vemos em laudos de baixa qualidade, e ele compromete todo o resto.

#### Categorização de caldeiras

| Categoria | Pressão de operação (PMTA) | Risco / Periodicidade |
| --- | --- | --- |
| **A** | Acima de 1.960 kPa (≈ 19,98 kgf/cm²) | Risco elevado — inspeção interna a cada 12 meses, externa a cada 12 meses, hidrostática a cada 20 anos |
| **B** | Entre 588 kPa e 1.960 kPa | Risco médio — inspeção interna a cada 24 meses, externa a cada 24 meses |
| **C** | Até 588 kPa e volume até 100 L, OU pressão acima de 588 kPa com PV ≤ 6 (kPa·m³) | Risco controlado — inspeção interna a cada 40 meses, externa a cada 40 meses |

> ALERTA: A categoria isolada não basta. Se a caldeira opera fora do regime de SPIE (Serviço Próprio de Inspeção de Equipamentos) ou fora dos critérios de PH dispensável, os prazos podem ser **reduzidos** pelo profissional habilitado. Confie em quem justifica tecnicamente o cronograma, não em quem apenas copia o prazo máximo da norma.

#### Categorização de vasos de pressão

A categorização de vasos é bidimensional: combina a **classe de fluido** (de A a D, do mais perigoso ao menos perigoso) com o **grupo de risco** (1 a 5, em função do produto P × V). O cruzamento define a categoria final do vaso (I a V).

| Classe de fluido | Exemplo | Risco |
| --- | --- | --- |
| **A** | Hidrogênio, acetileno, gases inflamáveis liquefeitos | Altíssimo |
| **B** | Fluidos inflamáveis ou tóxicos não enquadrados em A | Alto |
| **C** | Vapor d'água, água quente, ar comprimido | Médio |
| **D** | Outros fluidos não enquadrados | Baixo |

Um autoclave hospitalar (vapor saturado, classe C, baixo PV) tipicamente é Categoria V, com inspeções a cada 5 anos. Já um vaso separador de gás natural (classe A) pode cair na Categoria I, com inspeções anuais e ensaios não destrutivos volumétricos obrigatórios.

### Tipos de inspeção previstos na NR13

A norma reconhece três modalidades, e qualquer uma delas exige documentação completa, registro no Livro de Registro de Segurança e parecer assinado por profissional habilitado.

- **Inspeção inicial** — realizada antes do equipamento entrar em operação pela primeira vez, ou após alteração significativa (mudança de localização, substituição de componente principal, alteração de PMTA).
- **Inspeção periódica** — subdividida em **interna** (com o equipamento parado, despressurizado e aberto, permitindo varredura visual e ensaios em todas as superfícies) e **externa** (com o equipamento em operação, focada em itens de segurança, instrumentação, isolamento e condições de operação).
- **Inspeção extraordinária** — gatilhada por reparos, modificações, acidente, paralisação superior a seis meses ou recomendação técnica do profissional.

### Documentação obrigatória: o pacote que sustenta a operação

Sem esses documentos atualizados e fisicamente disponíveis, a empresa é considerada **em irregularidade**, mesmo que o equipamento esteja em condições impecáveis. Auditores fiscais do trabalho, peritos do INSS e seguradoras pedem essa documentação antes de qualquer outra coisa.

- **Prontuário do equipamento** — espécie de "RG" do bem. Contém memorial de cálculo, desenhos, materiais, certificados de soldagem, PMTA, dados de fabricação e histórico de modificações.
- **Livro de Registro de Segurança** — registro cronológico de toda ocorrência: inspeções, intervenções, alteração de operadores, eventos anormais. Pode ser físico ou digital, desde que rastreável.
- **Projeto de instalação** — assinado por engenheiro habilitado, com ART no CREA, contemplando posicionamento, exaustão, drenagem, distâncias mínimas, sistema de combate a incêndio.
- **Laudo técnico de inspeção** — relatório técnico com fotos datadas, ensaios realizados, defeitos encontrados, medidas corretivas, validade e recomendações.
- **Certificado de inspeção** — documento sintético, geralmente afixado próximo ao equipamento.
- **ART** — Anotação de Responsabilidade Técnica do engenheiro mecânico responsável pela inspeção, paga e baixada no CREA.
- **Certificado de capacitação dos operadores** — exigido para caldeiras (curso obrigatório de 40 horas mínimas, conforme NR13 Anexo I).

### Ensaios Não Destrutivos (END) na inspeção NR13

Ensaios não destrutivos são o coração técnico da inspeção. Sem END a inspeção é apenas opinião visual, e opinião visual não vê 90% das falhas estruturais que matam. Os principais métodos aplicados pela VSM Engenharia em inspeções NR13 são:

| Método | Sigla | Detecta | Aplicação típica |
| --- | --- | --- | --- |
| Visual | IV | Corrosão externa, deformações, vazamentos, isolamento degradado | Toda inspeção, base de tudo |
| Ultrassom convencional | UT | Espessura de parede, descontinuidades internas | Mapeamento de corrosão em costados e tampos |
| Ultrassom phased array | PAUT | Trincas, falta de fusão em soldas | Soldas críticas em vasos categoria I e II |
| Líquidos penetrantes | LP | Trincas superficiais abertas | Soldas em aço inox, equipamentos não magnéticos |
| Partículas magnéticas | PM | Trincas superficiais e subsuperficiais | Soldas em aço carbono, eixos, virolas |
| Radiografia industrial | RT | Descontinuidades volumétricas internas em soldas | Soldas de fabricação, reparos críticos |
| Teste hidrostático | TH | Estanqueidade e resistência mecânica global | Inspeção inicial, pós-reparo, pós-prazo definido |
| Emissão acústica | EA | Defeitos ativos sob pressurização | Vasos de grande porte, monitoramento online |

> DICA: Pergunte ao seu prestador qual ensaio ele propõe e por quê. Um inspetor qualificado **escolhe** o ensaio em função do tipo de defeito esperado, do material, da geometria e do histórico do equipamento — não aplica sempre a mesma "receita".

### Penalidades reais pelo descumprimento

A fiscalização da NR13 é federal (Auditor Fiscal do Trabalho), mas as consequências de uma não conformidade vão muito além da multa. O Quadro I da NR-28 classifica as infrações da NR13 majoritariamente como **gravíssimas (I-4)**, com valores que partem de R$ 6.708,00 por item descumprido e podem facilmente ultrapassar R$ 70.000,00 em uma única autuação considerando agravantes.

- **Multa administrativa** — R$ 6.708 a R$ 670.840 por infração, conforme número de empregados expostos
- **Interdição imediata** do equipamento ou da planta inteira pelo Auditor Fiscal
- **Embargo da obra** em casos de instalação irregular
- **Suspensão de alvará de funcionamento** pela prefeitura
- **Invalidação do seguro patrimonial e operacional** — sinistro causado por equipamento sem laudo válido **não é coberto**
- **Responsabilidade civil objetiva** do empregador em caso de acidente
- **Responsabilidade criminal** (lesão corporal culposa, homicídio culposo) do empregador, gestor e do próprio engenheiro que assinou laudo falso

> ALERTA: Em acidente fatal com caldeira ou vaso, o Ministério Público abre inquérito e pede automaticamente a documentação NR13 dos últimos 5 anos. Laudos sem ART baixada, sem evidência de ensaios e sem registro fotográfico datado tornam-se prova contra o gestor.

### Como é uma inspeção NR13 conduzida pela VSM Engenharia, passo a passo

Transparência aqui é parte do serviço. Esta é a sequência real que aplicamos em campo, e é também a sequência que recomendamos exigir de qualquer prestador.

1. **Análise documental prévia** — solicitamos prontuário, laudos anteriores, livro de registro, fluxograma do processo. Sem isso, a inspeção começa cega.
2. **Reunião de abertura** — alinhamento com manutenção, segurança e operação sobre escopo, condições de parada, isolamento de energia, espaço confinado.
3. **Inspeção externa em operação** — verificação de instrumentos, válvulas de segurança, manômetros, dispositivos de alarme, isolamento térmico, base de fixação.
4. **Despressurização e abertura controlada** — seguimos procedimento de bloqueio e etiquetagem (LOTO), purga, ventilação e teste de atmosfera para entrada em espaço confinado.
5. **Inspeção visual interna** — varredura completa do costado, tampos, espelhos, tubos, fornalhas, soldas e cordões de ligação.
6. **Ensaios não destrutivos planejados** — mapeamento de espessuras por UT, LP/PM em soldas críticas, PAUT quando indicado.
7. **Avaliação de integridade estrutural** — comparação dos resultados com PMTA, espessura mínima, taxa de corrosão e vida residual.
8. **Teste hidrostático** quando aplicável, com curva de pressurização controlada e registro contínuo.
9. **Emissão do laudo técnico** com parecer, fotos, planilhas de ensaio, recomendações e cronograma sugerido.
10. **ART e atualização do prontuário e livro de registro** — fechamento documental rastreável.

### Erros mais comuns que vemos em laudos de mercado

A entrega de um "papel timbrado com carimbo de engenheiro" é o que mais existe. Inspeção técnica de verdade é outra coisa. Os erros recorrentes que invalidam laudos:

- Laudo sem evidência fotográfica datada e georreferenciada
- Ausência de planilha de medição de espessuras (UT) com pontos identificados em croqui
- ART não baixada no CREA ou em nome de profissional sem habilitação em mecânica
- Categorização incorreta do equipamento (caldeira B tratada como C, por exemplo)
- Cronograma de inspeção copiado da norma sem justificativa técnica
- Ausência de avaliação da válvula de segurança (PSV) — item que mais mata em caldeiras
- Falta de avaliação da vida residual com base em taxa de corrosão histórica
- Recomendações genéricas tipo "manter manutenção preventiva", sem prazo nem responsável

### Comparativo: laudo NR13 conformista × laudo NR13 técnico

| Aspecto | Laudo conformista (papel) | Laudo técnico VSM |
| --- | --- | --- |
| Tempo em campo | 2 a 4 horas | 1 a 3 dias por equipamento |
| Ensaios realizados | Apenas inspeção visual | Visual + UT mapeado + LP/PM em soldas críticas |
| Documento entregue | 4 a 8 páginas | 30 a 80 páginas com fotos, planilhas e croquis |
| ART | Genérica, sem detalhamento | Específica por equipamento, com cargas horárias reais |
| Vida residual | Não calculada | Calculada com base em taxa de corrosão |
| Próxima inspeção | "Conforme norma" | Justificada tecnicamente |
| Validade jurídica em acidente | Frequentemente questionada | Sustenta a defesa técnica |

### Periodicidades práticas — referência rápida

Para gestores que precisam montar cronograma anual, esta tabela traz os prazos máximos consolidados. Lembre-se: o profissional habilitado pode sempre **encurtar** os prazos, nunca estendê-los além do limite legal.

| Equipamento | Categoria | Inspeção externa | Inspeção interna | Teste hidrostático |
| --- | --- | --- | --- | --- |
| Caldeira | A | 12 meses | 12 meses | A cada 20 anos |
| Caldeira | B | 24 meses | 24 meses | A critério do PH |
| Caldeira | C | 40 meses | 40 meses | A critério do PH |
| Vaso de pressão | I | 1 ano | 3 anos | A cada 12 anos |
| Vaso de pressão | II | 2 anos | 4 anos | A cada 16 anos |
| Vaso de pressão | III | 3 anos | 6 anos | A cada 20 anos |
| Vaso de pressão | IV | 4 anos | 8 anos | A cada 20 anos |
| Vaso de pressão | V | 5 anos | 10 anos | Dispensável conforme avaliação |

### Inspeção NR13 em São Paulo (SP)

A VSM Engenharia atende toda a malha industrial paulista, com base operacional na Grande São Paulo e equipes deslocadas para o interior. Cobrimos São Paulo capital, Guarulhos, Osasco, Barueri, Cotia, **ABC Paulista** (Santo André, São Bernardo do Campo, São Caetano do Sul, Diadema, Mauá, Ribeirão Pires), Campinas, Sorocaba, São José dos Campos, Ribeirão Preto, Piracicaba, Jundiaí, Indaiatuba, Santos, Cubatão, Bauru, Marília, Presidente Prudente, Araraquara, São Carlos, Limeira, Americana, Sumaré, Hortolândia, Vinhedo, Itu e Salto. Atuamos pesado nos polos de **Cubatão (petroquímica)**, **Paulínia (refino)**, **Vale do Paraíba (aeronáutica e automotivo)** e **interior sucroalcooleiro**.

### Inspeção NR13 em Minas Gerais (MG)

No estado mineiro atendemos Belo Horizonte, Contagem, Betim, Nova Lima, Sete Lagoas, Uberlândia, Uberaba, Juiz de Fora, Governador Valadares, Ipatinga, Coronel Fabriciano, Timóteo, Montes Claros, Poços de Caldas, Varginha, Pouso Alegre, Passos, Patos de Minas, Divinópolis, Sul de Minas e Triângulo Mineiro. Forte presença em **Vale do Aço** (siderurgia), **Pólo Automotivo de Betim** e **Triângulo Mineiro** (alimentício).

### Inspeção NR13 no Rio de Janeiro (RJ)

Atendemos a Região Metropolitana do Rio (Niterói, São Gonçalo, Duque de Caxias, Nova Iguaçu, Belford Roxo), Itaboraí (COMPERJ), Volta Redonda e Barra Mansa (Vale do Paraíba Fluminense), Macaé e Campos dos Goytacazes (Bacia de Campos), Petrópolis, Resende, Angra dos Reis e Cabo Frio.

### Inspeção NR13 no Espírito Santo (ES)

Cobertura completa: Vitória, Vila Velha, Serra, Cariacica, Viana, Cachoeiro de Itapemirim, Linhares, Colatina, São Mateus, Aracruz e Guarapari, com forte atuação no polo siderúrgico e portuário da **Grande Vitória**.

### Por que a VSM Engenharia é referência em NR13 no Sudeste

Não é discurso de marketing. É o que o cliente recebe na entrega:

- **Engenheiros mecânicos com CREA ativo** e habilitação específica em equipamentos pressurizados
- **Inspetores certificados** em UT, LP, PM e PAUT pela ABENDI / SNQC
- **Mais de 500 inspeções NR13** executadas em campo no Sudeste
- **Mais de 150 empresas atendidas**, com renovação anual de contratos
- **Laudos entregues em até 5 dias úteis** após o término do trabalho de campo
- **ART inclusa** em todos os serviços, sem custo adicional
- **Suporte técnico contínuo** pós-laudo via WhatsApp, e-mail e telefone
- **Cronograma de inspeção plurianual** entregue como bônus, alinhado ao plano de manutenção do cliente

### Perguntas frequentes sobre a inspeção NR13

### P: Posso fazer a inspeção NR13 com qualquer engenheiro?

> R: Não. O profissional precisa ser engenheiro mecânico (ou metalúrgico, em alguns casos) com **registro ativo no CREA**, atribuições específicas para projeto/inspeção de equipamentos sob pressão, ART devidamente baixada e, idealmente, certificações ABENDI/SNQC nos ensaios que aplicará. Engenheiro civil ou de produção **não pode** assinar laudo NR13 — é nulo de origem.

### P: Quanto custa uma inspeção NR13?

> R: Varia conforme categoria, volume, tipo de equipamento e ensaios necessários. Uma caldeira flamotubular categoria B com inspeção interna típica fica entre R$ 4.500 e R$ 12.000. Vasos de pressão categoria IV em hospitais ficam entre R$ 1.800 e R$ 4.500. Solicite orçamento com escopo técnico — preço sem escopo é sinal de laudo conformista.

### P: O que acontece se eu atrasar a inspeção?

> R: O equipamento entra em **condição irregular** automaticamente. Se houver fiscalização, a interdição é imediata. Se houver acidente, o seguro nega cobertura e a responsabilidade civil/criminal do empregador é imediata. Recomendamos antecipar a inspeção em pelo menos 30 dias do vencimento.

### P: Inspeção externa substitui inspeção interna?

> R: Não. São ensaios complementares com escopos diferentes. A externa avalia o equipamento operando (instrumentação, isolamento, vazamentos, válvulas de segurança). A interna exige parada, despressurização e abertura para inspecionar superfícies, soldas e medir espessuras. Ambas têm prazos próprios.

### P: O SPIE (Serviço Próprio de Inspeção) elimina a contratação externa?

> R: O SPIE permite que empresas com estrutura própria de engenharia e laboratório executem suas inspeções, com prazos estendidos. Mas exige certificação do SPIE pelo MTE, equipe dedicada e auditorias periódicas. Para a esmagadora maioria das empresas, contratar inspeção externa especializada continua sendo mais econômico e tecnicamente seguro.

### P: A VSM emite o ART?

> R: Sim. Toda inspeção realizada pela VSM Engenharia inclui ART específica, paga e baixada no CREA-SP, sem custo adicional para o cliente. Entregamos cópia digital e física.

### P: Vocês inspecionam autoclave hospitalar?

> R: Sim. Autoclaves hospitalares são vasos de pressão classe C, geralmente categoria IV ou V, e estão integralmente sob a NR13. Atendemos hospitais, clínicas, laboratórios e centros de esterilização em todo o Sudeste.

### Próximo passo: chamar a VSM para uma análise gratuita

Se você chegou até aqui, é porque leva a operação a sério. Solicite uma **análise gratuita** do seu parque de equipamentos pressurizados: nossa equipe revisa documentação atual, identifica vencimentos, aponta gaps de conformidade e devolve um plano técnico-orçamentário em até 48 horas. Sem compromisso, sem custo.

Inspeção NR13, laudo NR13, prontuário NR13, vasos de pressão, caldeiras, tubulações industriais, autoclaves — VSM Engenharia, parceira de conformidade e segurança industrial em todo o Sudeste do Brasil.
`;

export default function NR13() {
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

      {/* Hero — full-width immersive */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={nr13Img} alt="Inspeção NR13 em caldeira industrial" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
          <div className="absolute inset-0 pattern-dots opacity-10" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left — copy */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase">Serviço Especializado</span>
                <span className="bg-white/10 text-white/90 px-4 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">⭐ 5.0 — Avaliações Google</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.05] text-white">
                Inspeção{" "}
                <span className="text-cta relative">
                  NR13
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none"><path d="M2 8c40-6 80-6 196-2" stroke="hsl(var(--cta))" strokeWidth="3" strokeLinecap="round" opacity=".5" /></svg>
                </span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/80 mt-2 block">Caldeiras · Vasos de Pressão · Tubulações</span>
              </h1>
              <p className="text-lg md:text-xl text-white/75 mb-8 max-w-xl leading-relaxed">
                Laudos técnicos completos, prontuários e livro de registro com <strong className="text-white">ART inclusa</strong>. Entrega em até <strong className="text-white">5 dias úteis</strong>.
              </p>

              {/* Trust pills */}
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

            {/* Right — floating cards */}
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-cta/20 flex items-center justify-center">
                    <ShieldAlert className="h-5 w-5 text-cta" />
                  </div>
                  <span className="text-white font-bold text-sm">SUA EMPRESA ESTÁ EM RISCO?</span>
                </div>
                <div className="space-y-3">
                  {["Caldeira sem inspeção em dia?", "Documentação incompleta?", "Fiscalização agendada?"].map((q) => (
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
                      <div key={n} className="h-8 w-8 rounded-full bg-cta/30 border-2 border-white/20 flex items-center justify-center text-xs text-white font-bold">{n === 1 ? "C" : n === 2 ? "F" : "R"}</div>
                    ))}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">+150 empresas confiam na VSM</p>
                    <p className="text-white/60 text-xs">Avaliação 5.0 ⭐ no Google</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar — animated counters */}
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

      {/* O que é — split layout with danger callout */}
      <RevealSection>
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Entenda a Norma</span>
                  <h2 className="text-2xl md:text-3xl font-black mb-5">O que é a Inspeção NR13?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-base">
                    A NR13 é a Norma Regulamentadora que estabelece requisitos para gestão da integridade estrutural de <strong className="text-foreground">caldeiras a vapor, vasos de pressão e tubulações industriais</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                    Realizamos inspeções periódicas completas com emissão de laudos técnicos, prontuários e livros de registro, garantindo conformidade total e segurança operacional.
                  </p>


                  <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                    <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                      <Phone className="h-4 w-4 mr-2" /> Verificar minha conformidade
                    </a>
                  </Button>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-elevated">
                    <img src={nr13Img} alt="Engenheiro realizando inspeção NR13 em vaso de pressão industrial" className="w-full h-80 md:h-[28rem] object-cover" />
                  </div>
                  {/* Floating badge */}
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

      {/* Custo da Não Conformidade */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">O Custo Real da Não Conformidade com NR-13</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Entenda os riscos que sua indústria enfrenta ao não cumprir as inspeções obrigatórias de caldeiras e vasos de pressão.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: AlertTriangle, title: "Multas Administrativas", desc: <><strong>R$ 6.708 a R$ 134.730 por infração</strong> do Ministério do Trabalho, além de interdição imediata da planta e paralisação de toda operação.</> },
                { icon: ShieldAlert, title: "Risco de Acidentes Catastróficos", desc: <>Explosões de caldeiras causam <strong>mortes, destruição total do patrimônio</strong> e perda de cobertura de seguros.</> },
                { icon: FileText, title: "Responsabilidade Criminal", desc: <>Gestores respondem criminalmente por negligência. <strong>Processos judiciais, indenizações</strong> e danos à reputação corporativa.</> },
              ].map((r, i) => (
                <div key={i} className="bg-card rounded-2xl p-7 border-t-4 border-destructive shadow-soft">
                  <r.icon className="h-8 w-8 text-destructive mb-4" />
                  <h3 className="font-black text-lg mb-3">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-6 mb-8">
              <p className="font-bold text-destructive mb-2">⚠️ Realidade das Indústrias Brasileiras</p>
              <p className="text-sm text-foreground/80">Segundo dados do Ministério do Trabalho, <strong>67% das indústrias médias e grandes</strong> enfrentam multas por não conformidade com NR-13. O custo médio de uma interdição é de <strong>R$ 2.8 milhões em prejuízos operacionais</strong>.</p>
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded-xl">
                <a href="https://wa.me/5511954534057?text=Quero%20diagn%C3%B3stico%20gratuito%20NR13" target="_blank" rel="noopener noreferrer">
                  Solicitar Diagnóstico Gratuito Agora <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Solução 360° */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-destructive/10 rounded-full blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                  <img src={caldeiraReal} alt="Vasos de pressão industriais em inspeção NR13" className="w-full h-80 md:h-[28rem] object-cover" />
                  <div className="absolute bottom-6 left-6 bg-destructive text-destructive-foreground rounded-xl px-6 py-4 shadow-lg">
                    <p className="font-black text-lg leading-none">PADRÃO RBC</p>
                    <p className="text-xs mt-1 opacity-90">Rastreabilidade Metrológica Garantida</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-black mb-5">Solução 360° em Inspeção NR-13 e Calibração RBC</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">A VSM Engenharia oferece a solução completa para manter sua indústria em conformidade total com a NR-13, garantindo segurança operacional e documentação jurídica irrefutável.</p>
                <p className="text-foreground mb-6 leading-relaxed"><strong>Laudo técnico com ART em 48 horas.</strong> Padrão RBC com rastreabilidade metrológica. Testes não destrutivos avançados.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                  {["Laudo com ART em 48h","Calibração Padrão RBC","Testes Não Destrutivos (END)","Livros de Registros Completos","Memorial de Cálculos Técnicos","Ultrassom Preditivo","Alertas de Vencimento","Reconstituição de Prontuários","Suporte Técnico 12 Meses"].map((f) => (
                    <div key={f} className="flex items-center gap-2"><CircleCheck className="h-5 w-5 text-success shrink-0" /><span className="text-sm">{f}</span></div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded-xl">
                    <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">Falar com Engenheiro Agora <ArrowRight className="h-4 w-4 ml-2" /></a>
                  </Button>
                  <Button asChild variant="outline" className="border-destructive text-destructive hover:bg-destructive/10 font-bold rounded-xl">
                    <a href="https://wa.me/5511954534057?text=Quero%20or%C3%A7amento%20NR13" target="_blank" rel="noopener noreferrer">Solicitar Orçamento</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Metodologia 5 etapas */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Metodologia Comprovada de Atendimento</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Processo estruturado em 5 etapas que garante conformidade total com NR-13 e documentação jurídica irrefutável.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
              {[
                { n: 1, t: "Diagnóstico Inicial", d: "Sua empresa entra em contato conosco para que realizemos um diagnóstico completo das necessidades técnicas e regulatórias específicas de seus equipamentos de pressão." },
                { n: 2, t: "Inspeção em Campo", d: "Nossos engenheiros especializados realizam inspeção técnica rigorosa utilizando equipamentos de última geração e metodologias reconhecidas internacionalmente." },
                { n: 3, t: "Elaboração de Documentação", d: "Processamos os dados coletados e elaboramos documentação técnica completa: laudo técnico, ART, livro de registro, plaquetas de identificação e memoriais de cálculo." },
                { n: 4, t: "Calibração Padrão RBC", d: "Realizamos calibração de manômetros e válvulas conforme padrão RBC, garantindo rastreabilidade metrológica e precisão absoluta dos instrumentos." },
                { n: 5, t: "Entrega de Documentações", d: "Você recebe a documentação completa e organizada, pronta para apresentação em auditorias, inspeções regulatórias e conformidade com legislação vigente." },
              ].map((s) => (
                <div key={s.n} className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center font-black text-xl mb-4 shadow-lg">{s.n}</div>
                  <h3 className="font-black text-base mb-3">{s.t}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded-xl">
                <a href="https://wa.me/5511954534057?text=Quero%20diagn%C3%B3stico%20gratuito" target="_blank" rel="noopener noreferrer">
                  Agendar Diagnóstico Gratuito Agora <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Organização em Nuvem */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-destructive/5 border border-destructive/20 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4">Organização em Nuvem por Equipamento</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Cada equipamento tem sua própria pasta na nuvem com acesso seguro e compartilhável.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                {[
                  { name: "Caldeira CV-6561" },
                  { name: "Vaso de Pressão ADA-MP-810" },
                  { name: "Compressor de Ar" },
                ].map((eq) => (
                  <div key={eq.name} className="bg-card rounded-2xl p-6 border text-center shadow-soft">
                    <Folder className="h-12 w-12 text-cta mx-auto mb-4 fill-cta/20" />
                    <h3 className="font-black text-base mb-3">{eq.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Laudos • Registros • Certificados • Memoriais</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-foreground/80 mb-6"><strong>Acesso 24/7:</strong> Baixe documentos a qualquer hora, compartilhe com auditores e mantenha backup automático.</p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded-xl">
                  <a href="https://wa.me/5511954534057?text=Quero%20demo%20do%20dashboard" target="_blank" rel="noopener noreferrer">
                    Solicitar Demonstração do Dashboard <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Nossa Expertise em Campo — galeria */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Nossa Expertise em Campo</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Imagens reais de inspeções e calibrações realizadas em indústrias médias e grandes.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
              {[
                { src: campoCaldeiraAta, alt: "Inspeção NR13 em caldeira ATA-MP 810 / CV-6581 em planta industrial" },
                { src: campoVasoAzul, alt: "Vaso de pressão vertical inspecionado pela VSM Engenharia" },
                { src: campoCaldeiraInox, alt: "Caldeira flamotubular em inox sob inspeção NR13" },
                { src: campoCalibManometro, alt: "Calibração de manômetro analógico em laboratório RBC" },
                { src: campoCalibDigital, alt: "Calibrador digital de pressão padrão RBC com rastreabilidade metrológica" },
                { src: artVasos, alt: "Inspeção de vasos de pressão conforme NR13" },
              ].map((img, i) => (
                <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all bg-card">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Casos Reais de Sucesso */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Casos Reais de Sucesso em Indústrias Médias e Grandes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Resultados mensuráveis que garantiram a continuidade de operações críticas e evitaram catástrofes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                { tag: "Indústria Química", title: "Explosão Evitada em Caldeira 20T", desc: "Nossa inspeção com Ultrassom Phased Array detectou trinca crítica de 8mm na parede da caldeira. Evitamos uma catástrofe iminente que causaria morte de 150 colaboradores e destruição total do patrimônio.", value: "R$ 2.8 Milhões", label: "PREJUÍZO EVITADO" },
                { tag: "Indústria de Alimentos", title: "45 Dias de Produção Salvos", desc: "Identificamos falha estrutural em vaso de pressão antes do colapso. Planejamos a manutenção para o período de parada programada, evitando interrupções não planejadas.", value: "R$ 4.2 Milhões", label: "ECONOMIA GERADA" },
              ].map((c, i) => (
                <div key={i} className="bg-secondary rounded-2xl p-7 border shadow-soft">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-destructive text-destructive-foreground text-xs font-black tracking-wider px-3 py-1 rounded-full">CASO REAL</span>
                    <span className="text-xs text-muted-foreground font-semibold">{c.tag}</span>
                  </div>
                  <h3 className="text-xl font-black mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                    <p className="text-2xl font-black text-destructive">{c.value}</p>
                    <p className="text-xs font-bold text-destructive/80 tracking-wider mt-1">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg" className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-bold rounded-xl">
                <Link to="/clientes">Conheça Mais Sobre Nossos Projetos <ArrowRight className="h-4 w-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Certificações e Qualidade */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black mb-4">Certificações e Qualidade Comprovada</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Compromisso com a excelência técnica, conformidade normativa e responsabilidade legal.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { title: "ISO 9001", desc: "Certificação de qualidade internacional" },
                { title: "Registro CREA", desc: "Engenheiros credenciados e registrados" },
                { title: "Seguro RC Ativo", desc: "Seguro de responsabilidade civil comprovado" },
                { title: "Laudo Jurídico", desc: "Validade legal comprovada em auditorias" },
              ].map((c) => (
                <div key={c.title} className="bg-card rounded-2xl p-6 border-t-4 border-success shadow-soft text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-success/10 flex items-center justify-center mb-4">
                    <CircleCheck className="h-7 w-7 text-success" />
                  </div>
                  <h3 className="font-black text-lg mb-2">{c.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Equipamentos — premium cards */}

      <RevealSection>
        <section className="bg-secondary py-20 md:py-24 pattern-grid">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Escopo Completo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Equipamentos que Inspecionamos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Cobertura completa para todos os equipamentos pressurizados da sua planta industrial.</p>
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


      {/* Para quem é */}
      <RevealSection>
        <section className="bg-card py-20 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Público-Alvo</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Para Quem é a Inspeção NR13</h2>
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

      {/* FAQ — premium accordion */}
      <RevealSection>
        <section className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-cta font-bold text-sm tracking-widest uppercase mb-3 block">Tire suas Dúvidas</span>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Perguntas Frequentes sobre NR13</h2>
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
              <p className="text-sm text-muted-foreground mb-4">Fale diretamente com nosso engenheiro especialista em NR13.</p>
              <Button asChild className="bg-cta text-cta-foreground hover:bg-cta-hover font-bold rounded-xl">
                <a href="https://wa.me/5511954534057" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" /> Tirar Dúvidas pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </RevealSection>

      {/* Serviços Relacionados */}
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

      {/* Conteúdo SEO/GEO oculto com "Ler mais" */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <BookOpen className="h-8 w-8 text-cta mx-auto mb-3" />
            <h2 className="text-2xl md:text-3xl font-black mb-2">Guia Completo: Inspeção NR13</h2>
            <p className="text-muted-foreground">Tudo o que você precisa saber sobre a norma, tipos de inspeção e obrigatoriedade.</p>
          </div>
          <div className={`relative overflow-hidden transition-all duration-700 ease-in-out`}
               style={{ maxHeight: showSeoContent ? "none" : "14rem" }}>
            <SeoGuideContent content={seoContent} />
            {!showSeoContent && (
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary via-secondary/95 to-transparent" />
            )}
          </div>
          <div className="text-center mt-6">
            <Button
              variant="outline"
              onClick={() => setShowSeoContent(!showSeoContent)}
              className="font-bold gap-2 rounded-xl px-8 py-5 border-cta/30 hover:border-cta hover:text-cta transition-colors"
            >
              {showSeoContent ? (
                <>Ler menos <ChevronUp className="h-4 w-4" /></>
              ) : (
                <>Ler o guia completo sobre NR13 <ChevronDown className="h-4 w-4" /></>
              )}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final — high-impact */}
      <section className="bg-gradient-elegant py-20 md:py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-cta/20 text-cta px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Zap className="h-4 w-4" /> Avaliação gratuita e sem compromisso
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Sua empresa está em conformidade com a NR13?
            </h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">
              Não espere a fiscalização chegar. Fale agora com nosso engenheiro especialista e receba um diagnóstico gratuito.
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
