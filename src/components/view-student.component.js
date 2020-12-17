import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";
import { render } from "@testing-library/react";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    age: 0,
    subjects: [],
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`/students/view/${id}`);
    console.log(res.data);
    setUser(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/allstudents">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">age: {user.age}</li>
        <li className="list-group-item">
          subjects:
          {user.subjects.map((subject, index) => {
            console.log(subject.name);

            return <p key={index}>{subject.name}</p>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default User;
