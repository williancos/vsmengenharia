/**
 * ARQUIVO GERADO — não edite à mão.
 * Fonte: src/data/blogData.ts. Regerado por scripts/split-blog-data.mjs a cada build.
 */
import type { BlogPostDetail } from "../blogDetail";

export const detail: BlogPostDetail = {
  metaDescription: "PMOC para ar-condicionado: quem é obrigado a ter, base legal e como cumprir. Hospitais, escolas, shoppings e mais. VSM Engenharia.",
  keywords: ["pmoc ar condicionado", "pmoc para ar condicionado", "pmoc obrigatório", "pmoc é obrigatório", "quem precisa de pmoc"],
  keyTakeaways: [
      "PMOC é obrigatório para todo edifício de uso público e coletivo com ar-condicionado, independente da capacidade",
      "Base legal: Lei 13.589/2018 e Portaria 3.523/1998 do Ministério da Saúde",
      "Inclui hospitais, escolas, shoppings, hotéis, escritórios, restaurantes, repartições públicas",
      "Multas por descumprimento variam de R$ 2.000 a mais de R$ 1,5 milhão por reincidência"
    ],
  toc: [
      { id: "base-legal-obrigatoriedade", label: "Base legal da obrigatoriedade" },
      { id: "edificios-obrigados", label: "Lista de edifícios obrigados" },
      { id: "edificios-fora-da-obrigacao", label: "Edifícios fora da obrigação" },
      { id: "ar-condicionado-residencial", label: "Ar-condicionado residencial em uso comercial" },
      { id: "capacidade-do-equipamento", label: "Capacidade do equipamento — há mínimo?" },
      { id: "responsabilidade-do-proprietario", label: "Responsabilidade do proprietário" },
      { id: "como-cumprir", label: "Como cumprir a exigência" },
      { id: "faq", label: "Perguntas frequentes" }
    ],
  faq: [
      { question: "Pequeno escritório com 1 split precisa de PMOC?", answer: "Sim, se for de uso coletivo. A obrigatoriedade independe da capacidade dos equipamentos. Até um único split em ambiente de uso coletivo (escritório com atendimento a clientes, sala comercial alugada, consultório) gera obrigação de PMOC. Em pequenos imóveis, o plano é mais simples e o custo proporcionalmente baixo." },
      { question: "Edifício comercial com áreas de uso coletivo e privado precisa de PMOC?", answer: "Sim, para as áreas de uso coletivo. Áreas comuns (recepção, corredores, salões), salas comerciais com atendimento ao público e áreas de uso compartilhado estão na obrigatoriedade. Apartamentos residenciais privados dentro do mesmo prédio não estão. PMOC pode cobrir parcialmente o edifício, conforme o uso." },
      { question: "Restaurante pequeno precisa de PMOC?", answer: "Sim. Restaurante atende público, é estabelecimento de uso coletivo, e qualquer equipamento de climatização (split, central, ventilação) gera obrigação. Em fiscalização da Vigilância Sanitária, ausência de PMOC é causa de autuação direta. Mesmo restaurante pequeno deve ter PMOC adequado ao porte." },
      { question: "Escritório totalmente privado, sem atendimento ao público, precisa de PMOC?", answer: "Depende. Se há funcionários, é ambiente de trabalho coletivo — entra na obrigatoriedade. Se é uso individual exclusivo (escritório de um único profissional sem funcionários nem atendimento), o status é ambíguo. Recomendação prática: na dúvida, ter PMOC simples é mais barato que enfrentar fiscalização. Análise específica caso a caso pode ser feita por engenheiro." }
    ],
  content: [
`O **PMOC para ar-condicionado** é obrigatório em todo edifício de uso público e coletivo com sistema de climatização — independente da capacidade dos equipamentos. A base legal é a **Lei nº 13.589/2018**, que tornou nacional uma exigência antes dispersa em portarias e leis municipais.

A pergunta "preciso ter PMOC?" tem resposta direta para a maioria dos casos: **se você atende público, tem funcionários ou opera ambiente coletivo, sim**. Este artigo traz a lista completa de quem é obrigado, os casos limítrofes e como cumprir a exigência sem custo excessivo.`,

`## Base legal da obrigatoriedade {#base-legal-obrigatoriedade}

A obrigatoriedade do PMOC vem de:

| Norma | Conteúdo |
| --- | --- |
| **Portaria MS nº 3.523/1998** | Define o PMOC como instrumento técnico obrigatório |
| **Resolução ANVISA RE-9/2003** | Define padrões de qualidade do ar interior (QAI) |
| **Lei nº 13.589/2018** | Consolida obrigatoriedade em todo o Brasil |
| **Regulamentos estaduais** | COVISA (SP), Vigilâncias estaduais |
| **Regulamentos municipais** | Em municípios com estrutura própria |

A camada federal (Portaria, Resolução, Lei) é uniforme. As camadas estaduais e municipais podem **complementar** com exigências adicionais, mas não podem reduzir o escopo federal.`,

`## Lista de edifícios obrigados {#edificios-obrigados}

Edificações que **devem** ter PMOC ativo:

### Saúde

- Hospitais (todos os portes)
- Clínicas e consultórios médicos, odontológicos
- Laboratórios de análises clínicas
- Centros de imagem (radiologia, ressonância)
- Clínicas de fisioterapia, estética

### Educação

- Escolas (infantil, fundamental, médio)
- Universidades e faculdades
- Creches e centros de educação infantil
- Escolas técnicas e profissionalizantes
- Cursos livres em ambiente coletivo

### Comércio e serviços

- Shoppings centers
- Supermercados e hipermercados
- Lojas com ar-condicionado para clientes
- Restaurantes, bares, lanchonetes
- Salões de beleza, barbearias
- Academias de ginástica
- Cinemas, teatros, casas de show

### Hospedagem

- Hotéis, pousadas, motéis
- Flats e apart-hotéis
- Hostels e similares
- Apartamentos para temporada com gestão coletiva

### Corporativo

- Edifícios de escritórios
- Escritórios corporativos
- Coworkings
- Salas comerciais em edifícios

### Indústria

- Áreas administrativas climatizadas
- Refeitórios coletivos
- Áreas de recepção e visitação

### Público

- Órgãos públicos (federais, estaduais, municipais)
- Repartições, secretarias, fóruns
- Hospitais públicos
- Escolas públicas

Lista não exaustiva — qualquer ambiente coletivo com climatização entra na regra.`,

`## Edifícios fora da obrigação {#edificios-fora-da-obrigacao}

Estão **fora** da obrigatoriedade:

- **Residências unifamiliares** privadas
- **Áreas privadas em condomínio** (apartamento individual, casa)
- **Veículos particulares** (uso pessoal)
- **Espaços abertos** sem climatização efetiva

Importante: a fronteira "público vs privado" segue o **uso real**, não apenas a titularidade. Casa que funciona como escritório comercial com atendimento a clientes entra como uso coletivo. Apartamento usado como consultório médico entra. O critério é funcional.`,

`## Ar-condicionado residencial em uso comercial {#ar-condicionado-residencial}

Cenário comum: imóvel residencial usado como escritório, consultório ou estabelecimento comercial. PMOC é necessário?

- **Sim**, se há atendimento ao público (consultório, escritório de prestação de serviço)
- **Sim**, se há funcionários (empregados, prestadores)
- **Sim**, se é registrado como estabelecimento comercial (CNPJ no endereço)
- **Não**, se uso é exclusivamente residencial

A regra é o **uso real**, não a classificação imobiliária. Imóvel residencial transformado em barbearia, por exemplo, tem obrigação de PMOC equivalente a barbearia em sala comercial.`,

`## Capacidade do equipamento — há mínimo? {#capacidade-do-equipamento}

A obrigatoriedade **não depende** da capacidade do equipamento. Mesmo um split de 9.000 BTU em estabelecimento de uso coletivo gera obrigação. A norma considera:

- **Tipo de uso** do ambiente (coletivo vs privado)
- **Quantidade de pessoas** expostas
- **Vulnerabilidade** dos ocupantes (hospitais, escolas com crianças têm exigências mais rigorosas)

Não há "PMOC só para grandes sistemas". Plano simples para pequeno sistema é viável e tem custo proporcional.`,

`## Responsabilidade do proprietário {#responsabilidade-do-proprietario}

A responsabilidade primária é do **proprietário do edifício** ou do **administrador** (em casos de condomínio, gestão terceirizada, locação).

Em casos de locação:

| Situação | Responsável típico |
| --- | --- |
| Locação simples | Responsabilidade pode ser do locador ou do locatário conforme contrato |
| Locação de andares em edifício corporativo | Administradora cuida das áreas comuns; locatário cuida do seu espaço |
| Shopping center | Administradora cuida do comum; lojistas cuidam dos seus espaços |
| Hospital terceirizado | Operador hospitalar é responsável primário |

Contrato de locação deve estabelecer claramente as responsabilidades. Em fiscalização, autoridade pode autuar qualquer responsável identificado.

> **Sua empresa precisa elaborar ou atualizar PMOC?** A VSM Engenharia faz para edifícios de qualquer porte em todo o Sudeste. [Solicite pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento).`,

`## Como cumprir a exigência {#como-cumprir}

Sequência prática para entrar em conformidade:

1. **Levantamento inicial** dos equipamentos de climatização
2. **Contratação de engenheiro mecânico** para elaboração do PMOC
3. **Definição do cronograma** de manutenção
4. **ART do CREA** do engenheiro responsável
5. **Implementação** das atividades programadas
6. **Análises de QAI** conforme cronograma
7. **Registros documentados** de cada atividade
8. **Auditoria periódica** do programa
9. **Atualização** anual ou quando houver mudança

Custo típico em SP para PMOC pequeno (1-5 equipamentos): R$ 1.200 a R$ 3.500. Para edifícios médios (6-30 equipamentos): R$ 3.500 a R$ 12.000. Para grandes instalações: R$ 12.000 a R$ 50.000+.

## Próximo passo {#proximo-passo}

PMOC é exigência legal absoluta para edifícios de uso coletivo. Implementar é proteção sanitária, jurídica e patrimonial. Operar sem é exposição direta a fiscalização, multa e risco à saúde dos ocupantes.

A VSM Engenharia elabora e mantém PMOC ativo para edifícios de todo o Sudeste — adaptado ao porte e ao perfil de cada cliente.

📞 **(11) 95453-4057**
📩 **[Solicitar orçamento pelo WhatsApp](https://wa.me/5511954534057?text=Ol%C3%A1%2C%20venho%20do%20site%20e%20gostaria%20solicitar%20um%20or%C3%A7amento)**
📧 **contato@vsmengenharia.com**

Conheça o serviço de [PMOC](/servicos/pmoc) e o artigo [Lei do PMOC 13.589/2018](/blog/lei-pmoc-13589-2018-o-que-diz).`
    ],
};
