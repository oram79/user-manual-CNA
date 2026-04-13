// ── Icons ─────────────────────────────────────────────────────────
const BriefcaseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const TargetIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const BarChart2Icon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);
const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const FileTextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
  </svg>
);
const WrenchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const MessageSquareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────
const helpDeskRoles = [
  { icon: <WrenchIcon />, label: 'Technical Support', desc: 'Everything from password resets to hardware failures if technology is involved, we handle it.' },
  { icon: <FileTextIcon />, label: 'Ticket Logging', desc: 'Every interaction gets documented so nothing falls through the cracks.' },
  { icon: <BarChart2Icon />, label: 'Pattern Tracking', desc: 'Spot recurring issues across the client base and surface trends to management.' },
  { icon: <ArrowUpIcon />, label: 'Escalation Routing', desc: 'Route complex or high-impact issues to the right specialist teams quickly and cleanly.' },
];

const professionalismPoints = [
  { icon: <ClockIcon />, label: 'Punctuality & Preparedness', desc: 'Arrive ready. Know your tools, your queue, and the current incident board before your first call.' },
  { icon: <MessageSquareIcon />, label: 'Respectful Communication', desc: 'Professional language in every channel with clients, teammates, and management alike.' },
  { icon: <ShieldIcon />, label: 'Confidentiality', desc: 'Client data stays internal. Never discuss client information outside of sanctioned work channels.' },
  { icon: <CheckCircleIcon />, label: 'Accountability', desc: 'Own mistakes, correct them, and document what happened. Honesty builds credibility faster than perfection.' },
  { icon: <StarIcon />, label: 'Consistent Conduct', desc: 'The same professional standard every shift, every interaction  not just when someone is watching.' },
];

const chapters = [
  { num: '01', title: 'Welcome & Overview', desc: 'Company intro, your role, and expectations' },
  { num: '02', title: 'Client Experience', desc: 'Who our clients are and why service matters' },
  { num: '03', title: 'Communication Skills', desc: 'Phone, email, and active listening techniques' },
  { num: '04', title: 'Ticketing System', desc: 'Ticket creation, priorities, and documentation' },
  { num: '05', title: 'Incident Handling', desc: 'Incident lifecycle, SLAs, and escalation' },
  { num: '06', title: 'Teamwork', desc: 'Knowledge sharing, handovers, and collaboration' },
  { num: '07', title: 'Stress Management', desc: 'Resilience strategies and wellbeing at work' },
];

const iconBadge = {
  flexShrink: 0, width: '28px', height: '28px',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--accent)', marginTop: '1px',
};

// ── Component ─────────────────────────────────────────────────────
export default function Welcome() {
  return (
    <div>

      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 01</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Welcome & Overview</h1>
        <p>An introduction to Jigatech Solutions and your role as a Service Desk Analyst.</p>
        <hr className="page-header-rule" />
      </div>

      <div className="welcome-banner">
        <div className="welcome-banner-tag">New Hire Onboarding</div>
        <h2>Welcome to Jigatech Solutions</h2>
        <p>
          Welcome to the Jigatech Solutions Service Desk team. This manual is designed to help you get up
          to speed with how we work, what we expect, and how you can succeed in your role. Each chapter
          covers a key part of the job from handling tickets and communicating with clients to working
          with your team and managing stress.
        </p>
      </div>

      {/* ── About Jigatech Solutions ── */}
      <div className="section">
        <h2 className="section-title">About Jigatech Solutions</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><BriefcaseIcon />Company Overview</div>
            <p>
              Jigatech Solutions is a managed IT services provider that delivers technical support,
              infrastructure management, and consulting to businesses across multiple industries.
              We operate a centralized service desk that handles all incoming support requests.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><TargetIcon />Our Mission</div>
            <p>
              To provide reliable, responsive, and professional IT support that keeps our clients
              operational. We aim to resolve issues quickly, communicate clearly, and build lasting
              trust with every interaction.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><BarChart2Icon />Company Size & Scope</div>
            <p>
              Jigatech Solutions employs over 120 staff across three office locations. Our service
              desk team supports approximately 2,000 end users daily through phone, email, and
              self-service channels.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><GlobeIcon />Our Client Base</div>
            <p>
              We serve a mix of small-to-medium businesses and enterprise clients in finance,
              healthcare, education, and retail. Each client has unique needs, and we tailor our
              support approach accordingly.
            </p>
          </div>

        </div>
      </div>

      {/* ── The Role of the Help Desk ── */}
      <div className="section">
        <h2 className="section-title">The Role of the Help Desk</h2>
        <p style={{ marginBottom: '24px' }}>
          The service desk is the <strong>first point of contact</strong> for anyone experiencing a
          technical issue, needing system access, or having a question. We are the bridge between
          the client and the rest of IT.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {helpDeskRoles.map(({ icon, label, desc }) => (
            <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={iconBadge}>{icon}</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{label}</div>
                <p style={{ margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Expectations of a Help Desk Analyst ── */}
      <div className="section">
        <h2 className="section-title">Expectations of a Help Desk Analyst</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><ClockIcon />Response Time Standards</div>
            <p>
              Acknowledge all tickets within 15 minutes during business hours. Answer calls within
              three rings. Even if you cannot fix something right away, a quick response shows the
              client their request is being handled.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><FileTextIcon />Documentation Quality</div>
            <p>
              Document every interaction clearly in the ticketing system. Include what the client
              reported, what you did, and the outcome. Avoid vague notes like "fixed issue" be
              specific enough that another analyst can pick up where you left off.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><CheckCircleIcon />First Call Resolution</div>
            <p>
              Aim to resolve issues during the first interaction whenever possible. Not every
              problem can be solved on the spot, but using the knowledge base and building your
              skills will help you get there over time.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><ArrowUpIcon />Escalation Protocol</div>
            <p>
              When an issue is beyond your skill level or access, escalate it promptly. Document
              the ticket before passing it on and let the client know their issue is going to a
              specialist. Escalation is a normal part of the job not a failure.
            </p>
          </div>

        </div>
      </div>

      {/* ── Professionalism & Workplace Conduct ── */}
      <div className="section">
        <h2 className="section-title">Professionalism & Workplace Conduct</h2>
        <p style={{ marginBottom: '24px' }}>
          As a service desk analyst, you represent Jigatech Solutions in every interaction.
          Professionalism is not just about how you dress it is reflected in every message you
          send and every call you take. Here is what that looks like in practice:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {professionalismPoints.map(({ icon, label, desc }) => (
            <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span style={iconBadge}>{icon}</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{label}</div>
                <p style={{ margin: 0 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── What's in This Manual ── */}
      <div className="section">
        <h2 className="section-title">What's in This Manual</h2>
        <p style={{ marginBottom: '20px' }}>
          This manual is your reference throughout onboarding and beyond. Here is a quick look at
          each chapter:
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '10px',
          }}
        >
          {chapters.map(({ num, title, desc }) => (
            <div
              key={num}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderTop: '2px solid var(--accent)',
                borderRadius: 'var(--radius)',
                padding: '16px 18px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  letterSpacing: '0.06em',
                  marginBottom: '6px',
                }}
              >
                Ch. {num}
              </div>
              <div
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '6px',
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </div>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
