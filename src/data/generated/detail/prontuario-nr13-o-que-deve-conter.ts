/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "Prontuário NR-13: documentos obrigatórios, atualização pelo PLH, registro contínuo e erros que invalidam. Guia VSM Engenharia.",
  keywords: ["prontuário nr13", "prontuario nr13", "livro registro nr13", "documentação nr13"],
  keyTakeaways: [
      "Prontuário NR-13 é o histórico técnico vivo de cada caldeira ou vaso de pressão",
      "Deve conter dados de fabricação, projeto, inspeções, reparos e modificações",
      "Atualização é responsabilidade do PLH, vinculada a cada laudo emitido",
      "Prontuário desatualizado é causa frequente de autuação e perda de cobertura de seguro"
    ],
  toc: [
      { id: "o-que-e-prontuario", label: "O que é o prontuário NR-13" },
      { id: "documentos-obrigatorios", label: "Documentos obrigatórios" },
      { id: "registro-continuo", label: "Registro contínuo de operação" },
      { id: "atualizacao-pelo-plh", label: "Atualização pelo PLH" },
      { id: "prontuario-em-equipamento-antigo", label: "Prontuário em equipamento antigo" },
      { id: "formato-eletronico", label: "Formato eletrônico e armazenamento" },
      { id: "erros-comuns", label: "Erros comuns que invalidam" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Prontuário pode ser eletrônico?", answer: "Sim. NR-13 não exige formato físico — prontuário eletrônico é aceito desde que mantenha integridade, rastreabilidade, assinatura digital quando aplicável e backup adequado. Boa prática: armazenamento em servidor com versionamento, acesso controlado por usuário e cópia física quando o ambiente exigir." },
      { question: "Prontuário pode ser perdido sem comprometer a operação?", answer: "Em caso de perda, é necessário reconstruir o prontuário com base em documentação remanescente, novos ensaios e nova categorização. Custo de reconstrução é significativo (R$ 5.000 a R$ 30.000 por equipamento). Manter cópia de backup é prática obrigatória em programa NR-13 maduro." },
      { question: "Quem é responsável por manter o prontuário atualizado?", answer: "Formalmente, a empresa proprietária do equipamento. Operacionalmente, o PLH responsável atualiza após cada laudo emitido. Em ambos os casos, mantém-se cadeia de custódia da informação — quem incluiu, quando, com qual ART. Prontuário sem essa cadeia é frágil em auditoria." },
      { question: "Equipamento sem prontuário pode operar?", answer: "Tecnicamente não. Equipamento sem prontuário viabilizado é considerado em situação irregular. Auditor pode interditar imediatamente. Para equipamentos sem prontuário (frequentemente comprados de segunda mão ou herdados de plantas antigas), é necessário processo de reconstrução técnica antes da operação regular." }
    ],
  content: [
`O **prontuário NR-13** é o histórico técnico vivo de cada caldeira, vaso de pressão e tubulação industrial. É o equivalente ao "RG" do equipamento — documento que acompanha a máquina desde a fabricação até o descomissionamento, registrando todos os dados de projeto, fabricação, instalação, inspeção, manutenção, reparo e operação relevantes.

Sem prontuário atualizado, qualquer laudo é tecnicamente frágil. Sem prontuário, equipamento opera em situação irregular e fica exposto a interdição imediata em fiscalização. Este artigo apresenta o conteúdo obrigatório, a forma de manutenção e os erros mais comuns.`,

`## O que é o prontuário NR-13 {#o-que-e-prontuario}

O prontuário é o **conjunto consolidado de documentos técnicos** do equipamento sob pressão. Difere de:

- **Laudo** — documento de inspeção pontual, integrado ao prontuário
- **Livro de registro de operação** — registro contínuo de parâmetros operacionais, parte do prontuário
- **Manual do fabricante** — descreve a máquina de fábrica, base do prontuário inicial

O prontuário **acompanha o equipamento ao longo de sua vida útil** — incluindo eventual transferência entre plantas, mudança de proprietário ou modificação técnica significativa. Equipamento sem prontuário tem **história técnica perdida**, o que tecnicamente impede análise rigorosa de integridade.`,

`## Documentos obrigatórios {#documentos-obrigatorios}

Conteúdo padrão do prontuário NR-13:

| Bloco | Documentos |
| --- | --- |
| **Identificação** | Marca, modelo, número de série, ano de fabricação, fabricante |
| **Projeto** | Memorial de cálculo, especificação técnica, código de projeto (ASME, EN 13445, ABNT NBR) |
| **Fabricação** | Certificados de material, ensaios não destrutivos do fabricante, qualificação WPS/PQR, certificados de soldadores |
| **Instalação** | Memorial de instalação, ART de instalação, layout |
| **Documentação de comissionamento** | Teste hidrostático inicial, validação operacional |
| **Inspeções** | Todos os laudos anteriores, com ART e PLH responsável |
| **Reparos** | Memorial de cada reparo, qualificação de soldadores, ensaios pós-reparo |
| **Modificações** | Cada alteração técnica, com reaprovação |
| **Categoria** | Definição inicial e atualizações |
| **Operação** | Registros de operação contínuos (parte do livro de registro) |
| **Treinamento** | Certificados dos operadores |
| **Plano de emergência** | Procedimentos em caso de falha |

Em equipamentos antigos, parte da documentação pode ter sido perdida — caso especial tratado adiante.`,

`## Registro contínuo de operação {#registro-continuo}

O **livro de registro de operação** é parte do prontuário. Registra continuamente:

- Parâmetros operacionais (pressão, temperatura, nível)
- Eventos significativos (paradas, picos, alarmes)
- Manutenções executadas
- Mudanças de operador
- Procedimentos de partida e parada
- Anomalias observadas

Pode ser físico (livro encadernado) ou eletrônico (sistema com rastreabilidade). Em caldeira A, registro contínuo automatizado é prática técnica padrão.

Lacuna no registro contínuo é causa frequente de questionamento em auditoria — sugere operação sem supervisão técnica adequada.`,

`## Atualização pelo PLH {#atualizacao-pelo-plh}

O PLH atualiza o prontuário após cada inspeção:

1. **Acessa o prontuário** vigente
2. **Revisa histórico** de laudos anteriores
3. **Executa a inspeção** conforme procedimento
4. **Integra o novo laudo** ao prontuário
5. **Atualiza eventual mudança de categoria**
6. **Registra modificações** ou reparos havidos no intervalo
7. **Assina e baixa ART** vinculada ao laudo
8. **Comunica a empresa** sobre próximas exigências

Atualização é parte do escopo do PLH em cada inspeção contratada. Custos típicos já incluem essa atualização. Em situações de prontuário muito desatualizado, pode ser cobrada hora técnica adicional.`,

`## Prontuário em equipamento antigo {#prontuario-em-equipamento-antigo}

Equipamentos com 20+ anos frequentemente têm prontuário **incompleto** — fabricante extinto, documentação perdida, modificações não registradas. Caminho técnico para regularização:

1. **Levantamento documental** do que existe
2. **Identificação dos componentes** (placas, marcações, características construtivas)
3. **Categorização** pelo PLH com base no estado atual
4. **Ensaios não destrutivos completos** para caracterizar integridade
5. **Memorial de cálculo retroativo** quando possível
6. **Prontuário reconstruído** com PLH responsável

Custo da reconstrução: R$ 5.000 a R$ 30.000 por equipamento, mas é investimento essencial para operação regular continuada. Plantas que herdam equipamentos sem prontuário precisam programar essa etapa antes da operação.`,

`## Formato eletrônico e armazenamento {#formato-eletronico}

NR-13 aceita prontuário em **formato eletrônico** com:

- **Integridade** garantida (sem alteração não rastreável)
- **Assinatura digital** quando aplicável
- **Backup** em local físico distinto
- **Acesso controlado** por usuário
- **Versionamento** de cada inclusão/alteração
- **Rastreabilidade** completa de quem fez o quê e quando

Prontuário eletrônico bem implementado é mais robusto que físico — perdas são raras, busca é instantânea, auditoria é mais eficiente. Plantas modernas operam exclusivamente em formato digital.

> **Sua planta tem prontuários NR-13 organizados?** A VSM Engenharia faz estruturação e digitalização de prontuário em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Erros comuns que invalidam {#erros-comuns}

Pontos mais autuados em prontuário:

- **Ausência de laudos anteriores** (lacuna histórica)
- **Sem ART vinculada** aos laudos arquivados
- **PLH sem qualificação** para a categoria (SNQC ausente quando exigido)
- **Modificações não registradas** (alteração da máquina sem reaprovação)
- **Cópia do manual** sem prontuário próprio
- **Documentação fotográfica** insuficiente
- **Sem registro contínuo** de operação
- **Categoria desatualizada** em relação ao estado atual

Cada erro é potencial autuação separada. Em fiscalização rigorosa, prontuário fraco gera várias autuações simultâneas.

## Próximo passo {#proximo-passo}

Prontuário NR-13 atualizado é proteção técnica e jurídica direta da empresa. Em fiscalização, em sinistro, em auditoria de cliente ou em venda de equipamento, é o documento que separa empresa em conformidade de empresa em risco.

A VSM Engenharia faz estruturação, digitalização e atualização contínua de prontuários NR-13 em todo o Sudeste.

📞 **(11) 95453-4057**
📩 **[Solicitar consultoria pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Veja o artigo [laudo NR-13](/blog/laudo-nr13-quanto-custa-quem-pode-emitir), as consequências práticas da ausência do documento em [empresa sem prontuário NR-13](/blog/sem-prontuario-nr13-o-que-acontece) e o serviço de [inspeção NR-13](/servicos/nr13).

O equipamento que mais aparece sem prontuário é o reservatório de ar comprimido — veja [inspeção NR-13 em compressor de ar](/servicos/inspecao-nr13-compressor-de-ar).`
    ],
};
