import { healthStatsData } from '../../data/healthStats';
import './HealthStatsGraph.css';

function HealthStatsGraph() {
  return (
    <div className="health-stats-graph">
      <h2>Weekly Health Stats</h2>
      <div className="legend">
        <div className="legend-item">
          <span className="legend-color steps"></span> Steps
        </div>
        <div className="legend-item">
          <span className="legend-color sleep"></span> Sleep
        </div>
        <div className="legend-item">
          <span className="legend-color heart-rate"></span> Heart Rate
        </div>
      </div>
      <div className="graph-container">
        {healthStatsData.map((day, index) => (
          <div key={index} className="graph-day">
            <div className="bars">
              <div
                className="bar steps"
                style={{ height: `${day.steps}%`, backgroundColor: day.colors.steps }}
              ></div>
              <div
                className="bar sleep"
                style={{ height: `${day.sleep}%`, backgroundColor: day.colors.sleep }}
              ></div>
              <div
                className="bar heart-rate"
                style={{ height: `${day.heartRate}%`, backgroundColor: day.colors.heartRate }}
              ></div>
            </div>
            <span>{day.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthStatsGraph;