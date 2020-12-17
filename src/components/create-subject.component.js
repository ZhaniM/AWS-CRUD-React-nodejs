import React, { Component } from "react";
import axios from "../axios";

export default class CreateSubject extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      students: [],
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const subject = {
      name: this.state.name,
    };
    console.log(subject);
    axios
      .post("/subjects/create", subject)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      name: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Create subject</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              ref="userInput"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            ></input>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Create Subject"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
