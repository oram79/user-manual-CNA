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

      {/* ── Active Listening Techniques ── */}
      <div className="section">
        <h2 className="section-title">Active Listening Techniques</h2>
        <p>
          Active listening means fully focusing on what the client is saying before jumping to a solution.
          Let them finish explaining, repeat back key details to confirm your understanding, and avoid
          interrupting. This helps you get the right information the first time and makes the client feel heard.
        </p>
      </div>

      {/* ── Asking Effective Troubleshooting Questions ── */}
      <div className="section">
        <h2 className="section-title">Asking Effective Troubleshooting Questions</h2>
        <p>
          Ask clear, specific questions to narrow down the problem. Start broad "When did this start?" or
          "What were you doing when it happened?" then get more specific as you go. Avoid yes-or-no questions
          when you need detail, and never make the client feel like the issue is their fault.
        </p>
      </div>

      {/* ── Explaining Technical Issues to Non-Technical Users ── */}
      <div className="section">
        <h2 className="section-title">Explaining Technical Issues to Non-Technical Users</h2>
        <p>
          Skip the jargon. Use plain language and simple comparisons to explain what is going on and what you are doing
          to fix it. Instead of saying "your DNS cache is stale," try "your computer is looking at an outdated address
          I just need to refresh it." Meet the client where they are.
        </p>
      </div>

      {/* ── Telephone Etiquette ── */}
      <div className="section">
        <h2 className="section-title">Telephone Etiquette</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Answering Calls</div>
            <p>
              Greet the caller with your name and the company name. Something like "Thank you for calling Jigatech Solutions,
              this is [name], how can I help you?" A consistent greeting sounds professional and sets the right tone.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Tone & Pace</div>
            <p>
              Speak clearly and at a steady pace. Match your tone to the situation calm and reassuring for frustrated clients,
              upbeat and helpful for general requests. Avoid sounding rushed even when you are busy.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Placing on Hold</div>
            <p>
              Always ask before placing someone on hold and let them know why. Check back in every 60 seconds if the hold is taking
              longer than expected. Never leave a client waiting in silence without an update.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Closing the Call</div>
            <p>
              Summarize what was done or what the next steps are before ending the call. Ask if there is anything else they need.
              A simple "Is there anything else I can help with today?" goes a long way.
            </p>
          </div>

        </div>
      </div>

      {/* ── Email Etiquette ── */}
      <div className="section">
        <h2 className="section-title">Email Etiquette</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title">Tone & Structure</div>
            <p>
              Keep emails professional, clear, and to the point. Use a greeting, explain the situation or update in a few sentences,
              and close with next steps or an invitation to reach out if they need more help. Proofread before sending.
            </p>
          </div>
          <div className="subsection">
            <div className="subsection-title">Response Time Standards</div>
            <p>
              Respond to client emails within four business hours. Even if you do not have a full answer yet, send a brief reply letting
              them know you have received their message and are looking into it.
            </p>
          </div>
        </div>
      </div>

      {/* ── Interaction Examples ── */}
      <div className="section">
        <h2 className="section-title">Interaction Examples</h2>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Strong Support Phone Interaction
          </div>
          <p>
            A client calls saying they cannot connect to Wi-Fi. The analyst greets them by name, asks a few targeted questions about their device
            and location, walks them through reconnecting, and confirms it is working before ending the call. The analyst logs the ticket with clear
            notes and the client hangs up feeling supported.
          </p>
        </div>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Professional Support Email
          </div>
          <p>
            "Hi Sarah, thank you for reaching out. I have looked into the login issue you reported and have reset your account credentials. You should
            be able to log in now using your usual email — you will be prompted to set a new password on your first login. Let me know if you run into
            any trouble. Best regards, [Analyst Name]"
          </p>
        </div>
      </div>
    </div>
  );
}