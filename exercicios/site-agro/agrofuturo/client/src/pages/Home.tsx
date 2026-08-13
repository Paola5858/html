import {
  ArrowUpRight,
  Droplets,
  Leaf,
  Menu,
  Sprout,
  TrendingUp,
  WalletCards,
  Wheat,
  X,
} from "lucide-react";
import { useState } from "react";

const heroImage = "/manus-storage/agrofuturo-hero_75b34685.png";
const fieldDetailImage = "/manus-storage/agrofuturo-field-detail_5d312975.png";
const brandMark = "/manus-storage/agrofuturo-mark_529ac8f0.png";

const indicators = [
  {
    title: "Produtividade",
    description: "Acompanhe a produção por área cultivada.",
    icon: TrendingUp,
    value: "+18%",
    label: "potencial observado",
  },
  {
    title: "Umidade do solo",
    description: "Monitore a necessidade de irrigação.",
    icon: Droplets,
    value: "42%",
    label: "faixa de atenção",
  },
  {
    title: "Custos",
    description: "Controle os gastos e aumente a eficiência.",
    icon: WalletCards,
    value: "-12%",
    label: "desperdício evitável",
  },
  {
    title: "Pragas",
    description: "Identifique focos e aja no momento certo.",
    icon: Leaf,
    value: "24h",
    label: "tempo de resposta",
  },
];

const benefits = [
  "Mais produtividade por área cultivada",
  "Uso eficiente de água, solo e insumos",
  "Redução de custos operacionais",
  "Sustentabilidade acompanhada por dados",
  "Melhor tomada de decisão no momento certo",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo principal
      </a>

      {/* Header institucional: identidade, navegação real e contexto da marca. */}
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="AgroFuturo, voltar ao início">
            <img src={brandMark} alt="" aria-hidden="true" />
            <span className="brand-copy">
              <strong>AgroFuturo</strong>
              <small>tecnologia que cria raiz</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Navegação principal">
            <a href="#inicio" aria-current="page" onClick={() => setMenuOpen(false)}>
              Início
            </a>
            <a href="#precisao" onClick={() => setMenuOpen(false)}>
              Agricultura de precisão
            </a>
            <a href="#indicadores" onClick={() => setMenuOpen(false)}>
              Indicadores
            </a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </nav>

          <a className="header-link" href="#contato">
            Conheça o método <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="conteudo">
        {/* Hero: imagem dominante, overlay escuro e painel que garante contraste. */}
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img className="hero-image" src={heroImage} alt="Plantação em linhas regulares observada ao amanhecer" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-one" aria-hidden="true" />
          <div className="ambient-orb ambient-orb-two" aria-hidden="true" />
          <div className="hero-layout">
            <p className="eyebrow light-eyebrow"><span /> agricultura de precisão, na prática</p>
            <div className="hero-panel glass-panel">
              <p className="section-kicker">AgroFuturo / 01</p>
              <h1 id="hero-title">O campo fala.<br /><em>A gente ajuda você a ler.</em></h1>
              <p className="hero-text">
                Tecnologia, dados e conhecimento para transformar decisões agrícolas em ações mais eficientes e sustentáveis.
              </p>
              <a className="primary-button" href="#precisao">
                Entenda a precisão <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-meta" aria-label="Informações sobre o projeto">
              <span>01 <small>/</small> 04</span>
              <span className="meta-line" aria-hidden="true" />
              <span>dados que viram direção</span>
            </div>
          </div>
        </section>

        {/* Conteúdo central: section editorial e aside complementar. */}
        <section className="precision-section section-pad" id="precisao" aria-labelledby="precision-title">
          <div className="section-marker" aria-hidden="true">02</div>
          <div className="precision-grid">
            <div className="section-heading-block">
              <p className="eyebrow"><span /> conceito</p>
              <h2 id="precision-title">O que é Agricultura de Precisão?</h2>
            </div>
            <article className="editorial-copy">
              <p className="lead-copy">
                Agricultura de precisão é usar dados para enxergar o que os olhos não alcançam sozinhos.
              </p>
              <p>
                Sensores, GPS, softwares e registros de campo ajudam a entender as diferenças dentro da lavoura. Assim, cada decisão sobre irrigação, insumos ou manejo pode ser feita com mais contexto, menos desperdício e maior segurança.
              </p>
              <a className="text-link" href="#indicadores">Ver os indicadores <ArrowUpRight size={16} aria-hidden="true" /></a>
            </article>
            <aside className="important-note glass-panel" aria-labelledby="important-title">
              <div className="note-icon"><Sprout size={21} aria-hidden="true" /></div>
              <p className="section-kicker">leitura essencial</p>
              <h3 id="important-title">Importante</h3>
              <p>Dados bem coletados e indicadores bem definidos são a base para acompanhar produtividade, identificar problemas e decidir com mais clareza.</p>
              <span className="note-index">a / 01</span>
            </aside>
          </div>
        </section>

        {/* Indicadores: cada artigo é uma unidade independente de informação. */}
        <section className="indicators-section section-pad" id="indicadores" aria-labelledby="indicators-title">
          <div className="section-marker" aria-hidden="true">03</div>
          <div className="indicators-intro">
            <div>
              <p className="eyebrow"><span /> observação contínua</p>
              <h2 id="indicators-title">Por que medir<br /><em>indicadores?</em></h2>
            </div>
            <p>Medir não é transformar a lavoura em uma planilha. É criar um ponto de comparação para perceber o que mudou, agir cedo e proteger o que importa.</p>
          </div>
          <div className="indicator-list">
            {indicators.map(({ title, description, icon: Icon, value, label }) => (
              <article className="indicator-card" key={title}>
                <div className="card-topline"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /><span>0{indicators.findIndex((item) => item.title === title) + 1}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="card-value"><strong>{value}</strong><span>{label}</span></div>
              </article>
            ))}
          </div>
        </section>

        {/* Benefícios: lista nativa para manter a informação identificável por leitores de tela. */}
        <section className="benefits-section section-pad" aria-labelledby="benefits-title">
          <div className="benefit-panel glass-panel">
            <div>
              <p className="eyebrow light-eyebrow"><span /> resultado no campo</p>
              <h2 id="benefits-title">Benefícios que<br /><em>aparecem na rotina.</em></h2>
            </div>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={benefit}><span>0{index + 1}</span>{benefit}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Fechamento editorial: figura relevante com legenda contextual. */}
        <section className="closing-section section-pad" aria-labelledby="closing-title">
          <div className="section-marker" aria-hidden="true">04</div>
          <div className="closing-grid">
            <article className="closing-copy">
              <p className="eyebrow"><span /> próximo passo</p>
              <h2 id="closing-title">Transformando dados em decisões.</h2>
              <p>Quando a informação chega no momento certo, o produtor consegue planejar, executar e avaliar cada etapa com mais segurança. A tecnologia não substitui o conhecimento do campo. Ela amplia o alcance dele.</p>
              <a className="text-link" href="#contato">Converse com a AgroFuturo <ArrowUpRight size={16} aria-hidden="true" /></a>
            </article>
            <figure className="closing-figure">
              <img src={fieldDetailImage} alt="Sensor de umidade instalado entre folhas de uma plantação" />
              <figcaption><span>campo / sinal / decisão</span> Uma leitura mais próxima da lavoura.</figcaption>
            </figure>
          </div>
        </section>
      </main>

      {/* Footer institucional: fecha a navegação e explicita a autoria do projeto. */}
      <footer className="site-footer" id="contato">
        <div className="footer-inner">
          <div className="footer-brand"><img src={brandMark} alt="" aria-hidden="true" /><span>AgroFuturo</span></div>
          <p>Uma página acadêmica sobre tecnologia, informação e futuro no campo.</p>
          <div className="footer-meta"><span>© 2024 AgroFuturo</span><span>Front-End / Tags semânticas e ARIA</span></div>
        </div>
      </footer>
    </div>
  );
}
