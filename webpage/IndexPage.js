import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎓 Course Registration System</h1>
      <p style={styles.subheading}>Welcome! Choose an option below to continue</p>

      <div style={styles.buttons}>
        <Link to="/register" style={styles.link}>
          <button style={styles.button}>📝 Register a Course</button>
        </Link>
        <Link to="/courses" style={styles.link}>
          <button style={styles.button}>📚 Available Courses</button>
        </Link>
        <Link to="/enrolled" style={styles.link}>
          <button style={styles.button}>👨‍🎓 Enrolled Students</button>
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "70px",
    fontFamily: "'Segoe UI', sans-serif",
    background: "linear-gradient(to bottom, #e0f7fa, #ffffff)",
    minHeight: "100vh",
    padding: "40px",
  },
  heading: {
    color: "#2c3e50",
    fontSize: "36px",
    marginBottom: "10px",
  },
  subheading: {
    color: "#34495e",
    marginBottom: "40px",
    fontSize: "18px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
  button: {
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#3498db",
    color: "#fff",
    fontWeight: "bold",
    width: "250px",
    transition: "all 0.3s ease",
  },
};
