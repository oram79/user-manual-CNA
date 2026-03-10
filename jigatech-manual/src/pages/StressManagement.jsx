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

      <div className="section">
        <h2 className="section-title">Common Stressors in Help Desk Roles</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">Managing High Call or Ticket Volumes</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">De-escalating Frustrated Clients</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">Time Management Strategies</h2>
        <div className="card-grid">
          {["Prioritization Frameworks", "Time Blocking", "Task Batching", "Managing Interruptions"].map((title) => (
            <div className="card" key={title}>
              <div className="card-label"><span className="card-label-dot" />{title}</div>
              <div className="placeholder placeholder-sm" />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Burnout Prevention</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">When & How to Seek Support</h2>
        <div className="placeholder placeholder-lg" />
      </div>
    </div>
  );
}