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

      <div className="section">
        <h2 className="section-title">Purpose of the Ticketing System</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">How Tickets Are Created</h2>
        <div className="card-grid">
          {["Via Phone", "Via Email", "Via Self-Service Portal"].map((title) => (
            <div className="card" key={title}>
              <div className="card-label"><span className="card-label-dot" />{title}</div>
              <div className="placeholder placeholder-sm" />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Required Information in Every Ticket</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">Ticket Prioritization & Categorization</h2>
        <div className="placeholder-table">
          <div className="placeholder-table-header">
            {[120, 80, 100, 90].map((w, i) => (
              <div key={i} className="placeholder-table-header-cell" style={{ width: w }} />
            ))}
          </div>
          {[1,2,3,4].map((i) => (
            <div className="placeholder-table-row" key={i}>
              {[80, 120, 100, 90].map((w, j) => (
                <div key={j} className="placeholder-table-cell" style={{ width: w }} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Importance of Accurate Documentation</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">Ticket Documentation Examples</h2>
        <div className="example-block negative">
          <div className="example-label negative">
            <span className="example-label-indicator" />
            Poorly Documented Ticket
          </div>
          <div className="placeholder placeholder-lg" />
        </div>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Well-Documented Ticket
          </div>
          <div className="placeholder placeholder-lg" />
        </div>
      </div>
    </div>
  );
}