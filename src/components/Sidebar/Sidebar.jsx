import { navigationLinks } from '../../data/navigation';
import { 
  Grid, Clock, Calendar, CalendarCheck, BarChart2, 
  Wrench, MessageCircle, HelpCircle, Settings 
} from 'lucide-react';
import './Sidebar.css';

function Sidebar() {
  // Map icon names to Lucide React components
  const iconMap = {
    grid: Grid,
    clock: Clock,
    calendar: Calendar,
    'calendar-check': CalendarCheck,
    'bar-chart': BarChart2,
    tool: Wrench,
    'message-circle': MessageCircle,
    'help-circle': HelpCircle,
    settings: Settings,
  };

  const renderNavItem = (item) => {
    const IconComponent = iconMap[item.icon];
    return (
      <div className={`nav-item ${item.highlighted ? 'highlighted' : ''}`}>
        <IconComponent className="nav-icon" size={20} />
        <span className="nav-label">{item.label}</span>
      </div>
    );
  };

  return (
    <aside className="sidebar">
      <h1 className="logo">
        <span className="logo-health">Health</span>
        <span className="logo-care">CARE</span>
        <span className="logo-dot">.</span>
      </h1>
      <div className="nav-section">
        <h2 className="sidebar-title">GENERAL</h2>
        <nav className="nav-links">
          {navigationLinks.general.map((link, index) => (
            <div key={index}>{renderNavItem(link)}</div>
          ))}
        </nav>
      </div>
      <div className="nav-section">
        <h2 className="sidebar-title">TOOLS</h2>
        <nav className="nav-links">
          {navigationLinks.tools.map((link, index) => (
            <div key={index}>{renderNavItem(link)}</div>
          ))}
        </nav>
      </div>
      <div className="settings">
        <div className="nav-item">
          <Settings className="nav-icon" size={20} />
          <span className="nav-label">Setting</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;