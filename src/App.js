//App.js
// Eke Delight
// 301325470
// Date: 03/03/2024

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation'; // Import the Navigation component
import HomePage from './HomePage';
import AboutMePage from './AboutMePage';
import ProjectsPage from './ProjectsPage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <Navigation /> {/* Use the Navigation component here */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
