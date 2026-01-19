import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AdminCreateUserPage from "../pages/AdminCreateUserPage";

import AdminLayout from "../pages/AdminLayout";
import AdminHome from "../pages/AdminHome";
import AdminUserManagement from "../pages/AdminUserManagement";
import AdminCourts from "../pages/AdminCourts";
import AdminClassManagement from "../pages/AdminClassManagement";
import AdminBookings from "../pages/AdminBookings";
import AdminPayments from "../pages/AdminPayments";
import AdminBlockedSlots from "../pages/AdminBlockedSlots";
import AdminEnrollments from "../pages/AdminEnrollments";
import AdminAttendance from "../pages/AdminAttendance";
import AdminReports from "../pages/AdminReports";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Public pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Admin area with left sidebar layout */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="user-management" element={<AdminUserManagement />} />
        <Route path="courts" element={<AdminCourts />} />
        <Route path="class-management" element={<AdminClassManagement />} />
        <Route path="bookings" element={<AdminBookings />} />
        <Route path="payments" element={<AdminPayments />} />
        <Route path="blocked-slots" element={<AdminBlockedSlots />} />
        <Route path="enrollments" element={<AdminEnrollments />} />
        <Route path="attendance" element={<AdminAttendance />} />
        <Route path="reports" element={<AdminReports />} />

        {/* Admin create user (keep your existing page) */}
        <Route path="users/create" element={<AdminCreateUserPage />} />
      </Route>

      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  );
}
