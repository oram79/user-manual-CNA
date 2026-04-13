import slaImage from '../images/SLAAgreement.jpeg';

// ── Icons ─────────────────────────────────────────────────────────
const AlertTriangleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);
const ClipboardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
    <line x1="9" y1="12" x2="15" y2="12"/>
    <line x1="9" y1="16" x2="15" y2="16"/>
  </svg>
);
const ArrowUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
  </svg>
);
const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
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

// ── Data ──────────────────────────────────────────────────────────
const escalationTriggers = [
  { icon: <AlertTriangleIcon />, label: 'P1 / Total Outage', desc: 'Any incident where an entire office, server, or critical service is completely unavailable.' },
  { icon: <UsersIcon />, label: 'Multiple Users Affected', desc: 'If more than three users report the same issue, treat it as a potential widespread incident and escalate immediately.' },
  { icon: <ClockIcon />, label: 'SLA Threshold Approaching', desc: 'If a ticket is approaching its SLA deadline without a resolution in sight, escalate before it breaches not after.' },
  { icon: <ShieldIcon />, label: 'Requires Elevated Permissions', desc: 'Any fix that needs admin access, firewall changes, or server-level work beyond your current access level.' },
  { icon: <FileTextIcon />, label: 'Standard Fixes Have Failed', desc: 'If you have exhausted all documented solutions and the issue persists after 30 minutes, loop in a senior analyst.' },
];

const handoffChecklist = [
  'Ticket is logged with a clear description of the issue',
  'All troubleshooting steps already taken are documented',
  'Current ticket status is up to date',
  'Client has been notified that their case is being escalated',
  'Receiving analyst or team has been briefed verbally or via internal note',
];

const iconBadge = {
  flexShrink: 0, width: '28px', height: '28px',
  borderRadius: 'var(--radius-sm)',
  background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--accent)', marginTop: '1px',
};

// ── Component ─────────────────────────────────────────────────────
export default function IncidentHandling() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 05</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Incident & Request Handling</h1>
        <p>Understand the full lifecycle of an incident and how to manage service requests efficiently.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Incidents vs. Service Requests ── */}
      <div className="section">
        <h2 className="section-title">Incidents vs. Service Requests</h2>
        <div className="two-col">
          <div className="card">
            <div className="card-label"><AlertTriangleIcon />Definition</div>
            <div className="card-title">Incident</div>
            <p>
              An incident is an <strong>unplanned disruption</strong> to a service or a reduction in quality.
              Examples include a server going down, a user losing network access, or software crashing
              unexpectedly. Incidents need to be resolved as quickly as possible to restore normal operations.
            </p>
          </div>
          <div className="card">
            <div className="card-label"><ClipboardIcon />Definition</div>
            <div className="card-title">Service Request</div>
            <p>
              A service request is a <strong>planned ask</strong> from a user things like setting up a new
              account, installing software, or requesting access to a shared drive. These follow a standard
              process and are usually lower urgency than incidents.
            </p>
          </div>
        </div>
      </div>

      {/* ── Incident Handling Workflow ── */}
      <div className="section">
        <h2 className="section-title">Incident Handling Workflow</h2>
        <div className="steps">

          <div className="step">
            <div className="step-index">01</div>
            <div className="step-body">
              <div className="step-title">Identify & Log</div>
              <p>
                Confirm the issue and create a ticket immediately. Record what the user reported, when
                it started, and who is affected. The sooner it is logged, the sooner it can be tracked and worked on.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">02</div>
            <div className="step-body">
              <div className="step-title">Categorize & Prioritize</div>
              <p>
                Assign the correct category (hardware, software, network, etc.) and set the priority based on
                urgency and impact. A company-wide email outage ranks higher than a single user's printer jam.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">03</div>
            <div className="step-body">
              <div className="step-title">Investigate & Diagnose</div>
              <p>
                Gather more information, check the knowledge base for known fixes, and begin troubleshooting.
                Ask targeted questions and document what you try along the way.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">04</div>
            <div className="step-body">
              <div className="step-title">Resolve & Recover</div>
              <p>
                Apply the fix and confirm the service is restored. Test with the client to make sure things
                are working as expected before considering the issue resolved.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">05</div>
            <div className="step-body">
              <div className="step-title">Close & Document</div>
              <p>
                Update the ticket with a clear summary of what caused the issue, what was done to fix it, and
                any follow-up needed. Then close the ticket. Good closure notes help with future troubleshooting.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Escalation Procedures ── */}
      <div className="section">
        <h2 className="section-title">Escalation Procedures</h2>
        <p style={{ marginBottom: '24px' }}>
          Escalation means moving a ticket to Tier 2 or Tier 3 when the solution requires specialized
          skills, elevated permissions, or when the SLA is at risk. Escalating at the right time is a
          sign of good judgment not a failure. Know when to hand off.
        </p>

        <div className="subsection">
          <div className="subsection-title">When to Escalate</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {escalationTriggers.map(({ icon, label, desc }) => (
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
      </div>

      {/* ── When & How to Involve Senior Staff ── */}
      <div className="section">
        <h2 className="section-title">When & How to Involve Senior Staff</h2>

        <div className="subsection">
          <div className="subsection-title">Escalation Handoff Checklist</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {handoffChecklist.map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%',
                    background: 'var(--accent-light)', border: '1px solid var(--accent-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <CheckIcon />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: '20px',
            background: 'var(--accent-light)',
            border: '1px solid var(--accent-border)',
            borderRadius: 'var(--radius)',
            padding: '16px 20px',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px' }}><ArrowUpIcon /></span>
          <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--text)' }}>Remember:</strong> Escalate <em>before</em> an SLA breaches not after. A proactive handoff is always better than an emergency one.
          </p>
        </div>
      </div>

      {/* ── Introduction to SLAs ── */}
      <div className="section">
        <h2 className="section-title">Introduction to SLAs</h2>
        <div className="subsection">
          <div className="subsection-title">What is a Service Level Agreement?</div>
          <p>
            A Service Level Agreement (SLA) is a contract defining the expected response and resolution
            times for IT support. SLAs set the standard for how quickly we must acknowledge and resolve
            tickets based on their priority level.
          </p>
        </div>
        <div className="subsection">
          <div className="subsection-title">Sample SLA Reference Table</div>
          <img
            src={slaImage}
            alt="SLA Reference Table"
            style={{
              maxWidth: '50%',
              display: 'block',
              borderRadius: '8px',
              filter: 'brightness(0.75) contrast(0.9)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
