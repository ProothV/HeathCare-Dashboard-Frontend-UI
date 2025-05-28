import { calendarData, calendarAppointments } from '../../data/calenderData';
import { ChevronLeft, ChevronRight, Calendar, Stethoscope } from 'lucide-react';
import './CalendarView.css';

function CalendarView() {
  const iconMap = {
    dentist: Calendar,
    physiotherapy: Stethoscope,
  };

  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h2>October 2021</h2>
        <div className="navigation-arrows">
          <ChevronLeft size={20} />
          <ChevronRight size={20} />
        </div>
      </div>
      <div className="calendar-grid">
        {calendarData.map((day, index) => (
          <div key={index} className="calendar-day">
            <div className={`day-header ${day.times.length > 0 ? 'highlighted' : ''}`}>
              <span>{day.day}</span>
              <span>{day.date}</span>
            </div>
            <div className="time-slots">
              {day.times.map((time, idx) => (
                <span
                  key={idx}
                  className={`time-slot 
                    ${day.highlightSlot === time ? 'highlight-slot' : ''} 
                    ${day.iceLightBlueSlots && day.iceLightBlueSlots.includes(time) ? 'ice-light-blue' : ''}`}
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="calendar-appointments">
        {calendarAppointments.map((appt, index) => {
          const IconComponent = iconMap[appt.type.toLowerCase()];
          return (
            <div
              key={index}
              className={`appointment-card ${appt.highlighted ? 'highlighted' : ''}`}
            >
              {appt.image ? (
                <img src={appt.image} alt={appt.type} className="appointment-image" />
              ) : (
                <IconComponent className="appointment-icon" size={24} />
              )}
              <div className="appointment-info">
                <h3>{appt.type}</h3>
                <p>{appt.time}</p>
                <p>{appt.doctor}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarView;