import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Student = (props) => (
  <tr>
    {/* <td>{props.student._id}</td> */}
    <td>{props.student.name}</td>
    <td>{props.student.age}</td>
    <td>
      <Link type="link" to={"/students/view/" + props.student._id}>
        {props.student.subjects.length}
      </Link>
    </td>
    <td>
      <Link
        className="btn btn-light"
        type="button"
        to={"/addSubjectName/" + props.student._id}
      >
        Enroll
      </Link>{" "}
      |{" "}
      <Link
        className="btn btn-light"
        type="button"
        to={"/students/update/" + props.student._id}
      >
        Edit
      </Link>{" "}
      |{" "}
      <button
        className="btn btn-danger"
        type="button"
        href="#"
        onClick={() => {
          props.deleteStudent(props.student._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class StudentList extends Component {
  constructor(props) {
    super(props);

    this.deleteStudent = this.deleteStudent.bind(this);
    this.state = { students: [] };
  }
  componentDidMount() {
    axios
      .get(
        "https://pi1q1uq4s6.execute-api.eu-south-1.amazonaws.com/dev/allstudents"
      )
      .then((response) => {
        this.setState({ students: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteStudent(id) {
    axios
      .delete(
        "https://pi1q1uq4s6.execute-api.eu-south-1.amazonaws.com/dev/students",
        { data: { _id: id } }
      )
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      students: this.state.students.filter((el) => el._id !== id),
    });
  }

  studentList() {
    return this.state.students.map((currentstudent) => {
      return (
        <Student
          student={currentstudent}
          deleteStudent={this.deleteStudent}
          key={currentstudent._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Student List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Age</th>
              <th>Subjects</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.studentList()}</tbody>
        </table>
      </div>
    );
  }
}
