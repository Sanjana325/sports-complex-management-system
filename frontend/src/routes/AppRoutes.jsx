import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

import AdminDashboard from "../pages/AdminDashboard";
import StaffDashboard from "../pages/StaffDashboard";
import CoachDashboard from "../pages/CoachDashboard";
import PlayerDashboard from "../pages/PlayerDashboard";

import AdminCreateUserPage from "../pages/AdminCreateUserPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Dashboards by role (UI skeleton for now) */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/staff" element={<StaffDashboard />} />
      <Route path="/coach" element={<CoachDashboard />} />
      <Route path="/player" element={<PlayerDashboard />} />

      {/* Admin features */}
      <Route path="/admin/users/create" element={<AdminCreateUserPage />} />

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
