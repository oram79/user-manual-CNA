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
        <p>Welcome to the Jigatech Solutions Service Desk team. We're glad to have you on board.
          This manual has been put together to help you get up to speed with how we work, what
          we expect, and how you can succeed in your role. Whether you're brand new to IT support
          or coming in with experience, this guide will walk you through everything you need to
          know from handling your first ticket to communicating with clients and working with
          your team. Take your time going through each chapter, ask questions when you need to,
          and know that your team is here to support you as you settle in.</p>
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
              productive. We aim to resolve issues quickly, communicate clearly, and build lasting
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
          The service desk is the central point of contact between Jigatech Solutions and its clients.
          When a user has a technical issue, a question, or needs access to a system, the service desk
          is where they turn first. Think of it as the front door of IT support. Our team handles everything
          from password resets and software installations to network connectivity problems and hardware
          failures. Beyond fixing issues, the help desk plays a key role in logging and tracking problems,
          identifying recurring issues, and making sure the right teams are involved when something needs to
          be escalated. A well-run service desk keeps the entire organization productive.
        </p>
      </div>

      {/* Expectations of a Help Desk Analyst */}
      <div className="section">
        <h2 className="section-title">Expectations of a Help Desk Analyst</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Response Time Standards</div>
            <p>
              All incoming tickets should be acknowledged within 15 minutes during business hours.
              Phone calls should be answered within three rings. Even if you cannot resolve an issue right
              away, a quick response lets the client know their request has been received and is being worked on.
              Meeting response time targets is one of the most visible indicators of service quality.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Documentation Quality</div>
            <p>
              Every interaction should be documented clearly in the ticketing system. Good documentation means another
              analyst can pick up where you left off without needing to contact the client again. Include what the client
              reported, what steps you took, and what the outcome was. Avoid vague entries like "fixed issue" be specific
              about what was done and why.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />First Call Resolution</div>
            <p>
              Whenever possible, aim to resolve issues during the first interaction. This reduces follow-up work, improves
              client satisfaction, and keeps ticket volumes manageable. Not every issue can be solved immediately, but building
              your troubleshooting skills and using the knowledge base will help you resolve more issues on the spot over time.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Escalation Protocol</div>
            <p>
              When an issue is beyond your skill level or access, escalate it promptly using the correct process. Escalation is not
              a failure it is a normal part of service desk work. Make sure the ticket is fully documented before passing it on, and
              always inform the client that their issue is being transferred to a specialist. Never let a ticket sit unresolved without
              action.
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