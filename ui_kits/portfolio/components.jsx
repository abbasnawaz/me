/* eslint-disable */
// Abbas Nawaz Portfolio — UI Kit components
// All components share design tokens from ../../colors_and_type.css

const { useState, useEffect, useRef } = React;

// ---------- Lucide icon helper (uses lucide CDN globals) ----------
const Icon = ({ name, size = 20, strokeWidth = 1.5, style }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) {
      ref.current.innerHTML = "";
      const svg = window.lucide.createElement(window.lucide.icons[name]);
      svg.setAttribute("width", size);
      svg.setAttribute("height", size);
      svg.setAttribute("stroke-width", strokeWidth);
      ref.current.appendChild(svg);
    }
  }, [name, size, strokeWidth]);
  return <span ref={ref} style={{ display: "inline-flex", lineHeight: 0, ...style }} />;
};

// ---------- primitives ----------
const Eyebrow = ({ index, children }) => (
  <div style={{
    fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
    textTransform: "uppercase", color: "var(--fg-tertiary)",
    display: "inline-flex", alignItems: "center", gap: 8,
  }}>
    {index && <span style={{ color: "var(--fg-tertiary)" }}>{index}</span>}
    {index && <span style={{ color: "var(--fg-disabled)" }}>—</span>}
    <span style={{ color: "var(--fg-secondary)" }}>{children}</span>
  </div>
);

const Pill = ({ children, dotColor, mono = true, style }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: dotColor ? "6px 12px 6px 10px" : "5px 11px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 999,
    fontFamily: mono ? "var(--font-mono)" : "var(--font-body)",
    fontSize: mono ? 11 : 13,
    color: "var(--fg-secondary)",
    letterSpacing: mono ? "0.02em" : "-0.005em",
    ...style,
  }}>
    {dotColor && <span style={{
      width: 6, height: 6, borderRadius: 999,
      background: dotColor, boxShadow: `0 0 8px ${dotColor}`,
    }} />}
    {children}
  </span>
);

const Button = ({ variant = "primary", children, icon, onClick, style }) => {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);

  const base = {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "12px 22px", borderRadius: 8,
    fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 500,
    letterSpacing: "-0.005em", cursor: "pointer",
    transition: "all 150ms cubic-bezier(0.4,0,0.2,1)",
    transform: press ? "scale(0.98)" : "scale(1)",
    border: "none",
  };

  const variants = {
    primary: {
      background: hover ? "#E8E8EA" : "#F5F5F7",
      color: "#08090B",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
    },
    secondary: {
      background: hover ? "#1A1D22" : "#14161A",
      color: "var(--fg-primary)",
      border: `1px solid ${hover ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.12)"}`,
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--fg-primary)" : "var(--fg-secondary)",
      padding: "12px 16px",
    },
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{ ...base, ...variants[variant], ...style }}
    >
      {children}
      {icon && <Icon name={icon} size={16} />}
    </button>
  );
};

const Card = ({ children, hover: hoverable = true, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        padding: 24,
        background: "var(--bg-elevated)",
        border: `1px solid ${hover ? "var(--border-hover)" : "var(--border-default)"}`,
        borderRadius: 12,
        boxShadow: hover ? "var(--inner-highlight-strong)" : "var(--inner-highlight)",
        transition: "all 280ms var(--ease-out-expo)",
        overflow: "hidden",
        ...style,
      }}
    >
      {hover && (
        <div style={{
          position: "absolute", top: 0, left: 16, right: 16, height: 1,
          background: "linear-gradient(90deg, transparent, #A78BFA 30%, #67E8F9 70%, transparent)",
          opacity: 0.8,
        }} />
      )}
      {children}
    </div>
  );
};

// ---------- Nav ----------
const Nav = ({ active, onNav }) => {
  const items = ["work", "research", "about", "contact"];
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{
      position: "fixed", top: 20, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "center", pointerEvents: "none",
    }}>
      <div style={{
        pointerEvents: "auto",
        display: "flex", alignItems: "center", gap: 16,
        padding: "10px 12px 10px 20px",
        background: "var(--glass-bg)",
        backdropFilter: "var(--glass-blur)",
        WebkitBackdropFilter: "var(--glass-blur)",
        border: "1px solid var(--glass-border)",
        borderRadius: 999,
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px rgba(0,0,0,0.3)",
      }}>
        <a onClick={() => onNav("home")} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" stroke="#F5F5F7" strokeWidth="2.4">
            <path d="M8 52 L20 12 L32 52"/><path d="M13 36 L27 36"/>
            <path d="M40 52 L40 12"/><path d="M56 52 L56 12"/><path d="M40 12 L56 52"/>
          </svg>
          <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--fg-primary)" }}>Abbas Nawaz</span>
        </a>
        <div style={{ width: 1, height: 20, background: "var(--border-default)" }} />
        <div style={{ display: "flex", gap: 4 }}>
          {items.map(item => {
            const isActive = active === item;
            const isHover = hovered === item;
            return (
              <a key={item} onClick={() => onNav(item)}
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "8px 14px", fontSize: 13, cursor: "pointer",
                  color: isActive || isHover ? "var(--fg-primary)" : "var(--fg-secondary)",
                  background: isActive ? "rgba(255,255,255,0.06)" : "transparent",
                  borderRadius: 999,
                  transition: "color 150ms, background 150ms",
                }}>
                {item}
              </a>
            );
          })}
        </div>
        <Button variant="primary" style={{ padding: "8px 16px", fontSize: 13, borderRadius: 999 }} onClick={() => onNav("contact")}>
          Get in touch
        </Button>
      </div>
    </div>
  );
};

// ---------- Hero ----------
const Hero = ({ onNav }) => {
  return (
    <section id="home" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center",
      padding: "120px 32px 80px",
    }}>
      {/* ambient grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 50% 30%, black 30%, transparent 70%)",
      }} />
      {/* phosphor glow */}
      <div style={{
        position: "absolute", top: "-10%", left: "50%", width: "80%", height: "80%",
        transform: "translateX(-50%)",
        background: "radial-gradient(circle at center, rgba(167,139,250,0.12), rgba(103,232,249,0.05) 30%, transparent 60%)",
        pointerEvents: "none", filter: "blur(20px)",
      }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", width: "100%", position: "relative" }}>
        <Pill dotColor="#34D399" mono={false} style={{ marginBottom: 32 }}>
          Available for new work
        </Pill>
        <h1 style={{
          fontSize: "clamp(48px, 9vw, 120px)",
          letterSpacing: "-0.045em",
          lineHeight: 0.95, fontWeight: 500,
          margin: 0,
          color: "var(--fg-primary)",
        }}>
          Abbas Nawaz<span style={{ color: "var(--accent-violet)" }}>.</span>
        </h1>
        <div style={{
          marginTop: 28, display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center",
          fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--fg-secondary)",
          letterSpacing: "0.02em",
        }}>
          <span>AI Engineer</span>
          <span style={{ color: "var(--fg-disabled)" }}>·</span>
          <span>Full Stack Developer</span>
          <span style={{ color: "var(--fg-disabled)" }}>·</span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, letterSpacing: "-0.01em" }}>researcher</span>
        </div>
        <p style={{
          marginTop: 32, maxWidth: 560,
          fontSize: 18, lineHeight: 1.55,
          color: "var(--fg-secondary)",
        }}>
          I design and ship AI systems — from research to production. Currently
          exploring multimodal reasoning, reinforcement learning, and the systems
          that scale them.
        </p>
        <div style={{ marginTop: 40, display: "flex", flexWrap: "wrap", gap: 12 }}>
          <Button variant="primary" icon="arrow-right" onClick={() => onNav("work")}>View projects</Button>
          <Button variant="secondary" onClick={() => onNav("contact")}>Contact me</Button>
          <Button variant="ghost" icon="download">Download résumé</Button>
        </div>
        {/* scroll cue */}
        <div style={{
          position: "absolute", bottom: -40, left: 0, display: "flex", gap: 32,
          fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em",
          textTransform: "uppercase", color: "var(--fg-tertiary)",
        }}>
          <span>scroll —</span>
          <span>Islamabad · PK</span>
          <span>2026</span>
        </div>
      </div>
    </section>
  );
};

// ---------- About + stats ----------
const Stat = ({ value, suffix, label }) => (
  <div>
    <div style={{
      fontFamily: "var(--font-display)",
      fontSize: 48, fontWeight: 500,
      letterSpacing: "-0.03em", lineHeight: 1,
      color: "var(--fg-primary)",
      fontVariantNumeric: "tabular-nums",
    }}>
      {value}<span style={{ color: "var(--accent-violet)" }}>{suffix}</span>
    </div>
    <div style={{
      marginTop: 10, fontFamily: "var(--font-mono)", fontSize: 11,
      letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-tertiary)",
    }}>{label}</div>
  </div>
);

const About = () => (
  <section id="about" style={{ padding: "128px 32px", borderTop: "1px solid var(--border-default)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <Eyebrow index="01">About</Eyebrow>
      <div style={{
        marginTop: 48, display: "grid",
        gridTemplateColumns: "7fr 5fr", gap: 80,
      }}>
        <div>
          <h2 style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            letterSpacing: "-0.03em", lineHeight: 1.05,
            fontWeight: 500, margin: 0,
          }}>
            I build intelligent systems for the messy real world — and
            occasionally write papers about why they break.
          </h2>
          <p style={{ marginTop: 28, fontSize: 17, lineHeight: 1.65, maxWidth: 540, color: "var(--fg-secondary)" }}>
            Since 2021 I've worked across the full AI stack — from data pipelines
            and model training to inference infra and the product surfaces around
            them. My current research focus is multimodal LLMs and reinforcement
            learning, with published work in CCTV-based public-safety detection.
          </p>
          <p style={{ marginTop: 16, fontSize: 17, lineHeight: 1.65, maxWidth: 540, color: "var(--fg-secondary)" }}>
            Based in Islamabad. Open to remote collaborations with research
            labs, AI startups, and product teams shipping something genuinely new.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignContent: "start" }}>
          <Stat value="5" suffix="+" label="Years building" />
          <Stat value="40" suffix="+" label="Projects shipped" />
          <Stat value="12" suffix="" label="Production AI systems" />
          <Stat value="1" suffix="" label="IEEE publication" />
        </div>
      </div>
    </div>
  </section>
);

// ---------- Skills ----------
const SKILL_GROUPS = [
  { title: "AI / ML", items: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "XGBoost"] },
  { title: "LLMs & Agents", items: ["LangChain", "LlamaIndex", "OpenAI", "Anthropic", "vLLM"] },
  { title: "Full stack", items: ["Next.js", "React", "TypeScript", "FastAPI", "PostgreSQL"] },
  { title: "Cloud & MLOps", items: ["AWS", "Docker", "Kubernetes", "MLflow", "GitHub Actions"] },
  { title: "Computer vision", items: ["YOLO", "OpenCV", "Detectron2", "CLIP"] },
  { title: "Research", items: ["Multimodal", "RLHF", "Evaluation", "Probing"] },
];

const Skills = () => (
  <section id="skills" style={{ padding: "128px 32px", borderTop: "1px solid var(--border-default)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <Eyebrow index="02">Skills</Eyebrow>
      <h2 style={{ marginTop: 24, fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.03em", fontWeight: 500, maxWidth: 700 }}>
        Tools I reach for.
      </h2>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {SKILL_GROUPS.map((g, i) => (
          <Card key={g.title}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>{g.title}</h3>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-tertiary)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 6 }}>
              {g.items.map(it => <Pill key={it}>{it}</Pill>)}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

// ---------- Experience ----------
const EXPERIENCE = [
  { role: "Machine Learning Engineer", co: "TensorLabs", years: "2024 — Present", body: "Production LLM systems and retrieval pipelines. Multimodal evaluation harnesses." },
  { role: "Data Scientist", co: "HyperNym", years: "2023 — 2024", body: "Generative AI for content workflows. Fine-tuning, RAG, evaluation infra." },
  { role: "ML Researcher", co: "GIFT University", years: "2022 — 2024", body: "Computer vision for public safety. Co-authored IEEE paper on weapons & violence detection in CCTV." },
  { role: "Software Engineer", co: "devs-loop", years: "2021 — 2023", body: "Full-stack web platforms — Next.js, FastAPI, AWS." },
  { role: "Freelance · Fiverr / Upwork", co: "Independent", years: "2021 — Present", body: "Client AI builds: chatbots, vision systems, automation." },
];

const Experience = () => (
  <section id="experience" style={{ padding: "128px 32px", borderTop: "1px solid var(--border-default)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <Eyebrow index="03">Experience</Eyebrow>
      <h2 style={{ marginTop: 24, fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.03em", fontWeight: 500, maxWidth: 700 }}>
        Where I've shipped.
      </h2>
      <div style={{ marginTop: 56, position: "relative" }}>
        <div style={{ position: "absolute", left: 8, top: 12, bottom: 12, width: 1, background: "var(--border-default)" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "auto 200px 1fr", gap: 32, alignItems: "start", paddingLeft: 0 }}>
              <div style={{ width: 17, height: 17, marginTop: 18, position: "relative", zIndex: 1 }}>
                <div style={{ width: 9, height: 9, borderRadius: 999, background: i === 0 ? "var(--accent-violet)" : "var(--bg-surface)", border: `1px solid ${i === 0 ? "var(--accent-violet)" : "var(--border-line)"}`, boxShadow: i === 0 ? "0 0 12px var(--accent-violet)" : "none", margin: "4px 0 0 4px" }} />
              </div>
              <div style={{ paddingTop: 14, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-tertiary)", letterSpacing: "0.02em" }}>
                {e.years}
              </div>
              <Card style={{ padding: "18px 22px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.015em" }}>{e.role}</h3>
                  <span style={{ color: "var(--fg-tertiary)" }}>·</span>
                  <span style={{ color: "var(--fg-secondary)", fontSize: 14 }}>{e.co}</span>
                </div>
                <p style={{ marginTop: 8, fontSize: 14, color: "var(--fg-secondary)", lineHeight: 1.6 }}>{e.body}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ---------- Projects ----------
const PROJECTS = [
  {
    featured: true,
    title: "Multimodal RAG system",
    summary: "Vision + text retrieval over a 1M-document enterprise corpus. Sub-second queries with hybrid lexical/semantic search.",
    tags: ["LangChain", "Qdrant", "CLIP", "vLLM"],
    role: "Tech lead",
    year: "2025",
  },
  {
    featured: true,
    title: "Weapon & violence detection",
    summary: "YOLOv8 fine-tuned on CCTV footage. Deployed across municipal camera networks at <200ms end-to-end latency.",
    tags: ["PyTorch", "OpenCV", "TensorRT"],
    role: "Researcher · IEEE 2024",
    year: "2024",
  },
  {
    title: "LLM evaluation harness",
    summary: "Open-source eval suite for instruction-following, retrieval grounding, and tool use.",
    tags: ["Python", "Anthropic", "OpenAI"],
    year: "2025",
  },
  {
    title: "Agentic data pipeline",
    summary: "Self-correcting ETL agent that ingests messy CSVs and validates against schema with retries.",
    tags: ["FastAPI", "Postgres", "LangGraph"],
    year: "2024",
  },
];

const ProjectCard = ({ p, featured }) => (
  <Card style={featured ? { padding: 0, gridColumn: "span 2" } : { padding: 0 }}>
    <div style={{
      aspectRatio: featured ? "16 / 8" : "16 / 9",
      background: featured
        ? "radial-gradient(circle at 30% 40%, rgba(167,139,250,0.25), transparent 60%), radial-gradient(circle at 80% 80%, rgba(103,232,249,0.2), transparent 60%), #0E0F12"
        : "radial-gradient(circle at 70% 30%, rgba(103,232,249,0.15), transparent 60%), #0E0F12",
      borderBottom: "1px solid var(--border-default)",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }} />
      <div style={{
        position: "absolute", left: 24, top: 24, display: "flex", gap: 8,
      }}>
        {p.featured && <Pill mono={true} style={{ background: "rgba(167,139,250,0.08)", borderColor: "rgba(167,139,250,0.25)", color: "#C7B6FB" }}>Featured</Pill>}
        <Pill>{p.year}</Pill>
      </div>
    </div>
    <div style={{ padding: 24 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
        <h3 style={{ fontSize: featured ? 28 : 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{p.title}</h3>
        <a style={{ display: "inline-flex", gap: 6, alignItems: "center", color: "var(--fg-secondary)", fontSize: 13, cursor: "pointer", whiteSpace: "nowrap" }}>
          Case study <span>↗</span>
        </a>
      </div>
      {p.role && <div style={{ marginTop: 6, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-tertiary)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.role}</div>}
      <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6, color: "var(--fg-secondary)", maxWidth: 560 }}>{p.summary}</p>
      <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
        {p.tags.map(t => <Pill key={t}>{t}</Pill>)}
        <span style={{ flex: 1 }} />
        <a style={{ display: "inline-flex", gap: 6, alignItems: "center", color: "var(--fg-secondary)", fontSize: 13, cursor: "pointer" }}>GitHub ↗</a>
      </div>
    </div>
  </Card>
);

const Projects = () => (
  <section id="work" style={{ padding: "128px 32px", borderTop: "1px solid var(--border-default)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
        <div>
          <Eyebrow index="04">Selected work</Eyebrow>
          <h2 style={{ marginTop: 24, fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.03em", fontWeight: 500, maxWidth: 700 }}>
            Things I'm proud of.
          </h2>
        </div>
        <a style={{ display: "inline-flex", gap: 8, alignItems: "center", color: "var(--fg-secondary)", fontSize: 14, cursor: "pointer" }}>
          All projects ↗
        </a>
      </div>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
        {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} featured={p.featured} />)}
      </div>
    </div>
  </section>
);

// ---------- Research ----------
const Research = () => (
  <section id="research" style={{ padding: "128px 32px", borderTop: "1px solid var(--border-default)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto" }}>
      <Eyebrow index="05">Research</Eyebrow>
      <h2 style={{ marginTop: 24, fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.03em", fontWeight: 500, maxWidth: 700 }}>
        Published & in progress.
      </h2>
      <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "5fr 7fr", gap: 24 }}>
        <Card>
          <Pill mono={true} style={{ background: "rgba(167,139,250,0.08)", borderColor: "rgba(167,139,250,0.25)", color: "#C7B6FB" }}>Published · IEEE 2024</Pill>
          <h3 style={{ marginTop: 18, fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
            Enhancing public safety: detection of weapons and violence in CCTV videos with deep learning
          </h3>
          <p style={{ marginTop: 14, fontSize: 14, color: "var(--fg-secondary)", lineHeight: 1.6 }}>
            Co-authored. Object detection model trained on synthetic + real CCTV
            footage, with custom NMS handling for occluded weapons.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 10, alignItems: "center" }}>
            <a style={{ display: "inline-flex", gap: 6, alignItems: "center", color: "var(--fg-primary)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>Read paper ↗</a>
            <span style={{ color: "var(--fg-disabled)" }}>·</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--fg-tertiary)" }}>doi:10.1109/...10465800</span>
          </div>
        </Card>
        <Card>
          <Pill mono={true}>In progress</Pill>
          <h3 style={{ marginTop: 18, fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.25 }}>
            Multimodal reasoning under retrieval failure
          </h3>
          <p style={{ marginTop: 14, fontSize: 14, color: "var(--fg-secondary)", lineHeight: 1.6 }}>
            How well do vision-language models recover when retrieved evidence
            contradicts the visual context? Probing benchmark + dataset, drafting now.
          </p>
          <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {[
              { k: "Models evaluated", v: "11" },
              { k: "Tasks", v: "6" },
              { k: "Eval examples", v: "12k" },
            ].map(s => (
              <div key={s.k} style={{ padding: "14px 16px", background: "var(--bg-surface)", border: "1px solid var(--border-default)", borderRadius: 8 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", color: "var(--fg-primary)", fontVariantNumeric: "tabular-nums" }}>{s.v}</div>
                <div style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-tertiary)" }}>{s.k}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </section>
);

// ---------- Contact ----------
const Contact = () => {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" style={{ padding: "128px 32px", borderTop: "1px solid var(--border-default)", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 50% 0%, rgba(167,139,250,0.10), transparent 50%)",
      }} />
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative" }}>
        <Eyebrow index="06">Contact</Eyebrow>
        <h2 style={{ marginTop: 24, fontSize: "clamp(40px, 6vw, 80px)", letterSpacing: "-0.035em", fontWeight: 500, maxWidth: 900, lineHeight: 1.0 }}>
          Let's build something <span className="serif-accent" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>worth shipping</span>.
        </h2>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "7fr 5fr", gap: 56 }}>
          <Card style={{ padding: 32 }}>
            {sent ? (
              <div style={{ padding: "40px 0", textAlign: "center" }}>
                <div style={{ fontSize: 24, color: "var(--fg-primary)", letterSpacing: "-0.02em" }}>Message sent.</div>
                <p style={{ marginTop: 12, color: "var(--fg-secondary)" }}>I'll reply within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" placeholder="you@domain.com" type="email" />
                <Field label="Subject" placeholder="What's this about?" />
                <Field label="Message" placeholder="Tell me about the project…" textarea />
                <Button variant="primary" icon="arrow-right" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                  Send message
                </Button>
              </form>
            )}
          </Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <ContactRow label="Email" value="abbasnawaz125@gmail.com" href="mailto:abbasnawaz125@gmail.com" />
            <ContactRow label="WhatsApp" value="+92 321 970 4177" href="tel:+923219704177" />
            <ContactRow label="GitHub" value="github.com/abbasnawaz" href="https://github.com/abbasnawaz" />
            <ContactRow label="LinkedIn" value="dr-abbas-ch" href="https://www.linkedin.com/in/dr-abbas-ch" />
            <ContactRow label="Location" value="Islamabad, Pakistan" />
            <div style={{ paddingTop: 24, borderTop: "1px solid var(--border-default)" }}>
              <Pill dotColor="#34D399" mono={false}>Currently accepting Q3 2026 projects</Pill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field = ({ label, placeholder, type = "text", textarea }) => {
  const [focus, setFocus] = useState(false);
  const inputStyle = {
    width: "100%", padding: "12px 14px",
    background: "var(--bg-surface)",
    border: `1px solid ${focus ? "rgba(167,139,250,0.5)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 8,
    color: "var(--fg-primary)",
    fontFamily: "var(--font-body)", fontSize: 14,
    outline: "none",
    transition: "all 150ms",
    boxShadow: focus
      ? "0 0 0 3px rgba(167,139,250,0.12), inset 0 1px 0 rgba(255,255,255,0.04)"
      : "inset 0 1px 0 rgba(255,255,255,0.04)",
    resize: "none",
    boxSizing: "border-box",
  };
  return (
    <div>
      <label style={{
        display: "block", fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: "0.18em", textTransform: "uppercase",
        color: "var(--fg-tertiary)", marginBottom: 8,
      }}>{label}</label>
      {textarea
        ? <textarea placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={{ ...inputStyle, height: 100 }} />
        : <input type={type} placeholder={placeholder} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={inputStyle} />
      }
    </div>
  );
};

const ContactRow = ({ label, value, href }) => (
  <div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--fg-tertiary)", marginBottom: 6 }}>{label}</div>
    {href
      ? <a href={href} style={{ fontSize: 16, color: "var(--fg-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>{value} <span style={{ color: "var(--fg-tertiary)", fontSize: 13 }}>↗</span></a>
      : <span style={{ fontSize: 16, color: "var(--fg-primary)" }}>{value}</span>
    }
  </div>
);

// ---------- Footer ----------
const Footer = () => (
  <footer style={{ padding: "48px 32px 32px", borderTop: "1px solid var(--border-default)" }}>
    <div style={{ maxWidth: 1240, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <svg width="20" height="20" viewBox="0 0 64 64" fill="none" stroke="#A1A1A9" strokeWidth="2.4">
          <path d="M8 52 L20 12 L32 52"/><path d="M13 36 L27 36"/>
          <path d="M40 52 L40 12"/><path d="M56 52 L56 12"/><path d="M40 12 L56 52"/>
        </svg>
        <span style={{ fontSize: 13, color: "var(--fg-secondary)" }}>© 2026 Abbas Nawaz</span>
      </div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-tertiary)", letterSpacing: "0.15em" }}>
        DESIGNED & BUILT IN ISLAMABAD
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 13, color: "var(--fg-secondary)" }}>
        <a>GitHub ↗</a><a>LinkedIn ↗</a><a>Email ↗</a>
      </div>
    </div>
  </footer>
);

// ---------- App ----------
const App = () => {
  const [active, setActive] = useState("home");
  const onNav = (section) => {
    setActive(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const ids = ["home", "about", "skills", "experience", "work", "research", "contact"];
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -50% 0px" });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  // noise texture overlay
  return (
    <div data-screen-label="Portfolio · Full page" style={{ position: "relative" }}>
      <Nav active={active === "home" ? null : active} onNav={onNav} />
      <Hero onNav={onNav} />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Contact />
      <Footer />
    </div>
  );
};

Object.assign(window, { App });
