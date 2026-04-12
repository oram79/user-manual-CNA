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
          High-pressure environments require shared knowledge and mutual support to prevent individual burnout and
          service delays. No technician has every answer, and leaning on teammates is a sign of good judgment not
          weakness. When the team functions well together, clients feel the difference.
        </p>
      </div>

      {/* ── Knowledge Sharing & Collaboration ── */}
      <div className="section">
        <h2 className="section-title">Knowledge Sharing & Collaboration</h2>
        <p>
          Use shared documentation and internal chat channels to warn teammates of emerging, widespread issues before
          they escalate. When you solve an unusual problem, log the fix in the knowledge base your future self and
          your teammates will thank you. Regular communication keeps everyone aligned and reduces duplicated effort.
        </p>
      </div>

      {/* ── When to Ask for Help ── */}
      <div className="section">
        <h2 className="section-title">When to Ask for Help</h2>
        <p>
          When you have exhausted all documented fixes, or when a ticket remains unresolved for more than 30 minutes
          without meaningful progress, it is time to loop someone in. Holding onto a stuck ticket too long wastes time
          and impacts SLAs. Escalating or asking for a second opinion is always the right call over stalling.
        </p>
      </div>

      {/* ── Communicating with Teammates Respectfully ── */}
      <div className="section">
        <h2 className="section-title">Communicating with Teammates Respectfully</h2>
        <p>
          Use clear, professional language in internal notes and maintain a supportive tone during high-stress outages.
          Avoid venting frustration in ticket comments  keep internal communication factual and constructive. A calm,
          respectful team dynamic leads to faster resolutions and a healthier work environment.
        </p>
      </div>

      {/* ── Shift Handovers & Continuity ── */}
      <div className="section">
        <h2 className="section-title">Shift Handovers & Continuity</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title">Handover Best Practices</div>
            <p>Provide a "Hot List" of active high-priority tickets to the next shift. Include the ticket number,
              current status, and what has already been tried so nothing gets repeated unnecessarily.</p>
          </div>
          <div className="subsection">
            <div className="subsection-title">Maintaining Continuity</div>
            <p>Ensure all active tickets have an updated status note so the next person knows exactly where you left
              off. Even a brief comment like "waiting on user callback" avoids confusion and keeps momentum going.</p>
          </div>
        </div>
      </div>
    </div>
  );
}