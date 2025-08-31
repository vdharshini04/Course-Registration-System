import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", emailId: "", courseName: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ color: "blue" }}>Kickstart with an exciting course</h1>
      <form onSubmit={handleSubmit} style={{ margin: "auto", padding: "20px", width: "400px", backgroundColor: "#fff" }}>
        <label>Enter your name:</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
        <br />

        <label>Enter your email:</label>
        <input type="email" name="emailId" value={form.emailId} onChange={handleChange} required />
<br />
        <label>Choose a course:</label>
        <select name="courseName" value={form.courseName} onChange={handleChange}>
          <option value="Java Essentials">Java Essentials</option>
          <option value="Python for ML">Python for ML</option>
          <option value="Spring Boot">Spring Boot</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
