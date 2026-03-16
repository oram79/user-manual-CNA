export default function Communication() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 03</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Communication Skills for IT Support</h1>
        <p>Effective communication is the foundation of excellent service desk work.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ============================================
          SECTION: Active Listening Techniques
          Describe active listening methods.
          ============================================ */}
      <div className="section">
        <h2 className="section-title">Active Listening Techniques</h2>
        <div className="placeholder placeholder-lg">
          {/* YOUR CONTENT HERE — Active listening techniques */}
        </div>
      </div>

      {/* ============================================
          SECTION: Asking Effective Troubleshooting Questions
          Add question frameworks and tips.
          ============================================ */}
      <div className="section">
        <h2 className="section-title">Asking Effective Troubleshooting Questions</h2>
        <div className="placeholder placeholder-lg">
          {/* YOUR CONTENT HERE — Troubleshooting question techniques */}
        </div>
      </div>

      {/* ============================================
          SECTION: Explaining Technical Issues to Non-Technical Users
          Tips for simplifying technical language.
          ============================================ */}
      <div className="section">
        <h2 className="section-title">Explaining Technical Issues to Non-Technical Users</h2>
        <div className="placeholder placeholder-lg">
          {/* YOUR CONTENT HERE — Simplifying technical explanations */}
        </div>
      </div>

      {/* ============================================
          SECTION: Telephone Etiquette
          Fill in each card with phone etiquette tips.
          ============================================ */}
      <div className="section">
        <h2 className="section-title">Telephone Etiquette</h2>
        <div className="card-grid">
          {["Answering Calls", "Tone & Pace", "Placing on Hold", "Closing the Call"].map((title) => (
            <div className="card" key={title}>
              <div className="card-label"><span className="card-label-dot" />{title}</div>
              <div className="placeholder placeholder-sm">
                {/* YOUR CONTENT HERE — {title} guidelines */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================
          SECTION: Email Etiquette
          Add email communication standards.
          ============================================ */}
      <div className="section">
        <h2 className="section-title">Email Etiquette</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title">Tone & Structure</div>
            <div className="placeholder">
              {/* YOUR CONTENT HERE — Email tone and structure */}
            </div>
          </div>
          <div className="subsection">
            <div className="subsection-title">Response Time Standards</div>
            <div className="placeholder">
              {/* YOUR CONTENT HERE — Email response time standards */}
            </div>
          </div>
        </div>
      </div>

      {/* ============================================
          SECTION: Interaction Examples
          Add example phone and email interactions.
          ============================================ */}
      <div className="section">
        <h2 className="section-title">Interaction Examples</h2>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Strong Support Phone Interaction
          </div>
          <div className="placeholder">
            {/* YOUR CONTENT HERE — Good phone interaction example */}
          </div>
        </div>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Professional Support Email
          </div>
          <div className="placeholder placeholder-lg">
            {/* YOUR CONTENT HERE — Good email example */}
          </div>
        </div>
      </div>
    </div>
  );
}