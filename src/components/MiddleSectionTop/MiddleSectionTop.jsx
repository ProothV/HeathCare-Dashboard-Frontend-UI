import { Search, Bell } from 'lucide-react';
import './MiddleSectionTop.css';

function MiddleSectionTop() {
  return (
    <div className="middle-section-top">
      <div className="search-bar">
        <Search className="search-icon" size={16} />
        <input type="text" placeholder="Search" disabled />
      </div>
      <span className="notification-icon">
        <Bell size={20} />
      </span>
    </div>
  );
}

export default MiddleSectionTop;