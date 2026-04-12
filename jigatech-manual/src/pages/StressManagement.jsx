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

      {/* ── Common Stressors in Help Desk Roles ── */}
      <div className="section">
        <h2 className="section-title">Common Stressors in Help Desk Roles</h2>
        <p>
          High ticket volume, frustrated callers, repetitive tasks, and strict time constraints are all normal parts
          of the help desk environment. Recognizing these stressors for what they are manageable pressures, not
          personal failures is the first step to handling them effectively.
        </p>
      </div>

      {/* ── Managing High Call or Ticket Volumes ── */}
      <div className="section">
        <h2 className="section-title">Managing High Call or Ticket Volumes</h2>
        <p>
          Stay focused on one task at a time, use Ready/Away statuses correctly, and prioritize the highest-impact
          issues first. When the queue feels overwhelming, work through it systematically rather than jumping between
          tickets. Consistency and process will always outperform panic.
        </p>
      </div>

      {/* ── De-escalating Frustrated Clients ── */}
      <div className="section">
        <h2 className="section-title">De-escalating Frustrated Clients</h2>
        <p>
          Practice active listening, use an empathetic tone ("I understand this is a major setback"), and remain
          solution-oriented throughout the interaction. Let the client feel heard before jumping to troubleshooting
          steps. Most frustration dissolves when someone feels acknowledged and taken seriously.
        </p>
      </div>

      {/* ── Time Management Strategies ── */}
      <div className="section">
        <h2 className="section-title">Time Management Strategies</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Prioritization Frameworks</div>
            <p>Use the Eisenhower Matrix to separate urgent tasks from important ones. Not every ticket marked
              "urgent" is critical learning to triage accurately protects your time and energy.</p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Time Blocking</div>
            <p>Dedicate specific hours to ticket follow-ups versus live calls to reduce constant context-switching.
              Structured time reduces decision fatigue and makes your output more consistent.</p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Task Batching</div>
            <p>Group similar administrative tasks like documentation and ticket closures together rather than
              scattering them throughout the day. Batching reduces mental overhead and keeps your workflow efficient.</p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Managing Interruptions</div>
            <p>Direct non-urgent walk-ups to the ticketing portal to protect your focus. Politely redirecting
              in-person requests ensures every issue gets properly tracked and handled.</p>
          </div>

        </div>
      </div>

      {/* ── Burnout Prevention ── */}
      <div className="section">
        <h2 className="section-title">Burnout Prevention</h2>
        <p>
          Set clear boundaries between work and home, take scheduled breaks, stay hydrated, and avoid carrying the
          stress of unresolved tickets into your personal time. Burnout is gradual small daily habits are what keep
          it at bay. If you notice a consistent drop in motivation or patience, take it seriously and address it early.
        </p>
      </div>

      {/* ── When & How to Seek Support ── */}
      <div className="section">
        <h2 className="section-title">When & How to Seek Support</h2>
        <p>
          Contact a supervisor if the workload becomes unmanageable or if you experience a particularly difficult
          interaction with a client. You are not expected to absorb unlimited pressure alone. Raising concerns early
          allows the team to redistribute load and offer support before things reach a breaking point.
        </p>
      </div>
    </div>
  );
}