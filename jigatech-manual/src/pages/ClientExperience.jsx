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
            <div className="card-label"><span className="card-label-dot" />Internal Users</div>
            <div className="card-title">Company Employees</div>
            <p></p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />External Users</div>
            <div className="card-title">Outside Clients</div>
            <p></p>
          </div>

        </div>
      </div>

      {/* ── Why Client Service Matters in IT ── */}
      <div className="section">
        <h2 className="section-title">Why Client Service Matters in IT</h2>
        <p></p>
      </div>

      {/* ── Managing Client Expectations ── */}
      <div className="section">
        <h2 className="section-title">Managing Client Expectations</h2>
        <p></p>
      </div>

      {/* ── Perception vs. Satisfaction ── */}
      <div className="section">
        <h2 className="section-title">Perception vs. Satisfaction</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title">Client Perception</div>
            <p></p>
          </div>
          <div className="subsection">
            <div className="subsection-title">Client Satisfaction</div>
            <p></p>
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
          <p></p>
        </div>
        <div className="example-block negative">
          <div className="example-label negative">
            <span className="example-label-indicator" />
            Negative Interaction
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}