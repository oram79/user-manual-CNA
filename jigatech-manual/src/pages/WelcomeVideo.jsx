export default function WelcomeVideo() {
  return (
    <div>
      <div className="page-header">
        <div className="page-eyebrow">
          <span className="page-chapter-badge">Media</span>
          <div className="page-eyebrow-line" />
        </div>
        <h1>Company Welcome Message</h1>
        <p>A brief introduction from the team at Jigatech Solutions.</p>
        <hr className="page-header-rule" />
      </div>

      {/* ============================================
          VIDEO PLAYER
          Replace the src with your video file path.
          Place your video file in the /public folder
          and reference it as "/your-video-filename.mp4"
          ============================================ */}
      <div className="section">
        <div style={{
          display: "flex",
          justifyContent: "center",
        }}>
          <div style={{
            maxWidth: "600px",
            width: "100%",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-md)",
            background: "#000",
          }}>
            <video
              controls
              style={{ width: "100%", display: "block" }}
              poster=""
            >
              {/* YOUR VIDEO HERE — put your .mp4 file in /public 
                  and update the src below */}
              <source src="/welcome-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}