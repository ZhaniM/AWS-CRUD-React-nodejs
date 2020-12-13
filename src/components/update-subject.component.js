import React, { Component } from "react";
import axios from "axios";

export default class EditSubject extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
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
    console.log(this.props.match.params.id);
    axios
      .put(
        "https://pi1q1uq4s6.execute-api.eu-south-1.amazonaws.com/dev/subjects/update/" +
          this.props.match.params.id,
        subject
      )
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h3>Edit Subject</h3>
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
            <input
              type="submit"
              value="Edit Subject"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
