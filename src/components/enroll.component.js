import React, { Component } from "react";
import axios from "axios";

export default class Enroll extends Component {
  constructor(props) {
    super(props);

    this.onChangeId = this.onChangeId.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      Id: "",
    };
  }

  onChangeId(e) {
    this.setState({
      Id: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Id = {
      Id: this.state.Id,
    };
    console.log(this.props.match.params.id);
    console.log(Id);
    axios
      .put(
        "https://pi1q1uq4s6.execute-api.eu-south-1.amazonaws.com/dev/addSubjectName/" +
          this.props.match.params.id,
        Id
      )
      .then((res) => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h3>Enroll in a Subject</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Subject name:</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.Id}
              onChange={this.onChangeId}
            ></input>
          </div>

          <div className="form-group">
            <input type="submit" value="Enroll" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
