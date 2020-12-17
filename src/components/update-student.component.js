import React, { useState, useEffect, Component } from "react";
import axios from "../axios";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      age: 0,
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
    console.log(this.props.match.params.id);
    axios
      .put("/students/update/" + this.props.match.params.id, student)
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h3>Edit Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            ></input>
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
              value="Edit Student"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
