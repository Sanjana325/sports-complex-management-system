import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import AdminDashboard from "../pages/AdminDashboard";
import StaffDashboard from "../pages/StaffDashboard";
import CoachDashboard from "../pages/CoachDashboard";
import PlayerDashboard from "../pages/PlayerDashboard";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />

      {/* Dashboards by role */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/coach" element={<CoachDashboard />} />
      <Route path="/player" element={<PlayerDashboard />} />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
