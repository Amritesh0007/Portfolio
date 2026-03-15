import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <h5>VIT-AP University</h5>
              </div>
              <h3>2025-2029</h3>
              <h3>CGPA: 8.5</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Technology in Computer Science and Engineering. 
              Active member of Entrepreneurship Club, serving as Co-Lead of Event Management Team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Lead - Event Management Team</h4>
                <h5>Entrepreneurship Club, VIT-AP</h5>
              </div>
              <h3>Leadership Role</h3>
            </div>
            <p>
              Leading event management initiatives, organizing technical and entrepreneurial events 
              to foster innovation and startup culture within the university.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Achievements</h4>
                <h5>Competitive Recognition</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              🏆 <b>1st Position</b> - Make to Monetise Hackathon (Entrepreneurship Club, VIT-AP)<br/>
              🏆 <b>9th Position</b> - IIT Bombay Techfest - Murf Voice Agent Hackathon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
