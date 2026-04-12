import { useState, useRef, useEffect, useCallback } from "react";
import "./PortfolioClient.css";

/* ─── data ─── */
export const PORTFOLIO_DATA = {
  candidate: {
    name: "Balachandar M",
    title: "Module Lead | Backend Engineer",
    location: "Chennai, Tamil Nadu, India",
    contact: {
      email: "balachandarspl@gmail.com",
      phone: "+91 79048 80893",
      linkedin: "https://www.linkedin.com/in/balachandar-m-0421a9178/",
      github: "https://github.com/Balachandar211",
    },
  },
  summary:
    "Module Lead and Backend Engineer with 3.5+ years of experience owning end-to-end delivery of complex backend and actuarial systems in Python and Go. Led a team of 5 engineers, reduced critical defects by 60%, and drove three major platform migrations. Combines deep technical expertise in microservices, Redis, and JWT-based authentication with hands-on leadership — consistently delivering sprint commitments and translating dense technical requirements into measurable business outcomes.",
  experience: [
    {
      role: "Module Lead",
      company: "Tata Consultancy Services",
      location: "Chennai",
      period: "Jul 2024 – Present",
      highlights: [
        "Led and mentored a team of 5 engineers; increased code quality by 25% through structured reviews and domain-specific validation standards.",
        "Owned end-to-end sprint governance for the actuarial module; reduced requirement ambiguity and shortened feedback cycles by 40%.",
        "Maintained zero team escalations across 3 delivery cycles; prevented ~60% of critical calculation defects from reaching live environments.",
        "Coached engineers on actuarial logic and performance-tuning; improved team autonomy by 35%.",
        "Architected 3 major platform migrations — 100% data integrity, zero downtime, 2x improvement in calculation speed.",
      ],
    },
    {
      role: "Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Chennai",
      period: "Nov 2023 – Jul 2024",
      highlights: [
        "Partnered with BAs, QA, and domain experts to translate insurance requirements into specs; increased dev velocity by 30%, reduced mid-sprint changes by 60%.",
        "Eliminated 30% dead code paths, reduced cyclomatic complexity by 25%, achieved 40% reduction in response times for high-traffic modules.",
        "Took full ownership of 5 auxiliary modules — increased team delivery capacity by 30%, eliminated single-point-of-failure risks.",
        "Resolved 20+ latent logical defects; elevated system uptime to 99.9% and improved client satisfaction scores by 90%.",
      ],
    },
    {
      role: "Assistant Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Chennai",
      period: "Aug 2022 – Nov 2023",
      highlights: [
        "Optimized insurance policy projection engine — reduced execution time from 20 min to 2–10 min (50% performance gain).",
        "Independently drove Quotation module lifecycle; delivered weeks ahead of schedule with 100% accuracy against actuarial benchmarks.",
        "Instituted testing protocols achieving 85% code coverage; reduced post-deployment defects by 45% vs legacy baseline.",
        "Maintained 100% on-time delivery across 20+ consecutive Agile sprints.",
      ],
    },
  ],
  skills: [
    "Python", "Go", "FastAPI", "Django", "Django REST Framework",
    "Flask", "Quart", "Gin", "PostgreSQL", "Redis", "RabbitMQ",
    "Celery", "Docker", "WebSockets", "GraphQL", "REST API",
    "JWT Authentication", "API Security", "Microservices", "System Design",
    "CI/CD", "Performance Optimization", "Caching", "Database Indexing",
    "Ubuntu Linux", "Cloud Deployment", "Linux/VPS Deployment", "Agile",
    "Actuarial Systems", "Insurance Domain", "Git",
  ],
  projects: [
    {
      name: "ConsTell",
      period: "Feb 2026 – Apr 2026",
      stack: ["Go", "Python", "React", "PostgreSQL", "Redis", "Docker", "Nginx", "WebSockets", "RabbitMQ", "FastAPI", "Flask"],
      description:
        "Production-deployed 9-service microservices chat platform hosted on Ubuntu Server. Secured with SSL/TLS, custom domain, Nginx reverse proxy. Each service owns an isolated PostgreSQL DB. Full containerisation with Docker Compose CI/CD pipelines.",
      links: {
        live: "https://constell-puce.vercel.app/login",
        demo_user: "SampleUser",
        demo_pass: "Sample@211",
      },
      services: [
        { name: "API Gateway", repo: "https://github.com/Balachandar211/ConsTell_API_Gateway", desc: "Go/Gin reverse-proxy — JWT validation, CORS, Redis-backed rate limiting across 7 services." },
        { name: "Auth Service", repo: "https://github.com/Balachandar211/ConsTell_Auth", desc: "FastAPI — full user lifecycle, stateless JWT auth, Pydantic validation, Aerich migrations." },
        { name: "Profile Service", repo: "https://github.com/Balachandar211/ConsTell_Profile_Service", desc: "Flask/GraphQL — Tortoise ORM, profile picture management, Alembic migrations." },
        { name: "Chat Service", repo: "https://github.com/Balachandar211/ConsTell-Chat-Service", desc: "Go/Gin — WebSockets, Redis Pub/Sub, DEK-based E2E encryption for DMs and group rooms." },
        { name: "Chat DB Service", repo: "https://github.com/Balachandar211/ConsTell_Chat_DB_Service", desc: "PostgreSQL-backed — message persistence, room configs, participant metadata, encryption keys." },
        { name: "Nebula Bot", repo: "https://github.com/Balachandar211/ConsTell-Nebula-Bot", desc: "AI assistant — Llama-3.1-8b-instant via Groq, multi-model fallback chain for resilience." },
        { name: "Message Broker", repo: "https://github.com/Balachandar211/Message_Broker", desc: "RabbitMQ — async email triggers, cleanup routines, message chunking workflows." },
        { name: "Mailer API", repo: "https://github.com/Balachandar211/Mail_Service_API", desc: "Quart async email service — background queues for non-blocking high-throughput delivery." },
        { name: "Frontend", repo: "https://github.com/Balachandar211/ConsTell_Frontend", desc: "React (Vite) — real-time chat, profile management, deep-space design system." },
      ],
    },
    {
      name: "Games-Hub",
      period: "Oct 2025 – Dec 2025",
      stack: ["Python", "Django", "Redis", "PostgreSQL", "Celery", "Docker"],
      description:
        "High-performance gaming platform. 20x latency improvement via Redis caching and optimised PostgreSQL indexing. JWT + RBAC auth, comprehensive activity logging, Celery async workers, OpenAPI v3 documentation.",
      links: {
        live: "https://gameshub-test.onrender.com/api/docs/",
        repo: "https://github.com/Balachandar211/GamesHub",
      },
      services: [],
    },
  ],
  education: {
    degree: "B.E. Electronics and Communication Engineering",
    institution: "St Peter's College of Engineering and Technology",
    period: "Jul 2018 – Jul 2022",
    cgpa: "8.89",
  },
  awards: [
    "Star of The Quarter",
    "Star of The Month",
    "On The Spot Award",
    "On The Spot Team Award",
    "Certificate of Recognition",
  ],
  meta: {
    available_for_hire: true,
    response_time_ms: 142,
    api_version: "v1",
    match_score: "97%",
  },
};

export const SIDEBAR_ENDPOINTS = [
  { method: "GET", path: "/candidate/profile", active: true, collection: "candidate-api" },
  { method: "GET", path: "/candidate/contact", active: false, collection: "candidate-api" },
  { method: "GET", path: "/candidate/skills", active: false, collection: "candidate-api" },
  { method: "GET", path: "/candidate/experience", active: false, collection: "candidate-api" },
  { method: "GET", path: "/candidate/projects", active: false, collection: "candidate-api" },
  { method: "GET", path: "/candidate/education", active: false, collection: "candidate-api" },
  { method: "GET", path: "/candidate/awards", active: false, collection: "candidate-api" },
];

export const DEFAULT_REQUEST_BODY = `{}`;

/* ─── helpers ─── */
function buildResponseJson(path) {
  const { candidate, summary, experience, skills, projects, education, awards, meta } = PORTFOLIO_DATA;
  const baseResponse = { status: "200 OK", meta };

  switch (path) {
    case "/candidate/profile":
      return {
        ...baseResponse,
        data: { candidate, summary, experience, skills, projects, education, awards }
      };
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

function syntaxHighlight(json) {
  return json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      (match) => {
        let cls = "json-number";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "json-key";
          } else {
            cls = "json-string";
            // Make URLs and Emails clickable
            const unquoted = match.slice(1, -1);
            if (unquoted.startsWith("http://") || unquoted.startsWith("https://")) {
              return `<span class="${cls}">"<a href="${unquoted}" target="_blank" rel="noopener noreferrer" class="json-link">${unquoted}</a>"</span>`;
            } else if (unquoted.includes("@") && !unquoted.includes(" ")) {
              return `<span class="${cls}">"<a href="mailto:${unquoted}" class="json-link">${unquoted}</a>"</span>`;
            }
          }
        } else if (/true|false/.test(match)) {
          cls = "json-bool";
        } else if (/null/.test(match)) {
          cls = "json-null";
        }
        return `<span class="${cls}">${match}</span>`;
      }
    );
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
          onClick={() => {
            onSelect(i);
            if (onClose) onClose();
          }}
        >
          <span className={`method-badge method-${ep.method.toLowerCase()}`}>
            {ep.method}
          </span>
          <span className="sidebar-path">{ep.path}</span>
        </div>
      ))}
      <div className="sidebar-section-label" style={{ marginTop: "20px" }}>Environments</div>
      <div className="sidebar-env">
        <span className="env-dot" />
        Production
      </div>
    </aside>
  );
}

function UrlBar({ method, url, loading, onSend, onToggleSidebar }) {
  return (
    <div className="url-bar">
      <button className="mobile-menu-btn" onClick={onToggleSidebar} aria-label="Toggle Menu">
        ☰
      </button>
      <div className="method-pill method-get">{method}</div>
      <div className="url-display">{url}</div>
      <button className="send-btn" onClick={onSend} disabled={loading}>
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

function ResponsePanel({ status, timeMs, responseHtml, loading }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.innerHTML = responseHtml;
    }
  }, [responseHtml]);

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
          <span className="res-tab-btn active">Pretty</span>
          <span className="res-tab-btn">Raw</span>
        </div>
      </div>
      <div className="response-body">
        {loading && (
          <div className="loading-lines">
            <span className="loading-comment">// Connecting to candidate API...</span>
          </div>
        )}
        {!loading && !responseHtml && (
          <span className="idle-hint">// Hit Send to query the candidate API...</span>
        )}
        {!loading && responseHtml && (
          <pre ref={bodyRef} className="response-pre" />
        )}
      </div>
    </div>
  );
}

/* ─── main component ─── */
export default function PortfolioClient() {
  const [activeEndpoint, setActiveEndpoint] = useState(0);
  const [activeTab, setActiveTab] = useState("Params");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [timeMs, setTimeMs] = useState(null);
  const [responseHtml, setResponseHtml] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const typeTimerRef = useRef(null);

  const stopTyping = useCallback(() => {
    if (typeTimerRef.current) clearTimeout(typeTimerRef.current);
  }, []);

  const typewriterEffect = useCallback((fullText, onDone) => {
    const highlighted = syntaxHighlight(fullText);
    let i = 0;
    const chars = fullText.split("");

    function step() {
      i = Math.min(i + 6, chars.length);
      const partial = chars.slice(0, i).join("");
      setResponseHtml(syntaxHighlight(partial) + (i < chars.length ? '<span class="cursor-blink">|</span>' : ""));
      if (i < chars.length) {
        typeTimerRef.current = setTimeout(step, 10);
      } else {
        setResponseHtml(highlighted);
        onDone();
      }
    }
    step();
  }, []);

  const ep = SIDEBAR_ENDPOINTS[activeEndpoint];

  const handleSend = useCallback(() => {
    stopTyping();
    setLoading(true);
    setStatus(null);
    setTimeMs(null);
    setResponseHtml("");

    const start = Date.now();

    // Stage 1 — connecting
    typeTimerRef.current = setTimeout(() => {
      setResponseHtml('<span class="json-comment">// Authenticating request...</span>');
    }, 350);

    // Stage 2 — fetching
    typeTimerRef.current = setTimeout(() => {
      setResponseHtml('<span class="json-comment">// Fetching candidate data...</span>');
    }, 800);

    // Stage 3 — respond
    typeTimerRef.current = setTimeout(() => {
      setLoading(false);
      const elapsed = Date.now() - start;
      setStatus("200 OK");
      setTimeMs(elapsed);
      
      const json = JSON.stringify(buildResponseJson(ep.path), null, 2);
      typewriterEffect(json, () => {});
    }, 1300);
  }, [stopTyping, typewriterEffect, ep.path]);

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
        <span className="titlebar-url">balachandar-portfolio.dev</span>
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
          />

          <RequestTabs activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "Body" ? (
             <div className="empty-tab">
               <span className="empty-tab-hint">GET requests typically do not require a payload body.</span>
             </div>
          ) : activeTab === "Params" ? (
            <div className="empty-tab">
               <span className="empty-tab-hint">Query parameters: None required for this endpoint.</span>
             </div>
          ) : (
            <div className="empty-tab">
              <span className="empty-tab-hint">No {activeTab.toLowerCase()} configured for this request.</span>
            </div>
          )}

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