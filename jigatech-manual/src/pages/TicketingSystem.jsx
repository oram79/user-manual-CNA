export default function TicketingSystem() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 04</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Ticketing System & Documentation</h1>
        <p>Accurate ticketing and documentation are critical to a high-functioning service desk.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Purpose of the Ticketing System ── */}
      <div className="section">
        <h2 className="section-title">Purpose of the Ticketing System</h2>
        <p>
          Purpose of a Ticketing System: It acts as the "system of record" for all IT support
          activities. It ensures no issue is forgotten, tracks technician productivity, and
          provides a history of fixes for future reference.
        </p>
      </div>

      {/* ── How Tickets Are Created ── */}
      <div className="section">
        <h2 className="section-title">How Tickets Are Created</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Via Phone</div>
            <p>
              When a client calls in, the analyst creates a ticket during or immediately after the call.
              Capture the client's name, contact info, and a clear description of the issue while the details are fresh.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Via Email</div>
            <p>
              Emails sent to the support inbox automatically generate a ticket in the system. The analyst assigned should
              review it, update the category and priority, and respond to the client promptly.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Via Self-Service Portal</div>
            <p>
              Clients can submit their own tickets through the online portal. These tickets come in with the client's
              description already filled in. Review the details, follow up if anything is unclear, and begin working the issue.
            </p>
          </div>

        </div>
      </div>

      {/* ── Required Information in Every Ticket ── */}
      <div className="section">
        <h2 className="section-title">Required Information in Every Ticket</h2>
        <p> Every ticket must contain the client's name, contact info. a descriptive subject line, the prioirty level,
            and a detailed description of the issue, the date and time it was reported and priority level, and any troubleshooting steps already taken
        </p>
      </div>

      {/* ── Ticket Prioritization & Categorization ── */}
      <div className="section">
        <h2 className="section-title">Ticket Prioritization & Categorization</h2>
        <p>
            P1 (Critical): Entire office down <br></br>
            P2 (High): Executivd user unable to work <br></br>
            P3 (Medium): Standard issue, work continues <br></br>
            P4 (Low): General inquiry or non-urgent request<br></br>
        </p>
      </div>

      {/* ── Importance of Accurate Documentation ── */}
      <div className="section">
        <h2 className="section-title">Importance of Accurate Documentation</h2>
        <p>
          Consistency: Any technician can pick up where another left off without asking the user to repeat themselves.
          <br></br>
          Knowledge Base: Past tickets become the "search engine" for future problems.
          <br></br>
          Legal/Compliance: It provides a paper trail for security audits and billing.
          <br></br>
          Data-Driven Decisions: Helps management see which equipment is failing most often.
        </p>
      </div>

      {/* ── Ticket Documentation Examples ── */}
      <div className="section">
        <h2 className="section-title">Ticket Documentation Examples</h2>
        <div className="example-block negative">
          <div className="example-label negative">
            <span className="example-label-indicator" />
            Poorly Documented Ticket
          </div>
          <p>
            "User called. Email not working. Fixed it." This tells the next person nothing.
            What was the actual problem? What was done to fix it? What email client? This kind of
            entry creates confusion and wastes time if the issue comes back.
          </p>
        </div>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Well-Documented Ticket
          </div>
          <p>
            "Client Sarah Johnson (ext. 204) reported Outlook was not syncing new emails on her desktop.
            Confirmed Outlook version 365, Windows 11. Restarted Outlook no change. Cleared the local
            cache and reconnected her account. Emails began syncing normally. Client confirmed the issue
            was resolved
          </p>
        </div>
      </div>
    </div>
  );
}