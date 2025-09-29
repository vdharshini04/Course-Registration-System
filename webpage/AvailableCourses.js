import { useEffect, useState } from "react";

export default function AvailableCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error("Error fetching courses:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Available Courses</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Course Id</th>
            <th>Course Name</th>
            <th>Trainer</th>
            <th>Duration (Weeks)</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c) => (
            <tr key={c.courseId} style={styles.row}>
              <td style={styles.td}>{c.courseId}</td>
              <td style={styles.td}>{c.courseName}</td>
              <td style={styles.td}>{c.trainer}</td>
              <td style={styles.td}>{c.durationInWeeks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    backgroundColor: "#f4f9ff",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#2c3e50",
    marginBottom: "20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  table: {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: "0 12px", // space between rows
    fontFamily: "'Arial', sans-serif",
  },
  row: {
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  td: {
    padding: "12px",
    textAlign: "center",
  },
};
