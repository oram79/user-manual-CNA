// ── Icons ─────────────────────────────────────────────────────────
const BuildingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);
const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const TrendingUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const MessageSquareIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────
const expectationTips = [
  { icon: <MessageSquareIcon />, label: 'Be upfront about timelines', desc: 'If a fix will take time, say so. Clients prefer an honest estimate over silence.' },
  { icon: <CalendarIcon />, label: 'Set realistic deadlines', desc: 'Only commit to timelines you can actually meet. Overpromising creates more frustration than the original issue.' },
  { icon: <CheckIcon />, label: 'Follow through on commitments', desc: 'If you say you will call back in an hour, do it. Broken follow-ups erode trust quickly.' },
  { icon: <ClockIcon />, label: 'Proactively update clients', desc: 'If the timeline changes, tell the client before they have to ask. A brief update message goes a long way.' },
];

const iconBadge = {
  flexShrink: 0, width: '28px', height: '28px',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--accent)', marginTop: '1px',
};

// ── Component ─────────────────────────────────────────────────────
export default function ClientExperience() {
  return (
    <div>

      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 02</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Understanding the Client Experience</h1>
        <p>Learn who our clients are, why their experience matters, and how to consistently deliver great service.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Who Are Our Clients? ── */}
      <div className="section">
        <h2 className="section-title">Who Are Our Clients?</h2>
        <div className="two-col">

          <div className="card">
            <div className="card-label"><BuildingIcon />Internal Users</div>
            <div className="card-title">Company Employees</div>
            <p>
              Staff within the organizations we support people in accounting, HR, sales, and
              operations who rely on technology to do their jobs. They contact the service desk
              when something is not working or when they need access to a system or tool.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><UserIcon />External Users</div>
            <div className="card-title">Outside Clients</div>
            <p>
              Customers or partners outside the organization who interact with client-facing systems.
              They may experience login issues, application errors, or need guided support. External
              clients often have less technical knowledge, so patience and clear communication are
              especially important.
            </p>
          </div>

        </div>
      </div>

      {/* ── Why Client Service Matters in IT ── */}
      <div className="section">
        <h2 className="section-title">Why Client Service Matters in IT</h2>
        <p style={{ marginBottom: '24px' }}>
          IT support is not just about fixing computers it is about <strong>keeping people productive</strong>.
          When a client contacts the service desk, they are usually stuck and need help to continue their work.
          How you handle that interaction directly affects their view of the entire IT department.
        </p>

        {/* Impact callout row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}
        >
          {[
            { icon: <TrendingUpIcon />, stat: 'Builds Trust', desc: 'Consistent, professional support creates long-term confidence in the IT team.' },
            { icon: <MessageSquareIcon />, stat: 'Reduces Repeat Contacts', desc: 'Clients who feel heard are less likely to call back with the same frustration.' },
            { icon: <StarIcon />, stat: 'Shapes Perception', desc: 'One great interaction can change how an entire department views IT support.' },
          ].map(({ icon, stat, desc }) => (
            <div
              key={stat}
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
              <div style={{ fontFamily: "'Sora', sans-serif", fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '6px' }}>{stat}</div>
              <p style={{ margin: 0, fontSize: '12.5px', color: 'var(--text-muted)', lineHeight: 1.55 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Managing Client Expectations ── */}
      <div className="section">
        <h2 className="section-title">Managing Client Expectations</h2>
        <p style={{ marginBottom: '24px' }}>
          Setting the right expectations from the start prevents frustration later. Here is how to do it consistently:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {expectationTips.map(({ icon, label, desc }) => (
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

      {/* ── Perception vs. Satisfaction ── */}
      <div className="section">
        <h2 className="section-title">Perception vs. Satisfaction</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent)' }}><EyeIcon /></span>
              Client Perception
            </div>
            <p>
              Perception is how the client <em>feels</em> about the support they received, regardless of the
              technical outcome. A client whose issue took two days to resolve but was kept informed the entire
              time will likely have a better perception than one whose issue was fixed in an hour but heard
              nothing until it was done. Tone, communication, and follow-up all shape perception.
            </p>
          </div>
          <div className="subsection">
            <div className="subsection-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent)' }}><StarIcon /></span>
              Client Satisfaction
            </div>
            <p>
              Satisfaction is tied to whether the client's problem was actually resolved and how smoothly
              the process went. A satisfied client got their issue fixed within a reasonable timeframe, felt
              heard, and did not have to repeat themselves. Aim for both solve the problem <em>and</em> make
              the experience a good one.
            </p>
          </div>
        </div>
      </div>

      {/* ── Interaction Examples ── */}
      <div className="section">
        <h2 className="section-title">Interaction Examples</h2>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Positive Interaction
          </div>
          <p>
            A client calls in saying their email is not syncing on their phone. The analyst greets them warmly,
            confirms the device and email client, walks them through re-adding the account, and verifies it is
            working before ending the call. The analyst logs the interaction with clear notes. The client leaves
            feeling helped and confident.
          </p>
        </div>
        <div className="example-block negative">
          <div className="example-label negative">
            <span className="example-label-indicator" />
            Negative Interaction
          </div>
          <p>
            A client submits a ticket about slow internet. Three days pass with no response. When they call to
            follow up, the analyst says "I don't see a ticket for that" and asks them to explain the issue again
            from scratch. The client feels ignored and frustrated, and their trust in the service desk drops.
          </p>
        </div>
      </div>

    </div>
  );
}
