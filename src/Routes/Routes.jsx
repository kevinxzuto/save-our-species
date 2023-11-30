import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Landingpage = React.lazy(() => import('../components/Pages/LandingPage/LandingPages'));
const App = React.lazy(() => import('../App'));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/maintance" element={<App />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};

export default ProjectRoutes;
