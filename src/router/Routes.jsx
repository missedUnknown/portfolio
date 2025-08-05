import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Learning from '../pages/Learning';


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/learning" element={<Learning />} />
    </Routes>
  );
}

export default AppRoutes;
