import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import StudentList from "./components/student-list.component";
import SubjectList from "./components/subject-list.component";
import CreateStudent from "./components/create-student.component";
import CreateSubject from "./components/create-subject.component";
import EditStudent from "./components/update-student.component";
import EditSubject from "./components/update-subject.component";
import AboutPage from "./components/about-page.component";
import Enroll from "./components/enroll.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Route path="/allstudents" exact component={StudentList} />
        <Route path="/allsubjects" component={SubjectList} />
        <Route path="/about" component={AboutPage} />
        <Route path="/subjects/update/:id" component={EditSubject} />
        <Route path="/students/update/:id" component={EditStudent} />
        <Route path="/students/create" component={CreateStudent} />
        <Route path="/subjects/create" component={CreateSubject} />
        <Route path="/addsubjecttostudent/:id" component={Enroll} />
      </div>
    </Router>
  );
}

export default App;
