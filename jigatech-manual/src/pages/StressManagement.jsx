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
        <p>High ticket volume, angry callers, repetitivie and strict time contraints </p>
      </div>

      {/* ── Managing High Call or Ticket Volumes ── */}
      <div className="section">
        <h2 className="section-title">Managing High Call or Ticket Volumes</h2>
        <p>
          Stay focused on one task at a time , use "Ready/Away" statuses correctly, and
          prioritize the highest impact issues first.
        </p>
      </div>

      {/* ── De-escalating Frustrated Clients ── */}
      <div className="section">
        <h2 className="section-title">De-escalating Frustrated Clients</h2>
        <p>Practice active listening, use and empathetic tone ("I undetstand this is. major stepback")
          and remain solution-oritented.
        </p>
      </div>

      {/* ── Time Management Strategies ── */}
      <div className="section">
        <h2 className="section-title">Time Management Strategies</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Prioritization Frameworks</div>
            <p>Using the Eisenhower Matrix to seperate urgent tasks from important ones</p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Time Blocking</div>
            <p>Dedicatin specific hours to ticket follow-ups versus live calls</p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Task Batching</div>
            <p>Grouping similar adminastrative tasks (like documentation) together</p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Managing Interruptions</div>
            <p>Directing non-urgent walk-ups to the ticketing portal</p>
          </div>

        </div>
      </div>

      {/* ── Burnout Prevention ── */}
      <div className="section">
        <h2 className="section-title">Burnout Prevention</h2>
        <p>Setting clear boundaries between work and home, talking schedulhed breaks, and staying hydrated </p>
      </div>

      {/* ── When & How to Seek Support ── */}
      <div className="section">
        <h2 className="section-title">When & How to Seek Support</h2>
        <p>Contact a supervisor if the workload becomes unmanageable or if you experiecne a particularly traumatic
          interaction with a client.
        </p>
      </div>
    </div>
  );
}