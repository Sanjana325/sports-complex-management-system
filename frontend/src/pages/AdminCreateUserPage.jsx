import { useState } from "react";

export default function AdminCreateUserPage() {
  // Common fields (for Player, Staff, Coach)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("STAFF");
  const [tempPassword, setTempPassword] = useState("");

  // Coach-only extra fields
  const [qualification, setQualification] = useState("");
  const [specializationArea, setSpecializationArea] = useState("");

  // UI messages
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    // Basic validation (all roles)
    if (!fullName.trim() || !email.trim() || !tempPassword.trim()) {
      setError("Please fill all common fields (name, email, temp password).");
      return;
    }

    // Extra validation (only for Coach)
    if (role === "COACH" && (!qualification.trim() || !specializationArea.trim())) {
      setError("For Coach, please enter qualification and specialization area.");
      return;
    }

    // MOCK success (later: call backend POST /admin/create-user)
    const extra =
      role === "COACH"
        ? ` | Qualification: ${qualification} | Specialization: ${specializationArea}`
        : "";

    setMessage(
      `User created (mock): ${fullName} | ${email} | ${role} | Temp Password: ${tempPassword}${extra}`
    );

    // Clear inputs after mock success
    setFullName("");
    setEmail("");
    setRole("STAFF");
    setTempPassword("");
    setQualification("");
    setSpecializationArea("");
  }

  return (
    <div style={{ maxWidth: 520 }}>
      <h2>Create User (Admin)</h2>
      <p>
        Admin creates Staff/Coach accounts. Coach requires extra details
        (qualification + specialization).
      </p>

      {error && (
        <div style={{ marginBottom: 12, padding: 10, border: "1px solid #ccc" }}>
          {error}
        </div>
      )}

      {message && (
        <div style={{ marginBottom: 12, padding: 10, border: "1px solid #ccc" }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Full Name</label>
          <input
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter full name"
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Email</label>
          <input
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Role</label>
          <select
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STAFF">Staff</option>
            <option value="COACH">Coach</option>
            <option value="PLAYER">Player</option>
          </select>
        </div>

        {/* Coach-only fields */}
        {role === "COACH" && (
          <>
            <div style={{ marginBottom: 10 }}>
              <label>Qualification</label>
              <input
                style={{ width: "100%", padding: 8, marginTop: 4 }}
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
                placeholder="e.g., Diploma in Sports Coaching"
              />
            </div>

            <div style={{ marginBottom: 10 }}>
              <label>Specialization Area</label>
              <input
                style={{ width: "100%", padding: 8, marginTop: 4 }}
                value={specializationArea}
                onChange={(e) => setSpecializationArea(e.target.value)}
                placeholder="e.g., Badminton / Fitness / Swimming"
              />
            </div>
          </>
        )}

        <div style={{ marginBottom: 14 }}>
          <label>Temporary Password</label>
          <input
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            type="password"
            value={tempPassword}
            onChange={(e) => setTempPassword(e.target.value)}
            placeholder="Set a temporary password"
          />
        </div>

        <button style={{ padding: "8px 12px" }} type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}
