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
import ViewStudent from "./components/view-student.component";
import ViewSubject from "./components/view-subject.component";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import Bootstrap from "./theme";
import { Auth } from "aws-amplify";
import axios from "axios";

Amplify.configure(awsconfig);

function App() {
  // Auth.currentSession().then((res) => {
  //   let accessToken = res.getIdToken();
  //   let jwt = accessToken.getJwtToken();
  //   //You can print them to see the full objects
  //   console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
  //   console.log(`myJwt: ${jwt}`);
  //   axios.interceptors.request.use(
  //     (req) => {
  //       req.headers.authorization = `${jwt}`;
  //       return req;
  //     },
  //     (error) => {
  //       return Promise.reject(error);
  //     }
  //   );
  // });
  return (
    <Router>
      <div className="container">
        <Navbar />

        <Route exact path="/allstudents" component={StudentList} />
        <Route exact path="/allsubjects" component={SubjectList} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/subjects/update/:id" component={EditSubject} />
        <Route exact path="/students/update/:id" component={EditStudent} />
        <Route exact path="/students/create" component={CreateStudent} />
        <Route exact path="/subjects/create" component={CreateSubject} />
        <Route exact path="/addSubjectName/:id" component={Enroll} />
        <Route exact path="/students/view/:id" component={ViewStudent} />
        <Route exact path="/subjects/view/:id" component={ViewSubject} />
      </div>
    </Router>
  );
}

export default withAuthenticator(App, {
  theme: Bootstrap,
  usernameAttributes: "email",
  signUpConfig: {
    hiddenDefaults: ["phone_number"],
  },
});
