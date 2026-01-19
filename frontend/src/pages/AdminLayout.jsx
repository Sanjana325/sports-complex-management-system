import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <div style={styles.wrapper}>
      {/* Left sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.brandBox}>
          <div style={styles.brandTitle}>Sports Complex</div>
          <div style={styles.brandSub}>Admin Panel</div>
        </div>

        <nav style={styles.nav}>
          <NavItem to="/admin/home" label="Home" />
          <NavItem to="/admin/user-management" label="User Management" />
          <NavItem to="/admin/courts" label="Courts" />
          <NavItem to="/admin/class-management" label="Class Management" />
          <NavItem to="/admin/bookings" label="Bookings" />
          <NavItem to="/admin/payments" label="Payments" />
          <NavItem to="/admin/blocked-slots" label="Blocked Slots" />
          <NavItem to="/admin/enrollments" label="Enrollments" />
          <NavItem to="/admin/attendance" label="Attendance" />
          <NavItem to="/admin/reports" label="Reports" />

          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        </nav>
      </aside>

      {/* Right side */}
      <main style={styles.main}>
        {/* Top area */}
        <div style={styles.topbar}>
          <div>
            <div style={styles.pageTitle}>Admin</div>
            <div style={styles.metaText}>
              {localStorage.getItem("email") || "admin@demo.lk"}
            </div>
          </div>

          {/* Calendar area reserved (we’ll build later) */}
          <div style={styles.calendarBox}>Calendar</div>
        </div>

        {/* Page content */}
        <div style={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        ...styles.link,
        ...(isActive ? styles.linkActive : {}),
      })}
    >
      {label}
    </NavLink>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: "#f5f6fa",
  },
  sidebar: {
    width: 260,
    background: "#0f172a",
    color: "#fff",
    padding: 16,
  },
  brandBox: {
    padding: 12,
    borderRadius: 12,
    background: "rgba(255,255,255,0.08)",
    marginBottom: 12,
  },
  brandTitle: { fontWeight: 800, fontSize: 16 },
  brandSub: { fontSize: 12, opacity: 0.8, marginTop: 2 },
  nav: { display: "flex", flexDirection: "column", gap: 6 },
  link: {
    textDecoration: "none",
    color: "rgba(255,255,255,0.86)",
    padding: "10px 12px",
    borderRadius: 10,
    display: "block",
  },
  linkActive: {
    background: "rgba(59,130,246,0.22)",
    border: "1px solid rgba(59,130,246,0.25)",
  },
  logoutBtn: {
    marginTop: 10,
    padding: "10px 12px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
    fontWeight: 700,
    background: "#ef4444",
    color: "white",
  },
  main: { flex: 1, display: "flex", flexDirection: "column" },
  topbar: {
    background: "#fff",
    borderBottom: "1px solid #e5e7eb",
    padding: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  pageTitle: { fontWeight: 900, fontSize: 18, color: "#111827" },
  metaText: { fontSize: 12, color: "#6b7280", marginTop: 4 },
  calendarBox: {
    minWidth: 220,
    height: 56,
    borderRadius: 12,
    border: "1px dashed #cbd5e1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#64748b",
    fontSize: 12,
  },
  content: { padding: 18 },
};
