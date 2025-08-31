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
    <table align="center" border="1" style={{ marginTop: "50px", backgroundColor: "black" }}>
      <thead style={{ backgroundColor: "lightblue" }}>
        <tr>
          <th width="100">Name</th>
          <th width="200">Email Id</th>
          <th width="150">Course Name</th>
        </tr>
      </thead>
      <tbody style={{ backgroundColor: "aliceblue" }}>
        {students.map((s, i) => (
          <tr key={i}>
            <td>{s.name}</td>
            <td>{s.emailId}</td>
            <td>{s.courseName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
