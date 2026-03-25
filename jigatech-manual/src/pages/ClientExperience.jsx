export default function ClientExperience() {
  return (
    <div>

      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 02</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Understanding the Client Experience</h1>
        <p>Learn who our clients are, why their experience matters, and how to consistently deliver great service.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Who Are Our Clients? ── */}
      <div className="section">
        <h2 className="section-title">Who Are Our Clients?</h2>
        <div className="two-col">

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Internal Users</div>
            <div className="card-title">Company Employees</div>
            <p>
              These are staff within the organizations we support people in departments like accounting,
              HR, sales, and operations who rely on technology to do their jobs. They contact the service
              desk when something is not working or when they need access to a system or tool.
            </p>
          </div>

          <div className="card">
            <div className="card-label"><span className="card-label-dot" />External Users</div>
            <div className="card-title">Outside Clients</div>
            <p>
              These are customers or partners outside the organization who may interact with client-facing systems.
              They might experience login issues, application errors, or need guided support. External clients often
              have less technical knowledge, so patience and clear communication are especially important.
            </p>
          </div>

        </div>
      </div>

      {/* ── Why Client Service Matters in IT ── */}
      <div className="section">
        <h2 className="section-title">Why Client Service Matters in IT</h2>
        <p>
          IT support is not just about fixing computers, it is about keeping people productive.
          When a client contacts the service desk, they are usually stuck and need help to continue
          their work. How you handle that interaction directly affects their view of the entire IT
          department. Good service builds trust, reduces repeat contacts, and creates a positive
          working relationship between IT and the rest of the organization.
        </p>
      </div>

      {/* ── Managing Client Expectations ── */}
      <div className="section">
        <h2 className="section-title">Managing Client Expectations</h2>
        <p>
          Be upfront about what you can do and how long it might take. If a fix will take time, say so
          clients would rather hear an honest timeline than be left wondering. Always follow through
          on what you promise. If you say you will call back in an hour, make sure you do. Setting
          realistic expectations from the start prevents frustration later.
        </p>
      </div>

      {/* ── Perception vs. Satisfaction ── */}
      <div className="section">
        <h2 className="section-title">Perception vs. Satisfaction</h2>
        <div className="two-col">
          <div className="subsection">
            <div className="subsection-title">Client Perception</div>
            <p>
              Perception is how the client feels about the support they received, regardless of the technical
              outcome. A client whose issue took two days to resolve but was kept informed the entire time will
              likely have a better perception than one whose issue was fixed in an hour but heard nothing until
              it was done. Tone, communication, and follow-up all shape perception.
            </p>
          </div>
          <div className="subsection">
            <div className="subsection-title">Client Satisfaction</div>
            <p>
              Satisfaction is tied to whether the client's problem was actually resolved and how smoothly the
              process went. A satisfied client got their issue fixed within a reasonable timeframe, felt heard,
              and did not have to repeat themselves multiple times. Aim for both — solve the problem and make
              the experience a good one.
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
            Positive Interaction
          </div>
          <p>
            A client calls in saying their email is not syncing on their phone. The analyst greets them warmly,
            confirms the device and email client, walks them through re-adding the account, and verifies it is working
            before ending the call. The analyst logs the interaction with clear notes. The client leaves feeling helped
            and confident.
          </p>
        </div>
        <div className="example-block negative">
          <div className="example-label negative">
            <span className="example-label-indicator" />
            Negative Interaction
          </div>
          <p>
            A client submits a ticket about slow internet. Three days pass with no response. When they call to follow up,
            the analyst says "I don't see a ticket for that" and asks them to explain the issue again from scratch. The
            client feels ignored and frustrated, and their trust in the service desk drops.
          </p>
        </div>
      </div>
    </div>
  );
}