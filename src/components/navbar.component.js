import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/allstudents" className="navbar-brand">
          Taleas
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/allstudents" className="nav-link">
                Students
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/allsubjects" className="nav-link">
                Subjects
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/students/create" className="nav-link">
                Create Student
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/subjects/create" className="nav-link">
                Create Subject
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
