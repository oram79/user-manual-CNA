// ── Icons ─────────────────────────────────────────────────────────
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.81a19.79 19.79 0 0 1-3.07-8.72A2 2 0 0 1 2 .9h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.09 8.91a16 16 0 0 0 6.72 6.72l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const Volume2Icon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
  </svg>
);
const PauseCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);
const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22 6 12 13 2 6"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const XCircleIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

// ── Data ──────────────────────────────────────────────────────────
const listeningSteps = [
  { num: '01', title: 'Let Them Finish', body: 'Do not interrupt. Let the client describe the full issue before you begin diagnosing. Cutting them off early leads to missed details.' },
  { num: '02', title: 'Repeat Key Details Back', body: 'Confirm your understanding: "So Outlook stopped syncing after the Windows update this morning is that right?" This catches misunderstandings early.' },
  { num: '03', title: 'Acknowledge the Impact', body: 'Recognize how the issue affects them: "I understand this is holding up your whole morning let\'s get this sorted." It shows you are engaged, not just processing a ticket.' },
  { num: '04', title: 'Ask Targeted Follow-ups', body: 'Once they have finished, ask specific questions to narrow the problem. Avoid open-ended questions when precision matters.' },
  { num: '05', title: 'Avoid Jumping to Solutions', body: 'Resist the urge to fix before fully understanding the problem. A premature fix that misses the root cause wastes both your time and theirs.' },
];

const questionComparisons = [
  { avoid: 'Did you try turning it off and on again?', better: 'Can you walk me through exactly what happens when you try to open it?' },
  { avoid: 'What did you do to break it?', better: 'Did anything change recently an update, a move, new hardware?' },
  { avoid: 'Is it working now?', better: 'Can you test it while I am on the line so we can confirm together?' },
];

// ── Component ─────────────────────────────────────────────────────
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
        <p style={{ marginBottom: '20px' }}>
          Active listening means fully focusing on what the client is saying <em>before</em> jumping to a solution.
          Here is a five-step approach that works in every interaction:
        </p>
        <div className="steps">
          {listeningSteps.map(({ num, title, body }) => (
            <div key={num} className="step">
              <div className="step-index">{num}</div>
              <div className="step-body">
                <div className="step-title">{title}</div>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Asking Effective Troubleshooting Questions ── */}
      <div className="section">
        <h2 className="section-title">Asking Effective Troubleshooting Questions</h2>
        <p style={{ marginBottom: '20px' }}>
          Start broad "When did this start?" or "What were you doing when it happened?" then narrow down.
          Never make the client feel like the issue is their fault.
        </p>

        <div className="subsection">
          <div className="subsection-title">Question Examples — What to Avoid vs. What Works</div>
          <div
            style={{
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              background: 'var(--card-bg)',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                background: 'var(--placeholder-bg)',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {[
                { icon: <XCircleIcon />, label: 'Avoid', color: 'var(--negative)' },
                { icon: <CheckIcon />, label: 'Use Instead', color: 'var(--positive)' },
              ].map(({ icon, label, color }) => (
                <div
                  key={label}
                  style={{
                    padding: '10px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontFamily: "'Fira Code', monospace",
                    fontSize: '9.5px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color,
                    borderRight: label === 'Avoid' ? '1px solid var(--border)' : 'none',
                  }}
                >
                  {icon} {label}
                </div>
              ))}
            </div>

            {/* Rows */}
            {questionComparisons.map(({ avoid, better }, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: i < questionComparisons.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div
                  style={{
                    padding: '14px 18px',
                    fontSize: '13.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    borderRight: '1px solid var(--border)',
                    background: 'rgba(231,76,60,0.03)',
                  }}
                >
                  "{avoid}"
                </div>
                <div
                  style={{
                    padding: '14px 18px',
                    fontSize: '13.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    background: 'rgba(46,204,113,0.03)',
                  }}
                >
                  "{better}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Explaining Technical Issues to Non-Technical Users ── */}
      <div className="section">
        <h2 className="section-title">Explaining Technical Issues to Non-Technical Users</h2>
        <p style={{ marginBottom: '16px' }}>
          Skip the jargon. Use plain language and simple comparisons to explain what is going on and what you
          are doing to fix it. Meet the client where they are not where you are.
        </p>
        <div className="example-block negative">
          <div className="example-label negative">
            <span className="example-label-indicator" />
            Too Technical
          </div>
          <p>"Your DNS cache is stale and the TTL hasn't expired yet, so the resolver is still pointing to the old A record."</p>
        </div>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Plain Language
          </div>
          <p>"Your computer is still using an old address to find the website. I just need to clear that out so it looks up the right one this will take about a minute."</p>
        </div>
      </div>

      {/* ── Telephone Etiquette ── */}
      <div className="section">
        <h2 className="section-title">Telephone Etiquette</h2>
        <div className="card-grid">

          <div className="card">
            <div className="card-label"><PhoneIcon />Answering Calls</div>
            <p>
              Greet the caller with your name and the company name: "Thank you for calling Jigatech Solutions,
              this is [name], how can I help you?" A consistent greeting sounds professional and sets the right tone.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><Volume2Icon />Tone & Pace</div>
            <p>
              Speak clearly and at a steady pace. Match your tone to the situation calm and reassuring for
              frustrated clients, upbeat for general requests. Avoid sounding rushed even when you are busy.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><PauseCircleIcon />Placing on Hold</div>
            <p>
              Always ask before placing someone on hold and let them know why. Check back every 60 seconds if
              it runs long. Never leave a client waiting in silence without an update.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><CheckCircleIcon />Closing the Call</div>
            <p>
              Summarize what was done and what the next steps are. Ask "Is there anything else I can help with
              today?" before ending the call. A clean close leaves the client feeling fully supported.
            </p>
          </div>

        </div>
      </div>

      {/* ── Email Etiquette ── */}
      <div className="section">
        <h2 className="section-title">Email Etiquette</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent)' }}><MailIcon /></span>
              Tone & Structure
            </div>
            <p>
              Keep emails professional, clear, and to the point. Use a greeting, explain the situation or update
              in a few sentences, and close with next steps or an invitation to reach out. Proofread before sending.
            </p>
          </div>
          <div className="subsection">
            <div className="subsection-title" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ color: 'var(--accent)' }}><ClockIcon /></span>
              Response Time Standards
            </div>
            <p>
              Respond to client emails within four business hours. Even without a full answer yet, send a brief
              reply confirming you received their message and are looking into it.
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
            A client calls saying they cannot connect to Wi-Fi. The analyst greets them by name, asks a few
            targeted questions about their device and location, walks them through reconnecting, and confirms
            it is working before ending the call. The analyst logs the ticket with clear notes and the client
            hangs up feeling supported.
          </p>
        </div>
        <div className="example-block positive">
          <div className="example-label positive">
            <span className="example-label-indicator" />
            Professional Support Email
          </div>
          <p>
            "Hi Sarah, thank you for reaching out. I have looked into the login issue you reported and have
            reset your account credentials. You should be able to log in now using your usual email you will
            be prompted to set a new password on your first login. Let me know if you run into any trouble.
            Best regards, [Analyst Name]"
          </p>
        </div>
      </div>
    </div>
  );
}
