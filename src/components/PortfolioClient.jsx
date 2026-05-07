import { useState, useRef, useEffect, useCallback } from "react";
import "./PortfolioClient.css";

/* ─── data ─── */
export const PORTFOLIO_DATA = {
  candidate: {
    name: "Balachandar M",
    title: "Senior Backend Developer @ Tata Consultancy Services",
    location: "Chennai, Tamil Nadu, India",
    contact: {
      email: "balachandarspl@gmail.com",
      phone: "+91 79048 80893",
      linkedin: "https://www.linkedin.com/in/balachandar-m-0421a9178/",
      github: "https://github.com/Balachandar211",
      portfolio: "https://balachandar-portfolio.netlify.app/",
    },
  },
  summary:
    "Senior Backend Developer with 3.5+ years of experience owning the end-to-end architecture and delivery of complex computation and backend systems in Python and Go. Drove three major platform migrations and elevated overall system reliability, successfully reducing critical defects by 60%. Combines deep technical expertise in microservices, Redis, and JWT-based authentication with strong technical mentorship, consistently translating dense technical requirements into scalable, measurable business outcomes.",
  resume: {
    message: "Resume downloads available in multiple formats.",
    downloads: {
      pdf: "/Balachandar_M_Resume.pdf",
      docx: "/Balachandar_M_Resume.docx"
    }
  },
  experience: [
    {
      role: "Senior Backend Developer",
      company: "Tata Consultancy Services",
      location: "Chennai",
      period: "July 2025 - Present",
      highlights: [
        "Spearheaded the technical delivery of high-fidelity financial computation engines, mentoring a team of 5 developers through rigorous code reviews that reduced accumulated technical debt by 30% and ensured the algorithmic accuracy of complex data models.",
        "Owned technical scoping and system architecture for the calculation module, collaborating with domain experts to translate dense mathematical requirements into scalable backend sprints, which accelerated new feature time-to-market by 25%.",
        "Ensured highly reliable release cycles and consistent on-time delivery by implementing automated validation gates and proactive risk frameworks, achieving zero production incidents across 4 major release cycles and cutting regression testing time by 40%.",
        "Acted as the primary technical mentor, guiding the engineering team through advanced solution design and performance-tuning techniques, which empowered the team to resolve 80% of complex calculation bottlenecks independently without senior intervention.",
        "Architected and executed 3 major migrations from legacy calculation frameworks to modern microservice architectures, guaranteeing 100% data integrity for millions of records, zero deployment downtime, and a 3x improvement in cross-service data retrieval speeds."
      ],
    },
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Chennai",
      period: "Nov 2023 - July 2025",
      highlights: [
        "Partnered with cross-functional teams—including Business Analysts (BAs) and Quality Assurance (QA), and domain experts—to translate ambiguous insurance requirements into technical specs; increased development velocity by 30% and reduced mid-sprint requirement changes by 60%.",
        "Drove measurable improvements in system performance by executing targeted refactoring; eliminated 30% of dead code paths and reduced cyclomatic complexity by 25%, resulting in a 40% reduction in average response times for high-traffic modules.",
        "Expanded technical ownership by taking full accountability for 5 auxiliary modules—including valuation and charges layers—increasing the team’s total delivery capacity by 30% and eliminating critical single-point-of-failure risks.",
        "Identified and resolved over 20+ latent logical defects and edge-case failures across the application stack; elevated system uptime to 99.9% and achieved a 90% increase in positive client satisfaction scores regarding output quality."
      ],
    },
    {
      role: "Assistant Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Chennai",
      period: "Aug 2022 - Nov 2023",
      highlights: [
        "Engineered intricate business logic for insurance policy projections; optimized the calculation engine to process high-volume of policy data, reducing total execution time from 20 minutes to 2–10 minutes (a 50% performance gain).",
        "Independently drove the complete lifecycle of the Quotation module; delivered the architecture and data modelling weeks ahead of schedule while ensuring 100% accuracy against dense actuarial mathematical benchmarks.",
        "Strengthened system reliability by instituting testing protocols and clear debugging workflows; achieved 85% code coverage and reduced post-deployment calculation drift or defects by 45% compared to legacy baselines.",
        "Accelerated release velocity by hitting 100% of Agile sprint commitments; maintained 100% on-time delivery across 20+ consecutive sprints while rapidly resolving technical blockers for the team."
      ],
    },
  ],
  skills: {
    languages: ["Python", "Go"],
    frameworks: ["FastAPI", "Django", "Django REST Framework", "Flask", "Quart", "Gin"],
    databases: ["PostgreSQL", "Redis"],
    messaging: ["RabbitMQ", "Celery"],
    ai: ["Generative AI", "Prompt Engineering"],
    api: ["REST API", "GraphQL", "WebSockets"],
    security: ["JWT Authentication", "API Security", "DEK Encryption", "Role-Based Access Control (RBAC)"],
    devops: ["Docker", "Docker Compose", "Nginx", "CI/CD", "Ubuntu Linux", "Linux/VPS Deployment", "Cloud Deployment", "Git"],
    architecture: ["Microservices", "System Design", "Performance Optimization", "Caching", "Database Indexing"],
    domain: ["Actuarial Systems", "Insurance Domain", "Technical Business Analytics"],
    methodology: ["Agile", "Sprint Governance", "Code Review"],
  },
  projects: [
    {
      name: "ConsTell",
      period: "Feb 2026 – Apr 2026",
      stack: ["Go", "Python", "React", "PostgreSQL", "Redis", "Docker", "Nginx", "WebSockets", "RabbitMQ", "FastAPI", "Flask", "Quart"],
      description:
        "A production-deployed, 9-service microservices chat platform hosted on an Ubuntu Server, secured with SSL/TLS, custom domain, and Nginx as reverse proxy. Each service owns an isolated PostgreSQL DB, utilizing Docker for full-stack containerization and Docker Compose for automated CI/CD deployment pipelines.",
      links: {
        live: "https://constell-puce.vercel.app/login",
        demo_user: "SampleUser",
        demo_pass: "Sample@211",
      },
      services: [
        { name: "API Gateway", repo: "https://github.com/Balachandar211/ConsTell_API_Gateway", desc: "Go(Gin) reverse-proxy gateway centralizing routing and security for all 7 backend services. Enforces global middleware for JWT validation, CORS enforcement, and Redis-backed rate limiting." },
        { name: "Auth Service", repo: "https://github.com/Balachandar211/ConsTell_Auth", desc: "FastAPI RESTful service managing the full user lifecycle with JWT-based stateless auth, Pydantic validation, and Aerich for schema migrations." },
        { name: "Profile Service", repo: "https://github.com/Balachandar211/ConsTell_Profile_Service", desc: "Flask/GraphQL profile service using Tortoise ORM for user data retrieval and profile picture management. Uses Alembic for schema versioning." },
        { name: "Chat Service", repo: "https://github.com/Balachandar211/ConsTell-Chat-Service", desc: "Go(Gin) service using WebSockets and Redis Pub/Sub for real-time bidirectional messaging. Provides DEK-based end-to-end encryption for DMs and groups." },
        { name: "Chat DB Service", repo: "https://github.com/Balachandar211/ConsTell_Chat_DB_Service", desc: "Dedicated PostgreSQL-backed service handling message persistence, room configurations, participant metadata, and encryption keys." },
        { name: "Nebula Bot", repo: "https://github.com/Balachandar211/ConsTell-Nebula-Bot", desc: "AI assistant powered by Llama-3.1-8b-instant via Groq, delivering context-aware, real-time support through a natural language interface with a multi-model fallback chain." },
        { name: "Message Broker", repo: "https://github.com/Balachandar211/Message_Broker", desc: "RabbitMQ-driven async task processor handling email triggers, cleanup routines, and message chunking workflows to maintain consistent state." },
        { name: "Mailer API", repo: "https://github.com/Balachandar211/Mail_Service_API", desc: "Async email service built with Quart, processing mail requests via background queues for non-blocking, high-throughput delivery." },
        { name: "Frontend", repo: "https://github.com/Balachandar211/ConsTell_Frontend", desc: "Responsive React (Vite) featuring real-time chat, profile management, and a deep-space design system." },
      ],
    },
    {
      name: "Games-Hub",
      period: "Oct 2025 – Dec 2025",
      stack: ["Python", "Django", "Django REST Framework", "Redis", "PostgreSQL", "Celery", "Docker"],
      description:
        "Engineered a high-performance backend architecture, utilizing Redis caching (per-view & object-level) and optimized PostgreSQL indexing, drastically reducing API latency for concurrent users.",
      links: {
        live: "https://gameshub-test.onrender.com/api/docs/",
        repo: "https://github.com/Balachandar211/GamesHub",
      },
      highlights: [
        "Achieved 20x Performance Gain via Redis caching and optimized PostgreSQL indexing.",
        "Fortified Security & Logging: Built a production-grade JWT authentication system with Role-Based Access Control (RBAC) and integrated comprehensive user activity logging.",
        "Resilient Error Handling: Implemented a global exception handling strategy that captures and resolves 99% of runtime errors.",
        "Scalable Async Architecture: Offloaded resource-intensive tasks to background workers using Celery and Redis, preventing main-thread blocking.",
        "DevOps & Deployment: Containerized the entire application ecosystem using Docker and deployed via Render for zero-downtime releases.",
        "Standardized API Ecosystem: Designed secure, well-documented REST APIs using Django Rest Framework and DRF Spectacular (OpenAPI v3).",
      ],
    },
  ],
  education: {
    degree: "Bachelors of Engineering Electronics and Communication Engineering",
    institution: "St Peter's College of Engineering and Technology",
    period: "Jul 2018 – Jul 2022",
    cgpa: "8.89 / 10.0",
  },
  awards: [
    "⭐  Star of The Quarter",
    "🌟  Star of The Month",
    "⚡  On The Spot Award",
    "🤝  On The Spot Team Award",
    "🏅  Certificate of Recognition",
  ],
  meta: {
    available_for_hire: true,
    years_of_experience: "3.5+",
    current_role: "Senior Backend Developer @ TCS",
    response_time_ms: 142,
    api_version: "v1",
    match_score: "98%",
    last_updated: new Date().toISOString().split('T')[0],
  },
};

export const SIDEBAR_ENDPOINTS = [
  { method: "GET", path: "/candidate/profile",    collection: "candidate-api" },
  { method: "GET", path: "/candidate/resume",     collection: "candidate-api" },
  { method: "GET", path: "/candidate/contact",    collection: "candidate-api" },
  { method: "GET", path: "/candidate/skills",     collection: "candidate-api" },
  { method: "GET", path: "/candidate/experience", collection: "candidate-api" },
  { method: "GET", path: "/candidate/projects",   collection: "candidate-api" },
  { method: "GET", path: "/candidate/education",  collection: "candidate-api" },
  { method: "GET", path: "/candidate/awards",     collection: "candidate-api" },
];

/* ─── helpers ─── */
function buildResponseJson(path) {
  const { candidate, summary, resume, experience, skills, projects, education, awards, meta } = PORTFOLIO_DATA;
  const baseResponse = { status: "200 OK", meta };

  switch (path) {
    case "/candidate/profile":
      return { ...baseResponse, data: { candidate, summary, resume, experience, skills, projects, education, awards } };
    case "/candidate/resume":
      return { ...baseResponse, data: resume };
    case "/candidate/contact":
      return { ...baseResponse, data: candidate.contact };
    case "/candidate/skills":
      return { ...baseResponse, data: skills };
    case "/candidate/experience":
      return { ...baseResponse, data: experience };
    case "/candidate/projects":
      return { ...baseResponse, data: projects };
    case "/candidate/education":
      return { ...baseResponse, data: education };
    case "/candidate/awards":
      return { ...baseResponse, data: awards };
    default:
      return { status: "404 Not Found", error: "Endpoint not found" };
  }
}

/* ─── escape helper ─── */
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ─── syntax highlighter ─────────────────────────────────────────────────── */
function syntaxHighlight(json) {
  const TOKEN = /"(?:[^"\\]|\\.)*"|"(?:[^"\\]|\\.)*$|true|false|null|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?|[{}\[\],:]/g;
  let out = "";
  let last = 0;
  let m;

  while ((m = TOKEN.exec(json)) !== null) {
    if (m.index > last) out += esc(json.slice(last, m.index));

    const tok = m[0];
    const c = tok[0];

    if (c === "{" || c === "}") {
      out += `<span class="json-brace">${tok}</span>`;
    } else if (c === "[" || c === "]") {
      out += `<span class="json-bracket">${tok}</span>`;
    } else if (c === "," || c === ":") {
      out += `<span class="json-punct">${tok}</span>`;
    } else if (tok === "true" || tok === "false") {
      out += `<span class="json-bool">${tok}</span>`;
    } else if (tok === "null") {
      out += `<span class="json-null">${tok}</span>`;
    } else if (c === "-" || (c >= "0" && c <= "9")) {
      out += `<span class="json-number">${tok}</span>`;
    } else if (c === '"') {
      const rest = json.slice(m.index + tok.length);
      const isKey = /^\s*:/.test(rest);
      if (isKey) {
        out += `<span class="json-key">${esc(tok)}</span>`;
      } else {
        let inner = tok.slice(1);
        let hasClosingQuote = false;
        if (inner.endsWith('"') && !inner.endsWith('\\"')) {
          inner = inner.slice(0, -1);
          hasClosingQuote = true;
        }

        if (inner.startsWith("http://") || inner.startsWith("https://") || inner.startsWith("/")) {
          out += `<span class="json-string">"<a href="${inner}" target="_blank" rel="noopener noreferrer" class="json-link">${esc(inner)}</a>${hasClosingQuote ? '"' : ''}</span>`;
        } else if (/^[^\s@]+@[^\s@]+$/.test(inner)) {
          out += `<span class="json-string">"<a href="mailto:${inner}" class="json-link">${esc(inner)}</a>${hasClosingQuote ? '"' : ''}</span>`;
        } else {
          out += `<span class="json-string">${esc(tok)}</span>`;
        }
      }
    } else {
      out += esc(tok);
    }

    last = m.index + tok.length;
  }

  if (last < json.length) out += esc(json.slice(last));
  return out;
}

/* ─── sub-components ─── */
function Sidebar({ endpoints, activeIndex, onSelect, isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">&#9670;</span>
        DevClient
      </div>
      <div className="sidebar-section-label">Collections</div>
      <div className="sidebar-collection-name">Candidate API</div>
      {endpoints.map((ep, i) => (
        <div
          key={i}
          className={`sidebar-item ${i === activeIndex ? "active" : ""}`}
          onClick={() => { onSelect(i); if (onClose) onClose(); }}
        >
          <span className={`method-badge method-${ep.method.toLowerCase()}`}>{ep.method}</span>
          <span className="sidebar-path">{ep.path}</span>
        </div>
      ))}
      <div className="sidebar-section-label" style={{ marginTop: "20px" }}>Environments</div>
      <div className="sidebar-env">
        <span className="env-dot" />
        Production
      </div>
      <div className="sidebar-section-label resume-label">Resume</div>
      <div className="sidebar-actions">
        <a href="/Balachandar_M_Resume.pdf" download className="sidebar-btn sidebar-btn-pdf">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
             <polyline points="7 10 12 15 17 10"></polyline>
             <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download PDF
        </a>
        <a href="/Balachandar_M_Resume.docx" download className="sidebar-btn sidebar-btn-docx">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
             <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
             <polyline points="7 10 12 15 17 10"></polyline>
             <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download DOCX
        </a>
      </div>
    </aside>
  );
}

function UrlBar({ method, url, loading, onSend, onToggleSidebar, isIdle }) {
  return (
    <div className="url-bar">
      <button className="mobile-menu-btn" onClick={onToggleSidebar} aria-label="Toggle Menu">☰</button>
      <div className="method-pill method-get">{method}</div>
      <div className="url-display">{url}</div>
      <button
        className={`send-btn ${isIdle && !loading ? "blink" : ""}`}
        onClick={onSend}
        disabled={loading}
      >
        {loading ? <span className="send-spinner" /> : "Send"}
      </button>
    </div>
  );
}

function RequestTabs({ activeTab, onTabChange }) {
  const tabs = ["Params", "Headers", "Auth", "Body"];
  return (
    <div className="req-tabs">
      {tabs.map((t) => (
        <button
          key={t}
          className={`req-tab ${activeTab === t ? "active" : ""}`}
          onClick={() => onTabChange(t)}
        >
          {t}
          {t === "Params" && <span className="tab-dot" />}
        </button>
      ))}
    </div>
  );
}

/* ─── Response panel — fully managed via dangerouslySetInnerHTML ─── */
function ResponsePanel({ status, timeMs, responseHtml, loading }) {
  return (
    <div className="response-panel">
      <div className="response-header">
        <span className="response-label">Response</span>
        {status ? (
          <>
            <span className={`status-badge ${status.startsWith("200") ? "status-ok" : "status-err"}`}>
              {status}
            </span>
            <span className="response-meta">{timeMs}ms · application/json</span>
          </>
        ) : (
          <span className="status-badge status-idle">— —</span>
        )}
        <div className="response-tabs-right">
          <button className="res-tab-btn active">Pretty</button>
          <button className="res-tab-btn">Raw</button>
        </div>
      </div>
      <div className="response-body">
        {loading && (
          <span className="loading-comment">// Connecting to candidate API...</span>
        )}
        {!loading && !responseHtml && (
          <span className="idle-hint">// Hit Send to query the candidate API...</span>
        )}
        <pre
          className="response-pre"
          style={{ display: !loading && responseHtml ? "block" : "none" }}
          dangerouslySetInnerHTML={{ __html: responseHtml }}
        />
      </div>
    </div>
  );
}

/* ─── main component ─── */
export default function PortfolioClient() {
  const [activeEndpoint, setActiveEndpoint]   = useState(0);
  const [activeTab, setActiveTab]             = useState("Params");
  const [loading, setLoading]                 = useState(false);
  const [status, setStatus]                   = useState(null);
  const [timeMs, setTimeMs]                   = useState(null);
  const [responseHtml, setResponseHtml]       = useState("");
  const [sidebarOpen, setSidebarOpen]         = useState(false);
  const [isIdle, setIsIdle]                   = useState(false);

  const typeTimerRef = useRef(null);
  const loadingTimersRef = useRef([]);
  const idleTimerRef = useRef(null);

  const resetIdleTimer = useCallback(() => {
    setIsIdle(false);
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsIdle(true), 2000);
  }, []);

  useEffect(() => {
    resetIdleTimer();
    const handle = () => resetIdleTimer();
    window.addEventListener("mousemove", handle);
    window.addEventListener("keydown", handle);
    window.addEventListener("click", handle);
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      window.removeEventListener("mousemove", handle);
      window.removeEventListener("keydown", handle);
      window.removeEventListener("click", handle);
    };
  }, [resetIdleTimer]);

  const stopTyping = useCallback(() => {
    if (typeTimerRef.current) clearTimeout(typeTimerRef.current);
    loadingTimersRef.current.forEach(clearTimeout);
    loadingTimersRef.current = [];
  }, []);

  // Clear previous response when switching endpoints for a cleaner UI
  useEffect(() => {
    setResponseHtml("");
    setStatus(null);
    setTimeMs(null);
    stopTyping();
  }, [activeEndpoint, stopTyping]);

  const typewriterEffect = useCallback((fullText) => {
    const chars = fullText.split("");
    let i = 0;

    function step() {
      i = Math.min(i + 16, chars.length); // slightly larger chunk for smoother rendering
      const partial = chars.slice(0, i).join("");

      if (i < chars.length) {
        setResponseHtml(syntaxHighlight(partial) + '<span class="cursor-blink">|</span>');
        typeTimerRef.current = setTimeout(step, 16); // roughly 60fps
      } else {
        setResponseHtml(syntaxHighlight(fullText));
      }
    }
    step();
  }, []);

  const ep = SIDEBAR_ENDPOINTS[activeEndpoint];

  const handleSend = useCallback(() => {
    stopTyping();
    resetIdleTimer();
    setLoading(true);
    setStatus(null);
    setTimeMs(null);
    setResponseHtml("");

    const start = Date.now();

    loadingTimersRef.current.push(setTimeout(() => {
      setResponseHtml('<span class="json-comment">// Authenticating request...</span>');
    }, 350));

    loadingTimersRef.current.push(setTimeout(() => {
      setResponseHtml('<span class="json-comment">// Fetching candidate data...</span>');
    }, 800));

    loadingTimersRef.current.push(setTimeout(() => {
      setLoading(false);
      setStatus("200 OK");
      setTimeMs(Date.now() - start);
      const json = JSON.stringify(buildResponseJson(ep.path), null, 2);
      typewriterEffect(json);
    }, 1300));
  }, [stopTyping, typewriterEffect, ep.path, resetIdleTimer]);

  useEffect(() => () => stopTyping(), [stopTyping]);

  return (
    <div className="portfolio-client">
      <div className="titlebar">
        <div className="titlebar-dots">
          <span className="td td-red" />
          <span className="td td-yellow" />
          <span className="td td-green" />
        </div>
        <span className="titlebar-name">DevClient &nbsp;·&nbsp; v1.0</span>
        <span className="titlebar-url">
          <a href="https://balachandar-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
            https://balachandar-portfolio.netlify.app/
          </a>
        </span>
      </div>

      <div className="client-body">
        {sidebarOpen && (
          <div className="sidebar-backdrop open" onClick={() => setSidebarOpen(false)} />
        )}

        <Sidebar
          endpoints={SIDEBAR_ENDPOINTS}
          activeIndex={activeEndpoint}
          onSelect={setActiveEndpoint}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="main-panel">
          <UrlBar
            method={ep.method}
            url={`https://api.balachandar.dev/v1${ep.path}`}
            loading={loading}
            onSend={handleSend}
            onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
            isIdle={isIdle}
          />

          <RequestTabs activeTab={activeTab} onTabChange={setActiveTab} />

          <div className="empty-tab">
            <span className="empty-tab-hint">
              {activeTab === "Body"
                ? "GET requests typically do not require a payload body."
                : activeTab === "Params"
                ? "Query parameters: None required for this endpoint."
                : `No ${activeTab.toLowerCase()} configured for this request.`}
            </span>
          </div>

          <ResponsePanel
            status={status}
            timeMs={timeMs}
            responseHtml={responseHtml}
            loading={loading}
          />
        </main>
      </div>
    </div>
  );
}