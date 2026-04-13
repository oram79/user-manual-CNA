// ── Icons ─────────────────────────────────────────────────────────
const ZapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const RepeatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const LayersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);
const BellOffIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    <path d="M18.63 13A17.89 17.89 0 0 1 18 8"/>
    <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"/>
    <path d="M18 8a6 6 0 0 0-9.33-5"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);
const HeartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
  </svg>
);
const CoffeeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
    <line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const AlertCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const BarChart2Icon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────
const stressors = [
  { icon: <ZapIcon />, label: 'High Ticket Volume', desc: 'A surge in open tickets can make every individual request feel urgent, even when it is not.' },
  { icon: <UsersIcon />, label: 'Frustrated Callers', desc: 'Absorbing a client\'s frustration call after call takes a real emotional toll over time.' },
  { icon: <RepeatIcon />, label: 'Repetitive Tasks', desc: 'Handling the same issues repeatedly without variety can drain motivation and focus.' },
  { icon: <ClockIcon />, label: 'Strict Time Constraints', desc: 'SLA deadlines create a constant low-level pressure that accumulates throughout the day.' },
];

const volumeTips = [
  { icon: <BarChart2Icon />, label: 'Triage, Don\'t Panic', desc: 'Work through the queue systematically by priority. Consistency and process always outperform rushing.' },
  { icon: <CheckCircleIcon />, label: 'Use Ready / Away Statuses Correctly', desc: 'When you are actively on a call or deep in a ticket, set your status so the queue routes accurately.' },
  { icon: <LayersIcon />, label: 'One Thing at a Time', desc: 'Multitasking on tickets leads to errors. Close one before opening the next whenever possible.' },
];

const deescalationSteps = [
  { num: '01', title: 'Let Them Vent First', body: 'Do not jump to fixes immediately. Give the client a moment to express the frustration interrupting escalates rather than calms.' },
  { num: '02', title: 'Acknowledge the Impact', body: '"I completely understand how disruptive this is" signals that you take them seriously. Validation dissolves most frustration within seconds.' },
  { num: '03', title: 'Shift to Solutions', body: 'Once acknowledged, pivot: "Here is what I am going to do right now." A clear, confident plan reassures the client they are in good hands.' },
  { num: '04', title: 'Give a Realistic Timeline', body: 'Never promise what you cannot deliver. A specific, honest estimate ("I can have this resolved by 3 PM") beats vague reassurance every time.' },
  { num: '05', title: 'Follow Through', body: 'Call or update the client when you said you would even if there is no new progress. Silence breeds more frustration than a brief "still working on it."' },
];

const burnoutSigns = [
  { icon: <HeartIcon />, label: 'Set Work / Home Boundaries', desc: 'When your shift ends, step away from the queue. Unresolved tickets will still be there your mental energy will not replenish itself automatically.' },
  { icon: <CoffeeIcon />, label: 'Take Scheduled Breaks', desc: 'Short breaks between calls or ticket blocks restore focus. Skipping them saves minutes and costs hours of degraded performance later.' },
  { icon: <ShieldIcon />, label: 'Protect Your Energy', desc: 'Stay hydrated, get sleep, and avoid carrying work stress into personal time. Physical wellbeing directly affects professional resilience.' },
  { icon: <AlertCircleIcon />, label: 'Spot the Early Signs', desc: 'A consistent drop in motivation or patience is a signal not a weakness. Address it early by talking to your supervisor before it compounds.' },
];

const iconBadge = {
  flexShrink: 0, width: '28px', height: '28px',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--accent)', marginTop: '1px',
};

// ── Component ─────────────────────────────────────────────────────
export default function StressManagement() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 07</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Stress Management & Professional Resilience</h1>
        <p>Sustaining your wellbeing is just as important as sustaining your clients.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Common Stressors ── */}
      <div className="section">
        <h2 className="section-title">Common Stressors in Help Desk Roles</h2>
        <p style={{ marginBottom: '24px' }}>
          Recognizing these stressors for what they are <strong>manageable pressures, not personal failures</strong> is
          the first step to handling them effectively.
        </p>
        <div className="card-grid">
          {stressors.map(({ icon, label, desc }) => (
            <div key={label} className="card">
              <div className="card-label">{icon}{label}</div>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Managing High Call or Ticket Volumes ── */}
      <div className="section">
        <h2 className="section-title">Managing High Call or Ticket Volumes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {volumeTips.map(({ icon, label, desc }) => (
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

      {/* ── De-escalating Frustrated Clients ── */}
      <div className="section">
        <h2 className="section-title">De-escalating Frustrated Clients</h2>
        <p style={{ marginBottom: '20px' }}>
          Most frustration dissolves when someone feels acknowledged and taken seriously.
          Work through these steps in order:
        </p>
        <div className="steps">
          {deescalationSteps.map(({ num, title, body }) => (
            <div key={num} className="step">
              <div className="step-index">{num}</div>
              <div className="step-body">
                <div className="step-title">{title}</div>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Time Management Strategies ── */}
      <div className="section">
        <h2 className="section-title">Time Management Strategies</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><BarChart2Icon />Prioritization Frameworks</div>
            <p>Use the Eisenhower Matrix to separate urgent tasks from important ones. Not every ticket
              marked "urgent" is critical learning to triage accurately protects your time and energy.</p>
          </div>

          <div className="card">
            <div className="card-label"><CalendarIcon />Time Blocking</div>
            <p>Dedicate specific hours to ticket follow-ups versus live calls to reduce constant
              context-switching. Structured time reduces decision fatigue and keeps your output consistent.</p>
          </div>

          <div className="card">
            <div className="card-label"><LayersIcon />Task Batching</div>
            <p>Group similar administrative tasks like documentation and ticket closures together rather
              than scattering them throughout the day. Batching reduces mental overhead.</p>
          </div>

          <div className="card">
            <div className="card-label"><BellOffIcon />Managing Interruptions</div>
            <p>Direct non-urgent walk-ups to the ticketing portal to protect your focus. Politely
              redirecting in-person requests ensures every issue gets properly tracked and handled.</p>
          </div>

        </div>
      </div>

      {/* ── Burnout Prevention ── */}
      <div className="section">
        <h2 className="section-title">Burnout Prevention</h2>
        <p style={{ marginBottom: '24px' }}>
          Burnout is gradual small daily habits are what keep it at bay. Here is a practical toolkit
          for staying resilient over time:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {burnoutSigns.map(({ icon, label, desc }) => (
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

      {/* ── When & How to Seek Support ── */}
      <div className="section">
        <h2 className="section-title">When & How to Seek Support</h2>
        <p style={{ marginBottom: '20px' }}>
          You are not expected to absorb unlimited pressure alone. Raising concerns early allows
          the team to redistribute load and offer support before things reach a breaking point.
        </p>

        <div
          style={{
            background: 'var(--accent-light)',
            border: '1px solid var(--accent-border)',
            borderRadius: 'var(--radius)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '9.5px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--accent)' }}>
            Reach Out When...
          </div>
          {[
            'The workload has become consistently unmanageable across multiple shifts',
            'A client interaction was particularly aggressive or distressing',
            'You notice a persistent drop in your own motivation or patience',
            'You are regularly working through breaks or staying late to keep up',
          ].map((item) => (
            <div
              key={item}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '10px',
                fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.55,
              }}
            >
              <span
                style={{
                  flexShrink: 0, width: '18px', height: '18px', borderRadius: '50%',
                  background: 'var(--accent)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  marginTop: '2px',
                }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
