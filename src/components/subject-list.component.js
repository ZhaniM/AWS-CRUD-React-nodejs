import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Subject = (props) => (
  <tr>
    <td>{props.subject.name}</td>
    <td>{props.subject.students} </td>

    <td>
      {" "}
      <Link
        className="btn btn-light"
        type="button"
        to={"/subjects/update/" + props.subject._id}
      >
        Edit
      </Link>{" "}
      |{" "}
      <button
        className="btn btn-danger"
        type="button"
        href="#"
        onClick={() => {
          props.deleteSubject(props.subject._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default class SubjectList extends Component {
  constructor(props) {
    super(props);

    this.deleteSubject = this.deleteSubject.bind(this);
    this.state = { subjects: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/allsubjects")
      .then((response) => {
        this.setState({ subjects: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  deleteSubject(id) {
    axios
      .delete("http://localhost:5000/subjects", { data: { _id: id } })
      .then((response) => {
        console.log(response.data);
      });

    this.setState({
      subjects: this.state.subjects.filter((el) => el._id !== id),
    });
  }
  subjectList() {
    return this.state.subjects.map((currentsubject) => {
      return (
        <Subject
          subject={currentsubject}
          deleteSubject={this.deleteSubject}
          key={currentsubject._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Subject List</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Students IDs</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.subjectList()}</tbody>
        </table>
      </div>
    );
  }
}
