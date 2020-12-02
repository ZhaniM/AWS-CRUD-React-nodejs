import React, { Component } from "react";
import axios from "axios";
export default class CreateStudent extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      age: 0,
      subjects: [],
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const student = {
      name: this.state.name,
      age: this.state.age,
    };
    axios
      .post("http://localhost:5000/students/create", student)
      .then((res) => console.log(res.data));
    console.log(student);
    window.location = "/allstudents";
  }

  render() {
    return (
      <div>
        <h3>Create Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              ref="userInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            >
              {/* {this.state.subjects.map(function (subject) {
                return (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                );
              })} */}
            </input>
          </div>

          <div className="form-group">
            <label>Age: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Student "
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
