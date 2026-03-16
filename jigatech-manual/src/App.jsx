import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./components/Layout";

import Welcome from "./pages/Welcome";
import ClientExperience from "./pages/ClientExperience";
import Communication from "./pages/Communication";
import TicketingSystem from "./pages/TicketingSystem";
import IncidentHandling from "./pages/IncidentHandling";
import Teamwork from "./pages/Teamwork";
import StressManagement from "./pages/StressManagement";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/client-experience" element={<ClientExperience />} />
          <Route path="/communication" element={<Communication />} />
          <Route path="/ticketing" element={<TicketingSystem />} />
          <Route path="/incident-handling" element={<IncidentHandling />} />
          <Route path="/teamwork" element={<Teamwork />} />
          <Route path="/stress-management" element={<StressManagement />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}