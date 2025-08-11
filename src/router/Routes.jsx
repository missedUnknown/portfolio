import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Learning from '../pages/Learning';
import Contact from '../pages/Contact';
import CurriculumPage from '../pages/CurriculumPage';
import Donate from '../pages/Donate';
import StatusDashboard from '../pages/StatusDashboard';


function AppRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="*" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/learning" element={<Learning />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/curriculum" element={<CurriculumPage />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/statusDashboard" element={<StatusDashboard />} />
      
    </Routes>
  );
}

export default AppRoutes;
