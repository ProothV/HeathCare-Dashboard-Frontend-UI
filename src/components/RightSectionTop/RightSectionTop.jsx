import avatar from '../../assets/avatar.png';
import './RightSectionTop.css';

function RightSectionTop() {
  return (
    <div className="right-section-top">
      <img src={avatar} alt="User Avatar" className="avatar" />
      <button className="add-button">+</button>
    </div>
  );
}

export default RightSectionTop;