export default function IncidentHandling() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Chapter 05</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Incident & Request Handling</h1>
        <p>Understand the full lifecycle of an incident and how to manage service requests efficiently.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ── Incidents vs. Service Requests ── */}
      <div className="section">
        <h2 className="section-title">Incidents vs. Service Requests</h2>
        <div className="two-col">
          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Definition</div>
            <div className="card-title">Incident</div>
            <p>
              An incident is an unplanned disruption to a service or a reduction in quality.
              Examples include a server going down, a user losing network access, or software
              crashing unexpectedly. Incidents need to be resolved as quickly as possible to
              restore normal operations.
            </p>
          </div>
          <div className="card">
            <div className="card-label"><span className="card-label-dot" />Definition</div>
            <div className="card-title">Service Request</div>
            <p>
              A service request is a planned ask from a user things like setting up a new account,
              installing software, or requesting access to a shared drive. These follow a standard
              process and are usually lower urgency than incidents.
            </p>
          </div>
        </div>
      </div>

      {/* ── Incident Handling Workflow ── */}
      <div className="section">
        <h2 className="section-title">Incident Handling Workflow</h2>
        <div className="steps">

          <div className="step">
            <div className="step-index">01</div>
            <div className="step-body">
              <div className="step-title">Identify & Log</div>
              <p>
                Confirm the issue and create a ticket immediately. Record what the user reported, when
                it started, and who is affected. The sooner it is logged, the sooner it can be tracked and worked on.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">02</div>
            <div className="step-body">
              <div className="step-title">Categorize & Prioritize</div>
              <p>
                Assign the correct category (hardware, software, network, etc.) and set the priority based on urgency
                and impact. A company email outage ranks higher than a single user's printer jam.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">03</div>
            <div className="step-body">
              <div className="step-title">Investigate & Diagnose</div>
              <p>
                Gather more information, check the knowledge base for known fixes, and begin troubleshooting.
                Ask targeted questions and document what you try along the way.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">04</div>
            <div className="step-body">
              <div className="step-title">Resolve & Recover</div>
              <p>
                Apply the fix and confirm the service is restored. Test with the client to make sure things
                are working as expected before considering the issue resolved.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-index">05</div>
            <div className="step-body">
              <div className="step-title">Close & Document</div>
              <p>
                Update the ticket with a clear summary of what caused the issue, what was done to fix it, and
                any follow-up needed. Then close the ticket. Good closure notes help with future troubleshooting.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Escalation Procedures ── */}
      <div className="section">
        <h2 className="section-title">Escalation Procedures</h2>
        <p>Moving a ticket to a Tier 2 or Tier 3 when the solution requires specialiazed
          permissions or the SLA is about to expire.
        </p>
      </div>

      {/* ── When & How to Involve Senior Staff ── */}
      <div className="section">
        <h2 className="section-title">When & How to Involve Senior Staff</h2>
        <p>Involve seniors for P1 (Total outtage) events or when a standard fix fails to
          resolve a high- priorty user's issue
        </p>
      </div>

      {/* ── Introduction to SLAs ── */}
      <div className="section">
        <h2 className="section-title">Introduction to SLAs</h2>
        <div className="subsection">
          <div className="subsection-title">What is a Service Level Agreement?</div>
          <p>
            A contract defining the expected response and resolution times for IT support.
          </p>
        </div>
        <div className="subsection">
          <div className="subsection-title">Sample SLA Reference Table</div>
          <p>
            P1 = 15m Response/4h Fix;
            <br></br>
            P2 = 1h Response/8h Fix;
            <br></br>
            P3 = 4h Response/24h Fix.
          </p>
        </div>
      </div>
    </div>
  );
}