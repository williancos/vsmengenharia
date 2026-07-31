import heroSaoPaulo from "@/assets/nr13/campo-caldeira-ata-mp810.jpg";
import heroCompressor from "@/assets/nr13/campo-vaso-pressao-azul.jpg";
import heroRecuperabilidade from "@/assets/reclassificacao/art-engenheiros.jpg";

export interface LandingConfig {
  /** Rota completa sem barra inicial — ex.: "servicos/inspecao-nr13-sao-paulo" */
  slug: string;
  h1: string;
  title: string;
  metaDescription: string;
  subtitle: string;
  badge: string;
  serviceName: string;
  heroImage: string;
  areaServed?: string[];
  /** Parágrafo de resposta objetiva — alvo de featured snippet e citação por IA */
  quickAnswer: string;
  highlights: { label: string; value: string }[];
  paraQuem: string[];
  sections: { id: string; label: string }[];
  content: string[];
  entregaveis: string[];
  processo: { title: string; desc: string }[];
  faq: { question: string; answer: string }[];
  relatedPosts: string[];
  relatedServices: { label: string; href: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const landingPages: LandingConfig[] = [
  /* ─────────────────────────────────────────────────────────────
     1) Inspeção NR-13 em São Paulo — intenção local + fornecedor
     ───────────────────────────────────────────────────────────── */
  {
    slug: "servicos/inspecao-nr13-sao-paulo",
    h1: "Inspeção NR-13 em São Paulo: caldeiras, vasos de pressão e tubulações",
    title: "Inspeção NR13 em São Paulo | Laudo com ART — VSM Engenharia",
    metaDescription:
      "Inspeção NR-13 em São Paulo: caldeiras, vasos de pressão, tubulações e reservatórios de ar. Laudo, prontuário e ART por engenheiro habilitado. Capital, ABC, Campinas e interior.",
    subtitle:
      "Atendimento técnico em toda a Grande São Paulo, ABC, Campinas, Vale do Paraíba, Sorocaba, Ribeirão Preto e Baixada Santista — com profissional habilitado, ensaios não destrutivos, laudo completo e ART recolhida.",
    badge: "NR-13 · São Paulo",
    serviceName: "Inspeção NR-13 em São Paulo",
    heroImage: heroSaoPaulo,
    areaServed: ["São Paulo"],
    quickAnswer:
      "A inspeção NR-13 em São Paulo segue exatamente a mesma norma federal aplicada no resto do país — o que muda é a intensidade da fiscalização e a densidade industrial. Para uma planta paulista, o serviço envolve exame externo e interno conforme a categoria do equipamento, ensaios não destrutivos quando indicados, atualização do prontuário e do registro de segurança, laudo conclusivo e ART recolhida por profissional habilitado. Custos típicos vão de R$ 1.500 a R$ 4.000 por vaso de pressão e de R$ 3.000 a R$ 12.000 por caldeira, conforme porte, categoria e escopo de ensaios.",
    highlights: [
      { label: "Regiões atendidas em SP", value: "8+" },
      { label: "Retorno do orçamento", value: "24h" },
      { label: "ART em todo laudo", value: "100%" },
      { label: "Engenheiros com CREA", value: "Ativo" },
    ],
    paraQuem: [
      "Recebeu notificação ou auto de infração da fiscalização do trabalho",
      "Equipamento com inspeção vencida ou sem laudo vigente",
      "Auditoria de cliente ou requalificação de fornecedor exigindo documentação",
      "Comprou caldeira ou vaso usado e não recebeu o prontuário",
      "Reservatório de ar comprimido fora de qualquer controle",
      "Vai reativar equipamento parado há meses",
      "Sinistro em análise e a seguradora pediu os laudos",
      "Planta nova entrando em operação e precisa da inspeção inicial",
    ],
    sections: [
      { id: "cobertura", label: "Cobertura em São Paulo" },
      { id: "o-que-inclui", label: "O que a inspeção inclui" },
      { id: "equipamentos", label: "Equipamentos atendidos" },
      { id: "prazos", label: "Prazos de inspeção por categoria" },
      { id: "custos", label: "Custos praticados em SP" },
      { id: "fiscalizacao", label: "O que a fiscalização cobra em SP" },
      { id: "como-escolher", label: "Como escolher a empresa de inspeção" },
      { id: "faq", label: "Perguntas frequentes" },
    ],
    content: [
`## Cobertura em São Paulo {#cobertura}

São Paulo concentra o maior parque de equipamentos sob pressão do país — caldeiras de indústria alimentícia e têxtil, vasos de processo em química e farmacêutica, autoclaves em hospitais e laboratórios, e reservatórios de ar comprimido em praticamente toda planta fabril.

A VSM Engenharia executa inspeção NR-13 nas seguintes regiões:

| Região | Municípios típicos atendidos |
| --- | --- |
| **Capital e Grande SP** | São Paulo, Guarulhos, Osasco, Barueri, Cotia, Taboão da Serra |
| **ABC Paulista** | Santo André, São Bernardo, São Caetano, Diadema, Mauá |
| **Campinas e região** | Campinas, Indaiatuba, Valinhos, Vinhedo, Americana, Sumaré, Paulínia |
| **Vale do Paraíba** | São José dos Campos, Taubaté, Jacareí, Pindamonhangaba |
| **Sorocaba e região** | Sorocaba, Itu, Salto, Votorantim |
| **Ribeirão Preto e interior** | Ribeirão Preto, Sertãozinho, Araraquara, São Carlos, Piracicaba |
| **Baixada Santista** | Santos, Cubatão, Guarujá, São Vicente |
| **Demais regiões** | Bauru, Marília, Presidente Prudente, São José do Rio Preto e interior em geral |

O deslocamento é considerado na proposta. Plantas com vários equipamentos costumam ter custo unitário significativamente menor, porque a mobilização é diluída.`,

`## O que a inspeção inclui {#o-que-inclui}

O escopo padrão de uma inspeção NR-13 conduzida por profissional habilitado:

- **Levantamento do equipamento** — identificação, plaqueta, PMTA, categoria, condições de instalação
- **Análise documental** — prontuário, registro de segurança, laudos anteriores, projeto de instalação
- **Exame externo** — costado, tampos, soldas acessíveis, suportação, fundação, isolamento, corrosão externa
- **Exame interno** — quando aplicável ao prazo do equipamento, com drenagem, ventilação e entrada em espaço confinado
- **Ensaios não destrutivos** — medição de espessura por ultrassom, líquido penetrante e partícula magnética em soldas críticas
- **Dispositivos de segurança** — válvula de segurança, manômetro, pressostato, controle de nível, sistema de alívio
- **Teste hidrostático** — quando tecnicamente indicado ou após reparo
- **Cálculo da PMTA** — a partir das espessuras medidas, quando o dado não existe ou está desatualizado
- **Laudo técnico conclusivo** — com registro fotográfico, não conformidades classificadas e prazo de correção
- **Atualização do prontuário** e do registro de segurança
- **ART** recolhida no CREA-SP

Os tipos de inspeção e seus gatilhos estão detalhados em [inspeção NR-13 inicial, periódica e extraordinária](/blog/inspecao-nr13-inicial-periodica-extraordinaria), e o método de execução em [inspeção NR-13: tipos, periodicidade e procedimento](/blog/inspecao-nr13-tipos-periodicidade-procedimento).`,

`## Equipamentos atendidos {#equipamentos}

| Equipamento | Observação |
| --- | --- |
| **Caldeiras a vapor** | Flamotubulares e aquatubulares, todas as categorias |
| **Vasos de pressão** | Categorias I a V, incluindo fluidos inflamáveis e tóxicos |
| **Reservatórios de ar comprimido** | O vaso mais esquecido do parque industrial |
| **Autoclaves** | Hospitalares, laboratoriais e industriais |
| **Tubulações** | Vapor, água quente, fluidos sob pressão |
| **Trocadores de calor** | Casco e tubo, placas |
| **Tanques metálicos de armazenamento** | Conforme abrangência da norma |
| **Cilindros e acumuladores** | Hidráulicos e pneumáticos sob pressão |

O reservatório de ar comprimido merece destaque: é vaso de pressão sob NR-13, está em quase toda planta, e frequentemente não consta em nenhum inventário. Detalhamento em [inspeção NR-13 em compressor de ar](/servicos/inspecao-nr13-compressor-de-ar).`,

`## Prazos de inspeção por categoria {#prazos}

### Vasos de pressão — prazos máximos sem SPIE

| Categoria | Exame externo | Exame interno |
| --- | --- | --- |
| I | 1 ano | 3 anos |
| II | 2 anos | 4 anos |
| III | 3 anos | 6 anos |
| IV | 4 anos | 8 anos |
| V | 5 anos | 10 anos |

### Caldeiras — prazos máximos

| Situação | Prazo máximo |
| --- | --- |
| Categorias A e B | 12 meses |
| Recuperação de álcalis, qualquer categoria | 15 meses |
| Categoria A, com teste das válvulas de segurança aos 12 meses | 24 meses |
| Com SPIE — recuperação de álcalis | 24 meses |
| Com SPIE — categoria B | 24 meses |
| Com SPIE — categoria A | 30 meses |

O prazo é **máximo**, não recomendado: o profissional habilitado pode determinar intervalo menor com base em taxa de corrosão medida, histórico e condições operacionais. A classificação por categoria está em [vasos de pressão NR-13](/blog/vasos-de-pressao-nr13-classificacao-categoria) e [categorias de caldeira A, B e C](/blog/categorias-caldeira-a-b-c-nr13).`,

`## Custos praticados em SP {#custos}

Faixas observadas no estado em 2026, para inspeção com laudo e ART:

| Serviço | Faixa |
| --- | --- |
| Reservatório de ar comprimido | R$ 900 – R$ 2.500 |
| Vaso de pressão pequeno | R$ 1.500 – R$ 3.500 |
| Vaso de pressão médio | R$ 3.000 – R$ 8.000 |
| Vaso de grande porte ou fluido perigoso | R$ 8.000 – R$ 20.000 |
| Caldeira pequena | R$ 3.000 – R$ 7.000 |
| Caldeira média | R$ 6.000 – R$ 15.000 |
| Caldeira grande | R$ 15.000 – R$ 40.000 |
| Reconstituição de prontuário | R$ 4.000 – R$ 40.000 |
| Teste hidrostático | R$ 2.500 – R$ 30.000 |

O que move o preço: porte e categoria, necessidade de exame interno com parada, extensão da malha de ultrassom, existência de prontuário, distância e **quantidade de equipamentos no mesmo endereço**. Comparativos detalhados em [quanto custa um laudo NR-13 em São Paulo](/blog/quanto-custa-laudo-nr13-sao-paulo).

> Orçamento fechado antes da mobilização, sem cobrança por "surpresa técnica" durante a execução. Se a inspeção revelar necessidade de serviço adicional, isso é apresentado como proposta separada e decidido por você.`,

`## O que a fiscalização cobra em SP {#fiscalizacao}

Em auditoria fiscal do trabalho, a sequência de solicitação é previsível:

1. **Inventário dos equipamentos** sob pressão da planta
2. **Prontuário** de cada equipamento
3. **Registro de segurança** com anotações de operação e ocorrências
4. **Laudos de inspeção** vigentes, com ART correspondente
5. **Certificados de treinamento** dos operadores
6. **Certificados de calibração** de manômetros e válvulas de segurança
7. **Projeto de instalação** e condições da casa de caldeiras

As falhas mais encontradas em plantas paulistas: reservatório de ar comprimido fora do inventário, prontuário ausente em equipamento comprado usado, laudo vencido, e válvula de segurança sem registro de aferição.

Equipamento sem documentação pode ser **interditado no ato**, com parada imediata da produção. As consequências completas estão em [empresa sem prontuário NR-13](/blog/sem-prontuario-nr13-o-que-acontece).`,

`## Como escolher a empresa de inspeção {#como-escolher}

Critérios objetivos para avaliar qualquer fornecedor de inspeção NR-13, inclusive a VSM:

| Critério | O que verificar |
| --- | --- |
| **Profissional habilitado** | Engenheiro com CREA ativo e atribuição compatível — peça o número e confira |
| **ART** | O laudo precisa vir com ART recolhida e vinculada ao serviço, não apenas assinatura |
| **Qualificação para categoria alta** | Equipamentos de categoria mais crítica exigem qualificação específica do profissional |
| **Ensaios END** | Inspetor certificado no método, com certificação vigente |
| **Instrumentação calibrada** | Certificados de calibração vigentes de medidor de espessura e manômetros |
| **Modelo de laudo** | Peça um exemplo: laudo genérico sem medições e sem fotos não sustenta auditoria |
| **Tratamento do prontuário** | A empresa atualiza o prontuário ou só entrega um PDF solto? |
| **Escopo explícito na proposta** | O que está incluso e o que é extra precisa estar escrito |

O sinal de alerta mais comum é o **laudo emitido sem visita adequada** — preço muito abaixo do mercado normalmente significa inspeção superficial, sem ensaio e sem medição. Em caso de acidente, esse laudo não protege a empresa; ao contrário, documenta que havia uma verificação formal que não identificou o risco.`,
    ],
    entregaveis: [
      "Laudo técnico de inspeção com conclusão objetiva sobre aptidão operacional",
      "Registro fotográfico completo dos pontos avaliados e das não conformidades",
      "Relatórios de ensaios não destrutivos com mapa de pontos e valores medidos",
      "Prontuário criado ou atualizado, conforme o caso",
      "Registro de segurança atualizado",
      "Lista de não conformidades classificada por criticidade, com prazo de correção",
      "Definição do próximo prazo de inspeção, com justificativa técnica",
      "ART recolhida no CREA-SP e vinculada ao serviço",
    ],
    processo: [
      { title: "Contato e levantamento", desc: "Você informa tipo, quantidade e localização dos equipamentos. Se não souber a categoria, ajudamos a identificar pela plaqueta ou por fotos." },
      { title: "Proposta com escopo fechado", desc: "Retorno em até 24h com escopo detalhado, prazo e valor. Sem custo para orçar." },
      { title: "Programação da visita", desc: "Agendamento conforme a necessidade de parada. Exame externo pode ser feito com a planta operando; exame interno exige parada programada." },
      { title: "Execução em campo", desc: "Exame visual, medições, ensaios não destrutivos e verificação dos dispositivos de segurança, com registro fotográfico." },
      { title: "Análise técnica e laudo", desc: "Consolidação dos dados, cálculo de PMTA e taxa de corrosão quando aplicável, e emissão do laudo com ART." },
      { title: "Entrega e plano de ação", desc: "Entrega do laudo e do prontuário atualizado, com as não conformidades priorizadas e o próximo prazo definido." },
    ],
    faq: [
      { question: "Quanto custa uma inspeção NR-13 em São Paulo?", answer: "Depende do equipamento e do escopo. As faixas praticadas em 2026 são de R$ 900 a R$ 2.500 para reservatório de ar comprimido, R$ 1.500 a R$ 8.000 para vasos de pressão conforme o porte, e R$ 3.000 a R$ 40.000 para caldeiras conforme categoria e necessidade de exame interno. Plantas com vários equipamentos no mesmo endereço têm redução relevante no custo unitário, porque a mobilização é diluída." },
      { question: "Preciso parar a produção para a inspeção?", answer: "Nem sempre. O exame externo é executado com o equipamento em operação ou em parada curta. Já o exame interno exige drenagem, despressurização, ventilação e abertura, o que significa parada programada — em geral de 1 a 5 dias conforme o porte. O planejamento normal é executar o exame externo na data devida e alinhar o exame interno com a parada de manutenção já prevista pela planta." },
      { question: "Em quanto tempo recebo o laudo?", answer: "O prazo típico é de 5 a 15 dias úteis após a execução em campo, variando com a quantidade de equipamentos e a necessidade de ensaios laboratoriais ou de cálculo de PMTA. Em situações de urgência — notificação de fiscalização ou auditoria com data marcada — é possível priorizar a emissão; informe o prazo no primeiro contato." },
      { question: "Vocês atendem fora da capital?", answer: "Sim. Atendemos toda a Grande São Paulo, ABC, Campinas e região, Vale do Paraíba, Sorocaba, Ribeirão Preto e interior, Baixada Santista e demais regiões do estado, além de Minas Gerais, Rio de Janeiro e Espírito Santo. O deslocamento entra na proposta de forma transparente." },
      { question: "E se meu equipamento não tiver prontuário?", answer: "O prontuário pode ser reconstituído tecnicamente por profissional habilitado: levantamento dimensional, recuperação documental junto ao fabricante quando possível, caracterização de material, ensaios não destrutivos, cálculo da PMTA a partir das espessuras medidas, recategorização e emissão do prontuário com ART. É procedimento previsto e regulariza o equipamento antes que a falta do documento vire interdição." },
    ],
    relatedPosts: [
      "inspecao-nr13-inicial-periodica-extraordinaria",
      "sem-prontuario-nr13-o-que-acontece",
      "vasos-de-pressao-nr13-classificacao-categoria",
      "quanto-custa-laudo-nr13-sao-paulo",
      "laudo-nr13-quanto-custa-quem-pode-emitir",
      "teste-hidrostatico-vaso-pressao-quando-fazer",
    ],
    relatedServices: [
      { label: "Inspeção e Laudo NR-13", href: "/servicos/nr13" },
      { label: "Inspeção NR-13 em compressor de ar", href: "/servicos/inspecao-nr13-compressor-de-ar" },
      { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
      { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita" },
    ],
    ctaTitle: "Sua planta em São Paulo está com a NR-13 em dia?",
    ctaSubtitle: "Envie a lista de equipamentos e receba o orçamento com escopo fechado em até 24h.",
  },

  /* ─────────────────────────────────────────────────────────────
     2) Inspeção NR-13 em compressor de ar — gap de entrada
     ───────────────────────────────────────────────────────────── */
  {
    slug: "servicos/inspecao-nr13-compressor-de-ar",
    h1: "Inspeção NR-13 em compressor de ar e reservatório de ar comprimido",
    title: "Inspeção NR13 Compressor de Ar e Reservatório | VSM Engenharia",
    metaDescription:
      "Reservatório de ar comprimido é vaso de pressão sob NR-13. Inspeção, categoria, periodicidade, prontuário e laudo com ART por engenheiro habilitado no Sudeste.",
    subtitle:
      "O reservatório do compressor é vaso de pressão sob NR-13 — e é o equipamento que mais aparece sem prontuário, sem inspeção e fora do inventário em fiscalização. Inspeção completa com laudo e ART.",
    badge: "NR-13 · Ar comprimido",
    serviceName: "Inspeção NR-13 em reservatório de ar comprimido",
    heroImage: heroCompressor,
    quickAnswer:
      "Sim, o reservatório de ar comprimido do compressor é vaso de pressão e está sob a NR-13. O ar comprimido é fluido da classe menos severa, o que costuma resultar em categoria mais branda — mas categoria branda não significa isenção: o equipamento precisa de prontuário, registro de segurança, dispositivos de segurança aferidos, inspeção periódica por profissional habilitado e laudo com ART. É o vaso de pressão mais comum da indústria brasileira e o que mais aparece irregular em auditoria, justamente porque quase ninguém o chama de vaso de pressão.",
    highlights: [
      { label: "Vaso mais esquecido do parque", value: "#1" },
      { label: "Faixa de custo típica", value: "R$ 900+" },
      { label: "ART em todo laudo", value: "100%" },
      { label: "Cobertura", value: "Sudeste" },
    ],
    paraQuem: [
      "Tem compressor de ar com reservatório e nunca fez inspeção NR-13",
      "Auditor ou cliente perguntou pelo prontuário do reservatório",
      "Comprou compressor usado, sem documentação do reservatório",
      "Reservatório com corrosão visível, purga entupida ou dreno inoperante",
      "Sala de compressores nunca entrou no inventário de equipamentos sob pressão",
      "Precisa regularizar antes de uma auditoria de fornecedor",
      "Vai reativar compressor parado há meses",
      "Oficina, lavanderia, gráfica, marcenaria ou serralheria com reservatório em uso",
    ],
    sections: [
      { id: "e-vaso-de-pressao", label: "O reservatório é vaso de pressão?" },
      { id: "categoria", label: "Como se define a categoria" },
      { id: "por-que-esquecido", label: "Por que ele fica de fora do controle" },
      { id: "riscos", label: "Riscos reais do reservatório sem controle" },
      { id: "o-que-inspecionar", label: "O que a inspeção verifica" },
      { id: "dispositivos", label: "Dispositivos de segurança obrigatórios" },
      { id: "periodicidade", label: "Periodicidade e documentação" },
      { id: "custos", label: "Custos e prazos" },
      { id: "faq", label: "Perguntas frequentes" },
    ],
    content: [
`## O reservatório é vaso de pressão? {#e-vaso-de-pressao}

Sim. O reservatório acoplado ao compressor — chamado no dia a dia de "pulmão", "tanque do compressor" ou "cilindro de ar" — é **vaso de pressão** e está abrangido pela NR-13.

O critério não é o nome nem a aparência do equipamento, e sim a função: recipiente fechado que contém fluido sob pressão acima da atmosférica. Isso vale para o reservatório vertical de 200 litros de uma serralheria e para o pulmão de 5.000 litros de uma linha de produção.

A confusão vem de três lugares:

- **O equipamento é vendido como acessório do compressor**, não como vaso de pressão
- **O fluido é ar**, que soa inofensivo comparado a vapor ou produto químico
- **Não há operador dedicado** — ninguém "opera" o reservatório, ele só está lá

Nenhum desses pontos afasta a norma. A energia armazenada em um reservatório pressurizado é função da pressão e do volume, e o ar é um gás compressível — ou seja, em caso de ruptura, libera essa energia de forma explosiva, ao contrário do que ocorreria com um líquido.`,

`## Como se define a categoria {#categoria}

A categorização de vasos de pressão na NR-13 combina dois elementos:

1. **A classe do fluido**, que reflete a periculosidade intrínseca — inflamabilidade, toxicidade, temperatura
2. **O produto entre pressão e volume**, que reflete a energia armazenada

O ar comprimido se enquadra na classe de fluido menos severa. Isso empurra o equipamento para categorias mais brandas, com prazos de inspeção mais longos — mas **não o retira da norma**.

O efeito prático dessa combinação:

| Situação | Consequência típica |
| --- | --- |
| Reservatório pequeno, baixa pressão | Categoria mais branda, prazos mais longos |
| Reservatório grande ou pressão elevada | Categoria mais exigente, prazos menores |
| Sem PMTA definida | Não há como enquadrar — o primeiro passo é determinar a PMTA |
| Plaqueta ilegível ou ausente | Exige levantamento técnico antes da categorização |

O erro mais frequente aqui é presumir a categoria "de olho". O enquadramento é calculado, registrado no prontuário e determina todo o regime de inspeção subsequente. O procedimento completo está em [vasos de pressão NR-13: classificação por categoria](/blog/vasos-de-pressao-nr13-classificacao-categoria).`,

`## Por que ele fica de fora do controle {#por-que-esquecido}

Em auditoria, o reservatório de ar comprimido é o achado mais recorrente. As causas se repetem:

- **Não está no inventário** — a planta lista caldeiras e vasos de processo, e esquece a sala de compressores
- **Foi comprado junto com o compressor**, como parte de um pacote, sem documentação própria
- **Fica em área periférica** — casa de máquinas, mezanino, área externa, fundos
- **Não tem responsável definido** — manutenção cuida do compressor, não do reservatório
- **É antigo** e sobreviveu a várias gerações de gestão da planta
- **Foi transferido de outra unidade** sem documentação
- **Ninguém o chama de vaso de pressão**, então ele não entra no processo de NR-13

O resultado é sempre o mesmo: equipamento pressurizado, muitas vezes com anos de condensado acumulado no fundo, sem qualquer verificação de espessura de parede.

Por isso a primeira entrega de qualquer programa de regularização é o **inventário completo** — incluindo o que ninguém chama de vaso de pressão.`,

`## Riscos reais do reservatório sem controle {#riscos}

O mecanismo de falha do reservatório de ar comprimido é bem conhecido e silencioso: **corrosão interna pelo condensado**.

O ar atmosférico contém umidade. Ao ser comprimido e resfriado, essa umidade condensa e se acumula no ponto mais baixo do reservatório. Se o dreno não é operado — manual esquecido, automático entupido — a água permanece ali permanentemente.

A sequência típica:

1. Condensado se acumula no fundo do reservatório
2. Corrosão ataca a parede interna a partir da lâmina d'água
3. A espessura de parede reduz progressivamente, **sem qualquer sinal externo**
4. A pressão de trabalho permanece a mesma, mas a margem de segurança desaparece
5. A falha ocorre por ruptura da região corroída

O ponto crítico é o item 3: por fora, o reservatório continua com a mesma aparência. Não há vazamento gradual que sirva de aviso. É exatamente por isso que a **medição de espessura por ultrassom** é o ensaio central desta inspeção — ela mede o que a inspeção visual não alcança.

> Um reservatório com pintura impecável e dreno entupido há cinco anos é mais perigoso do que um reservatório enferrujado por fora com purga funcionando.`,

`## O que a inspeção verifica {#o-que-inspecionar}

### Exame externo

- ☐ Identificação: plaqueta, fabricante, número de série, PMTA, volume, ano
- ☐ Corrosão externa, especialmente na base e nos pontos de apoio
- ☐ Estado das soldas do costado e dos tampos
- ☐ Deformações, amassamentos e reparos anteriores
- ☐ Bocais, conexões, roscas e flanges
- ☐ Fixação, base, chumbadores e nivelamento
- ☐ Aterramento e instalação elétrica associada
- ☐ Condições do ambiente, ventilação e acesso

### Exame interno e medição

- ☐ Medição de espessura por ultrassom em malha definida, com atenção à geratriz inferior
- ☐ Inspeção interna por boca de visita quando existente, ou boroscopia quando não há acesso
- ☐ Avaliação do acúmulo de condensado e de produtos de corrosão
- ☐ Verificação de pites e corrosão localizada
- ☐ Cálculo da espessura mínima requerida e comparação com a medida
- ☐ Determinação ou revalidação da PMTA
- ☐ Estimativa de taxa de corrosão e de vida remanescente, quando há histórico

### Sistema de drenagem

- ☐ Dreno manual acessível e operante
- ☐ Purgador automático funcionando, quando existente
- ☐ Ausência de acúmulo permanente de água
- ☐ Rotina de purga definida e registrada

A medição da **geratriz inferior** é o ponto mais importante de todo o serviço: é ali que o condensado se deposita e é ali que a parede afina primeiro.`,

`## Dispositivos de segurança obrigatórios {#dispositivos}

| Dispositivo | Requisito |
| --- | --- |
| **Válvula de segurança** | Dimensionada para a capacidade do compressor, ajustada e aferida, com registro |
| **Manômetro** | Legível, na faixa adequada, com calibração vigente |
| **Dreno** | Acessível e operante — manual ou automático |
| **Pressostato** | Ajustado abaixo da PMTA |
| **Identificação da PMTA** | Visível no equipamento |

Duas falhas específicas e frequentes:

- **Válvula de segurança lacrada, pintada ou substituída por bujão.** É a última barreira do equipamento. Anulada, o reservatório passa a depender exclusivamente do pressostato — que é um dispositivo de controle, não de segurança.
- **Válvula subdimensionada.** A válvula precisa ser capaz de aliviar a vazão do compressor. Válvula "que existe" mas não dá conta da vazão não cumpre a função em uma falha do pressostato.

A aferição periódica da válvula de segurança precisa estar documentada. É um dos itens que o auditor pede logo depois do prontuário.`,

`## Periodicidade e documentação {#periodicidade}

O regime de inspeção decorre da categoria do equipamento. Para vasos de pressão, os prazos máximos sem SPIE:

| Categoria | Exame externo | Exame interno |
| --- | --- | --- |
| I | 1 ano | 3 anos |
| II | 2 anos | 4 anos |
| III | 3 anos | 6 anos |
| IV | 4 anos | 8 anos |
| V | 5 anos | 10 anos |

Documentação que o equipamento precisa ter:

1. **Prontuário** — dados de projeto, material, PMTA, categoria, memorial e registros
2. **Registro de segurança** — ocorrências operacionais e intervenções
3. **Laudos de inspeção** com ART
4. **Certificado de calibração** do manômetro
5. **Registro de aferição** da válvula de segurança
6. **Projeto de instalação**

Quando o reservatório não tem prontuário — situação da maioria — o caminho é a **reconstituição**: levantamento, medição de espessuras, cálculo da PMTA, categorização e emissão do documento. As consequências de operar sem ele estão em [empresa sem prontuário NR-13](/blog/sem-prontuario-nr13-o-que-acontece).`,

`## Custos e prazos {#custos}

| Serviço | Faixa | Prazo típico |
| --- | --- | --- |
| Inspeção com laudo e ART | R$ 900 – R$ 2.500 | 5 a 10 dias úteis |
| Inspeção + reconstituição de prontuário | R$ 2.500 – R$ 6.000 | 15 a 30 dias |
| Vários reservatórios no mesmo endereço | Custo unitário bem menor | Conforme quantidade |
| Teste hidrostático, quando indicado | R$ 2.500 – R$ 5.000 | Programação com parada |

O reservatório de ar comprimido é, em geral, o equipamento sob pressão de **menor custo de regularização** de toda a planta — e o de maior probabilidade de estar irregular. Quando a empresa está estruturando o programa de NR-13, começar por ele costuma ser a decisão mais eficiente: elimina rapidamente o achado mais provável de auditoria.

Plantas com vários compressores, ou grupos com várias unidades, têm ganho de escala relevante ao contratar em lote.`,
    ],
    entregaveis: [
      "Laudo de inspeção do reservatório com conclusão sobre aptidão operacional",
      "Relatório de medição de espessura por ultrassom, com mapa de pontos",
      "Cálculo ou revalidação da PMTA e enquadramento por categoria",
      "Verificação e registro dos dispositivos de segurança",
      "Prontuário criado ou atualizado",
      "Registro fotográfico e lista de não conformidades com prazos",
      "Definição do próximo prazo de inspeção",
      "ART recolhida e vinculada ao serviço",
    ],
    processo: [
      { title: "Levantamento inicial", desc: "Informe quantidade, volume e pressão dos reservatórios. Uma foto da plaqueta já permite orçar com precisão." },
      { title: "Proposta em 24h", desc: "Escopo fechado, prazo e valor, com indicação de reconstituição de prontuário quando o equipamento não tiver documentação." },
      { title: "Inspeção em campo", desc: "Exame externo, medição de espessura por ultrassom com foco na geratriz inferior, verificação de dispositivos e do sistema de drenagem." },
      { title: "Análise e cálculo", desc: "Espessura mínima requerida, PMTA, taxa de corrosão quando há histórico, e enquadramento por categoria." },
      { title: "Laudo e prontuário", desc: "Emissão do laudo com ART e entrega do prontuário criado ou atualizado, com o próximo prazo definido." },
    ],
    faq: [
      { question: "Compressor de ar precisa mesmo de inspeção NR-13?", answer: "O compressor em si é máquina, avaliada sob a NR-12. Já o reservatório de ar comprimido acoplado a ele é vaso de pressão e está sob a NR-13, com necessidade de prontuário, registro de segurança, dispositivos de segurança aferidos, inspeção periódica e laudo com ART. A confusão entre as duas normas é comum: na prática, uma sala de compressores demanda atenção às duas." },
      { question: "Reservatório pequeno, de 100 ou 200 litros, também entra na norma?", answer: "A abrangência depende dos critérios de enquadramento da norma, que combinam pressão e volume. Equipamentos muito pequenos e de baixa pressão podem ficar fora, mas essa é uma conclusão técnica, não uma presunção: precisa ser verificada e registrada. Na prática industrial, a maior parte dos reservatórios acoplados a compressores de uso profissional está abrangida. A verificação do enquadramento é rápida e evita a surpresa em auditoria." },
      { question: "Meu reservatório não tem plaqueta. Ainda dá para regularizar?", answer: "Sim. Sem plaqueta, o caminho é o levantamento técnico: medição dimensional, caracterização do material quando necessário, medição de espessuras por ultrassom e cálculo da PMTA a partir da geometria e da espessura remanescente. Com esses dados, define-se a categoria e emite-se o prontuário. É o mesmo procedimento de reconstituição aplicado a qualquer vaso sem documentação." },
      { question: "O que mais reprova um reservatório de ar comprimido?", answer: "Em ordem de frequência: espessura de parede abaixo da mínima requerida por corrosão interna na geratriz inferior, válvula de segurança ausente, lacrada ou subdimensionada, dreno inoperante com acúmulo permanente de condensado, manômetro sem calibração ou ilegível, e ausência total de prontuário. A corrosão interna é a mais grave porque não dá sinal externo." },
      { question: "Preciso parar a produção para inspecionar?", answer: "O exame externo e a medição de espessura por ultrassom são feitos com o equipamento despressurizado, o que normalmente exige apenas uma parada curta — frequentemente resolvida em uma janela de manutenção ou fora do turno. Já o exame interno, quando o prazo do equipamento o exige, demanda despressurização, drenagem e abertura, com programação específica." },
    ],
    relatedPosts: [
      "vasos-de-pressao-nr13-classificacao-categoria",
      "sem-prontuario-nr13-o-que-acontece",
      "inspecao-nr13-inicial-periodica-extraordinaria",
      "teste-hidrostatico-vaso-pressao-quando-fazer",
      "ensaios-nao-destrutivos-end-industriais",
      "prontuario-nr13-o-que-deve-conter",
    ],
    relatedServices: [
      { label: "Inspeção e Laudo NR-13", href: "/servicos/nr13" },
      { label: "Inspeção NR-13 em São Paulo", href: "/servicos/inspecao-nr13-sao-paulo" },
      { label: "Adequação NR-12", href: "/servicos/nr12" },
      { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
    ],
    ctaTitle: "Seu reservatório de ar comprimido tem prontuário?",
    ctaSubtitle: "É o vaso de pressão mais comum e o mais esquecido. Regularize antes que vire achado de auditoria.",
  },

  /* ─────────────────────────────────────────────────────────────
     3) Laudo de recuperabilidade — nome técnico do produto
     ───────────────────────────────────────────────────────────── */
  {
    slug: "servicos/laudo-de-recuperabilidade",
    h1: "Laudo de recuperabilidade para reclassificação de monta",
    title: "Laudo de Recuperabilidade | Reclassificação de Monta — VSM",
    metaDescription:
      "Laudo de recuperabilidade com ART para reclassificação de monta: o que é, o que contém, quem pode emitir, prazo e custo. Atendimento em SP, MG, RJ e ES.",
    subtitle:
      "É o documento de engenharia que atesta a viabilidade técnica de recuperação do veículo sinistrado — a peça central do processo de reclassificação de monta junto ao DETRAN.",
    badge: "Reclassificação de Monta",
    serviceName: "Laudo de recuperabilidade veicular",
    heroImage: heroRecuperabilidade,
    quickAnswer:
      "O laudo de recuperabilidade é o documento técnico, assinado por engenheiro com CREA ativo e ART recolhida, que avalia a extensão do dano de um veículo sinistrado e conclui sobre a viabilidade técnica da sua recuperação. É a peça central do processo de reclassificação de monta: sem ele, o DETRAN não tem base técnica para reavaliar a classificação registrada no documento do veículo. Inclui inspeção presencial, avaliação estrutural, registro fotográfico, memorial descritivo dos reparos e conclusão técnica.",
    highlights: [
      { label: "Estados atendidos", value: "SP · MG · RJ · ES" },
      { label: "Prazo de emissão", value: "3 a 10 dias" },
      { label: "ART recolhida", value: "Sempre" },
      { label: "Retorno do orçamento", value: "24h" },
    ],
    paraQuem: [
      "Veículo com restrição de média ou grande monta no documento",
      "Descobriu a restrição ao tentar vender ou transferir o veículo",
      "Sinistro recente e precisa iniciar o processo dentro do prazo",
      "Perdeu o prazo administrativo e precisa de laudo mais robusto",
      "Comprou veículo em leilão e quer avaliar a viabilidade antes de reparar",
      "Processo indeferido por laudo anterior insuficiente",
      "Oficina ou revenda que precisa do laudo para o cliente",
      "Quer avaliar a recuperabilidade antes de decidir se vale reparar",
    ],
    sections: [
      { id: "o-que-e", label: "O que é o laudo de recuperabilidade" },
      { id: "para-que-serve", label: "Para que serve no processo" },
      { id: "o-que-contem", label: "O que o laudo contém" },
      { id: "quem-pode-emitir", label: "Quem pode emitir" },
      { id: "como-e-feito", label: "Como o laudo é elaborado" },
      { id: "nao-confundir", label: "O que não confundir com ele" },
      { id: "prazo-custo", label: "Prazo e custo" },
      { id: "indeferimento", label: "Por que laudos são recusados" },
      { id: "faq", label: "Perguntas frequentes" },
    ],
    content: [
`## O que é o laudo de recuperabilidade {#o-que-e}

O **laudo de recuperabilidade** é o documento de engenharia que avalia tecnicamente um veículo sinistrado e conclui sobre a **viabilidade de sua recuperação** — se a estrutura e os sistemas de segurança podem ser restabelecidos a uma condição segura de circulação.

Ele não é uma opinião sobre a aparência do veículo nem um orçamento de funilaria. É uma avaliação estrutural: longarinas, monobloco ou chassi, colunas, assoalho, torres de suspensão, pontos de ancoragem dos cintos, e os sistemas de freio, direção e suspensão.

A conclusão do laudo responde a uma pergunta objetiva: **este veículo pode voltar a circular com segurança após reparo executado conforme o memorial descrito?**`,

`## Para que serve no processo {#para-que-serve}

Quando um veículo sofre sinistro relevante, a classificação de monta passa a constar no seu registro, com efeitos práticos imediatos:

- Restrição no documento do veículo
- Desvalorização expressiva no mercado
- Dificuldade ou impedimento de transferência
- Restrições de contratação de seguro

A **reclassificação de monta** é o processo administrativo que reverte ou ajusta essa classificação. E o laudo de recuperabilidade é a peça técnica que sustenta o pedido: sem ele, o órgão não tem base para reavaliar.

Na prática, o laudo cumpre três funções:

| Função | Momento |
| --- | --- |
| **Decisão** | Antes do reparo — informa se vale investir na recuperação |
| **Direção técnica** | Durante o reparo — o memorial define o que precisa ser feito e como |
| **Prova** | No processo — fundamenta o pedido junto ao DETRAN |

A primeira função é a mais subestimada. Contratar o laudo **antes** de reparar evita o cenário mais caro de todos: gastar com reparo em veículo que não teria viabilidade técnica reconhecida.

A visão completa do processo está em [guia completo de reclassificação de monta](/blog/reclassificacao-monta-guia-completo) e o cronograma realista em [quanto tempo demora uma reclassificação de monta](/blog/quanto-tempo-demora-reclassificacao-de-monta).`,

`## O que o laudo contém {#o-que-contem}

Um laudo tecnicamente completo inclui:

1. **Identificação do veículo** — marca, modelo, ano, placa, chassi, motor, cor, com conferência das numerações
2. **Identificação do proprietário** e do solicitante
3. **Histórico do sinistro** — natureza, data e documentação disponível
4. **Descrição da situação encontrada** na inspeção presencial
5. **Avaliação estrutural detalhada** — longarinas, monobloco ou chassi, colunas, assoalho, torres, travessas
6. **Avaliação dos sistemas de segurança** — freios, direção, suspensão, cintos, airbags
7. **Registro fotográfico extenso**, com fotos gerais e de detalhe de cada região avaliada
8. **Memorial descritivo dos reparos** necessários, com método de execução por região
9. **Relação de componentes** a substituir
10. **Análise de viabilidade técnica** da recuperação
11. **Conclusão objetiva e fundamentada**
12. **Identificação do engenheiro responsável**, CREA e **número da ART**

O item 8 é o que separa um laudo útil de um laudo apenas formal. O memorial não é lista genérica: define o que fazer em cada região estrutural e como, e é contra ele que o reparo será confrontado na vistoria. O aprofundamento técnico está em [memorial de cálculo da reclassificação de monta](/blog/memorial-de-calculo-reclassificacao-monta).`,

`## Quem pode emitir {#quem-pode-emitir}

O laudo de recuperabilidade é **atividade técnica privativa de engenheiro** com CREA ativo e atribuição compatível — tipicamente engenharia mecânica ou automotiva.

| Requisito | Por quê |
| --- | --- |
| **CREA ativo** | Registro profissional vigente é condição de validade |
| **Atribuição compatível** | A avaliação estrutural e de sistemas exige formação específica |
| **ART recolhida** | Vincula um profissional identificável à conclusão técnica |
| **Inspeção presencial** | Laudo emitido só com fotos enviadas pelo cliente é frágil e frequentemente recusado |

Alguns esclarecimentos que evitam contratação equivocada:

- **Vistoriador não emite laudo de recuperabilidade.** Vistoria de identificação veicular é outro serviço, com outra finalidade.
- **Mecânico ou funileiro não assina o laudo**, por mais experiente que seja. Podem executar o reparo, não a peça técnica.
- **Despachante não é responsável técnico.** Pode conduzir o trâmite administrativo, mas o laudo tem que vir de engenheiro.

Peça sempre o número do CREA e o número da ART. São verificáveis.`,

`## Como o laudo é elaborado {#como-e-feito}

### 1. Análise prévia

Levantamento da situação documental do veículo: restrições, débitos, alienação, natureza da classificação registrada e documentação do sinistro disponível. Essa etapa evita começar um processo que esbarraria em impedimento administrativo.

### 2. Inspeção presencial

Avaliação do veículo com o engenheiro em campo. Verificação das numerações de chassi e motor, avaliação estrutural região por região, verificação dos sistemas de segurança e registro fotográfico sistemático.

### 3. Avaliação estrutural

Análise de deformação, alinhamento e integridade dos elementos estruturais, com atenção às regiões de absorção de impacto e aos pontos de ancoragem de suspensão e cintos.

### 4. Memorial dos reparos

Definição, por região, do que precisa ser reparado, substituído ou realinhado, e do método adequado — incluindo o que **não** pode ser feito, como reparo por aquecimento em determinadas regiões estruturais.

### 5. Conclusão técnica

Parecer fundamentado sobre a viabilidade da recuperação, com as condições técnicas em que ela se sustenta.

### 6. Emissão e ART

Emissão do laudo assinado, com ART recolhida, e orientação sobre a documentação e as etapas seguintes do processo.`,

`## O que não confundir com ele {#nao-confundir}

| Documento | Finalidade | Quem emite |
| --- | --- | --- |
| **Laudo de recuperabilidade** | Atesta a viabilidade técnica de recuperar o veículo sinistrado | Engenheiro com CREA e ART |
| **Laudo de vistoria veicular** | Confere identificação, numerações e características do veículo | Empresa credenciada de vistoria |
| **Laudo cautelar** | Pesquisa histórico e sinaliza indícios de sinistro para compra e venda | Empresa de vistoria cautelar |
| **Orçamento de funilaria** | Estima custo do reparo | Oficina |
| **Laudo de reclassificação de monta** | Termo usado no mercado como sinônimo do laudo de recuperabilidade | Engenheiro com CREA e ART |

Os dois primeiros são confundidos com frequência, e a confusão custa tempo: proprietário contrata vistoria cautelar acreditando estar contratando o laudo do processo, e descobre a diferença ao protocolar.

O último ponto merece nota: **"laudo de reclassificação de monta" e "laudo de recuperabilidade" são, na prática, o mesmo documento** — o segundo é o nome técnico, o primeiro é como o mercado o chama pela finalidade.`,

`## Prazo e custo {#prazo-custo}

| Etapa | Prazo típico |
| --- | --- |
| Agendamento da inspeção | 1 a 5 dias |
| Elaboração do laudo após a inspeção | 3 a 10 dias |
| Processo completo de reclassificação | 45 a 120 dias |

O laudo **não é o gargalo** do processo. A maior parte do tempo total se concentra em agendamento de vistoria e análise do órgão — detalhamento em [quanto tempo demora uma reclassificação de monta](/blog/quanto-tempo-demora-reclassificacao-de-monta).

O custo varia conforme porte do veículo, extensão do dano, necessidade de deslocamento e complexidade do memorial. Passageiro de porte médio com dano localizado fica numa faixa; veículo pesado, utilitário ou dano estrutural extenso, em outra. O orçamento é fechado antes da execução, sem cobrança adicional durante o serviço.

> Vale a comparação: o custo do laudo é uma fração da desvalorização que a restrição impõe ao veículo. O impacto patrimonial está quantificado em [média monta: desvalorização e quanto se perde](/blog/media-monta-desvalorizacao-quanto-perde).`,

`## Por que laudos são recusados {#indeferimento}

As causas mais frequentes de exigência ou indeferimento ligadas ao laudo:

| Causa | Como evitar |
| --- | --- |
| **Registro fotográfico insuficiente** | Fotos gerais e de detalhe de cada região estrutural avaliada |
| **Conclusão genérica** | Parecer fundamentado, região por região, e não uma frase de fechamento |
| **Memorial vago** | Definição do reparo e do método por região, confrontável na vistoria |
| **Ausência de ART** | ART recolhida e referenciada no laudo |
| **Emitido sem inspeção presencial** | Inspeção em campo, sempre |
| **Divergência com as notas fiscais** | O memorial e as peças efetivamente usadas precisam conversar |
| **Numerações não conferidas** | Chassi e motor verificados e registrados no laudo |
| **Reparo executado fora do memorial** | Reparo conforme o que o laudo definiu |

O padrão é claro: **laudo raso gera exigência, e exigência custa de 15 a 30 dias cada**. A economia na contratação do laudo costuma se converter em meses adicionais de processo.

O catálogo completo de erros do processo está em [principais erros na reclassificação de monta](/blog/principais-erros-reclassificacao-monta).`,
    ],
    entregaveis: [
      "Laudo de recuperabilidade assinado por engenheiro com CREA ativo",
      "ART recolhida e referenciada no documento",
      "Registro fotográfico extenso, geral e de detalhe por região avaliada",
      "Avaliação estrutural região por região",
      "Memorial descritivo dos reparos, com método de execução",
      "Relação de componentes a substituir",
      "Conclusão técnica fundamentada sobre a viabilidade da recuperação",
      "Orientação sobre a documentação e as etapas seguintes do processo",
    ],
    processo: [
      { title: "Contato e análise prévia", desc: "Você informa dados do veículo e a situação. Verificamos restrições e impedimentos antes de qualquer coisa — não faz sentido iniciar um processo que esbarraria em bloqueio administrativo." },
      { title: "Proposta em 24h", desc: "Orçamento fechado, com escopo e prazo definidos, sem custo para orçar." },
      { title: "Inspeção presencial", desc: "Engenheiro avalia o veículo em campo: estrutura, sistemas de segurança, numerações e registro fotográfico sistemático." },
      { title: "Elaboração do laudo", desc: "Avaliação estrutural, memorial dos reparos e conclusão técnica, com ART recolhida." },
      { title: "Entrega e orientação", desc: "Entrega do laudo com orientação sobre documentação, etapas e o que observar durante o reparo para não gerar exigência." },
    ],
    faq: [
      { question: "Laudo de recuperabilidade e laudo de reclassificação de monta são a mesma coisa?", answer: "Na prática, sim. Laudo de recuperabilidade é o nome técnico do documento — ele atesta a viabilidade de recuperação do veículo. Laudo de reclassificação de monta é como o mercado o chama, pela finalidade a que serve. Ambos designam o mesmo documento de engenharia, assinado por engenheiro com CREA e ART recolhida." },
      { question: "Posso fazer o laudo antes de reparar o veículo?", answer: "Sim, e é o recomendado. O laudo emitido antes do reparo cumpre três funções: informa se a recuperação é tecnicamente viável, evitando investimento em veículo sem viabilidade; define no memorial o que precisa ser feito e como, orientando a oficina; e serve de referência contra a qual o reparo será confrontado na vistoria. Reparar primeiro e laudar depois é a ordem que mais gera retrabalho." },
      { question: "O laudo garante a aprovação no DETRAN?", answer: "Nenhum laudo garante deferimento — a decisão é do órgão, que analisa o conjunto: laudo, documentação, reparo executado e vistoria. O que um laudo robusto faz é eliminar a causa mais comum de exigência. Desconfie de quem promete aprovação garantida: a promessa não é técnica nem administrativamente sustentável." },
      { question: "Quanto custa um laudo de recuperabilidade?", answer: "Varia conforme porte do veículo, extensão do dano, complexidade do memorial e deslocamento necessário. Veículo de passeio com dano localizado fica numa faixa; utilitário, veículo pesado ou dano estrutural extenso, em outra. O orçamento é fechado antes da execução. Envie os dados do veículo e uma descrição do sinistro para receber o valor em até 24h." },
      { question: "Vocês atendem fora de São Paulo?", answer: "Sim. Emitimos laudo de recuperabilidade e acompanhamos o processo de reclassificação em São Paulo, Minas Gerais, Rio de Janeiro e Espírito Santo. A norma federal é a mesma em todos os estados; o que varia é a forma de protocolo, as exigências complementares e o fluxo de vistoria — detalhes por estado nos artigos de DETRAN-SP, DETRAN-MG e DETRAN-RJ/ES." },
    ],
    relatedPosts: [
      "quanto-tempo-demora-reclassificacao-de-monta",
      "reclassificacao-monta-guia-completo",
      "memorial-de-calculo-reclassificacao-monta",
      "principais-erros-reclassificacao-monta",
      "como-tirar-sinistro-do-documento-do-veiculo",
      "e-possivel-reclassificar-todos-veiculos",
    ],
    relatedServices: [
      { label: "Reclassificação de Monta", href: "/servicos/reclassificacao-de-monta" },
      { label: "Inspeções Técnicas", href: "/servicos/inspecoes-tecnicas" },
      { label: "Consultoria Gratuita", href: "/servicos/consultoria-gratuita" },
    ],
    ctaTitle: "Precisa do laudo de recuperabilidade do seu veículo?",
    ctaSubtitle: "Envie os dados do veículo e a descrição do sinistro. Orçamento fechado em até 24h.",
  },
];

export const landingBySlug = (slug: string) => landingPages.find((l) => l.slug === slug);
