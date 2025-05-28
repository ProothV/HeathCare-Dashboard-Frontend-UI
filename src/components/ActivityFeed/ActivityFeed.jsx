import { activityFeedGraphData } from '../../data/activityFeedGraph';
import './ActivityFeed.css';

function ActivityFeed() {
  const maxValue = Math.max(
    ...activityFeedGraphData.flatMap(day => day.metrics.map(metric => metric.value))
  );

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Activity</h2>
        <p>3 appointments on this week</p>
      </div>
      <div className="activity-graph">
        {activityFeedGraphData.map((day, index) => (
          <div key={index} className="graph-day">
            <div className="bars">
              {day.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="bar"
                  style={{
                    height: `${(metric.value / maxValue) * 60}px`, // Scale height (max 60px)
                    backgroundColor: metric.color,
                  }}
                >
                  {metric.value > 0 && (
                    <span className="bar-value">{metric.value}</span>
                  )}
                </div>
              ))}
            </div>
            <span className="day-label">{day.day}</span>
            <span className="date-label">{day.date}</span>
          </div>
        ))}
      </div>
      <div className="legend">
        <div className="legend-item">
          <span className="legend-color checkups"></span> Checkups
        </div>
        <div className="legend-item">
          <span className="legend-color tests"></span> Tests
        </div>
        <div className="legend-item">
          <span className="legend-color consults"></span> Consults
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;