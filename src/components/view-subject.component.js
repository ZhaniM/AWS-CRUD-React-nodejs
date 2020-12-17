import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../axios";

const Subject = () => {
  const [subject, setSubject] = useState({
    name: "",
    students: [],
  });
  const { id } = useParams();
  useEffect(() => {
    loadSubject();
  }, []);
  const loadSubject = async () => {
    const res = await axios.get(`/subjects/view/${id}`);
    console.log(res.data);
    setSubject(res.data);
  };

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/allsubjects">
        back to Home
      </Link>
      <h1 className="display-4">Subject Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {subject.name}</li>

        <li className="list-group-item">
          students:
          {subject.students.map((student, index) => {
            console.log(student.name);

            return <p key={index}>{student.name}</p>;
          })}
        </li>
      </ul>
    </div>
  );
};

export default Subject;
