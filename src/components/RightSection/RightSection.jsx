import RightSectionTop from '../RightSectionTop/RightSectionTop';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import './RightSection.css';

function RightSection() {
  return (
    <div className="right-section">
      <RightSectionTop />
      <div className="right-content">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
}

export default RightSection;