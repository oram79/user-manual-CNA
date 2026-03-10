export default function Welcome() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 01</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Welcome & Overview</h1>
        <p>An introduction to Jigatech Solutions and your role as a Service Desk Analyst.</p>
        <hr className="page-header-rule" />
      </div>

      <div className="welcome-banner">
        <div className="welcome-banner-tag">New Hire Onboarding</div>
        <h2>Welcome to Jigatech Solutions</h2>
        <p>This section contains your welcome message and an overview of what to expect in your new role at the service desk.</p>
      </div>

      <div className="section">
        <h2 className="section-title">Welcome Message</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">About Jigatech Solutions</h2>
        <div className="card-grid">
          {["Company Overview", "Our Mission", "Company Size & Scope", "Our Client Base"].map((title) => (
            <div className="card" key={title}>
              <div className="card-label"><span className="card-label-dot" />{title}</div>
              <div className="placeholder placeholder-sm" />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">The Role of the Help Desk</h2>
        <div className="placeholder placeholder-lg" />
      </div>

      <div className="section">
        <h2 className="section-title">Expectations of a Help Desk Analyst</h2>
        <div className="card-grid">
          {["Response Time Standards", "Documentation Quality", "First Call Resolution", "Escalation Protocol"].map((title) => (
            <div className="card" key={title}>
              <div className="card-label"><span className="card-label-dot" />{title}</div>
              <div className="placeholder placeholder-sm" />
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Professionalism & Workplace Conduct</h2>
        <div className="placeholder placeholder-lg" />
      </div>
    </div>
  );
}