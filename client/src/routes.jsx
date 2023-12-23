// routes.jsx is the main router for the application
// Will have the routes in it
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

// Import modules/pages under this line
import LandingPage from "./components/landingpage/LandingPage";

// Import Testing Routes here
import TestTypo from "./components/testing/testTypo";
import TestLayout from "./components/testing/testLayout";
import SignUp from "./components/signup/signUp";
import LogIn from "./components/login/logIn";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/logIn" element={<LogIn />} />

        {/* Testing Routes */}
        {/* FIXME: Delete test routes Later */}
        <Route path="/test/typo" element={<TestTypo />} />
        <Route path="/test/layout" element={<TestLayout />} />

        {/* Not Found */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default Routes;
