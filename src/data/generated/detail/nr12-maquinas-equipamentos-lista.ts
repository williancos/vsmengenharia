/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Lista de máquinas e equipamentos abrangidos pela NR-12 por tipo e setor industrial, com anexos específicos. VSM Engenharia.",
  keywords: ["maquinas e equipamentos nr12", "nr12 máquinas e equipamentos", "lista de máquinas nr12", "quais máquinas nr12"],
  keyTakeaways: [
      "NR-12 abrange todas as máquinas e equipamentos utilizados em ambiente de trabalho",
      "Anexos específicos detalham requisitos adicionais por tipo: prensas, injetoras, panificação, cana",
      "Lista por setor ajuda priorizar adequação na planta",
      "Equipamentos comuns frequentemente esquecidos: esmeril, furadeira, esteira transportadora"
    ],
  toc: [
      { id: "definicao-nr12", label: "Definição NR-12 de máquina e equipamento" },
      { id: "lista-geral", label: "Lista geral de máquinas abrangidas" },
      { id: "por-anexo", label: "Equipamentos por anexo específico" },
      { id: "por-setor-industrial", label: "Equipamentos comuns por setor" },
      { id: "frequentemente-esquecidos", label: "Equipamentos frequentemente esquecidos" },
      { id: "quando-aplica", label: "Quando a NR-12 aplica e quando não" },
      { id: "como-priorizar", label: "Como priorizar adequação na planta" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Equipamento manual (chave, marreta) está em NR-12?", answer: "Não. NR-12 aplica-se a máquinas e equipamentos com fonte de energia (elétrica, hidráulica, pneumática, combustão). Ferramentas manuais simples estão fora do escopo. Ferramentas elétricas manuais (furadeira de mão, esmerilhadeira angular, lixadeira) estão em NR-12 sim, com requisitos próprios." },
      { question: "Robôs industriais estão em NR-12?", answer: "Sim. Robôs industriais e células robotizadas estão integralmente em NR-12, com cumprimento adicional de normas específicas (ABNT NBR ISO 10218-1 e 10218-2). Robôs colaborativos (cobots) têm requisitos próprios em ISO/TS 15066. O conjunto exige projeto integrado, comando seguro categoria 3+ e gradil de perímetro." },
      { question: "Empilhadeira está na NR-12 ou na NR-11?", answer: "Em ambas. NR-11 cobre operação de empilhadeira (treinamento, sinalização, organização do tráfego). NR-12 cobre características técnicas do equipamento (proteções, comando, parada de emergência). Projeto integrado e laudo de adequação atendem ambas. Mais detalhes no artigo NR-11 e NR-12 diferenças." },
      { question: "Equipamento importado também precisa atender NR-12?", answer: "Sim. NR-12 vincula importador. Equipamento importado deve atender requisitos antes da venda no Brasil. Manual em português, marcação visível, conformidade com Anexo I (distâncias) e Anexos específicos quando aplicáveis são obrigatórios. Auditores do MTE fiscalizam importador e usuário separadamente." }
    ],
  content: [
`Uma das primeiras dúvidas em qualquer programa de adequação é: **quais máquinas e equipamentos da minha planta estão na NR-12**? A resposta curta: praticamente todos os equipamentos motorizados utilizados no processo produtivo. A resposta longa, com as exceções e os requisitos por anexo específico, está neste artigo.

A lista por setor industrial ajuda na priorização — empresas de metalurgia têm prensas, tornos e fresadoras como prioridade; indústrias de alimento focam em masseiras, esteiras e câmaras; plásticos focam em injetoras e extrusoras. Entender o universo do seu setor é o primeiro passo do programa NR-12.`,

`## Definição NR-12 de máquina e equipamento {#definicao-nr12}

Conforme o **Glossário (Anexo IV)** da NR-12:

- **Máquina**: conjunto de peças ou de componentes ligados entre si, dos quais ao menos um é móvel, com sistema de acionamento, utilizado para uma aplicação determinada
- **Equipamento**: dispositivo ou conjunto de dispositivos com função específica, geralmente integrante de uma instalação fixa ou móvel

Em termos práticos: qualquer estrutura motorizada usada no processo de trabalho. Inclui sistemas hidráulicos, pneumáticos, elétricos, de combustão. Exclui ferramentas manuais sem fonte de energia externa.

Mais detalhes conceituais em [NR-12: o que é](/blog/nr12-o-que-e-norma-maquinas-equipamentos).`,

`## Lista geral de máquinas abrangidas {#lista-geral}

Categorias amplas (não exaustiva, ilustrativa):

| Categoria | Exemplos |
| --- | --- |
| Máquinas-ferramenta | Torno, fresadora, retífica, plaina, mandriladora |
| Prensas | Hidráulica, excêntrica, hidroformação |
| Injetoras e extrusoras | Plástico, borracha, alumínio |
| Soldagem | MIG/MAG, TIG, eletrodo revestido, robotizada |
| Movimentação interna | Esteira, elevador, transportador, paletizador |
| Pequenos equipamentos | Esmeril, furadeira de bancada, serra circular, lixadeira |
| Painéis elétricos | Comando, distribuição, automação |
| Compressores e bombas | Pneumáticos, hidráulicos, de processo |
| Robôs e células robotizadas | Soldagem, manipulação, montagem, paletização |
| Equipamentos de processo | Misturador, agitador, reator, autoclave |
| Equipamentos de guindar (cruzamento NR-11) | Ponte rolante, talha, guindauto |

Toda planta industrial tem, no mínimo, **8 a 15 dessas categorias** representadas.`,

`## Equipamentos por anexo específico {#por-anexo}

Anexos da NR-12 com requisitos adicionais por tipo:

| Anexo | Equipamentos |
| --- | --- |
| **V** | Motosserras |
| **VI** | Masseiras, divisoras, modeladoras, laminadoras, fornos rotativos |
| **VII** | Serra fita, picador, embutideira, balança automática (mercearia/açougue) |
| **VIII** | Prensas excêntricas, hidráulicas, similares |
| **IX** | Injetoras de termoplásticos |
| **X** | Máquinas para fabricação de calçados (chanfradeira, costureira, etc.) |
| **XI** | Equipamentos do setor sucroalcooleiro |
| **XII** | Equipamentos de guindar (ponte rolante, talha, similares) |

Cumprimento do corpo principal + anexo aplicável é obrigatório. Em fiscalização, auditor verifica primeiro o anexo específico.`,

`## Equipamentos comuns por setor {#por-setor-industrial}

### Metalurgia e mecânica

Torno, fresadora, retífica, mandriladora, dobradeira, prensa, esmeril, furadeira, serra fita, calandra, cortadora plasma, soldagem MIG/MAG/TIG.

### Plástico e borracha

Injetora (Anexo IX), extrusora, sopro, termoformagem, prensa de borracha, calandra, mistura interna.

### Alimentos e bebidas

Masseira (Anexo VI), forno, esteira, embutideira, envasadora, paletizadora, esmagadora, câmara fria.

### Química e farmacêutica

Reator, misturador, granulador, peletizadora, compressor, autoclave, sistema de envase.

### Calçadista e couro

Chanfradeira (Anexo X), costureira, prensa de palmilha, conformadora.

### Sucroalcooleira

Picador (Anexo XI), moenda, centrífuga, evaporador, fermentador.

### Madeireira

Serra circular, serra fita, plaina, lixadeira, fresadora, prensa hidráulica.

### Construção e estruturas

Betoneira, mesa vibratória, dobradeira de aço, serra de bancada, guincho.

Cada setor tem perfil próprio de risco e prioridade de adequação.`,

`## Equipamentos frequentemente esquecidos {#frequentemente-esquecidos}

Em planejamento de programa NR-12, equipamentos comuns frequentemente são ignorados na primeira passada:

- **Esmeril de bancada** — frequente em quase toda planta, mais autuado da norma
- **Furadeira de bancada** — proteção da broca raramente atendida
- **Lixadeira fixa** — anteparo e exaustão frequentemente ausentes
- **Esteira transportadora** — proteção lateral, parada de emergência, intertravamento
- **Compressor de ar** — proteção da correia, válvula de segurança
- **Elevador de carga interno** — botoeiras, parada de emergência
- **Picador de papel/papelão** — proteção da boca, intertravamento
- **Equipamento de teste** com partes móveis (laboratório)

Levantamento inicial completo evita que esses itens sejam descobertos só na primeira fiscalização.`,

`## Quando a NR-12 aplica e quando não {#quando-aplica}

**Aplica** quando há:

- Fonte de energia externa (elétrica, hidráulica, pneumática, combustão)
- Movimento de partes mecânicas
- Risco de exposição do trabalhador
- Uso em ambiente de trabalho regular

**Não aplica** (ou aplica parcialmente):

- Ferramentas manuais sem fonte de energia
- Equipamentos de uso exclusivamente doméstico (sem ambiente de trabalho)
- Veículos automotores (têm normas próprias — Resolução CONTRAN)
- Sistemas de pressão (NR-13 pode ser concorrente — caldeira, vaso de pressão)
- Eletrodomésticos em ambiente administrativo (cafeteria não é processo produtivo)

A apreciação caso a caso é parte do diagnóstico inicial.

> **Quer o inventário completo dos equipamentos da sua planta sujeitos à NR-12?** A VSM Engenharia faz [consultoria gratuita](/servicos/consultoria-gratuita) com mapeamento. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Como priorizar adequação na planta {#como-priorizar}

Sequência prática:

1. **Inventário completo** de todos os equipamentos motorizados
2. **Apreciação preliminar de risco** por equipamento (alto/médio/baixo)
3. **Priorização** começando pelos de risco alto (acidente grave possível)
4. **Cronograma** de adequação distribuído em 6 a 18 meses
5. **Execução** com laudo individual após cada adequação
6. **Programa de manutenção** integrado para garantir conformidade contínua

Plantas que priorizam pelo risco real saem de qualquer fiscalização defensável. Plantas que tratam todos os equipamentos como prioridade igual gastam mais e demoram mais.

## Próximo passo {#proximo-passo}

Saber exatamente quais equipamentos da sua planta estão sujeitos à NR-12 é o ponto de partida do programa completo. Sem esse inventário, qualquer adequação é improvisada.

A VSM Engenharia faz inventário completo + apreciação preliminar de risco como parte da consultoria gratuita.

📞 **(11) 95453-4057**
📩 **[Solicitar consultoria gratuita pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça os serviços de [NR-12](/servicos/nr12) e [consultoria gratuita](/servicos/consultoria-gratuita).`
    ],
};
