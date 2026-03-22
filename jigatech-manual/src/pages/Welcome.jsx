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
          know — from handling your first ticket to communicating with clients and working with
          your team. Take your time going through each chapter, ask questions when you need to,
          and know that your team is here to support you as you settle in..</p>
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
              We serve a mix of small-to-medium businesses and enterprise clients in sectors
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
          
        </p>
      </div>

      {/* Expectations of a Help Desk Analyst */}
      <div className="section">
        <h2 className="section-title">Expectations of a Help Desk Analyst</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Response Time Standards</div>
            <p></p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Documentation Quality</div>
            <p></p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />First Call Resolution</div>
            <p></p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Escalation Protocol</div>
            <p></p>
          </div>

        </div>
      </div>

      {/* Professionalism & Workplace Conduct */}
      <div className="section">
        <h2 className="section-title">Professionalism & Workplace Conduct</h2>
        <p>
          
        </p>
      </div>
    </div>
  );
}