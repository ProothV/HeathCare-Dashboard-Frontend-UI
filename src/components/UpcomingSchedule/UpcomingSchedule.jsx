import { upcomingAppointments } from '../../data/appointment';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import './UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      {upcomingAppointments.map((day, index) => (
        <div key={index} className="schedule-day">
          <h3>{`On ${day.day}`}</h3>
          <div className="schedule-events">
            {day.events.map((event, idx) => (
              <SimpleAppointmentCard key={idx} event={event} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;