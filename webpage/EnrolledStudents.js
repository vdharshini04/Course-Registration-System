import { useEffect, useState } from "react";

export default function EnrolledStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("/courses/enrolled")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error("Error fetching enrolled students:", err));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>👨‍🎓 Enrolled Students</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email Id</th>
            <th>Course Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} style={styles.row}>
              <td style={styles.td}>{s.name}</td>
              <td style={styles.td}>{s.emailId}</td>
              <td style={styles.td}>{s.courseName}</td>
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
    backgroundColor: "#fff8f0",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
  },
  heading: {
    color: "#8e44ad",
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
