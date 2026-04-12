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

      {/* ── Why Teamwork Matters on a Service Desk ── */}
      <div className="section">
        <h2 className="section-title">Why Teamwork Matters on a Service Desk</h2>
        <p>
          High-Pressure enviroments require shared knowledge and mutual support
          to prevent individual burnout and service delays.
        </p>
      </div>

      {/* ── Knowledge Sharing & Collaboration ── */}
      <div className="section">
        <h2 className="section-title">Knowledge Sharing & Collaboration</h2>
        <p>
          Using shared documentation and internal chat channels to warn teammates of emerging widespread issues.
        </p>
      </div>

      {/* ── When to Ask for Help ── */}
      <div className="section">
        <h2 className="section-title">When to Ask for Help</h2>
        <p>
          When you have exhausted all documented fixes or when a ticket remains unresolved for more than 30 minutes without progress
        </p>
      </div>

      {/* ── Communicating with Teammates Respectfully ── */}
      <div className="section">
        <h2 className="section-title">Communicating with Teammates Respectfully</h2>
        <p>
          Using clear, professional language in internal notes and maintaining a supportive tome during highh stress outages.
        </p>
      </div>

      {/* ── Shift Handovers & Continuity ── */}
      <div className="section">
        <h2 className="section-title">Shift Handovers & Continuity</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title">Handover Best Practices</div>
            <p>Provide a "Hot List" of active high-prioity tickets to the next shift</p>
          </div>
          <div className="subsection">
            <div className="subsection-title">Maintaining Continuity</div>
            <p>ensure all active tickets have an "updated status" note so the next person knows
              exaclty where you left off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}