import MiddleSectionTop from '../MiddleSectionTop/MiddleSectionTop';
import BodySection from '../BodySection/BodySection';
import ActivityFeed from '../ActivityFeed/ActivityFeed';
import './MiddleSection.css';

function MiddleSection() {
  return (
    <div className="middle-section">
      <MiddleSectionTop />
      <div className="middle-content">
        <h2 className="dashboard-title">Dashboard</h2>
        <BodySection />
      </div>
      <ActivityFeed />
    </div>
  );
}

export default MiddleSection;
