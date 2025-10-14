import React from "react";
import "./App.css";   
import "./App.scss";  

function App() {
  const employees = [
    { id: 101, name: "Prasanth Kumar", position: "Frontend Developer", salary: 55000 },
    { id: 102, name: "Ravi Teja", position: "Backend Developer", salary: 60000 },
    { id: 103, name: "Aravind", position: "UI/UX Designer", salary: 50000 },
    { id: 104, name: "Satya", position: "Project Manager", salary: 75000 },
  ];

  return (
    <div className="app-container">
      <h1 className="title">Employee Details</h1>

      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary (₹)</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.position}</td>
              <td>{emp.salary.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn">Download Report</button>
    </div>
  );
}

export default App;

