import { Link } from "react-router-dom";

export default function Navbar() {
  const linkStyle = { marginRight: 12 };

  return (
    <nav style={{ marginBottom: 16 }}>
      <Link to="/login" style={linkStyle}>Login</Link>
      <Link to="/admin" style={linkStyle}>Admin</Link>
      <Link to="/staff" style={linkStyle}>Staff</Link>
      <Link to="/coach" style={linkStyle}>Coach</Link>
      <Link to="/player" style={linkStyle}>Player</Link>
    </nav>
  );
}
