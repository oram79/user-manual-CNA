export default function Welcome() {
  return (
    <div>

      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 01</span>
          <div className="page-eyebrow-line" />
        </div>

        {/* Welcome Section */}
        <h1>Welcome & Overview</h1>
        <p>An introduction to Jigatech Solutions and your role as a Service Desk Analyst.</p>
        <hr className="page-header-rule" />

      </div>

      <div className="welcome-banner">
        <div className="welcome-banner-tag">New Hire Onboarding</div>
        <h2>Welcome to Jigatech Solutions</h2>
        <p>Welcome to the Jigatech Solutions Service Desk team. This manual is designed to help you get up
          to speed with how we work, what we expect, and how you can succeed in your role. Each chapter
          covers a key part of the job from handling tickets and communicating with clients to working
          with your team and managing stress. 
        </p>
      </div>

      {/* About Section */}
      <div className="section">
        <h2 className="section-title">About Jigatech Solutions</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Company Overview</div>
            <p>
              Jigatech Solutions is a managed IT services provider that delivers technical support,
              infrastructure management, and consulting to businesses across multiple industries.
              We operate a centralized service desk that handles all incoming support requests.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Our Mission</div>
            <p>
              To provide reliable, responsive, and professional IT support that keeps our clients
              happy. We aim to resolve issues quickly, communicate clearly, and build lasting
              trust with every interaction.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Company Size & Scope</div>
            <p>
              Jigatech Solutions employs over 120 staff across three office locations. Our service
              desk team supports approximately 2,000 end users daily through phone, email, and
              self-service channels.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Our Client Base</div>
            <p>
              We serve a mix of small - medium businesses and enterprise clients in sectors
              including finance, healthcare, education, and retail. Each client has unique needs,
              and we tailor our support approach accordingly.
            </p>
          </div>

        </div>
      </div>

      {/* The Role of the Help Desk */}
      <div className="section">
        <h2 className="section-title">The Role of the Help Desk</h2>
        <p>
          The service desk is the first point of contact for anyone experiencing a technical issue,
          needing system access, or having a question. We handle everything from password resets to hardware
          failures. We also log and track problems, spot patterns, and escalate to the right teams when needed.
        </p>
      </div>

      {/* Expectations of a Help Desk Analyst */}
      <div className="section">
        <h2 className="section-title">Expectations of a Help Desk Analyst</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Response Time Standards</div>
            <p>
              Acknowledge all tickets within 15 minutes during business hours. Answer calls within three rings.
              Even if you cannot fix something right away, a quick response shows the client their request is being
              handled.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Documentation Quality</div>
            <p>
              Document every interaction clearly in the ticketing system. Include what the client reported, what you did, 
              and the outcome. Be specific avoid basic notes like "fixed issue" so another analyst can pick up where you left off.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />First Call Resolution</div>
            <p>
              Aim to resolve issues during the first interaction whenever possible. Not every problem can be solved on the spot, but
              using the knowledge base and building your skills will help you get there over time.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Escalation Protocol</div>
            <p>
              When an issue is beyond your skill level or access, escalate it promptly. Make sure the ticket is documented before passing
              it on and let the client know their issue is going to a specialist. Escalation is a normal part of the job, not a failure.
            </p>
          </div>

        </div>
      </div>

      {/* Professionalism & Workplace Conduct */}
      <div className="section">
        <h2 className="section-title">Professionalism & Workplace Conduct</h2>
        <p>
          As a service desk analyst, you represent Jigatech Solutions in every interaction. Professionalism means being punctual, prepared,
          and respectful in all communications whether with clients, teammates, or management. Dress appropriately for your work environment,
          keep your workspace organized, and maintain a positive attitude even during busy or stressful periods. Avoid using slang or overly
          casual language with clients, and never discuss confidential client information outside of work. If you make a mistake, own it and
          correct it. Treat every person you interact with the way you would want to be treated when asking for help. Consistency in your
          professionalism builds trust and credibility over time.
        </p>
      </div>
    </div>
  );
}