import { CheckCircle, Heart, Brain, Eye } from 'lucide-react';
import './SimpleAppointmentCard.css';

function SimpleAppointmentCard({ event }) {
  const iconMap = {
    checkup: CheckCircle,
    heart: Heart,
    brain: Brain,
    eye: Eye,
  };

  const IconComponent = iconMap[event.icon];

  return (
    <div className="simple-appointment-card">
      <IconComponent className="event-icon" size={20} style={{ color: event.iconColor }} />
      <div className="event-info">
        <h4>{event.type}</h4>
        <p>{event.time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;