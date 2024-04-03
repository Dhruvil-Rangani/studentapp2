import React from "react";
import ReactDOM from "react-dom";
import StudentForm from "ecomm/StudentForm";

import "./index.css";

const App = () => (
  <div className="container">
    StudentApp2
    <StudentForm />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
