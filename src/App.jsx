import Sidebar from './components/Sidebar/Sidebar';
import MiddleSection from './components/MiddleSection/MiddleSection';
import RightSection from './components/RightSection/RightSection';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MiddleSection />
      <RightSection />
    </div>
  );
}

export default App;