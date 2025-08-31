import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
      <h2>Course Registration System</h2>
      <Link to="/register"><button>Register a course</button></Link>
      <Link to="/courses"><button>Available Courses</button></Link>
      <Link to="/enrolled"><button>Enrolled Students</button></Link>
    </div>
  );
}
