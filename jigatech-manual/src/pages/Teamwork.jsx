// ── Icons ─────────────────────────────────────────────────────────
const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const Share2Icon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);
const HelpCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const MessageSquareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const ClipboardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="15" y2="16"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const BookOpenIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const FileTextIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────
const knowledgeTips = [
  { icon: <Share2Icon />, label: 'Flag Emerging Issues Early', desc: 'If you spot a pattern multiple users with the same problem post in the team channel immediately. Early warnings prevent queue pile-ups.' },
  { icon: <BookOpenIcon />, label: 'Log Unusual Fixes', desc: 'When you solve something that was not in the knowledge base, write it up. One entry saves the next person 30 minutes of searching.' },
  { icon: <MessageSquareIcon />, label: 'Keep Internal Chats Brief & Factual', desc: 'Internal messages should be specific: ticket number, the issue, what you need. No one wants to read paragraphs when the queue is busy.' },
];

const askForHelpSteps = [
  { num: '01', title: 'Exhaust Documented Fixes', body: 'Before asking, check the knowledge base and ticket history for similar issues. You should be able to say what you already tried.' },
  { num: '02', title: '30 Minutes Without Progress', body: 'If a ticket has stalled for 30 minutes without meaningful movement, it is time to loop someone in. Holding on longer wastes time and risks SLA breach.' },
  { num: '03', title: 'Prepare a Clear Handoff', body: 'Come with the ticket number, a one-line problem summary, and the steps you already took. Respecting your colleague\'s time speeds up resolution for everyone.' },
  { num: '04', title: 'Loop In — Don\'t Disappear', body: 'Stay involved even after asking for help. You may have context that the senior analyst needs, and following along builds your own skills.' },
];

const commDoDonts = [
  { do: 'Use specific ticket numbers and facts in internal notes', dont: 'Vent frustration about a client in ticket comments or chat' },
  { do: 'Stay calm and solution-focused during high-stress outages', dont: 'Assign blame or criticize decisions in real time' },
  { do: 'Acknowledge teammates\' updates so they know you saw them', dont: 'Leave messages on read during active incidents' },
];

const hotListFields = [
  ['Ticket #', '#2041'],
  ['Client', 'Apex Finance — Laura Chen'],
  ['Issue', 'VPN connection dropping every 20 min'],
  ['Priority', 'P2 — High'],
  ['Status', 'Escalated to Network Team'],
  ['Last Update', '3:15 PM — awaiting callback'],
];

const iconBadge = {
  flexShrink: 0, width: '28px', height: '28px',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--accent)', marginTop: '1px',
};

// ── Component ─────────────────────────────────────────────────────
export default function Teamwork() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 06</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Teamwork & Internal Communication</h1>
        <p>A cohesive, communicative team is the backbone of a well-run service desk.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Why Teamwork Matters ── */}
      <div className="section">
        <h2 className="section-title">Why Teamwork Matters on a Service Desk</h2>
        <p style={{ marginBottom: '24px' }}>
          High-pressure environments require shared knowledge and mutual support to prevent individual
          burnout and service delays. No technician has every answer leaning on teammates is a sign
          of good judgment, not weakness. When the team functions well together, clients feel the difference.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}
        >
          {[
            { icon: <UsersIcon />, title: 'Shared Load', desc: 'Distributed knowledge means no single person becomes the bottleneck.' },
            { icon: <ClockIcon />, title: 'Faster Resolution', desc: 'Two perspectives on a stuck ticket often unlock the answer in minutes.' },
            { icon: <BookOpenIcon />, title: 'Continuous Learning', desc: 'Watching teammates work builds your own skills without any extra training.' },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '18px 20px',
                boxShadow: 'var(--shadow-sm)',
                textAlign: 'center',
              }}
            >
              <div style={{ color: 'var(--accent)', marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{icon}</div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>{title}</div>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.55 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Knowledge Sharing & Collaboration ── */}
      <div className="section">
        <h2 className="section-title">Knowledge Sharing & Collaboration</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {knowledgeTips.map(({ icon, label, desc }) => (
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

      {/* ── When to Ask for Help ── */}
      <div className="section">
        <h2 className="section-title">When to Ask for Help</h2>
        <p style={{ marginBottom: '20px' }}>
          Escalating or asking for a second opinion is always the right call over stalling.
          Here is a simple framework for when and how to do it:
        </p>
        <div className="steps">
          {askForHelpSteps.map(({ num, title, body }) => (
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

      {/* ── Communicating with Teammates Respectfully ── */}
      <div className="section">
        <h2 className="section-title">Communicating with Teammates Respectfully</h2>
        <p style={{ marginBottom: '20px' }}>
          A calm, respectful team dynamic leads to faster resolutions and a healthier work environment.
          Here is what that looks like in practice:
        </p>

        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            overflow: 'hidden',
            background: 'var(--card-bg)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', background: 'var(--placeholder-bg)', borderBottom: '1px solid var(--border)' }}>
            {[
              { icon: <CheckIcon />, label: 'Do', color: 'var(--positive)' },
              { icon: <XIcon />, label: "Don't", color: 'var(--negative)' },
            ].map(({ icon, label, color }) => (
              <div
                key={label}
                style={{
                  padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '7px',
                  fontFamily: "'Fira Code', monospace", fontSize: '9.5px', fontWeight: 600,
                  textTransform: 'uppercase', letterSpacing: '1px', color,
                  borderRight: label === 'Do' ? '1px solid var(--border)' : 'none',
                }}
              >
                {icon} {label}
              </div>
            ))}
          </div>

          {/* Rows */}
          {commDoDonts.map(({ do: doItem, dont }, i) => (
            <div
              key={i}
              style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                borderBottom: i < commDoDonts.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <div style={{ padding: '14px 18px', fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.55, borderRight: '1px solid var(--border)', background: 'rgba(46,204,113,0.03)' }}>
                {doItem}
              </div>
              <div style={{ padding: '14px 18px', fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.55, background: 'rgba(231,76,60,0.03)' }}>
                {dont}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Shift Handovers & Continuity ── */}
      <div className="section">
        <h2 className="section-title">Shift Handovers & Continuity</h2>
        <div className="two-col" style={{ marginBottom: '24px' }}>
          <div className="subsection">
            <div className="subsection-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent)' }}><ClipboardIcon /></span>
              Handover Best Practices
            </div>
            <p>
              Provide a "Hot List" of active high-priority tickets to the next shift. Include the ticket
              number, current status, and what has already been tried so nothing gets repeated unnecessarily.
            </p>
          </div>
          <div className="subsection">
            <div className="subsection-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent)' }}><FileTextIcon /></span>
              Maintaining Continuity
            </div>
            <p>
              Ensure all active tickets have an updated status note so the next person knows exactly where
              you left off. Even a brief comment like "waiting on user callback" avoids confusion and keeps
              momentum going.
            </p>
          </div>
        </div>

        {/* Hot List mock visual */}
        <div className="subsection">
          <div className="subsection-title">Example Hot List Entry</div>
          <div
            style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              borderTop: '2px solid var(--accent)',
              borderRadius: 'var(--radius)',
              padding: '20px 24px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid var(--border)',
              }}
            >
              <span style={{ color: 'var(--accent)' }}><ClipboardIcon /></span>
              <span style={{ fontFamily: "'Fira Code', monospace", fontSize: '9.5px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1.2px', color: 'var(--text-subtle)' }}>
                Hot List · End-of-Shift Handover
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 28px' }}>
              {hotListFields.map(([label, value]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Fira Code', monospace", fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--text-subtle)', marginBottom: '4px' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.4 }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
