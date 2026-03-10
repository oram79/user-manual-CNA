import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Welcome from "./pages/Welcome";
import ClientExperience from "./pages/ClientExperience";
import Communication from "./pages/Communication";
import TicketingSystem from "./pages/TicketingSystem";
import IncidentHandling from "./pages/IncidentHandling";
import Teamwork from "./pages/Teamwork";
import StressManagement from "./pages/StressManagement";

export default function App() {
  return (
    <BrowserRouter>
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