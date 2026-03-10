const workflowSteps = [
  "Identify & Log",
  "Categorize & Prioritize",
  "Investigate & Diagnose",
  "Resolve & Recover",
  "Close & Document",
];

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

      <div className="section">
        <h2 className="section-title">Incidents vs. Service Requests</h2>
        <div className="two-col">
          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Definition</div>
            <div className="card-title">Incident</div>
            <div className="placeholder placeholder-sm" />
          </div>
          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Definition</div>
            <div className="card-title">Service Request</div>
            <div className="placeholder placeholder-sm" />
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Incident Handling Workflow</h2>
        <div className="steps">
          {workflowSteps.map((title, i) => (
            <div className="step" key={i}>
              <div className="step-index">0{i + 1}</div>
              <div className="step-body">
                <div className="step-title">{title}</div>
                <div className="step-placeholder" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Escalation Procedures</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">When & How to Involve Senior Staff</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">Introduction to SLAs</h2>
        <div className="subsection">
          <div className="subsection-title">What is a Service Level Agreement?</div>
          <div className="placeholder" />
        </div>
        <div className="subsection">
          <div className="subsection-title">Sample SLA Reference Table</div>
          <div className="placeholder-table">
            <div className="placeholder-table-header">
              {[100, 140, 110, 130].map((w, i) => (
                <div key={i} className="placeholder-table-header-cell" style={{ width: w }} />
              ))}
            </div>
            {[1,2,3].map((i) => (
              <div className="placeholder-table-row" key={i}>
                {[100, 140, 110, 130].map((w, j) => (
                  <div key={j} className="placeholder-table-cell" style={{ width: w }} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}