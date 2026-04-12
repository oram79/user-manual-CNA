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
            <div className="card-label"><span className="card-label-dot" />Definition</div>
            <div className="card-title">Incident</div>
            <p></p>
          </div>
          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Definition</div>
            <div className="card-title">Service Request</div>
            <p></p>
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
              <p></p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">02</div>
            <div className="step-body">
              <div className="step-title">Categorize & Prioritize</div>
              <p></p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">03</div>
            <div className="step-body">
              <div className="step-title">Investigate & Diagnose</div>
              <p></p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">04</div>
            <div className="step-body">
              <div className="step-title">Resolve & Recover</div>
              <p></p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">05</div>
            <div className="step-body">
              <div className="step-title">Close & Document</div>
              <p></p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Escalation Procedures ── */}
      <div className="section">
        <h2 className="section-title">Escalation Procedures</h2>
        <p>Moving a ticket to a Tier 2 or Tier 3 when the solution requires specialiazed
          permissions or the SLA is about to expire.
        </p>
      </div>

      {/* ── When & How to Involve Senior Staff ── */}
      <div className="section">
        <h2 className="section-title">When & How to Involve Senior Staff</h2>
        <p>Involve seniors for P1 (Total outtage) events or when a standard fix fails to
          resolve a high- priorty user's issue
        </p>
      </div>

      {/* ── Introduction to SLAs ── */}
      <div className="section">
        <h2 className="section-title">Introduction to SLAs</h2>
        <div className="subsection">
          <div className="subsection-title">What is a Service Level Agreement?</div>
          <p>A contract defining the expected response and resolution times for IT support.</p>
        </div>
        <div className="subsection">
          <div className="subsection-title">Sample SLA Reference Table</div>
          <p>
            P1 = 15m Response/4h Fix; P2 = 1h Response/8h Fix; P3 = 4h Response/24h Fix.
          </p>
        </div>
      </div>
    </div>
  );
}