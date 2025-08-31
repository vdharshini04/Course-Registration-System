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
    <table align="center" border="1" style={{ marginTop: "50px", backgroundColor: "black" }}>
      <thead style={{ backgroundColor: "lightblue" }}>
        <tr>
          <th width="100">Course Id</th>
          <th width="150">Course Name</th>
          <th width="150">Trainer</th>
          <th width="140">Duration in weeks</th>
        </tr>
      </thead>
      <tbody style={{ backgroundColor: "aliceblue" }}>
        {courses.map(c => (
          <tr key={c.courseId}>
            <td>{c.courseId}</td>
            <td>{c.courseName}</td>
            <td>{c.trainer}</td>
            <td>{c.durationInWeeks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
