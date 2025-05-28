import { Heart, Footprints, Bone, SmileIcon } from 'lucide-react';
import anatomicalBody from '../../assets/anatomical-body.png';
import { healthData } from '../../data/healthData';
import './BodySection.css';

function BodySection() {
  const indicators = healthData.filter(item => item.name === "Heart" || item.name === "Leg");
  const bodyComponents = healthData.filter(item => item.name !== "Heart" && item.name !== "Leg");

  const iconMap = {
    lungs: Heart,
    teeth: SmileIcon,
    bone: Bone,
    heart: Heart,
    leg: Footprints,
  };

  return (
    <div className="body-section">
      <div className="body-diagram">
        <img src={anatomicalBody} alt="Anatomical Body" className="anatomy-image" />
        {indicators.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div
              key={index}
              className={`indicator ${item.name.toLowerCase()}`}
              style={{ backgroundColor: item.color }}
            >
              <IconComponent className="indicator-icon" size={16} />
              <span className="indicator-text">{item.status} {item.name}</span>
            </div>
          );
        })}
      </div>
      <div className="body-components">
        <div className="this-week">
          <span>This Week</span>
          <span className="arrow">▼</span>
        </div>
        {bodyComponents.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          return (
            <div key={index} className="health-card">
              {item.image ? (
                <img src={item.image} alt={item.name} className="health-image" />
              ) : (
                <IconComponent className="health-icon" size={24} />
              )}
              <div className="health-info">
                <h3>{item.name}</h3>
                <p>Date: {item.date}</p>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${item.progress}%`, backgroundColor: item.progressColor }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BodySection;