import { useState, useEffect } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", emailId: "", courseName: "" });
  const [courses, setCourses] = useState([]);

  // Fetch available courses dynamically
  useEffect(() => {
    fetch("/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams(form);

    const res = await fetch("/courses/register", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const text = await res.text();
    alert(text);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Kickstart Your Learning Journey</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="John Doe"
        />

        <label style={styles.label}>Email Address</label>
        <input
          type="email"
          name="emailId"
          value={form.emailId}
          onChange={handleChange}
          required
          style={styles.input}
          placeholder="john@example.com"
        />

        <label style={styles.label}>Select Course</label>
        <select
          name="courseName"
          value={form.courseName}
          onChange={handleChange}
          style={styles.select}
          required
        >
          <option value="">-- Choose a Course --</option>
          {courses.map((c) => (
            <option key={c.courseId} value={c.courseName}>
              {c.courseName} ({c.trainer})
            </option>
          ))}
        </select>

        <button type="submit" style={styles.button}>
          Register Now
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    textAlign: "left",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "12px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#3498db",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};
