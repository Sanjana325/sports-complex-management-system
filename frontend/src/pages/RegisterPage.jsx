import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError("Please fill all fields.");
      return;
    }

    // Mock register success (later: call backend API)
    // After register, go to login
    navigate("/login");
  }

  return (
    <div style={{ maxWidth: 360 }}>
      <h2>Player Registration</h2>
      <p>Only players can self-register.</p>

      {error && (
        <div style={{ marginBottom: 12, padding: 10, border: "1px solid #ccc" }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Full Name</label>
          <input
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Tharushi Sanjana"
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
        </div>

        <div style={{ marginBottom: 14 }}>
          <label>Password</label>
          <input
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
          />
        </div>

        <button style={{ padding: "8px 12px" }} type="submit">
          Register
        </button>
      </form>

      <p style={{ marginTop: 12 }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
