import React, { Component } from "react";
import axios from "axios";

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
  //   componentDidMount() {
  //     this.setState({
  //       subjects: ["test subject"],
  //       name: "test subject",
  //     });
  //   }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  //   onChangeName(e) {
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   }
  onSubmit(e) {
    e.preventDefault();
    const subject = {
      name: this.state.name,
    };
    console.log(subject);
    axios
      .post("http://localhost:5000/subjects/create", subject)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
    });
    window.location = "/allsubjects";
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
