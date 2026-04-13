// ── Inline SVG Icons ─────────────────────────────────────────────
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81a19.79 19.79 0 0 1-3.07-8.72A2 2 0 0 1 2 .9h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.09 8.91a16 16 0 0 0 6.72 6.72l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const BookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const BarChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10"/>
    <line x1="18" y1="20" x2="18" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
);

const FileTextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <polyline points="10 9 9 9 8 9"/>
  </svg>
);

// ── Priority level data ───────────────────────────────────────────
const priorities = [
  {
    code: 'P1',
    label: 'Critical',
    desc: 'Entire office or a critical service is completely down.',
    color: '#e74c3c',
    colorBg: 'rgba(231,76,60,0.08)',
    colorBorder: 'rgba(231,76,60,0.22)',
  },
  {
    code: 'P2',
    label: 'High',
    desc: 'An executive or key user is unable to work.',
    color: '#e05a1a',
    colorBg: 'rgba(224,90,26,0.08)',
    colorBorder: 'rgba(224,90,26,0.22)',
  },
  {
    code: 'P3',
    label: 'Medium',
    desc: 'Standard issue; work can continue around it.',
    color: '#f59e42',
    colorBg: 'rgba(245,158,66,0.08)',
    colorBorder: 'rgba(245,158,66,0.22)',
  },
  {
    code: 'P4',
    label: 'Low',
    desc: 'General inquiry or a non-urgent request.',
    color: '#2ecc71',
    colorBg: 'rgba(46,204,113,0.08)',
    colorBorder: 'rgba(46,204,113,0.22)',
  },
];

// ── Required field checklist ──────────────────────────────────────
const requiredFields = [
  "Client's full name",
  'Contact information (phone, email, or extension)',
  'Descriptive subject line',
  'Priority level',
  'Detailed description of the issue',
  'Date and time the issue was reported',
  'Any troubleshooting steps already taken',
];

// ── Ticket mock fields ────────────────────────────────────────────
const mockTicketFields = [
  ['Client', 'Sarah Johnson'],
  ['Contact', 'ext. 204  ·  sarah@company.com'],
  ['Subject', 'Outlook not syncing on desktop'],
  ['Priority', 'P3 — Medium'],
  ['Reported', 'Apr 12, 2026  ·  10:42 AM'],
  ['Category', 'Software / Email'],
];

// ── Component ─────────────────────────────────────────────────────
export default function TicketingSystem() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 04</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Ticketing System & Documentation</h1>
        <p>Accurate ticketing and documentation are critical to a high-functioning service desk.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Purpose of the Ticketing System ── */}
      <div className="section">
        <h2 className="section-title">Purpose of the Ticketing System</h2>
        <p>
          The ticketing system is the <strong>system of record</strong> for all IT support
          activities. It ensures no issue is forgotten, tracks technician productivity, and
          builds a history of fixes that can be referenced for future problems.
        </p>
      </div>

      {/* ── How Tickets Are Created ── */}
      <div className="section">
        <h2 className="section-title">How Tickets Are Created</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label">
              <PhoneIcon />
              Via Phone
            </div>
            <p>
              When a client calls in, create a ticket during or immediately after the call.
              Capture the client's name, contact info, and a clear description of the issue
              while the details are fresh.
            </p>
          </div>

          <div className="card">
            <div className="card-label">
              <MailIcon />
              Via Email
            </div>
            <p>
              Emails sent to the support inbox automatically generate a ticket. The assigned
              analyst should review it, update the category and priority, and respond to the
              client promptly.
            </p>
          </div>

          <div className="card">
            <div className="card-label">
              <GlobeIcon />
              Via Self-Service Portal
            </div>
            <p>
              Clients can submit tickets through the online portal with their description
              already filled in. Review the details, follow up if anything is unclear, and
              begin working the issue.
            </p>
          </div>

        </div>
      </div>

      {/* ── Required Information in Every Ticket ── */}
      <div className="section">
        <h2 className="section-title">Required Information in Every Ticket</h2>

        <div className="subsection">
          <div className="subsection-title">Mandatory Fields</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {requiredFields.map((field) => (
              <div
                key={field}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'var(--accent-light)',
                    border: '1px solid var(--accent-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <CheckIcon />
                </span>
                {field}
              </div>
            ))}
          </div>
        </div>

        {/* Mock Ticket Visual */}
        <div className="subsection" style={{ marginTop: '28px' }}>
          <div className="subsection-title">Example Ticket — Filled In</div>
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderTop: '2px solid var(--accent)',
              borderRadius: 'var(--radius)',
              padding: '22px 24px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Ticket header row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '18px',
                paddingBottom: '14px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ color: 'var(--accent)' }}><FileTextIcon /></span>
              <span
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '9.5px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1.2px',
                  color: 'var(--text-subtle)',
                }}
              >
                Ticket #1042
              </span>
            </div>

            {/* Field grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px 28px',
                marginBottom: '18px',
              }}
            >
              {mockTicketFields.map(([label, value]) => (
                <div key={label}>
                  <div
                    style={{
                      fontFamily: "'Fira Code', monospace",
                      fontSize: '9px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: 'var(--text-subtle)',
                      marginBottom: '4px',
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Description row */}
            <div style={{ paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
              <div
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '9px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  color: 'var(--text-subtle)',
                  marginBottom: '6px',
                }}
              >
                Description & Steps Taken
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Client reported Outlook was not syncing new emails on her Windows 11 desktop (Outlook 365).
                Restarted Outlook no change. Cleared local cache and reconnected account. Emails now
                syncing normally. Client confirmed issue resolved at 11:04 AM.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Ticket Prioritization & Categorization ── */}
      <div className="section">
        <h2 className="section-title">Ticket Prioritization & Categorization</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}
        >
          {priorities.map((p) => (
            <div
              key={p.code}
              style={{
                background: p.colorBg,
                border: `1px solid ${p.colorBorder}`,
                borderLeft: `3px solid ${p.color}`,
                borderRadius: 'var(--radius)',
                padding: '18px 20px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '6px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '11px',
                    fontWeight: 700,
                    color: p.color,
                    letterSpacing: '0.04em',
                  }}
                >
                  {p.code}
                </span>
                <span
                  style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.label}
                </span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Importance of Accurate Documentation ── */}
      <div className="section">
        <h2 className="section-title">Importance of Accurate Documentation</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span
              style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginTop: '1px',
              }}
            >
              <UsersIcon />
            </span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Consistency</div>
              <p style={{ margin: 0 }}>Any technician can pick up where another left off without asking the client to repeat themselves.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span
              style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginTop: '1px',
              }}
            >
              <BookIcon />
            </span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Knowledge Base</div>
              <p style={{ margin: 0 }}>Past tickets become a searchable reference for diagnosing future problems quickly.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span
              style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginTop: '1px',
              }}
            >
              <ShieldIcon />
            </span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Legal / Compliance</div>
              <p style={{ margin: 0 }}>Detailed records provide a paper trail for security audits, billing disputes, and compliance reviews.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span
              style={{
                flexShrink: 0,
                width: '28px',
                height: '28px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--accent-light)',
                border: '1px solid var(--accent-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                marginTop: '1px',
              }}
            >
              <BarChartIcon />
            </span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>Data-Driven Decisions</div>
              <p style={{ margin: 0 }}>Ticket trends help management identify which equipment fails most often and where to invest resources.</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Ticket Documentation Examples ── */}
      <div className="section">
        <h2 className="section-title">Ticket Documentation Examples</h2>
        <div className="example-block negative">
          <div className="example-label negative">
            <span className="example-label-indicator" />
            Poorly Documented Ticket
          </div>
          <p>
            "User called. Email not working. Fixed it." This tells the next person nothing.
            What was the actual problem? What was done to fix it? What email client? This kind of
            entry creates confusion and wastes time if the issue comes back.
          </p>
        </div>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Well-Documented Ticket
          </div>
          <p>
            "Client Sarah Johnson (ext. 204) reported Outlook was not syncing new emails on her
            desktop. Confirmed Outlook version 365, Windows 11. Restarted Outlook no change.
            Cleared the local cache and reconnected her account. Emails began syncing normally.
            Client confirmed the issue was resolved."
          </p>
        </div>
      </div>
    </div>
  );
}
