import { Link } from "react-router-dom";
import { FileCheck, ArrowRight } from "lucide-react";

const posts = [
  { slug: "checklist-inspecao-nr13", title: "Checklist prático para contratar inspeção NR-13 com segurança", category: "NR13", excerpt: "Descubra os pontos essenciais que você deve verificar antes de contratar uma empresa para realizar a inspeção NR-13 nos seus equipamentos." },
  { slug: "7-erros-plano-de-rigging", title: "Os 7 erros mais comuns na elaboração de Planos de Rigging", category: "NR11", excerpt: "Conheça os erros que podem comprometer a segurança das operações de içamento e como evitá-los na prática." },
  { slug: "reclassificacao-vs-baixa-definitiva", title: "Reclassificação de Monta x Baixa Definitiva: qual a melhor opção?", category: "Reclassificação", excerpt: "Entenda as diferenças entre reclassificação de monta e baixa definitiva para veículos sinistrados e faça a escolha certa." },
  { slug: "guia-auditorias-ministerio-trabalho", title: "Guia Prático: Como se Preparar para Auditorias do Ministério do Trabalho", category: "Conformidade", excerpt: "Prepare sua empresa para auditorias com este guia completo que cobre desde a documentação até as inspeções necessárias." },
  { slug: "laudo-tecnico-nr13-passo-a-passo", title: "Laudo Técnico NR-13: Guia Passo a Passo Completo", category: "NR13", excerpt: "Um guia detalhado sobre todo o processo de elaboração do laudo técnico NR-13, desde a inspeção até a emissão final." },
  { slug: "plano-de-rigging-guia-tecnico", title: "Equipamentos, cargas e fatores críticos no Plano de Rigging", category: "NR11", excerpt: "Conheça os equipamentos, tipos de carga e fatores críticos que devem ser considerados na elaboração de um plano de rigging seguro." },
  { slug: "impacto-reclassificacao-revenda", title: "Impacto da Reclassificação de Monta na revenda do veículo", category: "Reclassificação", excerpt: "Saiba como a reclassificação de monta pode afetar positivamente a revenda e regularização do seu veículo sinistrado." },
  { slug: "treinamento-plano-de-rigging", title: "Treinamento de Plano de Rigging: domine a elaboração e análise", category: "NR11", excerpt: "Descubra a importância do treinamento em plano de rigging e como ele pode prevenir acidentes em operações de içamento." },
];

export default function Blog() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Conteúdos Técnicos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artigos, guias e checklists sobre normas regulamentadoras, segurança industrial e engenharia mecânica.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <article key={post.slug} className="group bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-all">
                <div className="h-40 bg-secondary flex items-center justify-center">
                  <FileCheck className="h-12 w-12 text-primary/30" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary bg-secondary px-2 py-1 rounded">{post.category}</span>
                  <h2 className="text-base font-semibold mt-3 mb-2 group-hover:text-cta transition-colors leading-snug">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-cta mt-4 group-hover:gap-2 transition-all">
                    Ler artigo <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
